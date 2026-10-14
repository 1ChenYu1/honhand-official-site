'use client'

import { ArrowRight, CheckCircle2, Cpu } from 'lucide-react'

import { products } from '@/lib/products'
import { cn } from '@/lib/utils'
import { PageHero } from './ui/page-hero'
import { Reveal } from './ui/reveal'
import { LinkButton } from './ui/link-button'

export function ProductOverview() {
  return (
    <>
      <PageHero
        eyebrow={{ icon: Cpu, label: '产品中心' }}
        title="为工控现场而生的三款产品"
        description="不做大而全的通用软件，只解决工控场景里真正难的三件事：人的效率、物的流转、机的可视。"
      />

      <section className="section relative overflow-hidden bg-neutral-50 pt-0">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-dots opacity-50" />
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-primary-100/50 blur-[110px]" />
          <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-corporate-teal-100/50 blur-[110px]" />
        </div>

        <div className="container-page relative -mt-10 space-y-6">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.08}>
              <article className="overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-white shadow-card transition-shadow duration-500 ease-premium hover:shadow-corporate-xl">
                <div className="grid gap-10 p-8 lg:grid-cols-12 lg:gap-12 lg:p-12">
                  {/* 左：身份 */}
                  <div className="lg:col-span-4">
                    <span
                      className={cn(
                        'grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-corporate',
                        product.gradient
                      )}
                      aria-hidden
                    >
                      <product.icon className="h-7 w-7" />
                    </span>

                    <h2 className="mt-6 text-2xl font-bold text-neutral-900">{product.name}</h2>
                    <p className={cn('mt-1 text-sm font-medium', product.accent)}>
                      {product.tagline}
                    </p>
                    <p className="body-copy mt-4 text-[15px]">{product.longDescription}</p>

                    <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-neutral-100 pt-6">
                      {product.metrics.map((metric) => (
                        <div key={metric.label}>
                          <dd className="text-lg font-bold tracking-tight text-neutral-900">
                            {metric.value}
                          </dd>
                          <dt className="mt-1 text-[11px] leading-snug text-neutral-400">
                            {metric.label}
                          </dt>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {/* 右：能力 */}
                  <div className="lg:col-span-8">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-400">
                      核心能力
                    </h3>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {product.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className={cn(
                            'flex items-start gap-3 rounded-2xl px-4 py-3.5 text-[15px] font-medium text-neutral-700 ring-1 ring-inset transition-colors duration-300',
                            product.wash,
                            product.ring
                          )}
                        >
                          <CheckCircle2
                            className={cn('mt-0.5 h-4 w-4 shrink-0', product.accent)}
                            aria-hidden
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <LinkButton href={product.href}>
                        了解 {product.name} 详情
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </LinkButton>
                      <span className="flex flex-wrap gap-2">
                        {product.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1.5 text-[13px] font-medium text-neutral-600"
                          >
                            {feature}
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 底部品牌色条 */}
                <div className={cn('h-1 w-full bg-gradient-to-r', product.gradient)} aria-hidden />
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.24}>
            <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-neutral-200/80 bg-white px-8 py-8 text-center shadow-card sm:flex-row sm:text-left">
              <div>
                <h3 className="text-lg font-bold text-neutral-900">不确定该选哪一款？</h3>
                <p className="mt-2 text-neutral-500">
                  告诉我们现场情况，我们帮您做选型，并给出实施周期与预算区间。
                </p>
              </div>
              <LinkButton href="/contact" className="shrink-0">
                获取选型建议
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
