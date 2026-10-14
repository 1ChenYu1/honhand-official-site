import { Cpu, Database, Monitor } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { products } from './products'
import type { ProductMetric } from '@/types'

export interface DetailCard {
  title: string
  description: string
}

export interface DetailBlock {
  eyebrow: string
  eyebrowIcon: LucideIcon
  eyebrowTone: string
  title: string
  paragraphs: string[]
  /** 左侧能力/模块标签 */
  chips?: string[]
  /** 右侧说明卡片 */
  cards?: DetailCard[]
  illustration: {
    icon: LucideIcon
    title: string
    subtitle: string
    wash: string
    iconTone: string
    /** 视觉面板相对于文案的位置 */
    placement: 'left' | 'right'
  }
}

export interface ProductDetail {
  id: string
  name: string
  icon: LucideIcon
  eyebrow: string
  heroTitle: string
  heroDescription: string
  metrics: ProductMetric[]
  blocks: DetailBlock[]
  gallery?: { src: string; alt: string; caption: string }[]
  ctaNote: string
}

const hrModules = [
  '组织架构管理',
  '员工信息管理',
  '招聘管理',
  '培训管理',
  '绩效考核',
  '薪酬管理',
]

export const productDetails: Record<string, ProductDetail> = {
  hr: {
    id: 'hr',
    name: 'HR产品',
    icon: Cpu,
    eyebrow: '人力资源管理系统',
    heroTitle: '让人事管理从表格变成流程',
    heroDescription:
      '提供全面的人力资源管理解决方案，涵盖从招聘到离职的全生命周期管理，助力企业实现人力资源的数字化和智能化管理。',
    metrics: products[0].metrics,
    ctaNote: '我们提供 HR 系统的选型、部署、培训与年度运维支持。',
    blocks: [
      {
        eyebrow: '业务框架',
        eyebrowIcon: Cpu,
        eyebrowTone: 'bg-primary-50 text-primary-700 ring-primary-100',
        title: '模块化业务架构',
        paragraphs: [
          'HR产品采用模块化设计，提供完整的人力资源管理业务框架。系统涵盖组织架构管理、员工信息管理、招聘管理、培训管理、绩效考核、薪酬管理、考勤管理等核心功能模块。',
        ],
        chips: hrModules,
        illustration: {
          icon: Cpu,
          title: '模块化设计',
          subtitle: '灵活配置 · 易于扩展',
          wash: 'from-primary-100 to-blue-100',
          iconTone: 'text-primary-600',
          placement: 'right',
        },
      },
      {
        eyebrow: '平台框架',
        eyebrowIcon: Database,
        eyebrowTone: 'bg-corporate-teal-50 text-corporate-teal-700 ring-corporate-teal-100',
        title: '先进技术架构',
        paragraphs: [
          'HR产品基于先进的微服务架构设计，采用前后端分离技术栈。前端使用现代化的 React 框架，后端采用 Spring Boot 微服务架构，数据库支持 MySQL、PostgreSQL 等多种选择。',
        ],
        cards: [
          { title: '前端技术', description: 'React + TypeScript + Ant Design' },
          { title: '后端技术', description: 'Spring Boot + MyBatis + Redis' },
          { title: '数据库', description: 'MySQL / PostgreSQL' },
          { title: '部署方式', description: 'Docker + Kubernetes' },
        ],
        illustration: {
          icon: Database,
          title: '微服务架构',
          subtitle: '前后端分离 · 高可用',
          wash: 'from-corporate-teal-100 to-emerald-100',
          iconTone: 'text-corporate-teal-600',
          placement: 'left',
        },
      },
      {
        eyebrow: '公式化定义',
        eyebrowIcon: Database,
        eyebrowTone: 'bg-accent-50 text-accent-700 ring-accent-100',
        title: '标准化数据模型',
        paragraphs: [
          'HR产品采用标准化的数据模型和业务规则，通过公式化定义实现灵活的配置和扩展。系统支持自定义字段、工作流、报表等功能。',
        ],
        cards: [
          {
            title: '数据模型',
            description:
              '采用标准化的 HR 数据模型，支持组织、岗位、员工、合同等核心实体。',
          },
          {
            title: '业务规则',
            description:
              '支持灵活的业务规则配置，包括审批流程、权限控制、数据验证等。',
          },
          {
            title: '报表系统',
            description:
              '提供丰富的报表模板和自定义报表功能，支持数据导出和图表展示。',
          },
        ],
        illustration: {
          icon: Database,
          title: '数据驱动',
          subtitle: '智能分析 · 精准决策',
          wash: 'from-accent-100 to-orange-100',
          iconTone: 'text-accent-600',
          placement: 'right',
        },
      },
    ],
  },

  spm: {
    id: 'spm',
    name: 'SPM产品',
    icon: Database,
    eyebrow: '供应链管理平台',
    heroTitle: '让每一次补货都有数据支撑',
    heroDescription:
      '打通采购、库存、物流与供应商协同，实现供应链全流程的数字化管理和优化，降低库存与缺料风险。',
    metrics: products[1].metrics,
    ctaNote: '支持从单模块上线到全链路打通的多种实施路径。',
    blocks: [
      {
        eyebrow: '业务框架',
        eyebrowIcon: Database,
        eyebrowTone: 'bg-corporate-teal-50 text-corporate-teal-700 ring-corporate-teal-100',
        title: '端到端供应链管理',
        paragraphs: [
          'SPM产品覆盖从供应商准入、采购寻源、订单协同、到货入库、库存消耗的完整链路，帮助企业看清每一件物料的位置与成本构成。',
        ],
        chips: ['供应商准入', '采购寻源', '订单协同', '到货入库', '库存消耗', '库存盘点'],
        illustration: {
          icon: Database,
          title: '全链路可视',
          subtitle: '从寻源到入库',
          wash: 'from-corporate-teal-100 to-emerald-100',
          iconTone: 'text-corporate-teal-600',
          placement: 'right',
        },
      },
      {
        eyebrow: '平台框架',
        eyebrowIcon: Cpu,
        eyebrowTone: 'bg-primary-50 text-primary-700 ring-primary-100',
        title: '实时数据同步',
        paragraphs: [
          '平台与 ERP、WMS、MES 及主流 ERP 财务模块双向同步，库存与在途状态实时回写，避免各系统之间出现数据断层。',
        ],
        cards: [
          { title: '系统集成', description: 'ERP / WMS / MES 双向同步' },
          { title: '数据同步', description: 'Kafka + 定时任务双通道' },
          { title: '规则引擎', description: '安全库存与补货策略配置' },
          { title: '权限模型', description: '组织级 + 角色级细粒度控制' },
        ],
        illustration: {
          icon: Cpu,
          title: '实时同步',
          subtitle: '多系统 · 无断层',
          wash: 'from-primary-100 to-blue-100',
          iconTone: 'text-primary-600',
          placement: 'left',
        },
      },
      {
        eyebrow: '公式化定义',
        eyebrowIcon: Monitor,
        eyebrowTone: 'bg-accent-50 text-accent-700 ring-accent-100',
        title: '指标体系与预警',
        paragraphs: [
          '平台内置齐套率、周转天数、缺料停线时长等关键指标，并支持按阈值自动推送预警到责任人。',
        ],
        cards: [
          { title: '齐套分析', description: '按产线与工单测算物料齐套率。' },
          { title: '周转分析', description: '库龄、呆滞料与周转天数看板。' },
          { title: '成本归集', description: '按品类、供应商归集采购与物流成本。' },
        ],
        illustration: {
          icon: Monitor,
          title: '指标看板',
          subtitle: '异常自动预警',
          wash: 'from-accent-100 to-orange-100',
          iconTone: 'text-accent-600',
          placement: 'right',
        },
      },
    ],
  },

  hmi: {
    id: 'hmi',
    name: 'HMI产品',
    icon: Monitor,
    eyebrow: '人机交互界面系统',
    heroTitle: '让操作工看懂这台设备',
    heroDescription:
      '面向工业现场的可视化组态与监控系统，把操作、诊断与追溯放在同一个界面里完成。',
    metrics: products[2].metrics,
    ctaNote: '支持现场试点，确认画面风格与操作习惯后再全量推广。',
    gallery: [
      {
        src: '/images/hmi-interface-config.png',
        alt: 'HMI 画面组态配置界面',
        caption: '画面组态',
      },
      {
        src: '/images/hmi-data-collection.png',
        alt: 'HMI 多协议数据采集配置界面',
        caption: '数据采集',
      },
      {
        src: '/images/hmi-trend-chart.png',
        alt: 'HMI 历史趋势曲线界面',
        caption: '趋势分析',
      },
      {
        src: '/images/hmi-flow-chart.png',
        alt: 'HMI 工艺流程图监控界面',
        caption: '流程监控',
      },
      {
        src: '/images/hmi-bar-chart.png',
        alt: 'HMI 数据统计柱状图界面',
        caption: '统计分析',
      },
    ],
    blocks: [
      {
        eyebrow: '组态能力',
        eyebrowIcon: Monitor,
        eyebrowTone: 'bg-accent-50 text-accent-700 ring-accent-100',
        title: '所见即所得的组态',
        paragraphs: [
          'HMI产品提供可视化拖拽组态，所见即所得。工程师无需编写代码即可完成画面布局，控件库覆盖仪表、趋势、报警等工业常用元素。',
        ],
        chips: ['界面组态', '控件库', '画面模板', '多语言切换', '权限分屏', '移动端适配'],
        illustration: {
          icon: Monitor,
          title: '可视化组态',
          subtitle: '拖拽即完成画面',
          wash: 'from-accent-100 to-orange-100',
          iconTone: 'text-accent-600',
          placement: 'right',
        },
      },
      {
        eyebrow: '数据采集',
        eyebrowIcon: Database,
        eyebrowTone: 'bg-primary-50 text-primary-700 ring-primary-100',
        title: '多协议稳定接入',
        paragraphs: [
          '系统内置主流 PLC 与仪表协议驱动，支持 Modbus、OPC UA、Siemens S7 等多种协议，并提供边缘缓存以应对网络波动。',
        ],
        cards: [
          { title: '协议支持', description: 'Modbus / OPC UA / S7 / BACnet' },
          { title: '采集性能', description: '单节点 10 万点秒级刷新' },
          { title: '边缘缓存', description: '断网续传，数据不丢点' },
          { title: '时钟同步', description: '全厂统一 NTP 对时' },
        ],
        illustration: {
          icon: Database,
          title: '稳定采集',
          subtitle: '断网也不丢数据',
          wash: 'from-primary-100 to-blue-100',
          iconTone: 'text-primary-600',
          placement: 'left',
        },
      },
      {
        eyebrow: '监控与追溯',
        eyebrowIcon: Monitor,
        eyebrowTone: 'bg-corporate-teal-50 text-corporate-teal-700 ring-corporate-teal-100',
        title: '历史趋势与报警管理',
        paragraphs: [
          '所有测点数据按周期归档，支持历史趋势回放与报警追溯，操作记录可完整回溯到人与时间。',
        ],
        cards: [
          { title: '趋势回放', description: '按时间段回放历史曲线与工况。' },
          { title: '报警管理', description: '分级报警、抑制与确认闭环。' },
          { title: '操作追溯', description: '关键操作留痕，支持导出审计。' },
        ],
        illustration: {
          icon: Monitor,
          title: '历史追溯',
          subtitle: '问题可回放可定位',
          wash: 'from-corporate-teal-100 to-emerald-100',
          iconTone: 'text-corporate-teal-600',
          placement: 'right',
        },
      },
    ],
  },
}

export function getProductDetail(slug: string): ProductDetail | undefined {
  return productDetails[slug]
}
