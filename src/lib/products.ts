import { Cpu, Database, Monitor } from 'lucide-react'
import type { Product } from '@/types'

export const products: Product[] = [
  {
    id: 'hr',
    name: 'HR产品',
    tagline: '人力资源管理系统',
    description:
      '覆盖员工全生命周期的管理平台，把组织、绩效、薪酬与培训沉淀在同一套数据底座上。',
    longDescription:
      'HR产品是一套完整的人力资源管理解决方案，涵盖从招聘到离职的全生命周期管理。系统采用模块化设计，支持灵活配置和扩展，能够满足不同规模企业的需求。',
    href: '/products/hr',
    icon: Cpu,
    features: ['员工管理', '绩效考核', '薪酬管理', '培训发展'],
    highlights: ['组织架构与人员档案统一管理', 'OKR / KPI 绩效全流程在线化', '薪酬核算与个税申报一体化', '培训课程与人才梯队建设'],
    metrics: [
      { value: '1 套', label: '系统覆盖全生命周期' },
      { value: '< 2h', label: '薪酬核算耗时' },
      { value: '100%', label: '流程在线留痕' },
    ],
    gradient: 'from-primary-500 to-primary-600',
    wash: 'bg-primary-50/60',
    accent: 'text-primary-600',
    ring: 'ring-primary-100',
  },
  {
    id: 'spm',
    name: 'SPM产品',
    tagline: '供应链管理平台',
    description:
      '打通采购、库存、物流与供应商协同，用实时数据驱动每一次补货与调度决策。',
    longDescription:
      'SPM产品是专业的供应链管理平台，通过数字化手段优化供应链各个环节，提高运营效率，降低运营成本。系统支持多级供应商管理，实时库存监控，智能采购决策等功能。',
    href: '/products/spm',
    icon: Database,
    features: ['采购管理', '库存控制', '物流配送', '供应商管理'],
    highlights: ['多级供应商准入与绩效评价', '实时库存监控与安全库存预警', '采购寻源、询比价与订单协同', '在途物流跟踪与到货齐套预警'],
    metrics: [
      { value: '30%+', label: '库存周转提升' },
      { value: '多级', label: '供应商层级管理' },
      { value: '实时', label: '库存与在途可视' },
    ],
    gradient: 'from-corporate-teal-500 to-corporate-teal-600',
    wash: 'bg-corporate-teal-50/60',
    accent: 'text-corporate-teal-700',
    ring: 'ring-corporate-teal-100',
  },
  {
    id: 'hmi',
    name: 'HMI产品',
    tagline: '人机交互界面系统',
    description:
      '面向工业现场的组态与监控平台，让操作、诊断与追溯在同一个界面里完成。',
    longDescription:
      'HMI产品是先进的人机交互界面系统，为工业控制提供直观、高效的操作界面。系统支持多种数据源接入，实时数据展示，历史趋势分析，报警管理等功能。',
    href: '/products/hmi',
    icon: Monitor,
    features: ['界面组态', '数据采集', '实时监控', '趋势分析'],
    highlights: ['可视化组态，所见即所得', '多协议数据采集与边缘缓存', '实时监控画面秒级刷新', '历史趋势回放与报警追溯'],
    metrics: [
      { value: '秒级', label: '画面刷新延迟' },
      { value: '多协议', label: 'PLC / 仪表接入' },
      { value: '7×24', label: '连续运行监控' },
    ],
    gradient: 'from-accent-500 to-accent-600',
    wash: 'bg-accent-50/60',
    accent: 'text-accent-700',
    ring: 'ring-accent-100',
  },
]
