'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Gauge,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react'

import { site } from '@/lib/site'
import { LinkButton } from './ui/link-button'

const heroStats = [
  { value: '500+', label: '服务客户' },
  { value: '50+', label: '行业解决方案' },
  { value: '99.9%', label: '系统稳定性' },
]

const floatingCards = [
  {
    icon: TrendingUp,
    tone: 'text-green-600',
    chip: 'bg-green-100/70 text-green-700',
    title: '效率提升',
    value: '+35%',
    // 左侧卡片允许探出栅格间隙（间隙 48px，安全）；右侧卡片必须留在面板内，
    // 否则会越过容器右边界，破坏与导航栏右侧的视觉对齐。
    className: '-left-8 top-1/3',
    delay: 0,
  },
  {
    icon: Zap,
    tone: 'text-accent-600',
    chip: 'bg-accent-100/70 text-accent-700',
    title: '响应速度',
    value: '毫秒级',
    className: 'right-6 bottom-1/4',
    delay: 1.4,
  },
]

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative isolate flex min-h-[calc(100svh-var(--nav-height))] items-center overflow-hidden">
      {/* 背景层 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/70 via-white to-slate-50" />
        <div className="absolute inset-0 bg-grid mask-fade-y" />

        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -24, 0], x: [0, 12, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-32 top-10 h-[32rem] w-[32rem] rounded-full bg-primary-300/25 blur-[120px]"
        />
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 20, 0], x: [0, -16, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-24 bottom-0 h-[34rem] w-[34rem] rounded-full bg-corporate-teal-300/25 blur-[130px]"
        />
        <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-accent-200/20 blur-[100px]" />

        {/* 顶部细边 */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      </div>

      <div className="container-page grid items-center gap-16 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-32">
        {/* 左侧文案 —— 全部使用 CSS 入场，首帧即可见 */}
        <div className="max-w-2xl">
          <div className="rise-in" style={{ '--rise-delay': '60ms', '--rise-from': '14px' } as React.CSSProperties}>
            <span className="eyebrow">
              <span className="relative flex h-1.5 w-1.5" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-600" />
              </span>
              {site.tagline}
            </span>
          </div>

          <h1
            className="rise-in mt-7 font-bold text-[2.6rem]/[1.2] sm:text-[3.75rem]/[1.1] lg:text-[4.1rem]/[1.08]"
            style={{ '--rise-delay': '110ms' } as React.CSSProperties}
          >
            <span className="text-neutral-900">赋能工业</span>
            <br />
            <span className="text-gradient-brand animate-shimmer">智领未来</span>
          </h1>

          <p
            className="lede rise-in mt-7 max-w-xl"
            style={{ '--rise-delay': '170ms' } as React.CSSProperties}
          >
            {site.name} 专注于工业自动化与数字化转型，提供 HR、SPM、HMI
            等核心产品，用「四早机制」把现场风险挡在故障之前。
          </p>

          <div
            className="rise-in mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ '--rise-delay': '230ms' } as React.CSSProperties}
          >
            <LinkButton href="/products" size="lg" className="w-full sm:w-auto">
              探索产品
              <ArrowRight className="h-4 w-4" aria-hidden />
            </LinkButton>
            <LinkButton
              href="/contact"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <PlayCircle className="h-4 w-4 text-primary-600" aria-hidden />
              预约产品演示
            </LinkButton>
          </div>

          {/* 数据 */}
          <dl
            className="rise-in mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-neutral-200/80 pt-8"
            style={{ '--rise-delay': '290ms' } as React.CSSProperties}
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-bold tracking-tightest text-neutral-900 sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-[13px] text-neutral-500">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 右侧视觉 */}
        <div
          className="rise-in relative hidden lg:block"
          style={{ '--rise-delay': '200ms', '--rise-from': '26px' } as React.CSSProperties}
        >
          <div className="relative">
            {/* 主面板：宽度铺满所在栅格列，右缘与容器内容边界严格对齐 */}
            <div className="card-glass relative overflow-hidden p-8">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/70 to-transparent"
                aria-hidden
              />

              <div className="flex items-center gap-4">
                <span
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary-500 to-corporate-teal-600 text-white shadow-[0_6px_18px_-6px_rgba(37,73,224,.8)]"
                  aria-hidden
                >
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-base font-bold text-neutral-900">智能监控系统</h2>
                  <p className="mt-0.5 text-[13px] text-neutral-500">实时保障现场稳定运行</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700 ring-1 ring-inset ring-green-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden />
                  运行中
                </span>
              </div>

              {/* 迷你趋势图 */}
              <div className="mt-7 rounded-2xl border border-neutral-200/80 bg-white/70 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-neutral-600">设备可用率</span>
                  <span className="text-xl font-bold tracking-tight text-neutral-900">98.5%</span>
                </div>
                <svg
                  viewBox="0 0 300 72"
                  className="mt-4 h-[4.5rem] w-full"
                  preserveAspectRatio="none"
                  role="img"
                  aria-label="设备可用率近 30 天趋势，整体平稳上行"
                >
                  <defs>
                    <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2549e0" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#2549e0" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="heroStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3a67f2" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 54 L30 50 L60 52 L90 40 L120 43 L150 32 L180 35 L210 24 L240 27 L270 18 L300 14 L300 72 L0 72 Z"
                    fill="url(#heroArea)"
                  />
                  <path
                    d="M0 54 L30 50 L60 52 L90 40 L120 43 L150 32 L180 35 L210 24 L240 27 L270 18 L300 14"
                    fill="none"
                    stroke="url(#heroStroke)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { icon: Gauge, label: '平均响应', value: '128 ms' },
                    { icon: Activity, label: '今日告警', value: '3 条' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl bg-neutral-50/80 px-4 py-3 ring-1 ring-inset ring-neutral-200/70"
                    >
                      <span className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                        <item.icon className="h-3.5 w-3.5" aria-hidden />
                        {item.label}
                      </span>
                      <span className="mt-1 block text-base font-bold text-neutral-900">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 四早机制 */}
              <ul className="mt-6 grid grid-cols-2 gap-2.5">
                {['风险早识别', '问题早发现', '隐患早预警', '故障早处理'].map((label) => (
                  <li
                    key={label}
                    className="flex items-center gap-2 rounded-xl bg-white/70 px-3.5 py-2.5 text-[13px] font-medium text-neutral-700 ring-1 ring-inset ring-neutral-200/70"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-600" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* 浮动卡片 */}
            {floatingCards.map((card) => (
              <motion.div
                key={card.title}
                animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: card.delay,
                }}
                className={`absolute ${card.className} hidden xl:block`}
              >
                <div className="card-glass flex items-center gap-3 px-4 py-3">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-xl ${card.chip}`}
                    aria-hidden
                  >
                    <card.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-neutral-900">{card.title}</p>
                    <p className={`text-[13px] font-bold ${card.tone}`}>{card.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* 装饰 */}
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.75rem] bg-gradient-to-br from-primary-200/35 via-transparent to-corporate-teal-200/35 blur-2xl"
              aria-hidden
            />
          </div>
        </div>
      </div>

      {/* 底部信任条 */}
      <div
        className="rise-in absolute inset-x-0 bottom-0 border-t border-neutral-200/70 bg-white/50 backdrop-blur-sm"
        style={{ '--rise-delay': '380ms', '--rise-from': '10px' } as React.CSSProperties}
      >
        <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-[13px] text-neutral-500">
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary-600" aria-hidden />
            7×24 技术支持
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary-600" aria-hidden />
            自主研发核心产品
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary-600" aria-hidden />
            500+ 企业客户验证
          </span>
        </div>
      </div>
    </section>
  )
}
