import type { Metadata } from 'next'
import { AboutPage } from '@/components/about-page'

export const metadata: Metadata = {
  title: '关于我们',
  description:
    '上海双洪信息技术有限公司成立于2015年8月，专注于工控领域的智能化解决方案，提供 HR、SPM、HMI 等核心产品。',
  alternates: { canonical: '/about' },
  openGraph: {
    title: '关于我们 | 上海双洪信息技术有限公司',
    description: '十一年专注工控现场，只做能落地的智能化。',
    url: '/about',
  },
}

export default function AboutPageRoute() {
  return <AboutPage />
}
