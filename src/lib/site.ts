import type { NavigationItem } from '@/types'

export const site = {
  name: '上海双洪信息技术有限公司',
  shortName: '上海双洪',
  domain: 'honhand.com',
  tagline: '工控领域智能化解决方案专家',
  /**
   * 导航栏 Logo：完整锁定组合（图形 + 定制汉字「双洪」+ HONHAND）。
   *
   * 由 public/images/logo_2.jpg 裁去四周白边并 2 倍放大生成。
   * 刻意保留白底、不做透明化：这张图主色被近黑色汉字抢占，
   * 若做调色板量化会把橙色飘带压成灰色并破坏字形；
   * 而导航栏背景本身就是白色/半透明白色，白底可直接无缝贴合。
   *
   * 因为汉字已在图内，导航栏不再并排显示「上海双洪 + 标语」文字，避免重复。
   */
  logo: {
    src: '/images/logo-2.png',
    width: 438,
    height: 126,
  },
  /** 页脚 Logo：沿用纯图形版本（深色背景下反白显示） */
  logoFooter: {
    src: '/images/hohand-logo.png',
    width: 439,
    height: 240,
  },
  description:
    '专注于工控领域的智能化解决方案，提供 HR、SPM、HMI 等核心产品，助力企业实现工业自动化与数字化转型。',
  founded: '2015年8月',
  registeredCapital: '1100万元',
  address: '上海市浦东新区南汇新城镇环湖西一路99号主楼239室',
  addressShort: '上海市浦东新区',
  phone: '17321106690',
  email: 'chenhongbin@honhand.com',
  phoneHref: 'tel:+8617321106690',
  emailHref: 'mailto:chenhongbin@honhand.com',
  mapHref:
    'https://uri.amap.com/search?keyword=%E4%B8%8A%E6%B5%B7%E5%B8%82%E6%B5%A6%E4%B8%9C%E6%96%B0%E5%8C%BA%E5%8D%97%E6%B1%87%E6%96%B0%E5%9F%8E%E9%95%87%E7%8E%AF%E6%B9%96%E8%A5%BF%E4%B8%80%E8%B7%AF99%E5%8F%B7',
  hours: '周一至周五 9:00-18:00',
  hoursDetail: '紧急故障支持 7×24 小时',
} as const

export const navigation: NavigationItem[] = [
  { name: '首页', href: '/' },
  {
    name: '产品中心',
    href: '/products',
    submenu: [
      { name: 'HR产品', href: '/products/hr' },
      { name: 'SPM产品', href: '/products/spm' },
      { name: 'HMI产品', href: '/products/hmi' },
    ],
  },
  { name: '关于我们', href: '/about' },
  { name: '联系我们', href: '/contact' },
]

export const companyFacts = [
  { label: '成立时间', value: '2015年8月' },
  { label: '注册资金', value: '1100万元' },
  { label: '公司地址', value: '上海市浦东新区' },
  { label: '服务客户', value: '500+ 企业' },
] as const
