import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '上海双洪信息技术有限公司 - 工控领域智能化解决方案',
  description: '专注于工控领域的智能化解决方案，提供HR、SPM、HMI等核心产品，致力于工业自动化和数字化转型。',
  keywords: '工控,智能化,HR,SPM,HMI,工业自动化,数字化转型,上海双洪',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.className} bg-dark-900 text-white min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            {/* 粒子背景 */}
            <div className="fixed inset-0 particle-bg opacity-30 -z-10" />
            
            {/* 导航栏 */}
            <Navbar />
            
            {/* 主内容 */}
            <main className="flex-1">
              {children}
            </main>
            
            {/* 页脚 */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 