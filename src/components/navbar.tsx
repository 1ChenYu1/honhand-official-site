'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'

import { navigation, site } from '@/lib/site'
import { cn } from '@/lib/utils'
import { LinkButton } from './ui/link-button'

const EASE = [0.22, 1, 0.36, 1] as const

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Navbar() {
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()

  const [isScrolled, setIsScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* 滚动状态 + 阅读进度 */
  useEffect(() => {
    let frame = 0

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        const y = window.scrollY
        setIsScrolled(y > 8)

        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? Math.min(y / max, 1) : 0)
        frame = 0
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  /* 路由变化时收起所有浮层 */
  useEffect(() => {
    setOpenMenu(null)
    setIsMobileOpen(false)
  }, [pathname])

  /* 移动端抽屉打开时锁定滚动 + 支持 Esc 关闭 */
  useEffect(() => {
    if (!isMobileOpen) return

    const { overflow, paddingRight } = document.body.style
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = overflow
      document.body.style.paddingRight = paddingRight
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isMobileOpen])

  /* 下拉面板延时关闭，便于鼠标移动到面板上 */
  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140)
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  useEffect(() => () => void (closeTimer.current && clearTimeout(closeTimer.current)), [])

  return (
    <>
      {/* 首屏元素使用 CSS 入场（只位移不透明），避免 opacity:0 阻塞首屏渲染 */}
      <header
        className={cn(
          'rise-in fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-premium',
          isScrolled
            ? 'bg-white/80 shadow-nav backdrop-blur-xl supports-[backdrop-filter]:bg-white/70'
            : 'bg-white/60 backdrop-blur-md'
        )}
      >
        <nav className="container-page" aria-label="主导航">
          <div className="flex h-[4.5rem] items-center justify-between gap-4">
            {/* Logo —— 完整锁定组合，汉字已在图内，故不再并排显示文字 */}
            <Link
              href="/"
              className="group flex shrink-0 items-center rounded-lg"
              aria-label={`${site.name} 首页`}
            >
              <Image
                src={site.logo.src}
                alt={site.name}
                width={site.logo.width}
                height={site.logo.height}
                priority
                className="h-8 w-auto transition-transform duration-500 ease-premium group-hover:scale-[1.03] sm:h-9"
              />
            </Link>

            {/* 桌面导航 */}
            <ul className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => {
                const active = isActive(pathname, item.href)
                const expanded = openMenu === item.name

                if (!item.submenu) {
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        className={cn(
                          'relative rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors duration-300',
                          active
                            ? 'text-primary-700'
                            : 'text-neutral-600 hover:bg-neutral-100/70 hover:text-neutral-900'
                        )}
                      >
                        {item.name}
                        <span
                          className={cn(
                            'absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-primary-600 transition-transform duration-300 ease-premium',
                            active ? 'scale-x-100' : 'scale-x-0'
                          )}
                          aria-hidden
                        />
                      </Link>
                    </li>
                  )
                }

                return (
                  <li
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => {
                      cancelClose()
                      setOpenMenu(item.name)
                    }}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-haspopup="true"
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setOpenMenu(expanded ? null : item.name)}
                      className={cn(
                        'relative flex items-center gap-1 rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors duration-300',
                        active
                          ? 'text-primary-700'
                          : 'text-neutral-600 hover:bg-neutral-100/70 hover:text-neutral-900'
                      )}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-300 ease-premium',
                          expanded && 'rotate-180'
                        )}
                        aria-hidden
                      />
                      <span
                        className={cn(
                          'absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-primary-600 transition-transform duration-300 ease-premium',
                          active ? 'scale-x-100' : 'scale-x-0'
                        )}
                        aria-hidden
                      />
                    </button>

                    <AnimatePresence>
                      {expanded ? (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.99 }}
                          transition={{ duration: 0.22, ease: EASE }}
                          className="absolute left-1/2 top-[calc(100%+0.6rem)] w-60 -translate-x-1/2"
                        >
                          <div className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/95 p-1.5 shadow-corporate-xl backdrop-blur-xl">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.href}
                                href={subitem.href}
                                aria-current={
                                  pathname === subitem.href ? 'page' : undefined
                                }
                                className={cn(
                                  'flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors duration-200',
                                  pathname === subitem.href
                                    ? 'bg-primary-50 text-primary-700'
                                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                                )}
                              >
                                {subitem.name}
                                <span
                                  className="h-1.5 w-1.5 rounded-full bg-primary-400"
                                  aria-hidden
                                />
                              </Link>
                            ))}
                            <div className="my-1.5 h-px bg-neutral-200/80" aria-hidden />
                            <Link
                              href={item.href}
                              className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[13px] font-semibold text-neutral-500 transition-colors duration-200 hover:bg-neutral-50 hover:text-primary-700"
                            >
                              查看全部产品
                              <span aria-hidden>→</span>
                            </Link>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>

            {/* 桌面 CTA */}
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-neutral-600 transition-colors duration-300 hover:bg-neutral-100/70 hover:text-neutral-900"
              >
                <Phone className="h-4 w-4 text-primary-600" aria-hidden />
                {site.phone}
              </a>
              <LinkButton href="/contact" size="sm" className="px-5 py-2.5">
                立即咨询
              </LinkButton>
            </div>

            {/* 移动端触发器 */}
            <button
              type="button"
              onClick={() => setIsMobileOpen((open) => !open)}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav"
              aria-label={isMobileOpen ? '关闭菜单' : '打开菜单'}
              className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white/70 text-neutral-800 transition-colors duration-300 hover:bg-neutral-100 lg:hidden"
            >
              {isMobileOpen ? (
                <X className="h-5 w-5" aria-hidden />
              ) : (
                <Menu className="h-5 w-5" aria-hidden />
              )}
            </button>
          </div>
        </nav>

        {/* 阅读进度条 */}
        <div
          className="h-px origin-left bg-gradient-to-r from-primary-500 to-corporate-teal-500 transition-opacity duration-500"
          style={{ transform: `scaleX(${progress})`, opacity: isScrolled ? 1 : 0 }}
          aria-hidden
        />
      </header>

      {/* 移动端抽屉 */}
      <AnimatePresence>
        {isMobileOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-40 bg-neutral-900/20 backdrop-blur-sm lg:hidden"
              aria-hidden
            />
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="fixed inset-x-0 top-[4.5rem] z-40 max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-neutral-200 bg-white/95 shadow-corporate-xl backdrop-blur-xl lg:hidden"
            >
              <div className="container-page py-6">
                <ul className="flex flex-col gap-1">
                  {navigation.map((item) => {
                    const active = isActive(pathname, item.href)
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          aria-current={active ? 'page' : undefined}
                          className={cn(
                            'flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-colors duration-200',
                            active
                              ? 'bg-primary-50 text-primary-700'
                              : 'text-neutral-800 hover:bg-neutral-50'
                          )}
                        >
                          {item.name}
                          {item.submenu ? (
                            <ChevronDown className="h-4 w-4 text-neutral-400" aria-hidden />
                          ) : null}
                        </Link>

                        {item.submenu ? (
                          <ul className="mb-1 ml-4 mt-1 flex flex-col gap-0.5 border-l border-neutral-200 pl-3">
                            {item.submenu.map((subitem) => (
                              <li key={subitem.href}>
                                <Link
                                  href={subitem.href}
                                  aria-current={
                                    pathname === subitem.href ? 'page' : undefined
                                  }
                                  className={cn(
                                    'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200',
                                    pathname === subitem.href
                                      ? 'text-primary-700'
                                      : 'text-neutral-500 hover:text-neutral-900'
                                  )}
                                >
                                  {subitem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    )
                  })}
                </ul>

                <div className="mt-6 flex flex-col gap-3 border-t border-neutral-200 pt-6">
                  <LinkButton href="/contact" className="w-full">
                    立即咨询
                  </LinkButton>
                  <a
                    href={site.phoneHref}
                    className="flex items-center justify-center gap-2 rounded-full border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50"
                  >
                    <Phone className="h-4 w-4 text-primary-600" aria-hidden />
                    {site.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
