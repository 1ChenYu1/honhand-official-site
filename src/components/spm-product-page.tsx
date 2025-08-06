"use client"

import { motion } from 'framer-motion'

export function SPMProductPage() {
  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero区域 */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full particle-bg opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              SPM产品 - 供应链管理平台
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              专业的供应链管理平台，通过数字化手段优化供应链各个环节，
              提高运营效率，降低运营成本。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 产品特性 */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">产品特性</h2>
            <p className="text-xl text-gray-300">全面的供应链管理解决方案</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '采购管理',
                description: '智能采购决策，供应商评估，合同管理',
                icon: '🛒',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: '库存控制',
                description: '实时库存监控，智能补货，库存优化',
                icon: '📦',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: '物流配送',
                description: '配送路线优化，运输跟踪，配送管理',
                icon: '🚚',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: '供应商管理',
                description: '供应商评估，绩效管理，关系维护',
                icon: '🤝',
                color: 'from-orange-500 to-red-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect-dark rounded-2xl p-8 text-center hover:neon-glow transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 技术架构 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gradient">技术架构</h2>
              <p className="text-gray-300 leading-relaxed">
                SPM产品采用微服务架构设计，支持高并发、高可用的业务需求。
                系统采用前后端分离技术栈，支持多种部署方式。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">前端技术</h3>
                  <p className="text-gray-300 text-sm">React + TypeScript + Ant Design</p>
                </div>
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">后端技术</h3>
                  <p className="text-gray-300 text-sm">Spring Boot + MyBatis + Redis</p>
                </div>
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">数据库</h3>
                  <p className="text-gray-300 text-sm">MySQL / PostgreSQL</p>
                </div>
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">消息队列</h3>
                  <p className="text-gray-300 text-sm">RabbitMQ / Kafka</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden glass-effect-dark">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl">🏗️</span>
                    </div>
                    <div className="text-white/60">
                      <p className="text-sm">技术架构图</p>
                      <p className="text-xs">SPM产品架构</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 应用场景 */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">应用场景</h2>
            <p className="text-xl text-gray-300">适用于各种规模的供应链管理需求</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '制造业',
                description: '原材料采购、生产计划、库存管理、成品配送',
                icon: '🏭'
              },
              {
                title: '零售业',
                description: '商品采购、库存控制、门店配送、供应商管理',
                icon: '🛍️'
              },
              {
                title: '物流业',
                description: '运输管理、路线优化、配送跟踪、成本控制',
                icon: '📦'
              }
            ].map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect-dark rounded-2xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{scenario.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{scenario.title}</h3>
                <p className="text-gray-300 leading-relaxed">{scenario.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 