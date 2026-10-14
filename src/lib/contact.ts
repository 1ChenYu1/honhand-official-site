import { Building2, Mail, MapPin, Phone } from 'lucide-react'

import { site } from './site'
import type { ContactChannel } from '@/types'

/** 联系渠道卡片数据（包含图标，因此仅在客户端组件中引用） */
export const contactChannels: ContactChannel[] = [
  {
    icon: Mail,
    title: '邮箱地址',
    value: site.email,
    href: site.emailHref,
    description: '发送邮件给我们',
    ring: 'ring-primary-100',
    accent: 'text-primary-600',
    wash: 'bg-primary-50/70',
    iconBg: 'from-primary-500 to-primary-600',
  },
  {
    icon: Phone,
    title: '联系电话',
    value: site.phone,
    href: site.phoneHref,
    description: '24小时服务热线',
    ring: 'ring-corporate-teal-100',
    accent: 'text-corporate-teal-700',
    wash: 'bg-corporate-teal-50/70',
    iconBg: 'from-corporate-teal-500 to-corporate-teal-600',
  },
  {
    icon: MapPin,
    title: '公司地址',
    value: site.addressShort,
    href: site.mapHref,
    description: '南汇新城 · 环湖西一路99号',
    ring: 'ring-accent-100',
    accent: 'text-accent-700',
    wash: 'bg-accent-50/70',
    iconBg: 'from-accent-500 to-accent-600',
  },
  {
    icon: Building2,
    title: '工作时间',
    value: site.hours,
    description: site.hoursDetail,
    ring: 'ring-neutral-200',
    accent: 'text-neutral-700',
    wash: 'bg-neutral-50',
    iconBg: 'from-neutral-700 to-neutral-900',
  },
]
