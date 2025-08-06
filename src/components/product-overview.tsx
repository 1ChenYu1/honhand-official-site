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
    color: 'from-blue-500 to-cyan-500',
    longDescription: 'HR产品是一套完整的人力资源管理解决方案，涵盖从招聘到离职的全生命周期管理。系统采用模块化设计，支持灵活配置和扩展，能够满足不同规模企业的需求。'
  },
  {
    id: 'spm',
    name: 'SPM产品',
    description: '供应链管理平台，实现供应链全流程的数字化管理和优化',
    icon: Database,
    href: '/products/spm',
    features: ['采购管理', '库存控制', '物流配送', '供应商管理'],
    color: 'from-green-500 to-emerald-500',
    longDescription: 'SPM产品是专业的供应链管理平台，通过数字化手段优化供应链各个环节，提高运营效率，降低运营成本。系统支持多级供应商管理，实时库存监控，智能采购决策等功能。'
  },
  {
    id: 'hmi',
    name: 'HMI产品',
    description: '人机交互界面系统，提供直观、高效的工业控制界面解决方案',
    icon: Monitor,
    href: '/products/hmi',
    features: ['界面组态', '数据采集', '实时监控', '趋势分析'],
    color: 'from-purple-500 to-pink-500',
    longDescription: 'HMI产品是先进的人机交互界面系统，为工业控制提供直观、高效的操作界面。系统支持多种数据源接入，实时数据展示，历史趋势分析，报警管理等功能。'
  }
]

export function ProductOverview() {
  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full particle-bg opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            产品中心
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            为工控领域提供全方位的智能化解决方案，助力企业实现数字化转型
          </p>
        </motion.div>

        {/* 产品列表 */}
        <div className="space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect-dark rounded-2xl p-8 hover:neon-glow transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* 产品图标和基本信息 */}
                <div className="space-y-4">
                  <div className={`w-20 h-20 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <product.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                  <p className="text-gray-300">{product.description}</p>
                </div>

                {/* 产品详细描述 */}
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-gray-300 leading-relaxed">{product.longDescription}</p>
                  
                  {/* 功能特性 */}
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 border border-white/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA按钮 */}
                  <Link href={product.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="holographic-button"
                    >
                      了解详情
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 