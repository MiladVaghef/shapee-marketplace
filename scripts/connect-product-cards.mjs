// One-time follow-up to the HTML migration. Links existing product-card markup
// without replacing the original design or unrelated shop/category links.
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { parsers } from 'prettier/plugins/typescript';
import { format } from 'prettier';

const files = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? files(`${dir}/${e.name}`) : [`${dir}/${e.name}`]);
const tag = node => node.openingElement?.name?.name;
const attribute = (node, name) => node.openingElement?.attributes.find(a => a.type === 'JSXAttribute' && a.name.name === name)?.value?.value;
const elements = node => [node, ...(node.children || []).filter(c => c.type === 'JSXElement').flatMap(elements)];
const text = node => node.type === 'JSXText' ? node.value : node.type === 'JSXExpressionContainer' && node.expression.type === 'Literal' ? String(node.expression.value) : (node.children || []).map(text).join(' ');
const clean = value => value.replace(/\s+/g, ' ').trim();
const records = new Map();
const counts = {};
const labels = {
  'square-shoe-5.jpg': ['کفش روزمره بنددار مردانه', 'پوشاک و کفش'],
  'square-shoe-2.webp': ['کفش روزمره مدل ۲', 'پوشاک و کفش'],
  'square-shoe-3.avif': ['کفش روزمره مدل ۳', 'پوشاک و کفش'],
  'square-shoe-4.jpg': ['کفش روزمره مدل ۴', 'پوشاک و کفش'],
  'square-shoe-6.jpg': ['کفش روزمره مدل ۶', 'پوشاک و کفش'],
  'headphone.jpg': ['هدفون بی‌سیم', 'صوتی و تصویری'],
  'perfume.jpg': ['ادو پرفیوم', 'زیبایی و مراقبت'],
  'toy.avif': ['اسباب‌بازی عروسکی', 'کودک و سرگرمی'],
  'dualsense.webp': ['دسته بازی دوال‌سنس', 'بازی و سرگرمی'],
  'tshirt.jpg': ['تی‌شرت ساده مردانه', 'پوشاک و کفش'],
  'decorative.jpg': ['وسیله دکوری', 'خانه و دکوراسیون'],
};
function replaceLabel(node, value) {
  const child = node?.children?.find(c => c.type === 'JSXExpressionContainer' && c.expression?.type === 'Literal');
  return child ? { range: child.expression.range, value: JSON.stringify(value) } : null;
}

for (const file of files('src/app').filter(f => f.endsWith('/page.tsx') && !f.includes('/products/') && !/inner-hire-ad|hire-ads-category|create-products|create-shop|inner-category\/shops-category/.test(f))) {
  let source = fs.readFileSync(file, 'utf8');
  const ast = await parsers.typescript.parse(source);
  const changes = [];
  function visit(node) {
    if (!node || typeof node !== 'object') return;
    if (node.type === 'JSXElement' && ['a', 'Link'].includes(tag(node)) && (attribute(node, 'href') === '#' || attribute(node, 'href')?.startsWith('/products/'))) {
      const descendants = elements(node);
      const images = descendants.filter(e => tag(e) === 'img' && attribute(e, 'src')?.startsWith('/assets/images/example/') && !/profile-picture|banner/.test(attribute(e, 'src')));
      const image = images.find(e => !/logo|\/BMW\.png/i.test(attribute(e, 'src'))) || images[0];
      const titleNode = descendants.find(e => /^h[234]$/.test(tag(e))) || descendants.find(e => tag(e) === 'span' && attribute(e, 'className')?.includes('text-ellipsis'));
      const amountParent = descendants.find(e => (e.children || []).some(c => c.type === 'JSXElement' && attribute(c, 'className')?.includes('icon-toman')));
      let title = titleNode && clean(text(titleNode));
      const amount = amountParent && clean(text(amountParent)).match(/[0-9۰-۹٠-٩][0-9۰-۹٠-٩,٬. ]{2,}/)?.[0].trim();
      if (image && title && amount) {
        const src = attribute(image, 'src');
        const label = labels[src.split('/').pop()];
        if (label && title !== label[0]) {
          const change = replaceLabel(titleNode, label[0]);
          if (change) changes.push(change);
          title = label[0];
        }
        const identity = `${title}|${amount}|${src}`;
        const base = src.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'item';
        const slug = attribute(node, 'href')?.startsWith('/products/') ? attribute(node, 'href').slice('/products/'.length) : `${base}-${createHash('sha1').update(identity).digest('hex').slice(0, 7)}`;
        const categoryNode = descendants.find(e => tag(e) === 'span' && attribute(e, 'className')?.includes('text-accent'));
        const categoryText = categoryNode ? clean(text(categoryNode)) : '';
        if (label && categoryNode && !categoryText.includes('،') && categoryText !== label[1]) {
          const change = replaceLabel(categoryNode, label[1]);
          if (change) changes.push(change);
        }
        records.set(slug, { slug, title, price: amount, image: src, category: label?.[1] || (categoryText && !categoryText.includes('،') ? categoryText : 'کالا و آگهی'), location: categoryText.includes('،') ? categoryText : 'تهران', seller: 'فروشنده نمونه شاپی' });
        const href = node.openingElement.attributes.find(a => a.name?.name === 'href');
        changes.push({ range: href.value.range, value: JSON.stringify(`/products/${slug}`) });
        changes.push({ range: node.openingElement.name.range, value: 'Link' });
        changes.push({ range: node.closingElement.name.range, value: 'Link' });
        counts[file] = (counts[file] || 0) + 1;
      }
    }
    for (const [key, value] of Object.entries(node)) {
      if (['tokens', 'comments', 'loc', 'range'].includes(key)) continue;
      if (Array.isArray(value)) value.forEach(visit);
      else if (value && typeof value === 'object') visit(value);
    }
  }
  visit(ast);
  if (changes.length) {
    for (const change of changes.sort((a, b) => b.range[0] - a.range[0])) source = source.slice(0, change.range[0]) + change.value + source.slice(change.range[1]);
    if (!/import Link from/.test(source)) source = `import Link from 'next/link';\n${source}`;
    fs.writeFileSync(file, await format(source, { parser: 'typescript', printWidth: 100 }));
  }
}
if (!records.size) throw new Error('No unlinked product cards found. Do not rerun this one-time script after editing the generated catalog.');
fs.mkdirSync('src/data', { recursive: true });
const catalog = `export type Product = { slug: string; title: string; price: string; image: string; category: string; location: string; seller: string };\nexport const products: Product[] = ${JSON.stringify([...records.values()], null, 2)};\nexport function getProduct(slug: string) { return products.find(product => product.slug === slug); }\n`;
fs.writeFileSync('src/data/products.ts', await format(catalog, { parser: 'typescript' }));
fs.writeFileSync('docs/product-links.json', JSON.stringify({ products: records.size, linkedCards: Object.values(counts).reduce((a, b) => a + b, 0), files: counts }, null, 2));
console.log(JSON.stringify({ products: records.size, files: counts }, null, 2));
