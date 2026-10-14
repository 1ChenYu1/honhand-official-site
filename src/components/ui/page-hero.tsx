'use client'

import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

type Tone = 'light' | 'dark'

export type PageHeroProps = {
  eyebrow?: { icon: React.ElementType; label: string }
  title: React.ReactNode
  description: React.ReactNode
  tone?: Tone
  className?: string
  children?: React.ReactNode
}

/**
 * 内页统一头部（关于我们 / 联系我们 / 产品中心）。
 * 相同的光晕 + 网格语言，让内页之间跳转时视觉连续。
 */
export function PageHero({
  eyebrow,
  title,
  description,
  tone = 'light',
  className,
  children,
}: PageHeroProps) {
  const dark = tone === 'dark'

  return (
    <section
      className={cn(
        'relative isolate overflow-hidden pb-20 pt-16 md:pb-24 md:pt-20',
        dark ? 'bg-corporate-slate-900' : 'bg-white',
        className
      )}
    >
      {/* 背景层：细网格 + 双色光晕 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className={cn('absolute inset-0', dark ? 'bg-grid opacity-[0.07]' : 'bg-grid')} />
        <div
          className={cn(
            'absolute -top-40 left-1/2 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full blur-[100px]',
            dark
              ? 'bg-primary-600/25'
              : 'bg-gradient-to-r from-primary-200/45 via-primary-100/40 to-corporate-teal-200/40'
          )}
        />
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 h-40',
            dark
              ? 'bg-gradient-to-t from-corporate-slate-900 to-transparent'
              : 'bg-gradient-to-t from-slate-50/80 to-transparent'
          )}
        />
      </div>

      <div className="container-page">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          {eyebrow ? (
            <Reveal>
              <span
                className={cn(
                  'eyebrow',
                  dark && 'border-white/10 bg-white/5 text-primary-200 backdrop-blur-md'
                )}
              >
                <eyebrow.icon className="h-3.5 w-3.5" aria-hidden />
                {eyebrow.label}
              </span>
            </Reveal>
          ) : null}

          <Reveal delay={0.08}>
            <h1
              className={cn(
                /* 行高写在任意值内，理由同 section-heading.tsx */
'h1 text-balance font-bold text-[2.25rem]/[1.3] sm:text-[3rem]/[1.22] lg:text-[3.4rem]/[1.16]',
                dark ? 'text-white' : 'text-neutral-900'
              )}
            >
              {title}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className={cn('lede max-w-2xl', dark && 'text-white/70')}>{description}</p>
          </Reveal>

          {children ? <Reveal delay={0.24}>{children}</Reveal> : null}
        </div>
      </div>
    </section>
  )
}
