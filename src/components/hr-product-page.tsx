"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export function HRProductPage() {
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
              HR产品 - 人力资源管理系统
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              提供全面的人力资源管理解决方案，涵盖从招聘到离职的全生命周期管理，
              助力企业实现人力资源的数字化和智能化管理。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 业务框架 */}
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
              <h2 className="text-3xl font-bold text-gradient">业务框架</h2>
              <p className="text-gray-300 leading-relaxed">
                HR产品采用模块化设计，提供完整的人力资源管理业务框架。
                系统涵盖组织架构管理、员工信息管理、招聘管理、培训管理、
                绩效考核、薪酬管理、考勤管理等核心功能模块。
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>组织架构管理</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>员工信息管理</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>招聘管理</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>培训管理</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>绩效考核</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span>薪酬管理</span>
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
                {/* 图片2预留位置 - 业务框架 */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl">🏗️</span>
                    </div>
                    <div className="text-white/60">
                      <p className="text-sm">图片2预留位置</p>
                      <p className="text-xs">业务框架</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 平台框架 */}
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
                {/* 图片3预留位置 - 平台框架 */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <div className="text-white/60">
                      <p className="text-sm">图片3预留位置</p>
                      <p className="text-xs">平台框架</p>
                    </div>
                  </div>
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
              <h2 className="text-3xl font-bold text-gradient">平台框架</h2>
              <p className="text-gray-300 leading-relaxed">
                HR产品基于先进的微服务架构设计，采用前后端分离技术栈。
                前端使用现代化的React框架，后端采用Spring Boot微服务架构，
                数据库支持MySQL、PostgreSQL等多种选择。
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
                  <h3 className="text-primary-400 font-semibold mb-2">部署方式</h3>
                  <p className="text-gray-300 text-sm">Docker + Kubernetes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 公式化定义 */}
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
              <h2 className="text-3xl font-bold text-gradient">公式化定义</h2>
              <p className="text-gray-300 leading-relaxed">
                HR产品采用标准化的数据模型和业务规则，通过公式化定义实现
                灵活的配置和扩展。系统支持自定义字段、工作流、报表等功能。
              </p>
              <div className="space-y-4">
                <div className="glass-effect-dark rounded-lg p-6">
                  <h3 className="text-primary-400 font-semibold mb-2">数据模型</h3>
                  <p className="text-gray-300 text-sm">
                    采用标准化的HR数据模型，支持组织、岗位、员工、合同等核心实体
                  </p>
                </div>
                <div className="glass-effect-dark rounded-lg p-6">
                  <h3 className="text-primary-400 font-semibold mb-2">业务规则</h3>
                  <p className="text-gray-300 text-sm">
                    支持灵活的业务规则配置，包括审批流程、权限控制、数据验证等
                  </p>
                </div>
                <div className="glass-effect-dark rounded-lg p-6">
                  <h3 className="text-primary-400 font-semibold mb-2">报表系统</h3>
                  <p className="text-gray-300 text-sm">
                    提供丰富的报表模板和自定义报表功能，支持数据导出和图表展示
                  </p>
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
                {/* 图片4预留位置 - 公式化定义 */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div className="text-white/60">
                      <p className="text-sm">图片4预留位置</p>
                      <p className="text-xs">公式化定义</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 