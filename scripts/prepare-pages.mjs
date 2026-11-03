import fs from 'node:fs';

const html = fs.readFileSync('dist/index.html', 'utf8');
for (const route of ['case-study-1', 'case-study-2']) {
  fs.mkdirSync(`dist/${route}`, { recursive: true });
  fs.writeFileSync(`dist/${route}/index.html`, html);
}
fs.writeFileSync('dist/404.html', html);
fs.writeFileSync('dist/.nojekyll', '');
console.log('Prepared direct case-study entry pages for static hosting.');
