import { HeroSection } from '@/components/hero-section'
import { ProductMatrix } from '@/components/product-matrix'
import { CompanyIntro } from '@/components/company-intro'
import { FeaturesSection } from '@/components/features-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero区域 */}
      <HeroSection />
      
      {/* 公司简介 */}
      <CompanyIntro />
      
      {/* 产品矩阵 */}
      <ProductMatrix />
      
      {/* 特色功能 */}
      <FeaturesSection />
    </div>
  )
} 