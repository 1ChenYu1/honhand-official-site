'use client'

import Link from 'next/link'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

const MotionLink = motion(Link)

type Variant = 'primary' | 'secondary' | 'invert' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary: 'btn-corporate',
  secondary: 'btn-corporate-secondary',
  invert: 'btn-invert',
  ghost: 'text-primary-700 hover:text-primary-800',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-[13px]',
  md: '',
  lg: 'px-8 py-4 text-base',
}

export type LinkButtonProps = {
  href: string
  children: React.ReactNode
  variant?: Variant
  size?: Size
  className?: string
  external?: boolean
} & Omit<HTMLMotionProps<'a'>, 'children' | 'className' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'style'>

/**
 * 语义正确的按钮式链接：motion 直接作用于 <a>，
 * 避免 `<Link>` 嵌套 `<button>` 的非法 DOM 结构。
 */
export function LinkButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  external,
  ...rest
}: LinkButtonProps) {
  const isExternal = external ?? /^https?:\/\//.test(href)

  const classes = cn(
    variants[variant],
    sizes[size],
    variant === 'ghost' && 'gap-1.5 rounded-lg px-3 py-2',
    className
  )

  if (isExternal) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={classes}
        {...rest}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <MotionLink
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={classes}
      {...rest}
    >
      {children}
    </MotionLink>
  )
}
