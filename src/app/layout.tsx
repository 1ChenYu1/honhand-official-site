import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { site } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(`https://www.${site.domain}`),
  title: {
    default: `${site.name} - ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  keywords: [
    '工控',
    '智能化解决方案',
    'HR系统',
    'SPM供应链',
    'HMI人机界面',
    '工业自动化',
    '数字化转型',
    '上海双洪',
    '双洪信息',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: `https://www.${site.domain}`,
    siteName: site.name,
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  formatDetection: { telephone: true, email: true, address: true },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  alternateName: '双洪信息',
  url: `https://www.${site.domain}`,
  description: site.description,
  foundingDate: '2015-08',
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CN',
    addressRegion: '上海市',
    addressLocality: '浦东新区',
    streetAddress: '南汇新城镇环湖西一路99号主楼239室',
  },
  openingHours: 'Mo-Fr 09:00-18:00',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-white font-sans">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-full focus:bg-primary-600 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-corporate-lg"
        >
          跳转到主要内容
        </a>

        <Navbar />

        <main id="main" className="flex-1 pt-[var(--nav-height)]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
