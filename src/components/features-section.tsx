'use client'

import { AlertTriangle, Eye, ShieldCheck, Sparkles, Wrench } from 'lucide-react'

import { cn } from '@/lib/utils'
import { SectionHeading } from './ui/section-heading'
import { Reveal } from './ui/reveal'

const features = [
  {
    icon: ShieldCheck,
    step: '01',
    title: '风险早识别',
    description: '通过算法与数据分析，提前识别潜在风险，防患于未然。',
    gradient: 'from-red-500 to-rose-600',
    wash: 'bg-red-50/60',
    ring: 'ring-red-100',
    accent: 'text-red-600',
  },
  {
    icon: Eye,
    step: '02',
    title: '问题早发现',
    description: '实时监控系统运行状态，快速发现并定位问题根源。',
    gradient: 'from-primary-500 to-primary-700',
    wash: 'bg-primary-50/60',
    ring: 'ring-primary-100',
    accent: 'text-primary-600',
  },
  {
    icon: AlertTriangle,
    step: '03',
    title: '隐患早预警',
    description: '智能预警机制，在隐患真正造成损失前发出警告信号。',
    gradient: 'from-amber-500 to-orange-600',
    wash: 'bg-amber-50/60',
    ring: 'ring-amber-100',
    accent: 'text-amber-600',
  },
  {
    icon: Wrench,
    step: '04',
    title: '故障早处理',
    description: '快速响应机制，确保故障在最短时间内得到有效处理。',
    gradient: 'from-emerald-500 to-green-700',
    wash: 'bg-emerald-50/60',
    ring: 'ring-emerald-100',
    accent: 'text-emerald-600',
  },
]

const promises = [
  { icon: ShieldCheck, label: '高可用性' },
  { icon: Eye, label: '高稳定性' },
  { icon: AlertTriangle, label: '高安全性' },
]

export function FeaturesSection() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-primary-50/60 blur-[110px]" />
        <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-corporate-teal-50/60 blur-[110px]" />
      </div>

      <div className="container-page relative">
        <SectionHeading
          eyebrow={{ icon: Sparkles, label: '核心价值' }}
          title={
            <>
              四早机制 ——
              <br className="hidden sm:block" />
              把损失挡在<span className="text-gradient-brand">故障之前</span>
            </>
          }
          description="从被动抢修转向主动预防。这四个动作贯穿我们所有的产品设计与服务流程。"
        />

        {/* 四早机制 */}
        <ol className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <li key={feature.title} className="h-full">
              <Reveal delay={index * 0.09} className="h-full">
                <div
                  className={cn(
                    'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-7',
                    'shadow-card transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-card-hover'
                  )}
                >
                  <span
                    className={cn(
                      'pointer-events-none absolute inset-x-0 top-0 h-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                      feature.wash
                    )}
                    aria-hidden
                  />

                  <div className="relative flex items-start justify-between">
                    <span
                      className={cn(
                        'grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-corporate transition-transform duration-500 ease-premium group-hover:scale-105',
                        feature.gradient
                      )}
                      aria-hidden
                    >
                      <feature.icon className="h-6 w-6" />
                    </span>
                    <span
                      className={cn('text-3xl font-bold tracking-tightest', feature.accent)}
                      aria-hidden
                    >
                      {feature.step}
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-lg font-bold text-neutral-900">
                    {feature.title}
                  </h3>
                  <p className="body-copy relative mt-3 flex-1 text-[15px]">
                    {feature.description}
                  </p>

                  {/* 进度条 */}
                  <div className="relative mt-7 flex gap-1.5" aria-hidden>
                    {['opacity-40', 'opacity-70', 'opacity-100'].map((tone) => (
                      <span
                        key={tone}
                        className={cn(
                          'h-1 flex-1 rounded-full bg-gradient-to-r transition-opacity duration-500',
                          feature.gradient,
                          tone
                        )}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* 优势总结 */}
        <Reveal delay={0.2}>
          <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-neutral-50 p-9 md:p-14">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
            <div className="relative mx-auto max-w-3xl text-center">
              <h3 className="text-balance text-2xl font-bold text-neutral-900 md:text-3xl">
                智能化解决方案的优势
              </h3>
              <p className="body-copy mt-5 text-[17px]">
                通过「四早机制」的核心理念，我们为客户提供全方位的智能化解决方案。
                从风险识别到故障处理，每一个环节都经过精心设计和优化，
                确保系统的高可用性、高稳定性和高安全性。
              </p>
              <ul className="mt-8 flex flex-wrap justify-center gap-3">
                {promises.map((promise) => (
                  <li
                    key={promise.label}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-inset',
                      promise.icon === ShieldCheck && 'bg-primary-50 text-primary-700 ring-primary-100',
                      promise.icon === Eye && 'bg-corporate-teal-50 text-corporate-teal-700 ring-corporate-teal-100',
                      promise.icon === AlertTriangle && 'bg-accent-50 text-accent-700 ring-accent-100'
                    )}
                  >
                    <promise.icon className="h-4 w-4" aria-hidden />
                    {promise.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
