import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const filePath = join(__dirname, 'components', 'Navbar.tsx');
let content = readFileSync(filePath, 'utf8');

// Fix the \\r\\n literal that got inserted
content = content.replace(/---(.*?)---/g, (match, p1) => {
  // No-op, we'll use simple string replace
  return match;
});

// Fix the literal \\r\\n that was inserted
content = content.replace(/\`r\`n/g, '\\n');

// More precise: Find the line with faq and the \\r\\n before it
content = content.replace(
  'href: "/tentang" },\\n    { key: "nav.faq"',
  'href: "/tentang" },\\n    { key: "nav.faq"'
);

// Also clean up any embedded \\r\\n that ended up in the code
content = content.replace(/`r`n/g, '');

writeFileSync(filePath, content, 'utf8');
console.log('Fixed successfully');
