import type { Metadata } from 'next'
import { HRProductPage } from '@/components/hr-product-page'

export const metadata: Metadata = {
  title: 'HR产品',
  description:
    'HR 人力资源管理系统，模块化业务架构 + 微服务平台，覆盖招聘、培训、绩效、薪酬全生命周期管理。',
  alternates: { canonical: '/products/hr' },
  openGraph: {
    title: 'HR产品 | 上海双洪信息技术有限公司',
    description: '让人事管理从表格变成流程。',
    url: '/products/hr',
  },
}

export default function HRPage() {
  return <HRProductPage />
}
