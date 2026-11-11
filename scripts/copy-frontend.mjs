// Copies the built Angular site into the backend, so Spring Boot serves it
// and the whole site ships as one jar. Run through `npm run build`.
import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const from = join(root, 'frontend', 'dist', 'frontend', 'browser');
const to = join(root, 'backend', 'src', 'main', 'resources', 'static');

if (!existsSync(from)) {
  console.error(`Nothing to copy: ${from} does not exist. Run "npm run build:frontend" first.`);
  process.exit(1);
}

await mkdir(to, { recursive: true });
for (const entry of await readdir(to)) {
  if (entry !== '.gitkeep') await rm(join(to, entry), { recursive: true, force: true });
}
await cp(from, to, { recursive: true });
console.log(`Copied the site into ${to}`);
