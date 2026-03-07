# 产品展示区域说明

## 概述
已为官网项目添加了基于本地图片的产品展示区域（ProductsSection.vue）。

## 新增文件
- `src/components/ProductsSection.vue` - 产品展示组件

## 修改文件
- `src/views/Home.vue` - 在首页中引入了ProductsSection组件

## 使用的图片资源
产品展示区域使用了以下本地图片（位于 `src/assets/img/`）：

1. **cat.jpeg** - 猫咪专区/精选猫粮套装
2. **dog.png** - 狗狗专区/优质狗粮系列
3. **pets.png** - 宠物用品/宠物生活套装
4. **生成特定猫咪图片.png** - 猫咪玩具/互动猫咪玩具
5. **2).png** - 宠物零食/营养零食礼包
6. **3).png** - 护理用品/宠物美容套装
7. **5.png** - 智能用品/智能喂食器
8. **6.png** - 户外用品/外出便携套装
9. **生成特定猫咪图片 (1).png** - 猫咪窝垫/舒适猫窝系列

## 产品展示特性

### 视觉效果
- ✨ 卡片式布局，响应式网格设计
- 🎨 悬停效果：图片缩放、卡片上浮、阴影增强
- 🖼️ 图片遮罩层，悬停时显示"查看详情"按钮
- 💫 渐变色彩主题（粉色系）

### 产品信息
每个产品卡片包含：
- 产品分类标签
- 产品标题
- 产品描述
- 参考价格
- 加入购物车按钮

### 响应式设计
- **移动端**（<768px）：单列布局
- **平板端**（769px-1024px）：双列布局
- **桌面端**（>1024px）：三列自适应布局

## 页面结构
首页（Home.vue）现在包含以下区域（从上到下）：
1. HeroSection - 英雄区/轮播图
2. ServicesSection - 产品分类
3. **ProductsSection** - 精选产品展示（新增）
4. AboutSection - 关于我们
5. ContactSection - 联系方式

## 自定义配置

### 修改产品信息
在 `src/components/ProductsSection.vue` 的 `data()` 中修改 `products` 数组：

```javascript
products: [
  {
    category: '产品分类',
    title: '产品标题',
    description: '产品描述',
    price: '¥价格区间',
    image: require('@/assets/img/图片文件名')
  }
]
```

### 修改样式
组件使用了scoped样式，主要颜色变量：
- 主色调：`#FF6B9D`（粉色）
- 辅助色：`#C06C84`（深粉色）
- 背景色：`#f8f9fa`（浅灰）

### 添加更多图片
1. 将图片放入 `src/assets/img/` 目录
2. 在 `products` 数组中添加新产品
3. 使用 `require('@/assets/img/新图片名称')` 引用

## 运行项目
```bash
# 安装依赖
npm install

# 开发模式运行
npm run serve

# 构建生产版本
npm run build
```

## 注意事项
1. 确保所有图片文件都存在于 `src/assets/img/` 目录
2. 图片文件名包含特殊字符（如括号、中文）时，Vue会自动处理
3. 建议优化图片大小以提升加载速度（当前部分图片较大，3-5MB）
4. 可以考虑使用图片压缩工具减小文件体积

## 后续优化建议
1. 📦 图片懒加载 - 提升首屏加载速度
2. 🔍 产品搜索和筛选功能
3. 🛒 完整的购物车功能
4. 📱 产品详情页面
5. 🖼️ 图片优化和压缩
6. ⭐ 产品评分和评论系统
7. 🔄 产品数据从API获取（而非硬编码）

## 技术栈
- Vue 3
- Vue Router
- Font Awesome（图标）
- CSS Grid（布局）
- CSS Transitions（动画效果）
