'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'none'

/**
 * 仅纵向位移，**不做横向位移**。
 *
 * 原因：横向位移会让「视口外尚未触发的元素」持续停留在偏移状态
 * （Reveal 用的是 whileInView，未进入视口时 initial 一直生效）。
 * 窄屏容器内边距只有 20px，吸收不了 32px 的横向位移，
 * 会直接撑出横向滚动条；同时未滚到的内容看起来也是「左右没对齐」。
 *
 * 注意：也不能改成用 matchMedia 在 JS 里判断，因为该状态在首帧渲染时
 * 还不可用（需等 effect），而 framer-motion 在挂载时就锁定了 initial 值，
 * 结果是移动端仍然会带上横向偏移。CSS 媒体查询同样会与服务端渲染不一致。
 */
const offsets: Record<Direction, { y: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  none: { y: 0 },
}

export type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: Direction
  /** 视口触发边距，负值表示元素进入更多才开始动画 */
  margin?: string
}

/**
 * 统一的滚动入场动画。自动尊重 prefers-reduced-motion，
 * 并默认 `once`，避免来回滚动时反复触发造成视觉噪音。
 */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  margin = '-80px',
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
