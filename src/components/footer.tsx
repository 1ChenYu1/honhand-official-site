"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="bg-dark-800/50 backdrop-blur-md border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">双洪</span>
              </div>
              <span className="text-xl font-bold text-gradient">上海双洪信息技术有限公司</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              专注于工控领域的智能化解决方案，致力于工业自动化和数字化转型，
              为客户提供HR、SPM、HMI等核心产品和服务。
            </p>
            <div className="flex space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-500/30"
              >
                <span className="text-primary-400">📧</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center border border-secondary-500/30"
              >
                <span className="text-secondary-400">📞</span>
              </motion.div>
            </div>
          </div>

          {/* 产品服务 */}
          <div>
            <h3 className="text-white font-semibold mb-4">产品服务</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/hr" className="text-gray-300 hover:text-primary-400 transition-colors">
                  HR产品
                </Link>
              </li>
              <li>
                <Link href="/products/spm" className="text-gray-300 hover:text-primary-400 transition-colors">
                  SPM产品
                </Link>
              </li>
              <li>
                <Link href="/products/hmi" className="text-gray-300 hover:text-primary-400 transition-colors">
                  HMI产品
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系我们 */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-gray-300">
              <li>地址：上海市</li>
              <li>电话：400-xxx-xxxx</li>
              <li>邮箱：info@shuanghong.com</li>
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 上海双洪信息技术有限公司. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
} 