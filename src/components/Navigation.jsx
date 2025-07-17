import { useState, useEffect } from 'react'

const MENU = [
  { label: '首页', link: '#' },
  { label: 'HR系统', link: '#hr' },
  { label: '工控组态', link: '#hmi' },
  { label: '案例', link: '#cases' },
  { label: '文档', link: '#docs' },
  { label: '联系我们', link: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState('zh')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#001a33cc] backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-[#0a1f3a99] to-transparent'} text-main-title`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="font-heading text-2xl tracking-widest select-none">HONHAND</div>
        <ul className="hidden md:flex gap-8 text-lg font-heading">
          {MENU.map(item => (
            <li key={item.label}>
              <a href={item.link} className="hover:text-neon-blue transition-colors duration-200">{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button
            className={`px-3 py-1 rounded-full border border-neon-blue text-neon-blue font-bold shadow-[0_0_8px_2px_#00e4ff] animate-pulse hover:bg-neon-blue hover:text-main-bg-from transition`}
          >
            控制台登录
          </button>
          <select
            className="bg-transparent border-none text-main-title font-bold outline-none cursor-pointer"
            value={lang}
            onChange={e => setLang(e.target.value)}
          >
            <option value="zh">中</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </nav>
  )
} 