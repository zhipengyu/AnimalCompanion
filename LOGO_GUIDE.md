# Logo使用指南

## 📁 Logo文件

已创建的Logo文件：
- `src/assets/img/logo.svg` - SVG矢量格式（推荐使用）

## 🎨 Logo设计说明

### 设计元素
```
┌─────────────────────┐
│   ╭───────────╮     │
│  ╱  🐾      🐾  ╲   │  ← 粉色渐变圆形背景
│ │               │   │
│ │   ┌─────┐    │   │  ← 白色圆形文字区
│ │   │宠物 │    │   │
│ │   │玩具 │    │   │
│ │   │  ❤️  │    │   │  ← 装饰爱心
│ │   └─────┘    │   │
│  ╲             ╱    │
│   ╰───────────╯     │
└─────────────────────┘
```

### 颜色方案
- **主色调**: #FF6B9D（粉色）
- **辅助色**: #C06C84（深粉色）
- **文字背景**: #FFFFFF（白色）
- **爪印**: 白色，90%透明度

### 尺寸规格
- **原始尺寸**: 200x200px
- **导航栏使用**: 40px高度
- **格式**: SVG（可无损缩放）

## 💻 使用方法

### 1. 在Vue组件中使用

```vue
<template>
  <img src="@/assets/img/logo.svg" alt="宠物玩具" class="logo" />
</template>

<style>
.logo {
  width: 40px;
  height: 40px;
}
</style>
```

### 2. 在HTML中使用

```html
<img src="/src/assets/img/logo.svg" alt="宠物玩具" width="40" height="40">
```

### 3. 作为背景图使用

```css
.logo-bg {
  background-image: url('@/assets/img/logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
}
```

## 📐 不同场景的尺寸建议

### 导航栏
```css
.nav-logo {
  height: 40px;
  width: auto;
}
```

### 页脚
```css
.footer-logo {
  height: 60px;
  width: auto;
}
```

### 移动端导航
```css
.mobile-logo {
  height: 32px;
  width: auto;
}
```

### 大型展示（关于页面等）
```css
.hero-logo {
  height: 120px;
  width: auto;
}
```

### Favicon（网站图标）
需要转换为PNG格式，建议尺寸：
- 16x16px
- 32x32px
- 64x64px

## 🎯 当前使用位置

### NavHeader.vue（导航栏）
```vue
<img src="@/assets/img/logo.svg" alt="宠物玩具Logo" class="logo-img" />
```

CSS样式：
```css
.logo-img {
  height: 40px;
  margin-right: 10px;
}
```

## 🔄 如果需要PNG格式

SVG格式的优点：
- ✅ 矢量图形，无损缩放
- ✅ 文件体积小
- ✅ 支持CSS样式修改
- ✅ 现代浏览器完全支持

如需PNG格式（如Favicon），可以：
1. 使用在线工具转换：https://cloudconvert.com/svg-to-png
2. 使用设计软件导出（Figma、Sketch、Illustrator）
3. 使用命令行工具（ImageMagick）

## 🎨 自定义Logo颜色

如需修改Logo颜色，编辑 `logo.svg` 文件：

### 修改主色调
找到：
```svg
<stop offset="0%" style="stop-color:#FF6B9D;stop-opacity:1" />
```
改为你想要的颜色。

### 修改辅助色
找到：
```svg
<stop offset="100%" style="stop-color:#C06C84;stop-opacity:1" />
```
改为你想要的颜色。

## 📱 响应式使用

```css
/* 桌面端 */
@media (min-width: 1024px) {
  .logo-img {
    height: 50px;
  }
}

/* 平板端 */
@media (min-width: 768px) and (max-width: 1023px) {
  .logo-img {
    height: 40px;
  }
}

/* 移动端 */
@media (max-width: 767px) {
  .logo-img {
    height: 32px;
  }
}
```

## ⚠️ 注意事项

1. **路径引用**
   - ✅ 使用 `@/assets/img/logo.svg`（推荐）
   - ❌ 避免使用相对路径 `../assets/img/logo.svg`

2. **Alt文本**
   - 始终添加有意义的alt属性
   - 例如：`alt="宠物玩具Logo"`

3. **文件大小**
   - SVG文件很小（约2-3KB）
   - 无需额外优化

4. **浏览器兼容性**
   - 所有现代浏览器都支持SVG
   - IE9+支持

## 🎁 Logo变体建议

如需创建不同版本：

### 1. 纯图标版（无文字）
只保留爪印和圆形背景

### 2. 横版Logo
图标在左，文字在右

### 3. 反色版（深色背景用）
白色爪印，浅色文字

### 4. 单色版
纯黑或纯白，用于特殊场景

## 📊 Logo文件信息

```
文件名: logo.svg
路径: src/assets/img/logo.svg
格式: SVG (Scalable Vector Graphics)
尺寸: 200x200px (viewBox)
文件大小: ~2KB
颜色模式: RGB
透明度: 支持
```

## 🔗 相关资源

- SVG在线编辑器: https://www.svgviewer.dev/
- SVG优化工具: https://jakearchibald.github.io/svgomg/
- SVG转PNG: https://cloudconvert.com/svg-to-png

---

**Logo设计**: AI生成
**创建时间**: 2024
**版本**: 1.0
**状态**: ✅ 已应用到导航栏
