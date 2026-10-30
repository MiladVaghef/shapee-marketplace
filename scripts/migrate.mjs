// One-time migration utility. The generated TSX files are the application's source.
// This is deliberately not run during development or production builds.
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { parse } from 'parse5';
import { format } from 'prettier';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root, p.startsWith('pages/') ? 'legacy/' + p : p), 'utf8');
const write = async (p, text) => {
  fs.mkdirSync(path.dirname(path.join(root, p)), { recursive: true });
  if (/\.[jt]sx?$/.test(p)) text = await format(text, { parser: /\.tsx?$/.test(p) ? 'typescript' : 'babel', printWidth: 100 });
  fs.writeFileSync(path.join(root, p), text);
};
const walkFiles = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walkFiles(path.join(dir, e.name)) : [path.join(dir, e.name)]);
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value;
const hasClass = (n, k) => (attr(n, 'class') || '').split(/\s+/).includes(k);
const find = (n, fn) => fn(n) ? n : (n.childNodes || []).map(c => find(c, fn)).find(Boolean);
const all = (n, fn) => [...(fn(n) ? [n] : []), ...(n.childNodes || []).flatMap(c => all(c, fn))];
const textOf = (n) => n.nodeName === '#text' ? n.value : (n.childNodes || []).map(textOf).join('');
const files = ['index.html', 'main.html', 'components.html', ...walkFiles('legacy/pages').filter(f => f.endsWith('.html')).map(f => f.replaceAll('\\', '/').replace(/^legacy\//, ''))];
const routeFor = (f) => f === 'index.html' ? '/' : f === 'main.html' ? '/preview' : '/' + f.replace(/^pages\//, '').replace(/\.html$/, '');
const routes = new Map(files.map(f => [f, routeFor(f)]));
const pageTitles = {
  '/': 'بازار آنلاین', '/preview': 'پیش‌نمایش چیدمان', '/components': 'کتابخانه رابط کاربری',
  '/account/dashboard': 'داشبورد', '/account/chat': 'پیام‌ها', '/account/comments': 'نظرات',
  '/account/edit-profile': 'ویرایش پروفایل', '/account/my-products': 'آگهی‌های من',
  '/account/my-shops': 'فروشگاه‌های من', '/account/my-wallet': 'کیف پول',
  '/account/notifications': 'اعلان‌ها', '/account/plans': 'اشتراک‌ها',
  '/account/sell-factor': 'فاکتورهای فروش', '/account/shopping-cart': 'سبد خرید',
  '/account/support': 'پشتیبانی', '/account/verify': 'احراز هویت',
  '/account/wish-list': 'نشان‌ها', '/account/banner-slot-rent': 'رزرو بنر تبلیغاتی',
  '/inner-category/hire-ads-category': 'آگهی‌های استخدام',
  '/inner-category/products-category': 'دسته‌بندی محصولات',
  '/inner-category/shops-category': 'دسته‌بندی فروشگاه‌ها',
  '/profile/user-profile': 'پروفایل کاربر', '/profile/shops-profile': 'پروفایل فروشگاه',
  '/search-result': 'نتایج جستجو',
};
const assetFiles = walkFiles('assets').map(f => f.replaceAll('\\', '/'));
const assets = new Map(assetFiles.map(f => [f.toLowerCase(), '/' + f]));
const missing = new Map();
const links = new Set();

function url(value, source) {
  const placeholder = value?.match(/^https:\/\/placehold\.co\/(\d+)x(\d+)/);
  if (placeholder) {
    const [, width, height] = placeholder;
    const file = `public/assets/placeholders/${width}x${height}.svg`;
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="#f1ebfc"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#792edf" font-family="sans-serif" font-size="${Math.max(12, Math.min(Number(width), Number(height)) / 12)}">Shoppie</text></svg>`);
    return `/assets/placeholders/${width}x${height}.svg`;
  }
  if (!value || /^(#|https?:|mailto:|tel:|data:|blob:)/.test(value)) return value;
  const [pathname, suffix = ''] = value.split(/(?=[?#])/);
  let normalized = pathname.startsWith('/') ? pathname.replace(/^\/+/, '') : path.posix.normalize(path.posix.join(path.posix.dirname(source), pathname));
  const marker = pathname.match(/(?:^|\/)(assets|sliders|pages)\/(.*)/);
  if (marker) normalized = marker[1] + '/' + marker[2];
  normalized = normalized.replace(/^\/+/, '');
  if (normalized.startsWith('assets/')) {
    normalized = normalized.replace(/assets\/logo\/shoppie(?:-white)?\.png/, 'assets/logo/shoppie.png');
    if (assets.has(normalized.toLowerCase())) return assets.get(normalized.toLowerCase()) + suffix;
    const matches = assetFiles.filter(f => path.posix.basename(f).toLowerCase() === path.posix.basename(normalized).toLowerCase());
    if (matches.length === 1) return '/' + matches[0] + suffix;
    missing.set(normalized, (missing.get(normalized) || 0) + 1);
    return '/assets/images/placeholder.svg';
  }
  if (normalized === 'all-pages.html') return '/explore';
  if (routes.has(normalized)) return routes.get(normalized) + suffix;
  if (normalized.endsWith('.html')) {
    const byName = files.filter(f => path.posix.basename(f) === path.posix.basename(normalized));
    if (byName.length === 1) return routes.get(byName[0]) + suffix;
    links.add(normalized);
    return '/explore';
  }
  return '/' + normalized + suffix;
}

const documents = files.map(source => {
  const doc = parse(read(source));
  const body = find(doc, n => n.tagName === 'body');
  const heading = find(body, n => n.tagName === 'h1');
  const title = pageTitles[routeFor(source)] ? `شاپی | ${pageTitles[routeFor(source)]}` : heading && textOf(heading).trim() ? `شاپی | ${textOf(heading).replace(/\s+/g, ' ').trim()}` : textOf(find(doc, n => n.tagName === 'title') || { childNodes: [] });
  return { source, body, title, route: routeFor(source) };
});
const shared = new Map();
const sharedNames = new Map();
const hash = n => createHash('sha1').update(JSON.stringify(cleanNode(n))).digest('hex');
function cleanNode(n) {
  return { tag: n.tagName || n.nodeName, value: n.value?.replace(/\s+/g, ' '), attrs: n.attrs?.map(a => ({ ...a, value: ['href', 'src'].includes(a.name) ? a.value.replace(/^(\.\.\/)+/, '') : a.value })), children: n.childNodes?.filter(c => c.nodeName !== '#comment').map(cleanNode) };
}
for (const doc of documents.filter(d => !d.route.startsWith('/account/'))) {
  for (const n of all(doc.body, n => ['header', 'footer', 'nav'].includes(n.tagName))) {
    const key = hash(n);
    const item = shared.get(key) || { node: n, source: doc.source, count: 0 };
    item.count++;
    shared.set(key, item);
  }
}
let sharedIndex = 0;
for (const [key, item] of shared) if (item.count > 1) {
  const base = path.posix.basename(item.source, '.html').split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
  sharedNames.set(key, `${base}${item.node.tagName[0].toUpperCase() + item.node.tagName.slice(1)}${++sharedIndex}`);
}

const widgets = new Set();
const components = new Set();
const useWidget = (name) => { widgets.add(name); return name; };
const boolAttrs = new Set(['disabled', 'required', 'multiple', 'autoFocus', 'hidden', 'readOnly', 'noValidate', 'open', 'controls', 'loop', 'muted', 'autoPlay', 'playsInline', 'reversed', 'download', 'capture']);
const attrNames = { class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', autofocus: 'autoFocus', colspan: 'colSpan', rowspan: 'rowSpan', maxlength: 'maxLength', minlength: 'minLength', autocomplete: 'autoComplete', srcset: 'srcSet', contenteditable: 'contentEditable', spellcheck: 'spellCheck', viewbox: 'viewBox', preserveaspectratio: 'preserveAspectRatio', 'xlink:href': 'xlinkHref', 'xml:space': 'xmlSpace', novalidate: 'noValidate', autoplay: 'autoPlay', playsinline: 'playsInline', datetime: 'dateTime', acceptcharset: 'acceptCharset', formaction: 'formAction', enctype: 'encType', cellspacing: 'cellSpacing', cellpadding: 'cellPadding', frameborder: 'frameBorder', usemap: 'useMap' };
const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
function attrs(n, source, overrides = {}) {
  const values = Object.fromEntries((n.attrs || []).map(a => [a.name, a.value]));
  Object.assign(values, overrides);
  if (values.id === 'account-menu-button') { values['aria-label'] = 'فهرست حساب کاربری'; values['aria-controls'] = 'account-menu'; }
  const result = [];
  for (let [name, value] of Object.entries(values)) {
    if (value == null || name.startsWith('on') || name === 'selected' || name === 'div' || (n.tagName === 'textarea' && name === 'type')) continue;
    if (name === 'style') {
      const style = Object.fromEntries(value.split(';').filter(v => v.includes(':')).map(v => {
        const colon = v.indexOf(':');
        let key = v.slice(0, colon).trim();
        if (!key.startsWith('--')) key = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^Webkit/, 'Webkit').replace(/^Ms/, 'ms');
        return [key, v.slice(colon + 1).trim().replace(/url\(['"]?(?:\.\.\/)*assets\//g, 'url(/assets/')];
      }));
      if (Object.keys(style).length) result.push(`style={${JSON.stringify(style)}${Object.keys(style).some(k => k.startsWith('--')) ? ' as React.CSSProperties' : ''}}`);
      continue;
    }
    if (name === 'src' || name === 'href' || name === 'poster') value = url(value, source);
    name = attrNames[name] || (n.namespaceURI?.includes('svg') && !name.startsWith('aria-') && !name.startsWith('data-') ? name.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) : name);
    if (name === 'checked') { result.push('defaultChecked'); continue; }
    if (name === 'value' && ['input', 'select', 'textarea'].includes(n.tagName)) name = 'defaultValue';
    if (['rows', 'cols', 'rowSpan', 'colSpan', 'size', 'maxLength', 'minLength', 'tabIndex', 'start', 'span'].includes(name) && /^-?\d+$/.test(value)) result.push(`${name}={${value}}`);
    else if (boolAttrs.has(name) && value === '') result.push(name);
    else result.push(`${name}=${JSON.stringify(value)}`);
  }
  if (n.tagName === 'button' && !('type' in values)) result.push('type="button"');
  if (n.tagName === 'img' && !('alt' in values)) result.push('alt=""');
  return result.join(' ');
}

function jsx(n, source, skipShared = false) {
  if (n.nodeName === '#comment' || ['script', 'style', 'link'].includes(n.tagName)) return '';
  if (n.nodeName === '#text') return n.value.trim() ? `{${JSON.stringify(n.value.replace(/\s+/g, ' '))}}` : '';
  if (!n.tagName) return children(n, source);
  const stepNodes = (n.childNodes || []).filter(c => c.tagName);
  if (source === 'pages/account/banner-slot-rent.html' && stepNodes.length === 4 && stepNodes.every(c => hasClass(c, 'full-height'))) {
    const content = stepNodes.map(c => {
      const classAttr = c.attrs?.find(a => a.name === 'class');
      if (classAttr) classAttr.value = classAttr.value.replace(/\bremove\b/g, '').trim();
      return jsx(c, source);
    }).join('\n');
    return `<${useWidget('Wizard')} className=${JSON.stringify(attr(n, 'class'))}>${content}</Wizard>`;
  }
  if (!skipShared && ['header', 'footer', 'nav'].includes(n.tagName) && sharedNames.has(hash(n))) {
    const name = sharedNames.get(hash(n)); components.add(name); return `<${name} />`;
  }
  if (attr(n, 'data-select') !== undefined) {
    const options = all(n, e => hasClass(e, 'select-option')).map(o => ({ value: attr(o, 'data-value') || textOf(o).trim(), label: textOf(o).trim() }));
    const input = find(n, e => e.tagName === 'input');
    return `<${useWidget('SelectField')} className=${JSON.stringify(attr(n, 'class') || '')} name=${JSON.stringify(attr(input || {}, 'name') || '')} placeholder=${JSON.stringify(textOf(find(n, e => hasClass(e, 'select-text')) || {}).trim() || 'انتخاب کنید')} options={${JSON.stringify(options)}} />`;
  }
  if (attr(n, 'id') === 'theme-toggle') return `<${useWidget('ThemeToggle')} className=${JSON.stringify(attr(n, 'class') || '')} />`;
  if (hasClass(n, 'time-picker')) return `<${useWidget('TimePicker')} name=${JSON.stringify(attr(n, 'data-name') || 'time')} className=${JSON.stringify(attr(n, 'class'))} />`;
  if (hasClass(n, 'days-picker')) return `<${useWidget('DaysPicker')} name=${JSON.stringify(attr(n, 'data-name') || 'days')} className=${JSON.stringify(attr(n, 'class'))} />`;
  if (hasClass(n, 'calendar-wrapper')) return `<${useWidget('BookingCalendar')} />`;
  if (n.tagName === 'canvas' && attr(n, 'id') === 'financeChart') return `<${useWidget('FinanceChart')} />`;
  if (hasClass(n, 'accordion-item') || hasClass(n, 'sold-item')) {
    const sold = hasClass(n, 'sold-item');
    const trigger = find(n, c => hasClass(c, sold ? 'sold-toggle' : 'accordion-trigger'));
    const content = find(n, c => hasClass(c, sold ? 'sold-details' : 'accordion-content'));
    if (trigger && content) return `<${useWidget('Disclosure')} className=${JSON.stringify(attr(n, 'class') || '')} triggerClassName=${JSON.stringify(attr(trigger, 'class') || '')} contentClassName=${JSON.stringify(attr(content, 'class') || '')} label={<>${children(trigger, source)}</>}>${children(content, source)}</Disclosure>`;
  }
  if (n.tagName === 'form' && source === 'pages/login.html') return `<${useWidget('LoginForm')} />`;
  if (n.tagName === 'form') return `<${useWidget('DemoForm')} ${attrs(n, source)}>${children(n, source)}</DemoForm>`;
  if (n.tagName === 'input' && attr(n, 'placeholder')?.includes('جستجو') && ['text', undefined].includes(attr(n, 'type'))) return `<${useWidget('SearchInput')} ${attrs(n, source)} />`;
  if (hasClass(n, 'theme-logo')) return `<${useWidget('ThemeLogo')} ${attrs(n, source, { src: null })} />`;
  let tag = n.tagName;
  let overrides = {};
  if (tag === 'div' && attr(n, 'href')) tag = 'Link';
  if (tag === 'div' && n.parentNode?.tagName === 'footer' && hasClass(n.parentNode, 'fixed')) {
    const label = textOf(n);
    const href = label.includes('خانه') ? '/' : label.includes('نشان') ? '/account/wish-list' : label.includes('ثبت') ? '/create-products/add-personal-product' : label.includes('دسته') ? '/inner-category/products-category' : '/account/dashboard';
    tag = 'Link'; overrides.href = href;
  }
  if (tag === 'button' && attr(n, 'onclick')) {
    const href = attr(n, 'onclick').match(/location\.href\s*=\s*['"]([^'"]+)/)?.[1];
    if (href) { tag = 'Link'; overrides = { href, type: null }; }
  }
  if (tag === 'a') {
    const href = url(attr(n, 'href') || '#', source);
    if (href.startsWith('/') && !href.startsWith('//')) tag = 'Link';
    // Turn the ubiquitous logo placeholder into a real homepage link.
    if (href === '#' && find(n, c => c.tagName === 'img' && (attr(c, 'src') || '').includes('/logo/'))) { tag = 'Link'; overrides.href = '/'; }
  }
  if (tag === 'textarea') {
    const value = textOf(n).trim();
    return `<textarea ${attrs(n, source)} ${value ? `defaultValue=${JSON.stringify(value)}` : ''} />`;
  }
  return voidTags.has(tag) ? `<${tag} ${attrs(n, source, overrides)} />` : `<${tag} ${attrs(n, source, overrides)}>${children(n, source)}</${tag}>`;
}
const children = (n, source) => (n.childNodes || []).map(c => jsx(c, source)).join('\n');
const imports = () => `import Link from 'next/link';\n${widgets.size ? `import { ${[...widgets].join(', ')} } from '@/components/ui/widgets';` : ''}\n${components.size ? `import { ${[...components].join(', ')} } from '@/components/layout/shared';` : ''}\n`;

// Preserve all original sources; public assets are the only copied runtime files.
fs.mkdirSync('public', { recursive: true });
fs.cpSync('assets', 'public/assets', { recursive: true });
fs.mkdirSync('public/assets/images', { recursive: true });
fs.writeFileSync('public/assets/images/placeholder.svg', '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420"><rect width="640" height="420" fill="#f1ebfc"/><path d="M240 260l55-65 45 45 30-35 40 55z" fill="#792edf"/><circle cx="375" cy="155" r="22" fill="#b18be8"/><text x="320" y="320" text-anchor="middle" fill="#792edf" font-family="sans-serif" font-size="20">Shoppie</text></svg>');
for (const file of walkFiles('styles').filter(f => f.endsWith('.scss'))) {
  const original = fs.readFileSync(file, 'utf8');
  fs.writeFileSync(file, original.replace(/(?:\.\.\/)+\/?assets\//g, '/assets/'));
}

// Extract genuinely identical headers, footers, and navigation into shared components.
let sharedCode = '';
widgets.clear(); components.clear();
for (const [key, name] of sharedNames) {
  const item = shared.get(key);
  sharedCode += `export function ${name}() { return (<>${jsx(item.node, item.source, true)}</>); }\n`;
}
await write('src/components/layout/shared.tsx', imports().replace(/import \{[^\n]+from '@\/components\/layout\/shared';\n/, '') + sharedCode);

const dashboard = documents.find(d => d.route === '/account/dashboard');
widgets.clear(); components.clear();
const accountHeader = jsx(find(dashboard.body, n => n.tagName === 'header'), dashboard.source, true);
const accountFooters = all(dashboard.body, n => n.tagName === 'footer').map(n => jsx(n, dashboard.source, true)).join('\n');
await write('src/components/layout/account-chrome.tsx', imports() + `export function AccountHeader() { return (<>${accountHeader}</>); }\nexport function AccountFooters() { return (<>${accountFooters}</>); }`);

const catalog = [];
for (const doc of documents) {
  widgets.clear(); components.clear();
  const account = doc.route.startsWith('/account/');
  let content;
  if (account) {
    const main = find(doc.body, n => n.tagName === 'main');
    content = (main?.childNodes || []).filter(n => !['account-menu', 'account-menu-overlay'].includes(attr(n, 'id'))).map(n => jsx(n, doc.source)).join('\n');
  } else content = children(doc.body, doc.source);
  const routePath = doc.route === '/' ? '' : doc.route;
  const bodyClass = attr(doc.body, 'class') || '';
  if (doc.route === '/account/edit-profile') { useWidget('ProfileDraft'); content = `<ProfileDraft>${content}</ProfileDraft>`; }
  const body = account ? content : `<PageFrame className=${JSON.stringify(bodyClass)}>${content}</PageFrame>`;
  await write(`src/app${routePath}/page.tsx`, `// Migrated from ${doc.source}; edit this React source directly.\nimport type { Metadata } from 'next';\n${imports()}${!account ? "import { PageFrame } from '@/components/layout/page-frame';" : ''}\nexport const metadata: Metadata = { title: ${JSON.stringify(doc.title.replaceAll('شاپی', 'شاپی'))} };\nexport default function Page() { return (<>${body}</>); }`);
  catalog.push({ route: doc.route, title: doc.title.replaceAll('شاپی', 'شاپی'), group: account ? 'account' : doc.route.split('/')[1] || 'home', source: doc.source });
}
await write('src/data/pages.ts', `export const pages = ${JSON.stringify(catalog, null, 2)} as const;`);
await write('docs/migration-report.json', JSON.stringify({ pages: catalog.length, sharedComponents: sharedNames.size, missingOriginalAssets: [...missing].map(([file, occurrences]) => ({ file, occurrences })), unresolvedOriginalLinks: [...links] }, null, 2));
console.log(`Converted ${catalog.length} pages; extracted ${sharedNames.size} shared components; ${missing.size} missing original assets use a local placeholder. See docs/migration-report.json.`);
