"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export function HMIProductPage() {
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
              HMI产品 - 人机交互界面系统
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              先进的人机交互界面系统，为工业控制提供直观、高效的操作界面。
              支持多种数据源接入，实时数据展示，历史趋势分析，报警管理等功能。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 界面组态 */}
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
              <h2 className="text-3xl font-bold text-gradient">界面组态</h2>
              <p className="text-gray-300 leading-relaxed">
                HMI产品提供强大的界面组态功能，支持拖拽式设计，丰富的控件库，
                灵活的布局配置。用户可以快速构建专业的工业控制界面。
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>拖拽式设计</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>丰富控件库</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>灵活布局配置</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>模板库</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden glass-effect-dark">
                {/* 界面组态 */}
                <div className="absolute inset-0">
                  <Image 
                    src="/images/hmi-interface-config.png"
                    alt="界面组态"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 数据采集 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden glass-effect-dark">
                {/* 数据采集 */}
                <div className="absolute inset-0">
                  <Image 
                    src="/images/hmi-data-collection.png"
                    alt="数据采集"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-gradient">数据采集</h2>
              <p className="text-gray-300 leading-relaxed">
                支持多种数据源接入，包括OPC UA、Modbus、TCP/IP等工业协议。
                实时采集设备数据，支持数据缓存、压缩、加密等功能。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">OPC UA</h3>
                  <p className="text-gray-300 text-sm">标准工业通信协议</p>
                </div>
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">Modbus</h3>
                  <p className="text-gray-300 text-sm">传统工业协议支持</p>
                </div>
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">TCP/IP</h3>
                  <p className="text-gray-300 text-sm">网络通信协议</p>
                </div>
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">数据缓存</h3>
                  <p className="text-gray-300 text-sm">本地数据存储</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 流程图 */}
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
              <h2 className="text-3xl font-bold text-gradient">流程图</h2>
              <p className="text-gray-300 leading-relaxed">
                提供直观的流程图展示功能，支持多种图表类型，包括工艺流程图、
                设备连接图、系统架构图等。支持实时数据绑定和动态更新。
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>工艺流程图</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>设备连接图</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>系统架构图</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>实时数据绑定</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden glass-effect-dark">
                {/* 流程图 */}
                <div className="absolute inset-0">
                  <Image 
                    src="/images/hmi-flow-chart.png"
                    alt="流程图"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 趋势图 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden glass-effect-dark">
                {/* 趋势图 */}
                <div className="absolute inset-0">
                  <Image 
                    src="/images/hmi-trend-chart.png"
                    alt="趋势图"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-gradient">趋势图</h2>
              <p className="text-gray-300 leading-relaxed">
                提供强大的趋势图分析功能，支持多种图表类型，包括折线图、柱状图、
                饼图等。支持历史数据查询、数据对比分析、趋势预测等功能。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">折线图</h3>
                  <p className="text-gray-300 text-sm">时间序列数据展示</p>
                </div>
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">柱状图</h3>
                  <p className="text-gray-300 text-sm">分类数据对比</p>
                </div>
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">饼图</h3>
                  <p className="text-gray-300 text-sm">占比数据展示</p>
                </div>
                <div className="glass-effect-dark rounded-lg p-4">
                  <h3 className="text-primary-400 font-semibold mb-2">趋势预测</h3>
                  <p className="text-gray-300 text-sm">智能数据分析</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 棒图 */}
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
              <h2 className="text-3xl font-bold text-gradient">棒图</h2>
              <p className="text-gray-300 leading-relaxed">
                提供专业的棒图展示功能，支持多种棒图类型，包括垂直棒图、水平棒图、
                堆叠棒图等。支持实时数据更新和动态交互。
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>垂直棒图</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>水平棒图</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>堆叠棒图</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>动态交互</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden glass-effect-dark">
                {/* 棒图 */}
                <div className="absolute inset-0">
                  <Image 
                    src="/images/hmi-bar-chart.png"
                    alt="棒图"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 其他功能展示 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gradient">更多功能</h2>
            <p className="text-xl text-gray-300">HMI产品的其他核心功能展示</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 图片10-13预留位置 */}
            {[
              { id: 10, title: '报警管理', icon: '🚨', color: 'from-red-500/20 to-pink-500/20' },
              { id: 11, title: '用户管理', icon: '👥', color: 'from-blue-500/20 to-cyan-500/20' },
              { id: 12, title: '系统配置', icon: '⚙️', color: 'from-green-500/20 to-emerald-500/20' },
              { id: 13, title: '数据导出', icon: '📤', color: 'from-purple-500/20 to-pink-500/20' },
            ].map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: item.id * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`relative h-64 rounded-2xl overflow-hidden glass-effect-dark bg-gradient-to-br ${item.color}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div className="text-white/60">
                        <p className="text-sm">图片{item.id}预留位置</p>
                        <p className="text-xs">{item.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 