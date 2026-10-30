// One-time asset integration. Runtime product data lives in src/data/products.ts.
import fs from 'node:fs';
import { parsers } from 'prettier/plugins/typescript';
import { format } from 'prettier';
import { products as existing } from '../src/data/products.ts';

const original = new Map(existing.map(p => [p.slug, { ...p }]));
const image = name => `/assets/images/products/studio-${name}.webp`;
const changesBySlug = {
  'headphone-ad0860e': { image: image('headphones'), title: 'هدفون بی‌سیم گرافیتی' },
  'perfume-093e712': { image: image('perfume'), title: 'ادو پرفیوم شیشه‌ای' },
  'dualsense-9cc09b6': { image: image('controller'), title: 'دسته بازی بی‌سیم' },
  'tshirt-f5a2223': { image: image('tshirt'), title: 'تی‌شرت نخ پنبه کرم' },
  'decorative-d16d5ba': { image: image('vase'), title: 'گلدان سرامیکی دکوراتیو' },
};
const products = existing.map(p => ({ ...p, ...changesBySlug[p.slug] }));
products.push(
  { slug: 'studio-backpack', title: 'کوله‌پشتی سبز روزمره', price: '2,850,000', image: image('backpack'), category: 'کیف و کوله‌پشتی', location: 'تهران', seller: 'فروشنده نمونه شاپی' },
  { slug: 'studio-desk-lamp', title: 'چراغ مطالعه مینیمال', price: '1,750,000', image: image('lamp'), category: 'خانه و دکوراسیون', location: 'تهران', seller: 'فروشنده نمونه شاپی' },
  { slug: 'studio-smartwatch', title: 'ساعت هوشمند گرافیتی', price: '4,900,000', image: image('watch'), category: 'کالای دیجیتال', location: 'تهران', seller: 'فروشنده نمونه شاپی' },
);
if (new Set(products.map(p => p.slug)).size !== products.length) throw Error('Catalog was already integrated; edit the runtime catalog directly.');
for (const p of products) if (!fs.existsSync('public' + p.image)) throw Error(`Missing image ${p.image}`);
const featured = ['square-shoe-5-f12492b','headphone-ad0860e','perfume-093e712','dualsense-9cc09b6','studio-backpack','tshirt-f5a2223','decorative-d16d5ba','studio-desk-lamp','studio-smartwatch','square-shoe-2-577df3c','square-shoe-3-798a2ad','square-shoe-6-6c8234d'];
const productSource = fs.readFileSync('src/data/products.ts', 'utf8');
const prefix = productSource.slice(0, productSource.indexOf('export const products'));
fs.writeFileSync('src/data/products.ts', await format(`${prefix}\nexport const products: Product[] = ${JSON.stringify(products)};\nexport function getProduct(slug: string) { return products.find(product => product.slug === slug); }\nexport const featuredProducts = ${JSON.stringify(featured)}.map(slug => getProduct(slug)!);`, { parser:'typescript' }));

const files = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? files(`${dir}/${e.name}`) : [`${dir}/${e.name}`]);
const tag = n => n.openingElement?.name?.name;
const attr = (n, name) => n.openingElement?.attributes.find(a => a.name?.name === name)?.value;
const elements = n => [n, ...(n.children || []).filter(c => c.type === 'JSXElement').flatMap(elements)];
let updated = 0;
for (const file of files('src/app').filter(f => f.endsWith('page.tsx'))) {
  let source = fs.readFileSync(file, 'utf8');
  const ast = await parsers.typescript.parse(source);
  const edits = [];
  let category = false;
  function visit(n) {
    if (!n || typeof n !== 'object') return;
    if (n.type === 'JSXElement') {
      const links = (n.children || []).filter(c => c.type === 'JSXElement' && tag(c) === 'Link' && attr(c,'href')?.value?.startsWith('/products/'));
      if (file.endsWith('inner-category/products-category/page.tsx') && links.length === 12) {
        edits.push({ range:[n.openingElement.range[1], n.closingElement.range[0]], text:'{featuredProducts.map(product => <ProductCard key={product.slug} product={product} />)}' });
        category = true;
        return;
      }
      if (tag(n) === 'Link' && attr(n,'href')?.value?.startsWith('/products/')) {
        const slug = attr(n,'href').value.split('/').pop();
        const old = original.get(slug);
        const product = products.find(p => p.slug === slug);
        if (old && product) {
          for (const e of elements(n)) {
            if (tag(e) === 'img' && attr(e,'src')?.value === old.image) {
              edits.push({ range:attr(e,'src').range, text:JSON.stringify(product.image) });
              const alt = attr(e,'alt');
              if (alt) edits.push({ range:alt.range, text:JSON.stringify(product.title) });
              else edits.push({ range:[e.openingElement.name.range[1],e.openingElement.name.range[1]], text:` alt=${JSON.stringify(product.title)}` });
              updated++;
            }
            for (const c of e.children || []) {
              if (c.type === 'JSXExpressionContainer' && c.expression.type === 'Literal' && typeof c.expression.value === 'string') {
                const value = c.expression.value.trim();
                if (value === old.title && old.title !== product.title) edits.push({ range:c.expression.range, text:JSON.stringify(product.title) });
              }
            }
          }
        }
        return;
      }
    }
    for (const [key,value] of Object.entries(n)) {
      if (['tokens','comments','loc','range'].includes(key)) continue;
      if (Array.isArray(value)) value.forEach(visit);
      else if (value && typeof value === 'object') visit(value);
    }
  }
  visit(ast);
  if (edits.length) {
    for (const edit of edits.sort((a,b)=>b.range[0]-a.range[0])) source=source.slice(0,edit.range[0])+edit.text+source.slice(edit.range[1]);
    if (category) source=`import { ProductCard } from '@/components/products/product-card';\nimport { featuredProducts } from '@/data/products';\n${source}`;
    fs.writeFileSync(file, await format(source,{parser:'typescript',printWidth:100}));
  }
}
console.log(`Integrated ${products.length} products; synchronized ${updated} existing card images; populated a varied 12-product category.`);
