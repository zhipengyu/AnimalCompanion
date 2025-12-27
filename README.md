# 爱宠优品 - 宠物用品商城

一个基于Vue 3打造的现代化宠物用品电商网站，温馨的设计风格，完美的响应式布局。

## 功能特性

- 🐾 温馨可爱的宠物主题设计
- 📱 完全响应式布局，支持各种设备
- 🎯 Vue 3 + Composition API
- 🛣️ Vue Router 路由管理
- 💫 流畅的动画过渡效果
- 🛒 产品分类展示
- 📧 在线咨询表单
- 🎨 粉色系配色方案

## 页面结构

- **首页** - 轮播Hero区、产品分类、品牌故事、联系方式
- **关于我们** - 品牌介绍、服务承诺、企业价值观
- **产品分类** - 宠物食品、玩具用品、美容护理、生活用品、服饰配饰、健康医护
- **联系我们** - 客服热线、邮箱地址、门店地址及在线留言表单

## 技术栈

- Vue 3
- Vue Router 4
- CSS3
- Font Awesome 图标库
- Flexbox/Grid 响应式布局

## 安装和运行

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run serve
```

访问 http://localhost:8080 查看网站

### 3. 构建生产版本
```bash
npm run build
```

## 项目结构

```
src/
├── assets/              # 静态资源
│   └── css/            # 全局样式
│       └── global.css  # 全局CSS变量和样式
├── components/          # 可复用组件
│   ├── NavHeader.vue      # 导航头部组件
│   ├── HeroSection.vue    # 首页轮播区域
│   ├── ServicesSection.vue # 产品分类展示
│   ├── AboutSection.vue    # 品牌介绍
│   ├── ContactSection.vue  # 联系表单
│   └── AppFooter.vue      # 页脚组件
├── views/               # 页面视图
│   ├── Home.vue        # 首页
│   ├── About.vue       # 关于页面
│   ├── Services.vue    # 产品分类页
│   └── Contact.vue     # 联系页面
├── router/              # 路由配置
│   └── index.js
├── App.vue              # 根组件
└── main.js              # 应用入口
```

## 产品分类

网站展示六大类宠物用品：

1. **宠物食品** - 进口天然粮、营养罐头、健康零食、营养补充剂
2. **玩具用品** - 益智玩具、互动玩具、磨牙玩具、电动玩具
3. **美容护理** - 洗护用品、美容工具、指甲护理、口腔护理
4. **生活用品** - 窝垫床褥、食盆水碗、外出用品、猫砂猫厕
5. **服饰配饰** - 四季服装、牵引绳具、项圈胸背、装饰配饰
6. **健康医护** - 驱虫用品、医疗用品、急救护理、保健用品

## 自定义配置

### 修改品牌信息

1. 在`src/components/NavHeader.vue`中修改品牌名称"爱宠优品"
2. 更新联系方式：
   - 客服热线：400-123-4567
   - 邮箱：service@aichongyoupin.com
   - 地址：北京市朝阳区望京路10号

### 修改颜色主题

主题色彩已设置为温馨的粉色系：

在`src/assets/css/global.css`和各组件中，主色调为：
- 主色：#FF6B9D (粉红色)
- 辅色：#C06C84 (玫瑰粉)

如需修改，请搜索并替换这些颜色值。

### 更换图片

1. Hero轮播图：在`src/components/HeroSection.vue`的`slides`数组中修改`image`字段
2. Logo：将logo图片放入`public`目录，命名为`logo.png`
3. 关于我们图片：在`src/components/AboutSection.vue`中修改图片URL

### 添加新产品分类

在`src/components/ServicesSection.vue`的`services`数组中添加新对象：

```javascript
{
  icon: 'fas fa-icon-name',  // Font Awesome图标
  title: '分类名称',
  description: '分类描述',
  features: ['特点1', '特点2', '特点3', '特点4']
}
```

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 部署

### 静态部署

构建后将`dist`目录上传到任何静态服务器（如Nginx、Apache）即可。

### 配置服务器

如使用Vue Router的history模式，需要配置服务器：

**Nginx配置示例：**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 许可证

MIT License

## 联系方式

如有问题或建议，欢迎联系：
- 邮箱：service@aichongyoupin.com
- 客服热线：400-123-4567