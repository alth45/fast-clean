import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dir = join(__dirname, '..', 'public', 'image');
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
const colors = ['#6366f1','#8b5cf6','#a855f7','#d946ef','#ec4899','#f43f5e','#ef4444','#f97316','#f59e0b','#eab308','#84cc16','#22c55e','#10b981','#14b8a6','#06b6d4','#0ea5e9','#3b82f6','#2563eb','#7c3aed','#9333ea','#c026d3','#db2777','#e11d48','#dc2626','#ea580c','#d97706','#a16207','#84cc16','#15803d','#047857'];
for (let i = 1; i <= 90; i++) {
  const c1 = colors[(i - 1) % colors.length];
  const c2 = colors[i % colors.length];
  const s = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${c1}"/><stop offset="100%" style="stop-color:${c2}"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><text x="200" y="240" text-anchor="middle" font-family="system-ui,sans-serif" font-size="64" font-weight="bold" fill="white" opacity="0.6">${String(i).padStart(2, '0')}</text></svg>`;
  writeFileSync(join(dir, `${i}.svg`), s);
}
console.log('Generated 90 placeholder SVGs');