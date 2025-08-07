"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: '邮箱地址',
    value: 'chenhongbin@honhand.com',
    description: '发送邮件给我们'
  },
  {
    icon: Phone,
    title: '联系电话',
    value: '17321106690',
    description: '24小时服务热线'
  },
  {
    icon: MapPin,
    title: '公司地址',
    value: '上海市浦东新区南汇新城镇环湖西一路99号主楼239室',
    description: '我们的办公地点'
  },
  {
    icon: Clock,
    title: '工作时间',
    value: '周一至周五 9:00-18:00',
    description: '标准工作时间'
  }
]

export function ContactPage() {
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
              联系我们
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              我们期待与您建立联系，为您提供专业的工控领域智能化解决方案。
              无论您有任何问题或需求，我们都将竭诚为您服务。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 联系信息 */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">联系方式</h2>
            <p className="text-xl text-gray-300">多种方式联系我们，我们随时为您服务</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect-dark rounded-2xl p-8 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                <p className="text-primary-400 font-semibold mb-2">{info.value}</p>
                <p className="text-gray-300 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系表单 */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">发送消息</h2>
            <p className="text-xl text-gray-300">填写下面的表单，我们会尽快回复您</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-effect-dark rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    邮箱 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="请输入您的邮箱"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  电话
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="请输入您的电话"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white font-semibold mb-2">
                  公司名称
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="请输入您的公司名称"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  主题 *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="请输入消息主题"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  消息内容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="请详细描述您的需求或问题"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full holographic-button"
              >
                发送消息
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 地图区域 */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient mb-4">我们的位置</h2>
            <p className="text-xl text-gray-300">欢迎您到访我们的办公地点</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden glass-effect-dark">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary-500/30 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <div className="text-white/60">
                    <p className="text-sm">地图位置</p>
                    <p className="text-xs">上海市</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 