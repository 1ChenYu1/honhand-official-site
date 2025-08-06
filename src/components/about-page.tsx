"use client"

import { motion } from 'framer-motion'
import { Users, Target, Award, Globe } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: '服务客户' },
  { icon: Target, value: '50+', label: '行业解决方案' },
  { icon: Award, value: '99.9%', label: '系统稳定性' },
  { icon: Globe, value: '24/7', label: '技术支持' },
]

const values = [
  {
    title: '创新驱动',
    description: '持续创新，引领行业发展，为客户提供最前沿的技术解决方案',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: '质量至上',
    description: '严格的质量管理体系，确保每个产品都达到最高标准',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: '客户为本',
    description: '以客户需求为中心，提供个性化的解决方案和优质服务',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: '合作共赢',
    description: '与合作伙伴建立长期稳定的合作关系，实现共同发展',
    color: 'from-orange-500 to-red-500'
  }
]

export function AboutPage() {
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
              关于我们
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              上海双洪信息技术有限公司是一家专注于工控领域的智能化解决方案提供商，
              致力于工业自动化和数字化转型，为客户提供可靠的产品和优质的服务。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 公司简介 */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gradient">公司简介</h2>
              <p className="text-gray-300 leading-relaxed">
                上海双洪信息技术有限公司成立于2020年，是一家专注于工控领域的智能化解决方案提供商。
                公司致力于工业自动化和数字化转型，为客户提供全方位的技术支持和产品服务。
              </p>
              <p className="text-gray-300 leading-relaxed">
                我们拥有专业的研发团队和丰富的行业经验，通过"四早机制"（风险早识别、问题早发现、
                隐患早预警、故障早处理）为客户提供可靠的产品和优质的服务。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">成立时间</h3>
                  <p className="text-white">2020年</p>
                </div>
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">注册资金</h3>
                  <p className="text-white">1000万元</p>
                </div>
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">公司地址</h3>
                  <p className="text-white">上海市</p>
                </div>
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">服务客户</h3>
                  <p className="text-white">500+企业</p>
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
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary-500/30 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <div className="text-white/60">
                      <p className="text-sm">公司形象展示</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">我们的成就</h2>
            <p className="text-xl text-gray-300">用数据说话，展示我们的实力和成果</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="glass-effect-dark rounded-2xl p-8 hover:neon-glow transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">核心价值观</h2>
            <p className="text-xl text-gray-300">我们的价值观指导着我们的每一个决策和行动</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect-dark rounded-2xl p-8 hover:neon-glow transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">专业团队</h2>
            <p className="text-xl text-gray-300">我们拥有一支经验丰富、技术精湛的专业团队</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-effect-dark rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">研发团队</h3>
              <p className="text-gray-300">拥有丰富的工控领域开发经验，专注于技术创新和产品研发</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect-dark rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">服务团队</h3>
              <p className="text-gray-300">专业的客户服务团队，为客户提供全方位的技术支持和解决方案</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-effect-dark rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">管理团队</h3>
              <p className="text-gray-300">经验丰富的管理团队，确保公司战略目标的实现和可持续发展</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 