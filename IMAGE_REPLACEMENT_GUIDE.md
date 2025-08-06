# 图片替换指南

## 概述

本项目预留了13处图片位置，您可以通过替换 `public/images` 目录下的图片文件来更新网站内容。

## 图片位置对照表

### 1. 首页 - 公司信息简介
- **位置**: `src/components/company-intro.tsx`
- **图片文件**: `public/images/company-intro.jpg`
- **尺寸建议**: 800x600px 或 1200x800px
- **说明**: 用于展示公司形象、办公环境或团队照片

### 2. HR产品页 - 业务框架
- **位置**: `src/components/hr-product-page.tsx`
- **图片文件**: `public/images/hr-business-framework.jpg`
- **尺寸建议**: 800x600px
- **说明**: 展示HR产品的业务架构图或流程图

### 3. HR产品页 - 平台框架
- **位置**: `src/components/hr-product-page.tsx`
- **图片文件**: `public/images/hr-platform-framework.jpg`
- **尺寸建议**: 800x600px
- **说明**: 展示HR产品的技术架构图或系统框架

### 4. HR产品页 - 公式化定义
- **位置**: `src/components/hr-product-page.tsx`
- **图片文件**: `public/images/hr-formula-definition.jpg`
- **尺寸建议**: 800x600px
- **说明**: 展示HR产品的数据模型或业务规则定义

### 5. HMI产品页 - 界面组态
- **位置**: `src/components/hmi-product-page.tsx`
- **图片文件**: `public/images/hmi-interface-config.jpg`
- **尺寸建议**: 800x600px
- **说明**: 展示HMI产品的界面设计工具或组态界面

### 6. HMI产品页 - 数据采集
- **位置**: `src/components/hmi-product-page.tsx`
- **图片文件**: `public/images/hmi-data-collection.jpg`
- **尺寸建议**: 800x600px
- **说明**: 展示HMI产品的数据采集功能或协议支持

### 7. HMI产品页 - 流程图
- **位置**: `src/components/hmi-product-page.tsx`
- **图片文件**: `public/images/hmi-flow-chart.jpg`
- **尺寸建议**: 800x600px
- **说明**: 展示HMI产品的流程图功能或工艺流程图

### 8. HMI产品页 - 趋势图
- **位置**: `src/components/hmi-product-page.tsx`
- **图片文件**: `public/images/hmi-trend-chart.jpg`
- **尺寸建议**: 800x600px
- **说明**: 展示HMI产品的趋势图分析功能

### 9. HMI产品页 - 棒图
- **位置**: `src/components/hmi-product-page.tsx`
- **图片文件**: `public/images/hmi-bar-chart.jpg`
- **尺寸建议**: 800x600px
- **说明**: 展示HMI产品的棒图展示功能

### 10. HMI产品页 - 报警管理
- **位置**: `src/components/hmi-product-page.tsx`
- **图片文件**: `public/images/hmi-alarm-management.jpg`
- **尺寸建议**: 600x400px
- **说明**: 展示HMI产品的报警管理功能

### 11. HMI产品页 - 用户管理
- **位置**: `src/components/hmi-product-page.tsx`
- **图片文件**: `public/images/hmi-user-management.jpg`
- **尺寸建议**: 600x400px
- **说明**: 展示HMI产品的用户管理功能

### 12. HMI产品页 - 系统配置
- **位置**: `src/components/hmi-product-page.tsx`
- **图片文件**: `public/images/hmi-system-config.jpg`
- **尺寸建议**: 600x400px
- **说明**: 展示HMI产品的系统配置功能

### 13. HMI产品页 - 数据导出
- **位置**: `src/components/hmi-product-page.tsx`
- **图片文件**: `public/images/hmi-data-export.jpg`
- **尺寸建议**: 600x400px
- **说明**: 展示HMI产品的数据导出功能

## 替换步骤

### 1. 准备图片文件
- 确保图片格式为 JPG、PNG 或 WebP
- 建议使用 WebP 格式以获得更好的压缩效果
- 按照建议尺寸准备图片

### 2. 上传图片
- 将图片文件放入 `public/images` 目录
- 按照上述命名规范重命名文件

### 3. 更新组件
- 找到对应的组件文件
- 取消注释 Image 组件代码
- 确保图片路径正确

### 示例代码

```tsx
// 在对应组件中找到类似代码
<div className="relative h-96 rounded-2xl overflow-hidden glass-effect-dark">
  {/* 注释掉占位符 */}
  {/* 
  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-secondary-500/20">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 bg-primary-500/30 rounded-full flex items-center justify-center mx-auto">
        <span className="text-2xl">🏢</span>
      </div>
      <div className="text-white/60">
        <p className="text-sm">图片1预留位置</p>
        <p className="text-xs">公司信息简介</p>
      </div>
    </div>
  </div>
  */}
  
  {/* 取消注释实际图片 */}
  <Image
    src="/images/company-intro.jpg"
    alt="上海双洪信息技术有限公司"
    fill
    className="object-cover"
    priority
  />
</div>
```

## 图片优化建议

### 1. 文件格式
- **WebP**: 最佳选择，文件小，质量高
- **JPG**: 适合照片类图片
- **PNG**: 适合需要透明背景的图片

### 2. 文件大小
- 建议单张图片不超过 500KB
- 可以使用在线工具压缩图片

### 3. 响应式图片
- 考虑准备不同尺寸的图片
- 使用 `sizes` 属性优化加载

### 4. 懒加载
- 图片已配置懒加载
- 首屏图片使用 `priority` 属性

## 注意事项

1. **文件命名**: 严格按照命名规范，避免中文和特殊字符
2. **图片质量**: 确保图片清晰度足够，避免模糊
3. **版权问题**: 确保使用的图片具有合法使用权
4. **备份**: 替换前请备份原有图片文件
5. **测试**: 替换后请测试页面显示效果

## 技术支持

如果在图片替换过程中遇到问题，请联系开发团队获取技术支持。 