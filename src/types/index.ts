import type { LucideIcon } from 'lucide-react'

export interface ProductMetric {
  value: string
  label: string
}

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  longDescription: string
  href: string
  icon: LucideIcon
  features: string[]
  highlights: string[]
  metrics: ProductMetric[]
  gradient: string
  wash: string
  accent: string
  ring: string
}

export interface NavigationItem {
  name: string
  href: string
  submenu?: NavigationItem[]
}

export interface ContactChannel {
  icon: LucideIcon
  title: string
  value: string
  href?: string
  description: string
  ring: string
  accent: string
  wash: string
  iconBg: string
}

export interface Stat {
  icon: LucideIcon
  value: string
  label: string
}
