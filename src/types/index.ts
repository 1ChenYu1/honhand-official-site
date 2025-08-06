export interface Product {
  id: string
  name: string
  description: string
  href: string
  features: string[]
  color: string
  longDescription?: string
}

export interface NavigationItem {
  name: string
  href: string
  submenu?: NavigationItem[]
}

export interface ContactInfo {
  icon: React.ComponentType
  title: string
  value: string
  description: string
}

export interface Feature {
  icon: React.ComponentType
  title: string
  description: string
  color: string
}

export interface Stat {
  icon: React.ComponentType
  value: string
  label: string
} 