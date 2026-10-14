'use client'

import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

type Align = 'center' | 'left'

export type SectionHeadingProps = {
  eyebrow?: { icon: React.ElementType; label: string }
  title: React.ReactNode
  description?: React.ReactNode
  align?: Align
  className?: string
  children?: React.ReactNode
}

/**
 * 全站统一的区块标题：eyebrow 标签 + 标题 + 描述。
 * 保证排版节奏（间距、字重、字距）跨页面一致。
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  children,
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        centered ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow ? (
        <Reveal delay={0.02}>
          <span className="eyebrow">
            <eyebrow.icon className="h-3.5 w-3.5" aria-hidden />
            {eyebrow.label}
          </span>
        </Reveal>
      ) : null}

      <Reveal delay={0.08}>
        <h2
          className={cn(
            /*
             * 行高必须写进 font-size 的任意值里（text-[size]/[line-height]），
             * 不能单独写 leading-*：Tailwind 会把响应式变体排在基础工具类之后，
             * 且任意 font-size 只产出 font-size、不带 line-height。
             * 于是 lg:text-[2.75rem] 会继承 sm:text-4xl 的 line-height:2.5rem，
             * 44px 的字配上 40px 行高 → 两行互相重叠，看着「挤在一起」。
             */
            'text-balance font-bold text-[1.875rem]/[1.35] sm:text-[2.25rem]/[1.3] lg:text-[2.75rem]/[1.22]',
            centered ? 'mx-auto max-w-3xl' : 'max-w-2xl'
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.14}>
          <div
            className={cn(
              'lede max-w-2xl',
              centered && 'mx-auto'
            )}
          >
            {description}
          </div>
        </Reveal>
      ) : null}

      {children ? <Reveal delay={0.2}>{children}</Reveal> : null}
    </div>
  )
}
