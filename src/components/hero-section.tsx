"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 动态粒子背景 */}
      <div className="absolute inset-0 particle-bg opacity-20" />
      
      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      
      {/* 装饰性元素 */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* 主标题 */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="text-gradient">工控领域</span>
              <br />
              <span className="text-white">智能化解决方案</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              上海双洪信息技术有限公司专注于工业自动化与数字化转型，
              提供HR、SPM、HMI等核心产品，助力企业实现智能化升级
            </motion.p>
          </div>

          {/* CTA按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="holographic-button group"
              >
                探索产品
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              <span>观看演示</span>
            </motion.button>
          </motion.div>

          {/* 统计数据 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-gray-300">服务客户</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-gray-300">行业解决方案</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">99.9%</div>
              <div className="text-gray-300">系统稳定性</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 滚动指示器 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 