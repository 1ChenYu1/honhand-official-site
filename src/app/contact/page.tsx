import type { Metadata } from 'next'
import { ContactPage } from '@/components/contact-page'

export const metadata: Metadata = {
  title: '联系我们',
  description:
    '联系上海双洪信息技术有限公司。电话 17321106690，邮箱 chenhongbin@honhand.com，地址上海市浦东新区南汇新城镇环湖西一路99号主楼239室。',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: '联系我们 | 上海双洪信息技术有限公司',
    description: '把您的现场问题交给我们，工程师在一个工作日内响应。',
    url: '/contact',
  },
}

export default function ContactPageRoute() {
  return <ContactPage />
}
