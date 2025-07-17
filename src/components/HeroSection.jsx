import React, { Suspense } from 'react'
import useMediaQuery from '../utils/useMediaQuery'

const ParticleScene = React.lazy(() => import('./ParticleScene'))

export default function HeroSection() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <section className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between pt-24 pb-8 px-6">
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-main-title leading-tight">
          重新定义<span className="neon-text text-neon-blue drop-shadow-[0_0_8px_#00e4ff]">工业智能化</span>
        </h1>
        <p className="text-xl text-main-text font-body">十年深耕HR人力系统与工控组态核心技术</p>
        <button className="mt-4 px-8 py-3 bg-neon-blue text-main-bg-from font-heading text-lg rounded-full shadow-[0_0_16px_#00e4ff] hover:bg-neon-pink hover:shadow-[0_0_24px_#ff4d94] transition-all">
          体验在线Demo →
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center w-full h-[400px] md:h-[500px]">
        {isMobile ? (
          <img src="/assets/banner-static.webp" alt="cyberpunk factory" className="w-full h-full object-cover rounded-xl" />
        ) : (
          <Suspense fallback={<div className="text-main-text">加载中...</div>}>
            <ParticleScene />
          </Suspense>
        )}
      </div>
    </section>
  )
} 