import Link from 'next/link'
import { Home, LayoutGrid, Search } from 'lucide-react'

import { products } from '@/lib/products'
import { navigation } from '@/lib/site'
import { LinkButton } from '@/components/ui/link-button'

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-[calc(100svh-var(--nav-height))] items-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/70 via-white to-slate-50" />
        <div className="absolute inset-0 bg-grid mask-fade-y" />
        <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary-200/40 blur-[100px]" />
      </div>

      <div className="container-page flex flex-col items-center py-24 text-center">
        <p className="text-[7rem] font-bold leading-none tracking-tightest text-gradient-brand sm:text-[9rem]">
          404
        </p>

        <h1 className="mt-2 text-2xl font-bold text-neutral-900 sm:text-3xl">
          页面走丢了
        </h1>
        <p className="mt-4 max-w-prose text-neutral-600">
          您访问的地址不存在或已被移动。可能是链接过期，也可能是我们调整了站点结构。
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/" size="lg">
            <Home className="h-4 w-4" aria-hidden />
            返回首页
          </LinkButton>
          <LinkButton href="/products" variant="secondary" size="lg">
            <LayoutGrid className="h-4 w-4" aria-hidden />
            浏览产品
          </LinkButton>
        </div>

        {/* 快捷入口 */}
        <div className="mt-14 w-full max-w-2xl">
          <p className="flex items-center justify-center gap-2 text-[13px] text-neutral-400">
            <Search className="h-3.5 w-3.5" aria-hidden />
            或者试试这些入口
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <nav className="rounded-2xl border border-neutral-200/80 bg-white p-5 text-left shadow-card">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">
                主要栏目
              </h2>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-neutral-700 transition-colors hover:text-primary-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="rounded-2xl border border-neutral-200/80 bg-white p-5 text-left shadow-card">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">
                产品详情
              </h2>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {products.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 transition-colors hover:text-primary-700"
                    >
                      <product.icon className="h-3.5 w-3.5" aria-hidden />
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
