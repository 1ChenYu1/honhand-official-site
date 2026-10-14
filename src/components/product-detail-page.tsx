'use client'

import NextImage from 'next/image'
import { ArrowRight, CheckCircle2, Image as ImageIcon } from 'lucide-react'

import type { DetailBlock, ProductDetail } from '@/lib/product-details'
import { cn } from '@/lib/utils'
import { PageHero } from './ui/page-hero'
import { SectionHeading } from './ui/section-heading'
import { Reveal } from './ui/reveal'
import { LinkButton } from './ui/link-button'

function Illustration({ block }: { block: DetailBlock }) {
  const { illustration } = block

  return (
    <Reveal>
      <div className="relative">
        <div
          className={cn(
            'relative flex aspect-[4/3] flex-col items-center justify-center gap-4 overflow-hidden rounded-[2rem] bg-gradient-to-br ring-1 ring-neutral-900/5',
            illustration.wash
          )}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-dots opacity-40"
            aria-hidden
          />
          <span
            className={cn(
              'relative grid h-20 w-20 place-items-center rounded-3xl bg-white/90 shadow-corporate-lg backdrop-blur-sm',
              illustration.iconTone
            )}
            aria-hidden
          >
            <illustration.icon className="h-10 w-10" />
          </span>
          <div className="relative text-center">
            <p className="text-xl font-bold text-neutral-800">{illustration.title}</p>
            <p className="mt-1.5 text-sm text-neutral-500">{illustration.subtitle}</p>
          </div>
        </div>

        <div
          className={cn(
            'pointer-events-none absolute h-24 w-24 rounded-3xl',
            illustration.placement === 'left' ? '-right-4 -top-4' : '-bottom-5 -left-5',
            '-z-10 bg-gradient-to-br from-primary-200/50 to-corporate-teal-200/50'
          )}
          aria-hidden
        />
      </div>
    </Reveal>
  )
}

export function ProductDetailPage({ detail }: { detail: ProductDetail }) {
  return (
    <>
      <PageHero
        eyebrow={{ icon: detail.icon, label: detail.eyebrow }}
        title={detail.heroTitle}
        description={detail.heroDescription}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/contact" size="lg">
            立即咨询
            <ArrowRight className="h-4 w-4" aria-hidden />
          </LinkButton>
          <LinkButton href="/products" variant="secondary" size="lg">
            对比其他产品
          </LinkButton>
        </div>

        <dl className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {detail.metrics.map((metric) => (
            <div key={metric.label} className="text-left">
              <dd className="text-2xl font-bold tracking-tightest text-neutral-900">
                {metric.value}
              </dd>
              <dt className="mt-1 text-[13px] text-neutral-500">{metric.label}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      {detail.blocks.map((block, index) => {
        const visualLeft = block.illustration.placement === 'left'

        return (
          <section
            key={block.title}
            className={cn('section', index % 2 === 1 ? 'bg-neutral-50' : 'bg-white')}
          >
            <div className="container-page">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                {/* 文案 */}
                <Reveal className={cn('space-y-6', visualLeft && 'lg:order-2')}>
                  <div>
                    <span
                      className={cn(
                        'inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold ring-1 ring-inset',
                        block.eyebrowTone
                      )}
                    >
                      <block.eyebrowIcon className="h-3.5 w-3.5" aria-hidden />
                      {block.eyebrow}
                    </span>
                    <h2 className="mt-6 text-3xl font-bold sm:text-4xl">{block.title}</h2>
                    <div className="body-copy mt-5 space-y-4 text-[17px]">
                      {block.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {block.chips ? (
                    <ul className="grid grid-cols-2 gap-2.5 pt-1">
                      {block.chips.map((chip) => (
                        <li
                          key={chip}
                          className="flex items-center gap-2.5 rounded-xl border border-neutral-200/80 bg-white px-4 py-3 text-sm font-medium text-neutral-700 shadow-card"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-600" aria-hidden />
                          {chip}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {block.cards ? (
                    <div className="grid gap-3 pt-1 sm:grid-cols-2">
                      {block.cards.map((card) => (
                        <div
                          key={card.title}
                          className="rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-card"
                        >
                          <h3 className="text-sm font-semibold text-neutral-900">{card.title}</h3>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-500">
                            {card.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </Reveal>

                {/* 视觉 */}
                <div className={cn(visualLeft && 'lg:order-1')}>
                  <Illustration block={block} />
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* 界面截图 */}
      {detail.gallery?.length ? (
        <section className="section bg-neutral-50">
          <div className="container-page">
            <SectionHeading
              eyebrow={{ icon: ImageIcon, label: '界面实拍' }}
              title="真实运行环境中的画面"
              description="以下均为现场部署版本的界面截图，未做美化处理。"
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {detail.gallery.map((shot, index) => (
                <Reveal
                  key={shot.src}
                  delay={index * 0.07}
                  className={cn(
                    // 第一张作为主图，占两列
                    index === 0 && 'sm:col-span-2 lg:col-span-2'
                  )}
                >
                  <figure className="group h-full overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-card transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-corporate-xl">
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                      <NextImage
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    </div>
                    <figcaption className="border-t border-neutral-100 px-5 py-4 text-sm font-semibold text-neutral-700">
                      {shot.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-corporate-slate-900 py-20 text-white md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid opacity-[0.07]" />
          <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-primary-600/25 blur-[100px]" />
          <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-corporate-teal-500/20 blur-[100px]" />
        </div>

        <div className="container-page">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <Reveal>
              <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
                想了解 {detail.name} 的实施细节？
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-lg leading-relaxed text-white/65">{detail.ctaNote}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <LinkButton href="/contact" variant="invert">
                  预约方案沟通
                </LinkButton>
                <LinkButton
                  href="/products"
                  variant="ghost"
                  className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  查看其他产品
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
