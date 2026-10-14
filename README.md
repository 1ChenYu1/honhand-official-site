# 上海双洪信息技术有限公司官网

企业官网，采用 Next.js 14 App Router + TypeScript + Tailwind CSS 构建，视觉基调为「克制的科技质感」。

## 技术栈

| 用途 | 选型 |
| --- | --- |
| 框架 | Next.js 14（App Router） |
| 语言 | TypeScript（strict） |
| 样式 | Tailwind CSS 3（设计令牌集中在 `tailwind.config.js`） |
| 动画 | Framer Motion 10 |
| 图标 | Lucide React |
| 类名合并 | clsx + tailwind-merge |

## 快速开始

```bash
npm install
npm run dev      # http://localhost:3011
```

```bash
npm run build && npm start   # 生产构建与启动
npm run verify               # 图标检查 + ESLint + 生产构建，提交前跑这个
```

## 页面结构

| 路由 | 说明 |
| --- | --- |
| `/` | 首页：Hero → 公司简介 → 核心产品矩阵 → 四早机制 |
| `/products` | 产品中心：HR / SPM / HMI 概览对比 |
| `/products/hr` | HR 产品详情 |
| `/products/spm` | SPM 产品详情 |
| `/products/hmi` | HMI 产品详情（含现场界面实拍） |
| `/about` | 关于我们：简介、数据、价值观、团队 |
| `/contact` | 联系我们：联系方式、需求表单、位置 |
| `/api/contact` | 表单提交接口（POST） |
| `error.tsx` / `not-found.tsx` | 运行时错误与 404 兜底页 |

## 目录结构

```
src/
├── app/                        # 路由与布局
│   ├── layout.tsx              # 根布局：字体、metadata、JSON-LD、跳转正文链接
│   ├── error.tsx               # 全站错误边界
│   ├── not-found.tsx           # 404
│   ├── icon.png                 # 浏览器标签页图标（256，透明圆角）
│   ├── apple-icon.png           # iOS 主屏图标（180，必须不透明方形）
│   └── api/contact/route.ts    # 联系表单接口
├── components/
│   ├── ui/                     # 通用原子组件
│   │   ├── link-button.tsx     # motion 作用于 <a>，避免 Link 嵌套 button
│   │   ├── reveal.tsx          # 滚动入场动画（自动尊重减少动效偏好）
│   │   ├── section-heading.tsx # 区块标题统一排版
│   │   └── page-hero.tsx       # 内页统一头部
│   ├── product-detail-page.tsx # 产品详情页渲染器（三款产品共用）
│   └── ...                     # 各区块组件
├── lib/
│   ├── site.ts                 # 公司信息、导航（纯数据，无图标依赖）
│   ├── products.ts             # 产品卡片数据
│   ├── product-details.ts      # 产品详情页内容
│   ├── contact.ts              # 联系渠道数据（含图标，仅客户端引用）
│   └── utils.ts                # cn() 类名合并
└── types/index.ts              # 共享类型

public/images/                  # 图片资源
```

## 内容维护

所有文案集中在 `src/lib/`，改内容通常不需要动组件：

- 公司名称、电话、邮箱、地址 → `src/lib/site.ts`
- 导航菜单 → `src/lib/site.ts` 的 `navigation`
- 产品卡片（首页矩阵 + 产品中心）→ `src/lib/products.ts`
- 产品详情页（三款产品共用同一渲染器）→ `src/lib/product-details.ts`
- 联系渠道卡片 → `src/lib/contact.ts`

新增产品详情页：在 `product-details.ts` 增加一项，并在 `src/app/products/<slug>/page.tsx` 加一个薄包装即可。

## 图片

`public/images/` 下的图片通过 `next/image` 渲染，新增图片建议控制在 300KB 以内（Next 会自动转 AVIF/WebP）。

### Logo

站点目前使用**两套 Logo**，配置都在 `src/lib/site.ts`：

| 配置项 | 派生文件 | 用途 |
| --- | --- | --- |
| `site.logo` | `logo-2.png` | 导航栏左上角（完整锁定组合：图形 + 定制汉字「双洪」+ HONHAND） |
| `site.logoFooter` | `hohand-logo.png` | 页脚（纯图形，深色背景下反白） |

**`logo-2.png`** ← `logo_2.jpg`（238×71）

- 裁切到墨迹包围盒，去掉左 6 / 右 13 / 下 8 px 白边
- 2 倍高质量放大（源图仅 238px 宽，导航里约 125px 宽，高分屏需要 2x）
- **保留白底、不做透明化、不做调色板量化**

> 为什么不做透明化：这张图的主色统计被「近黑色汉字」（1521px）抢占，
> 量化会把橙色飘带匹配成灰色系，整张图的暖色全部丢失、字形也被破坏。
> 导航栏背景本身是白色/半透明白色，白底裁切版可直接无缝贴合，
> 且完整保留原始渐变与定制字形。

**`hohand-logo.png`** ← `hohand_logo.jpg`（940×940）

- 原始 JPG 是方形白底图，图形只占 848×464（上 224 / 下 252px 为空白），直接用在深色页脚会露出白色方块
- 裁切到墨迹包围盒，并把白底反解算为真实 alpha 通道，保留边缘抗锯齿
- 颜色取自调色板拟合（深蓝 `rgb(1,60,106)`、橙 `rgb(170,92,36)`），避免 JPEG 噪点导致偏色

页脚使用 `brightness-0 invert` 显示为白色，因为深蓝色在深色背景上不可见。

> 注意：汉字已在 `logo-2` 图内，导航栏因此**不再并排显示**「上海双洪 + 标语」文字，避免重复。

站点图标（favicon）仍由**纯图形**版本派生，两个文件的约束不同，不要互相替换：

| 文件 | 尺寸 | 约束 |
| --- | --- | --- |
| `src/app/icon.png` | 128 | 浏览器标签页，需**带圆角且四角透明**（浏览器不再做遮罩） |
| `src/app/apple-icon.png` | 180 | iOS 主屏，iOS 会自行套圆角遮罩，因此必须是**完全不透明的方形**，不能画圆角 |

若要换 Logo，替换对应的原始 JPG 后按上述规则重新生成派生文件即可；组件无需改动（读取 `site` 配置）。

## 表单接入

`/api/contact` 目前完成校验、限流与日志记录，**尚未接入通知渠道**。要真正收到邮件/企微/飞书通知，请编辑 `src/app/api/contact/route.ts` 中标注 `TODO` 的位置，替换为对应的 SDK 调用。

- 已包含：字段校验、邮箱格式校验、蜜罐字段、内存限流（单 IP 60 秒 5 次）
- 返回结构：`{ ok, message, errors?, fallback? }`

## 设计令牌

- **品牌色**：`primary`（企业蓝）为主，`corporate-teal`（青）为辅，`accent`（橙）仅用于高亮点缀
- **导航高度**：`globals.css` 中的 `--nav-height`（4.5rem），`layout.tsx` 的 `<main>` 与各处 `min-h-[calc(100svh-var(--nav-height))]` 依赖它。改高度只需改这一个变量
- **阴影**：`shadow-card` / `shadow-card-hover` / `shadow-corporate-xl`，均为多层低透明度、蓝色染色，避免死黑
- **区块间距**：`.section`（桌面 py-32）、`.container-page`（最大宽度容器）

## 约定

- 按钮式跳转一律用 `ui/link-button.tsx`，不要写 `<Link><button>`（非法 DOM）
- 滚动入场动画一律用 `ui/reveal.tsx`，不要重复写 `whileInView`
- lucide 图标必须存在于已安装版本内。`npm run check:icons` 会校验并同时检测重复导入标识符，避免 `Handshake` 这类「版本里没有」导致的整页崩溃

## 部署

Vercel 直接导入即可。自建服务器需 Node 18+，构建后以 `npm start` 运行。

上线前请替换：

- `src/lib/site.ts` 的 `domain`（影响 canonical / OG 链接）
- 页脚备案号（`footer.tsx` 底部，若需要展示）
- 接入表单通知渠道
