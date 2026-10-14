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

/**
 * Tailwind 在生成选择器时会对任意值做多种转义：
 *   [ -> \[      ( -> \(      . -> \.
 *   , -> \,  或  \2c （十六进制转义 + 一个空格作为终止符）
 * 先把转义还原，再只保留字母数字下划线连字符做比较，避免转义写法差异造成误判。
 */
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

const missing = new Map()
const checked = new Set()

for (const file of walk(SRC)) {
  const src = fs.readFileSync(file, 'utf8')
  for (const m of src.matchAll(/class(?:Name)?="([^"]*)"/g)) {
    for (const token of m[1].split(/\s+/)) {
      if (!token || token.includes('{') || token.includes('$')) continue
      checked.add(token)
      if (!generated.has(normalize(token))) {
        if (!missing.has(token)) missing.set(token, new Set())
        missing.get(token).add(path.relative(ROOT, file))
      }
    }
  }
}

const hit = checked.size - missing.size
console.log(`静态类名 ${checked.size} 个，构建产物命中 ${hit} 个`)

if (missing.size) {
  console.log('\n以下类名未出现在编译产物中（很可能被静默忽略）：')
  for (const [token, where] of missing) console.log(`  ${token}  <- ${[...where].join(', ')}`)
  process.exit(1)
}

console.log('\nOK - 所有静态 Tailwind 类名均已成功生成')
