import type { Metadata } from 'next'
import { HMIProductPage } from '@/components/hmi-product-page'

export const metadata: Metadata = {
  title: 'HMI产品',
  description:
    'HMI 人机交互界面系统，可视化组态、多协议数据采集、实时监控与历史趋势追溯，附现场界面实拍。',
  alternates: { canonical: '/products/hmi' },
  openGraph: {
    title: 'HMI产品 | 上海双洪信息技术有限公司',
    description: '让操作工看懂这台设备。',
    url: '/products/hmi',
  },
}

export default function HMIPage() {
  return <HMIProductPage />
}
