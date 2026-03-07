/**
 * 产品展示组件 - 代码说明
 *
 * 这个文件展示了ProductsSection.vue的核心逻辑和数据结构
 */

// ============================================
// 数据结构示例
// ============================================

const productExample = {
  // 产品分类标签（显示在卡片顶部）
  category: '猫咪专区',

  // 产品标题
  title: '精选猫粮套装',

  // 产品描述（简短介绍）
  description: '天然无谷配方，富含优质蛋白质，呵护猫咪健康成长',

  // 价格区间
  price: '¥168-288',

  // 图片路径（使用require动态导入）
  image: require('@/assets/img/cat.jpeg')
}

// ============================================
// 完整产品列表（9个产品）
// ============================================

const allProducts = [
  {
    category: '猫咪专区',
    title: '精选猫粮套装',
    description: '天然无谷配方，富含优质蛋白质，呵护猫咪健康成长',
    price: '¥168-288',
    image: require('@/assets/img/cat.jpeg')
  },
  {
    category: '狗狗专区',
    title: '优质狗粮系列',
    description: '科学营养配比，适合各年龄段狗狗，增强免疫力',
    price: '¥198-368',
    image: require('@/assets/img/dog.png')
  },
  {
    category: '宠物用品',
    title: '宠物生活套装',
    description: '包含食盆、玩具、窝垫等全套用品，一站式满足需求',
    price: '¥128-258',
    image: require('@/assets/img/pets.png')
  },
  {
    category: '猫咪玩具',
    title: '互动猫咪玩具',
    description: '益智互动设计，激发猫咪天性，增进主宠感情',
    price: '¥58-128',
    image: require('@/assets/img/生成特定猫咪图片.png')
  },
  {
    category: '宠物零食',
    title: '营养零食礼包',
    description: '健康美味，无添加剂，训练奖励两相宜',
    price: '¥68-158',
    image: require('@/assets/img/2).png')
  },
  {
    category: '护理用品',
    title: '宠物美容套装',
    description: '专业美容工具，让您的爱宠保持清洁美丽',
    price: '¥88-188',
    image: require('@/assets/img/3).png')
  },
  {
    category: '智能用品',
    title: '智能喂食器',
    description: '定时定量，远程控制，科学喂养更省心',
    price: '¥298-598',
    image: require('@/assets/img/5.png')
  },
  {
    category: '户外用品',
    title: '外出便携套装',
    description: '轻便实用，让您和爱宠享受户外时光',
    price: '¥118-238',
    image: require('@/assets/img/6.png')
  },
  {
    category: '猫咪窝垫',
    title: '舒适猫窝系列',
    description: '柔软温暖，多种款式，打造猫咪专属空间',
    price: '¥158-328',
    image: require('@/assets/img/生成特定猫咪图片 (1).png')
  }
]

// ============================================
// CSS类名说明
// ============================================

const cssClasses = {
  // 主容器
  '.products': '产品区域主容器，浅灰背景',
  '.container': '内容容器，居中对齐',

  // 标题
  '.section-title': '区域标题 "精选产品"',
  '.section-subtitle': '区域副标题',

  // 产品网格
  '.products-grid': '产品网格容器，响应式布局',

  // 产品卡片
  '.product-card': '单个产品卡片，白色背景，圆角',
  '.product-card:hover': '悬停效果：上浮+阴影',

  // 图片区域
  '.product-image-wrapper': '图片容器，固定高度280px',
  '.product-image': '产品图片，覆盖整个容器',
  '.product-overlay': '遮罩层，悬停时显示',
  '.btn-view-detail': '查看详情按钮',

  // 产品信息
  '.product-info': '产品信息容器',
  '.product-category': '分类标签，粉色背景',
  '.product-title': '产品标题，粗体',
  '.product-description': '产品描述，灰色文字',

  // 底部区域
  '.product-footer': '底部容器，包含价格和按钮',
  '.product-price': '价格区域',
  '.price-label': '价格标签 "参考价格"',
  '.price-value': '价格数值，渐变色',
  '.btn-add-cart': '加入购物车按钮，粉色渐变',

  // 底部按钮
  '.view-more': '查看更多区域',
  '.btn': '主按钮样式'
}

// ============================================
// 响应式断点
// ============================================

const breakpoints = {
  mobile: {
    maxWidth: '768px',
    columns: 1,
    description: '手机端：单列布局'
  },
  tablet: {
    minWidth: '769px',
    maxWidth: '1024px',
    columns: 2,
    description: '平板端：双列布局'
  },
  desktop: {
    minWidth: '1025px',
    columns: 3,
    description: '桌面端：三列自适应'
  }
}

// ============================================
// 动画效果
// ============================================

const animations = {
  cardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 30px rgba(255, 107, 157, 0.2)',
    duration: '0.3s'
  },
  imageHover: {
    transform: 'scale(1.1)',
    duration: '0.5s'
  },
  overlayFadeIn: {
    opacity: '0 → 1',
    duration: '0.3s'
  },
  buttonHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(255, 107, 157, 0.3)'
  }
}

// ============================================
// 颜色主题
// ============================================

const colorTheme = {
  primary: '#FF6B9D',      // 主粉色
  secondary: '#C06C84',    // 深粉色
  background: '#f8f9fa',   // 背景灰
  cardBg: '#ffffff',       // 卡片白色
  textDark: '#2c3e50',     // 深色文字
  textGray: '#7f8c8d',     // 灰色文字
  textLight: '#95a5a6',    // 浅灰文字
  categoryBg: 'linear-gradient(135deg, #FFE5EC 0%, #FFF5F7 100%)'
}

// ============================================
// 使用方法
// ============================================

const usage = `
1. 组件已自动集成到 Home.vue
2. 访问首页即可看到产品展示区域
3. 修改产品数据：编辑 ProductsSection.vue 中的 products 数组
4. 修改样式：编辑 <style scoped> 部分
5. 添加新产品：在 products 数组中添加新对象
`

// ============================================
// 图片路径说明
// ============================================

const imagePaths = {
  correct: "require('@/assets/img/cat.jpeg')",  // ✅ 正确
  wrong1: "'@/assets/img/cat.jpeg'",            // ❌ 错误
  wrong2: "'../assets/img/cat.jpeg'",           // ❌ 错误
  wrong3: "'/src/assets/img/cat.jpeg'",         // ❌ 错误

  explanation: `
    必须使用 require() 动态导入图片
    @/ 是 src/ 目录的别名
    Vue CLI 会自动处理图片路径
  `
}

// ============================================
// 导出说明
// ============================================

export default {
  productExample,
  allProducts,
  cssClasses,
  breakpoints,
  animations,
  colorTheme,
  usage,
  imagePaths
}

/**
 * 快速修改指南：
 *
 * 1. 修改产品信息
 *    → 编辑 ProductsSection.vue 第43-109行的 products 数组
 *
 * 2. 修改颜色
 *    → 搜索并替换 #FF6B9D 和 #C06C84
 *
 * 3. 修改布局
 *    → 调整 .products-grid 的 grid-template-columns
 *
 * 4. 添加新产品
 *    → 在 products 数组末尾添加新对象
 *    → 确保图片文件存在于 src/assets/img/
 *
 * 5. 禁用动画
 *    → 删除或注释 :hover 相关的 CSS 规则
 */
