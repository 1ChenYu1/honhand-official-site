'use client'

import { ArrowRight, CheckCircle2, Cpu } from 'lucide-react'
import Link from 'next/link'

import { products } from '@/lib/products'
import { cn } from '@/lib/utils'
import { SectionHeading } from './ui/section-heading'
import { Reveal } from './ui/reveal'
import { LinkButton } from './ui/link-button'

export function ProductMatrix() {
  return (
    <section className="section relative overflow-hidden bg-neutral-50">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-primary-100/60 blur-[110px]" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-corporate-teal-100/60 blur-[110px]" />
      </div>

      <div className="container-page relative">
        <SectionHeading
          eyebrow={{ icon: Cpu, label: '核心产品' }}
          title={
            <>
              三条产品线，
              <br className="hidden sm:block" />
              覆盖人、货、机的<span className="text-gradient-brand">全部现场</span>
            </>
          }
          description="HR 管人、SPM 管货、HMI 管界面。三者共享同一套数据底座，可以单独部署，也可以组合成完整方案。"
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.1} className="h-full">
              <Link
                href={product.href}
                className={cn(
                  'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200/80 bg-white p-8',
                  'shadow-card transition-all duration-500 ease-premium',
                  'hover:-translate-y-1.5 hover:border-transparent hover:shadow-card-hover',
                  'focus-visible:-translate-y-1.5 focus-visible:shadow-card-hover'
                )}
              >
                {/* 悬停时浮现的品牌色渐变描边 */}
                <span
                  aria-hidden
                  className={cn(
                    'pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br p-px opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                    product.gradient
                  )}
                >
                  <span className="block h-full w-full rounded-[calc(1.5rem-1px)] bg-white" />
                </span>

                {/* 顶部氛围光 */}
                <span
                  aria-hidden
                  className={cn(
                    'pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30',
                    product.gradient
                  )}
                />

                <div className="relative">
                  <span
                    className={cn(
                      'grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-corporate transition-transform duration-500 ease-premium group-hover:scale-105',
                      product.gradient
                    )}
                    aria-hidden
                  >
                    <product.icon className="h-6 w-6" />
                  </span>

                  <h3 className="mt-6 text-xl font-bold text-neutral-900">
                    {product.name}
                    <span className="ml-2 align-middle text-[13px] font-normal text-neutral-400">
                      {product.tagline}
                    </span>
                  </h3>
                  <p className="body-copy mt-3 text-[15px]">{product.description}</p>
                </div>

                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium ring-1 ring-inset transition-colors duration-300',
                        product.wash,
                        product.accent,
                        product.ring
                      )}
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-8 flex items-center justify-between border-t border-neutral-100 pt-6">
                  <span className={cn('text-sm font-semibold', product.accent)}>
                    了解更多
                  </span>
                  <span
                    className={cn(
                      'grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br text-white shadow-corporate transition-transform duration-500 ease-premium group-hover:translate-x-1',
                      product.gradient
                    )}
                    aria-hidden
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-14 flex justify-center">
            <LinkButton href="/products" variant="secondary">
              查看所有产品
              <ArrowRight className="h-4 w-4" aria-hidden />
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
