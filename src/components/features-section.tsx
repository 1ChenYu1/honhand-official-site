"use client"

import { motion } from 'framer-motion'
import { Shield, Eye, AlertTriangle, Wrench } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: '风险早识别',
    description: '通过先进的算法和数据分析，提前识别潜在风险，防患于未然',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Eye,
    title: '问题早发现',
    description: '实时监控系统运行状态，快速发现并定位问题根源',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: AlertTriangle,
    title: '隐患早预警',
    description: '智能预警机制，在隐患出现前及时发出警告信号',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Wrench,
    title: '故障早处理',
    description: '快速响应机制，确保故障在最短时间内得到有效处理',
    color: 'from-green-500 to-emerald-500'
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-dark-800/30 relative overflow-hidden">
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
            四早机制 - 核心价值
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            通过"四早机制"为客户提供可靠的产品和优质的服务，确保系统稳定运行
          </p>
        </motion.div>

        {/* 特色功能网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-effect-dark rounded-2xl p-8 h-full hover:neon-glow transition-all duration-300">
                <div className="space-y-6">
                  {/* 图标 */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* 内容 */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* 装饰性元素 */}
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部说明 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect-dark rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              智能化解决方案的优势
            </h3>
            <p className="text-gray-300 leading-relaxed">
              通过"四早机制"的核心理念，我们为客户提供全方位的智能化解决方案。
              从风险识别到故障处理，每一个环节都经过精心设计和优化，
              确保系统的高可用性、高稳定性和高安全性。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 