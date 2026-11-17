// preToolUse hook: deny any file change inside data/ — the source data is read-only.
const fs = require('node:fs');
const path = require('node:path');

const event = JSON.parse(fs.readFileSync(0, 'utf8'));
const tool = String(event.toolName || '');
let args = event.toolArgs;
if (typeof args === 'string') { try { args = JSON.parse(args); } catch { /* keep string */ } }

const isWrite = /edit|create|write|patch|replace|delete|insert|rename|move/i.test(tool);
const isShell = /bash|powershell|shell|terminal|execute/i.test(tool);
const text = typeof args === 'string' ? args : JSON.stringify(args || {});

const dataDir = path.resolve(event.cwd || process.cwd(), 'data');
const paths = [];
if (args && typeof args === 'object') {
  for (const key of ['path', 'filePath', 'file_path', 'file', 'target']) {
    if (typeof args[key] === 'string') paths.push(args[key]);
  }
}
for (const m of text.matchAll(/\*\*\* (?:Add|Update|Delete) File: ([^\\\n]+)/g)) paths.push(m[1].trim());

const touchesData = paths.some((p) => {
  const abs = path.resolve(event.cwd || process.cwd(), p);
  return abs === dataDir || abs.startsWith(dataDir + path.sep);
});
// Shell commands that redirect into or delete/move files in data/
const shellTouchesData = isShell && /(>|\brm\b|\bmv\b|Remove-Item|Set-Content|Out-File|sed -i)[^|;&]*\bdata[\\/]/.test(text);

if ((isWrite && touchesData) || shellTouchesData) {
  process.stdout.write(JSON.stringify({
    permissionDecision: 'deny',
    permissionDecisionReason: 'data/ is read-only in this workspace. Write your results to out/ instead.'
  }));
} else {
  process.stdout.write('{}');
}
