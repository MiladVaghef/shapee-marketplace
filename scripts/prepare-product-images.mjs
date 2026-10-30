// Preserve generated masters and create lightweight runtime derivatives.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const manifest = JSON.parse(fs.readFileSync('docs/product-image-prompts.json', 'utf8'));
const report = [];
for (const asset of manifest.assets) {
  fs.mkdirSync(path.dirname(asset.original), { recursive: true });
  fs.mkdirSync(path.dirname(asset.image), { recursive: true });
  if (!fs.existsSync(asset.original)) fs.copyFileSync(asset.source, asset.original);
  const metadata = await sharp(asset.original).metadata();
  await sharp(asset.original).resize(1024, 1024, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 86, effort: 6 }).toFile(asset.image);
  await sharp(asset.original).resize(480, 480, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 82, effort: 6 }).toFile(asset.thumbnail);
  report.push({ name:asset.name, sourceWidth:metadata.width, sourceHeight:metadata.height, image:asset.image, bytes:fs.statSync(asset.image).size, thumbnailBytes:fs.statSync(asset.thumbnail).size });
}
fs.writeFileSync('docs/product-image-sizes.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
