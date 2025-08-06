"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Cpu, Database, Monitor } from 'lucide-react'

const products = [
  {
    id: 'hr',
    name: 'HR产品',
    description: '人力资源管理系统，提供全面的员工管理、绩效考核、薪酬管理等解决方案',
    icon: Cpu,
    href: '/products/hr',
    features: ['员工管理', '绩效考核', '薪酬管理', '培训发展'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'spm',
    name: 'SPM产品',
    description: '供应链管理平台，实现供应链全流程的数字化管理和优化',
    icon: Database,
    href: '/products/spm',
    features: ['采购管理', '库存控制', '物流配送', '供应商管理'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'hmi',
    name: 'HMI产品',
    description: '人机交互界面系统，提供直观、高效的工业控制界面解决方案',
    icon: Monitor,
    href: '/products/hmi',
    features: ['界面组态', '数据采集', '实时监控', '趋势分析'],
    color: 'from-purple-500 to-pink-500'
  }
]

export function ProductMatrix() {
  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full particle-bg opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            核心产品矩阵
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            为工控领域提供全方位的智能化解决方案，助力企业实现数字化转型
          </p>
        </motion.div>

        {/* 产品卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flip-card h-96">
                <div className="flip-card-inner">
                  {/* 正面 */}
                  <div className="flip-card-front glass-effect-dark rounded-2xl p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center`}>
                        <product.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                      <p className="text-gray-300 leading-relaxed">{product.description}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-primary-400 font-semibold">了解更多</span>
                        <ArrowRight className="w-5 h-5 text-primary-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* 背面 */}
                  <div className="flip-card-back glass-effect-dark rounded-2xl p-8 flex flex-col justify-center">
                    <div className="text-center space-y-6">
                      <div className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mx-auto`}>
                        <product.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                      
                      <div className="space-y-3">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center justify-center space-x-2">
                            <div className="w-2 h-2 bg-primary-400 rounded-full" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link href={product.href}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="holographic-button"
                        >
                          查看详情
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="holographic-button"
            >
              查看所有产品
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 