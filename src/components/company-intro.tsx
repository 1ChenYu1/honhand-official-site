"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export function CompanyIntro() {
  return (
    <section className="py-20 bg-dark-800/30 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full particle-bg opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 文字内容 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gradient"
              >
                关于上海双洪信息技术
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                上海双洪信息技术有限公司成立于2020年，是一家专注于工控领域的智能化解决方案提供商。
                公司致力于工业自动化和数字化转型，为客户提供全方位的技术支持和产品服务。
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                我们拥有专业的研发团队和丰富的行业经验，通过"四早机制"（风险早识别、问题早发现、
                隐患早预警、故障早处理）为客户提供可靠的产品和优质的服务。
              </motion.p>
            </div>

            {/* 公司信息 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="glass-effect-dark rounded-lg p-6">
                <h3 className="text-primary-400 font-semibold mb-2">成立时间</h3>
                <p className="text-white">2020年</p>
              </div>
              <div className="glass-effect-dark rounded-lg p-6">
                <h3 className="text-primary-400 font-semibold mb-2">注册资金</h3>
                <p className="text-white">1000万元</p>
              </div>
              <div className="glass-effect-dark rounded-lg p-6">
                <h3 className="text-primary-400 font-semibold mb-2">公司地址</h3>
                <p className="text-white">上海市</p>
              </div>
              <div className="glass-effect-dark rounded-lg p-6">
                <h3 className="text-primary-400 font-semibold mb-2">服务客户</h3>
                <p className="text-white">500+企业</p>
              </div>
            </motion.div>
          </motion.div>

          {/* 图片区域 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden glass-effect-dark">
              {/* 图片1预留位置 - 公司信息简介 */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary-500/30 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div className="text-white/60">
                    <p className="text-sm">图片1预留位置</p>
                    <p className="text-xs">公司信息简介</p>
                  </div>
                </div>
              </div>
              
              {/* 实际图片（当有图片时显示） */}
              {/* 
              <Image
                src="/images/company-intro.jpg"
                alt="上海双洪信息技术有限公司"
                fill
                className="object-cover"
                priority
              />
              */}
            </div>
            
            {/* 装饰性边框 */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 