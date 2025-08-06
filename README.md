# 上海双洪信息技术有限公司官网

## 项目简介

这是上海双洪信息技术有限公司的官方网站，采用现代化的技术栈构建，具有工控领域高级科技感的视觉设计。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **3D效果**: Three.js
- **图标**: Lucide React

## 项目特色

### 设计风格
- 工控领域高级科技感
- 深色背景（深蓝/黑）搭配霓虹蓝/绿点缀
- 玻璃态效果、动态粒子背景、金属质感边框

### 核心功能
- 响应式设计，适配工控设备大屏
- 3D翻转效果的产品卡片
- 全息投影悬浮效果的按钮交互
- 动态粒子背景
- 实时监控看板（模拟工控系统数据流）

### 页面结构
1. **首页** - Hero区域 + 产品矩阵 + 公司简介 + 特色功能
2. **产品中心** - HR/SPM/HMI三个子页面
3. **关于我们** - 公司介绍、团队、价值观
4. **联系我们** - 联系信息、表单、地图

## 图片预留位置

项目预留了13处图片位置，可以通过替换 `public/images` 目录下的图片文件来更新：

### 首页
- 图片1: 公司信息简介 (`company-intro.jpg`)

### HR产品页
- 图片2: 业务框架 (`hr-business-framework.jpg`)
- 图片3: 平台框架 (`hr-platform-framework.jpg`)
- 图片4: 公式化定义 (`hr-formula-definition.jpg`)

### HMI产品页
- 图片5: 界面组态 (`hmi-interface-config.jpg`)
- 图片6: 数据采集 (`hmi-data-collection.jpg`)
- 图片7: 流程图 (`hmi-flow-chart.jpg`)
- 图片8: 趋势图 (`hmi-trend-chart.jpg`)
- 图片9: 棒图 (`hmi-bar-chart.jpg`)
- 图片10: 报警管理 (`hmi-alarm-management.jpg`)
- 图片11: 用户管理 (`hmi-user-management.jpg`)
- 图片12: 系统配置 (`hmi-system-config.jpg`)
- 图片13: 数据导出 (`hmi-data-export.jpg`)

## 安装和运行

### 环境要求
- Node.js 18+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

## 项目结构

```
src/
├── app/                    # Next.js App Router页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── about/             # 关于我们页面
│   ├── contact/           # 联系我们页面
│   └── products/          # 产品页面
│       ├── page.tsx       # 产品中心
│       ├── hr/            # HR产品
│       ├── spm/           # SPM产品
│       └── hmi/           # HMI产品
├── components/            # React组件
│   ├── navbar.tsx         # 导航栏
│   ├── footer.tsx         # 页脚
│   ├── hero-section.tsx   # Hero区域
│   ├── product-matrix.tsx # 产品矩阵
│   ├── company-intro.tsx  # 公司简介
│   └── ...                # 其他组件
├── types/                 # TypeScript类型定义
└── lib/                   # 工具函数

public/
└── images/               # 图片资源目录
```

## 自定义配置

### 主题颜色
在 `tailwind.config.js` 中可以自定义主题颜色：

```javascript
colors: {
  primary: {
    500: '#0087ff', // 主色调 - 霓虹蓝
  },
  secondary: {
    500: '#00ff87', // 霓虹绿
  },
  dark: {
    900: '#0f172a', // 深色背景
  }
}
```

### 动画效果
在 `globals.css` 中定义了各种动画效果：

- `float`: 浮动动画
- `glow`: 发光效果
- `slide-up`: 向上滑动
- `fade-in`: 淡入效果

## 部署

### Vercel部署（推荐）
1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 自动部署

### 其他平台
项目支持部署到任何支持Next.js的平台：
- Netlify
- AWS Amplify
- 自建服务器

## 维护说明

### 更新图片
1. 将新图片放入 `public/images` 目录
2. 按照命名规范重命名
3. 在对应组件中取消注释Image组件

### 更新内容
- 公司信息：修改 `src/components/company-intro.tsx`
- 产品信息：修改 `src/components/product-matrix.tsx`
- 联系信息：修改 `src/components/contact-page.tsx`

### 样式调整
- 全局样式：修改 `src/app/globals.css`
- 主题配置：修改 `tailwind.config.js`
- 组件样式：修改对应组件的className

## 技术支持

如有技术问题，请联系开发团队。

## 许可证

本项目为上海双洪信息技术有限公司所有，保留所有权利。 