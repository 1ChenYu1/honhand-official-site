'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react'

import { navigation, site } from '@/lib/site'
import { products } from '@/lib/products'
import { LinkButton } from './ui/link-button'
import { Reveal } from './ui/reveal'

const contactRows = [
  { icon: Mail, label: '邮箱', value: site.email, href: site.emailHref },
  { icon: Phone, label: '电话', value: site.phone, href: site.phoneHref },
  { icon: MapPin, label: '地址', value: site.address, href: site.mapHref },
  { icon: Clock, label: '营业时间', value: site.hours },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative isolate overflow-hidden bg-corporate-slate-900 text-white">
      {/* 背景层 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.07]" />
        <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-primary-600/20 blur-[110px]" />
        <div className="absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-corporate-teal-500/15 blur-[110px]" />
      </div>

      <div className="container-page pt-20 pb-10 md:pt-24">
        {/* CTA 条 */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm md:flex-row md:items-center md:p-10">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-white md:text-[1.75rem]/[1.3]">
                准备好开始了吗？
              </h2>
              <p className="mt-3 leading-relaxed text-white/60">
                告诉我们您的现场痛点，我们会在一个工作日内给出初步方案建议。
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <LinkButton href="/contact" variant="invert">
                立即咨询
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </LinkButton>
              <LinkButton href="/products" variant="ghost" className="text-white/70 hover:text-white">
                浏览产品
              </LinkButton>
            </div>
          </div>
        </Reveal>

        {/* 站点地图 */}
        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-white/10 pt-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* 品牌 */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <Image
                src={site.logoFooter.src}
                alt={site.name}
                width={site.logoFooter.width}
                height={site.logoFooter.height}
                className="h-9 w-auto brightness-0 invert transition-transform duration-500 ease-premium group-hover:scale-105"
              />
              <span className="text-[15px] font-bold text-white">{site.name}</span>
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-[1.9] text-white/55">
              专注于工控领域的智能化解决方案，提供 HR、SPM、HMI 等核心产品，
              助力企业完成工业自动化与数字化转型。
            </p>

            <ul className="mt-8 space-y-3.5">
              {contactRows.map((row) => {
                const inner = (
                  <>
                    <span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-primary-400/40 group-hover:bg-primary-500/15"
                      aria-hidden
                    >
                      <row.icon className="h-4 w-4 text-primary-300" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-medium uppercase tracking-wider text-white/35">
                        {row.label}
                      </span>
                      <span className="block text-sm text-white/75">{row.value}</span>
                    </span>
                  </>
                )

                return (
                  <li key={row.label}>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="group flex items-start gap-3 transition-colors duration-300 hover:text-white"
                        {...(row.href.startsWith('http')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="group flex items-start gap-3">{inner}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* 产品 */}
          <nav className="lg:col-span-3" aria-label="产品服务">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              产品服务
            </h3>
            <ul className="mt-6 space-y-3.5">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    href={product.href}
                    className="group inline-flex items-center gap-2 text-[15px] text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    <product.icon
                      className="h-4 w-4 text-white/30 transition-colors duration-300 group-hover:text-primary-300"
                      aria-hidden
                    />
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-[15px] font-medium text-primary-300 transition-colors duration-300 hover:text-primary-200"
                >
                  产品总览
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </li>
            </ul>
          </nav>

          {/* 快速链接 */}
          <nav className="lg:col-span-2" aria-label="快速链接">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              快速链接
            </h3>
            <ul className="mt-6 space-y-3.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 二维码 / 说明位 */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              服务承诺
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                { title: '四早机制', desc: '风险早识别 · 问题早发现 · 隐患早预警 · 故障早处理' },
                { title: '7×24 响应', desc: '重大故障专线支持，节假日不打烊' },
                { title: '本地化服务', desc: `位于${site.addressShort}， onsite 支持更高效` },
              ].map((item) => (
                <li key={item.title} className="border-l border-white/10 pl-4">
                  <p className="text-sm font-semibold text-white/85">{item.title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-white/45">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 版权 */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-7 sm:flex-row">
          <p className="text-[13px] text-white/40">
            © {year} {site.name} · 保留所有权利
          </p>
          <p className="text-[13px] text-white/30">{site.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
