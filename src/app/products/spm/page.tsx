import type { Metadata } from 'next'
import { SPMProductPage } from '@/components/spm-product-page'

export const metadata: Metadata = {
  title: 'SPM产品',
  description:
    'SPM 供应链管理平台，打通采购、库存、物流与供应商协同，实时库存监控与安全库存预警。',
  alternates: { canonical: '/products/spm' },
  openGraph: {
    title: 'SPM产品 | 上海双洪信息技术有限公司',
    description: '让每一次补货都有数据支撑。',
    url: '/products/spm',
  },
}

export default function SPMPage() {
  return <SPMProductPage />
}
