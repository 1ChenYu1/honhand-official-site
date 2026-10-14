const fs = require('fs')
const path = require('path')

const SRC = path.join(__dirname, '..', 'src')
const LUCIDE_CJS = path.join(__dirname, '..', 'node_modules', 'lucide-react', 'dist', 'cjs', 'lucide-react.js')

const cjs = fs.readFileSync(LUCIDE_CJS, 'utf8')
const exported = new Set()
for (const m of cjs.matchAll(/^exports\.(\w+) = /gm)) exported.add(m[1])

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else if (/\.(ts|tsx)$/.test(entry.name)) out.push(full)
  }
  return out
}

const problems = []
for (const file of walk(SRC)) {
  const src = fs.readFileSync(file, 'utf8')

  // 1) lucide 图标必须真实存在
  for (const m of src.matchAll(/import\s*\{([^}]*)\}\s*from\s*['"]lucide-react['"]/g)) {
    for (const raw of m[1].split(',')) {
      const name = raw.trim().split(/\s+as\s+/)[0].trim()
      if (!name) continue
      if (!exported.has(name)) problems.push(`${path.relative(SRC, file)}: 缺失图标 ${name}`)
    }
  }

  // 2) 同名默认/具名导入会互相覆盖（例如 next/image 与 lucide 的 Image）
  const bound = new Map()
  for (const m of src.matchAll(/import\s+([A-Za-z_$][\w$]*)\s*(?:,\s*\{([^}]*)\})?\s*from/g)) {
    const names = []
    if (m[1]) names.push(m[1])
    if (m[2]) {
      for (const raw of m[2].split(',')) {
        const parts = raw.trim().split(/\s+as\s+/)
        names.push((parts[1] ?? parts[0]).trim())
      }
    }
    for (const n of names) {
      if (!n) continue
      if (bound.has(n)) problems.push(`${path.relative(SRC, file)}: 重复导入标识符 ${n}`)
      bound.set(n, true)
    }
  }
}

if (problems.length) {
  console.error('导入检查失败:\n' + problems.join('\n'))
  process.exit(1)
}
console.log(`OK - lucide 图标全部存在（可用 ${exported.size} 个），无重复导入标识符`)
