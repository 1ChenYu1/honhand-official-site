const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const SRC = path.join(ROOT, 'src')

const cssDir = path.join(ROOT, '.next', 'static', 'css')
if (!fs.existsSync(cssDir)) {
  console.error('未找到构建产物 CSS，请先执行 npm run build')
  process.exit(2)
}
const css = fs
  .readdirSync(cssDir)
  .map((f) => fs.readFileSync(path.join(cssDir, f), 'utf8'))
  .join('\n')

const unescapeSelector = (s) =>
  s
    .replace(/\\([0-9a-fA-F]{1,6})[ ]?/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/\\(.)/g, '$1')

const normalize = (s) => s.replace(/[^A-Za-z0-9_-]/g, '')

const generated = new Set()
for (const m of css.matchAll(/\.((?:\\.|[A-Za-z0-9_ -])+)/g)) {
  generated.add(normalize(unescapeSelector(m[1])))
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full, out)
    else if (/\.(tsx|ts)$/.test(e.name)) out.push(full)
  }
  return out
}

/*
 * 动态类名检查：只取「看起来像 Tailwind 工具类」的字符串字面量。
 * 这些值来自 cn(...) 里的条件分支，写错不会有任何编译期报错，
 * 但对应样式会静默失效，因此单独校验。
 */
const TAILWIND_HINT = /^(?:[a-z][a-z0-9]*-)*[a-z][a-z0-9]*-(?:\d{2,3}|[a-z]+|\[[^\]]+\])$/
const LOOKS_LIKE_CLASS =
  /^(?:sm|md|lg|xl|2xl|hover|focus|focus-visible|active|group-hover|disabled|peer|aria-selected|aria-invalid|dark|motion-safe|motion-reduce|first|last|odd|even)-/

const missing = []
const checked = new Set()

for (const file of walk(SRC)) {
  const src = fs.readFileSync(file, 'utf8')
  // 字符串字面量（单引号 / 反引号 / 双引号）中以空格分隔的候选类名
  for (const m of src.matchAll(/['`]([^'`\n]*)['`]/g)) {
    const raw = m[1]
    if (!raw || raw.length > 400) continue
    if (!/(^|\s)(bg-|text-|border-|ring-|shadow-|from-|to-|via-|rounded|opacity-)/.test(raw)) continue
    for (const token of raw.split(/\s+/)) {
      if (!token || token.includes('${') || token.includes('$')) continue
      if (LOOKS_LIKE_CLASS.test(token)) continue // 响应式/状态前缀，其基类会单独校验
      if (!TAILWIND_HINT.test(token)) continue
      checked.add(token)
      if (!generated.has(normalize(token))) missing.push(`${path.relative(ROOT, file)}: ${token}`)
    }
  }
}

console.log(`动态类名字面量 ${checked.size} 个，构建产物命中 ${checked.size - missing.length} 个`)
if (missing.length) {
  console.log('\n以下动态类名不存在（cn() 条件分支写错时静默失效）：')
  for (const item of missing) console.log(`  ${item}`)
  process.exit(1)
}
console.log('\nOK - 所有动态 Tailwind 类名均已成功生成')
