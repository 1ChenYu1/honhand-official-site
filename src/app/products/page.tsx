import type { Metadata } from 'next'
import { ProductOverview } from '@/components/product-overview'

export const metadata: Metadata = {
  title: '产品中心',
  description:
    'HR 人力资源管理系统、SPM 供应链管理平台、HMI 人机交互界面系统，覆盖人、货、机的工控现场数字化。',
  alternates: { canonical: '/products' },
  openGraph: {
    title: '产品中心 | 上海双洪信息技术有限公司',
    description: '为工控现场而生的三款产品：HR、SPM、HMI。',
    url: '/products',
  },
}

export default function ProductsPage() {
  return <ProductOverview />
}
