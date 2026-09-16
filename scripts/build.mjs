import { mkdir, copyFile, readFile, writeFile, rm } from 'node:fs/promises';
import { Script } from 'node:vm';

const html = await readFile('index.html', 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
for (const [idx, source] of scripts.entries()) {
  new Script(source, { filename: `index.html#script-${idx + 1}` });
}

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await copyFile('index.html', 'dist/index.html');
await copyFile('public/_headers', 'dist/_headers');
await writeFile('dist/_redirects', '/* /index.html 200\n');
console.log('Cloudflare Pages build ready: dist');
