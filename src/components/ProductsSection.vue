<template>
  <section class="products section">
    <div class="container">
      <h2 class="section-title">玩具用品</h2>
      <p class="section-subtitle">
        优质宠物玩具，让您的爱宠快乐每一天
      </p>

      <div class="products-grid">
        <div class="product-card" v-for="(product, index) in products" :key="index">
          <div class="product-image-wrapper">
            <img :src="product.image" :alt="product.title" class="product-image">
            <div class="product-overlay">
              <button class="btn-view-detail">查看详情</button>
            </div>
          </div>
          <div class="product-info">
            <div class="product-category">{{ product.category }}</div>
            <h3 class="product-title">{{ product.title }}</h3>
            <p class="product-description">{{ product.description }}</p>
            <div class="product-footer">
              <div class="product-price">
                <span class="price-label">参考价格</span>
                <span class="price-value">{{ product.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="view-more">
        <router-link to="/services" class="btn btn-primary">
          <i class="fas fa-th"></i>
          查看更多产品
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductsSection',
  data() {
    return {
      products: [
        {
          category: '互动玩具',
          title: '智能逗猫棒',
          description: '自动旋转设计，激发猫咪狩猎天性，让猫咪玩得更开心',
          price: '¥39-79',
          image: require('@/assets/img/2).png')
        },
        {
          category: '益智玩具',
          title: '宠物漏食球',
          description: '慢食设计，边玩边吃，锻炼智力，延长进食时间',
          price: '¥29-59',
          image: require('@/assets/img/3).png')
        },
        {
          category: '磨牙玩具',
          title: '耐咬磨牙棒',
          description: '天然橡胶材质，安全耐咬，帮助清洁牙齿，缓解焦虑',
          price: '¥25-49',
          image: require('@/assets/img/5.png')
        },
        {
          category: '发声玩具',
          title: '趣味发声球',
          description: '内置发声器，吸引宠物注意力，增加互动乐趣',
          price: '¥19-39',
          image: require('@/assets/img/6.png')
        },
        {
          category: '绒毛玩具',
          title: '可爱毛绒公仔',
          description: '柔软舒适，陪伴宠物入睡，缓解分离焦虑',
          price: '¥35-69',
          image: require('@/assets/img/7.png')
        },
        {
          category: '猫抓板',
          title: '多功能猫抓板',
          description: '瓦楞纸材质，保护家具，满足猫咪磨爪需求',
          price: '¥45-89',
          image: require('@/assets/img/8.png')
        },
        {
          category: '电动玩具',
          title: '自动激光逗猫器',
          description: '智能轨迹，自动模式，解放双手，让猫咪运动起来',
          price: '¥69-129',
          image: require('@/assets/img/9.png')
        },
        {
          category: '飞盘玩具',
          title: '户外飞盘套装',
          description: '轻便耐用，适合户外互动，增进主宠感情',
          price: '¥29-55',
          image: require('@/assets/img/23).png')
        },
        {
          category: '猫隧道',
          title: '趣味猫咪隧道',
          description: '可折叠设计，多个出口，激发猫咪探索欲望',
          price: '¥49-99',
          image: require('@/assets/img/pets.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.products {
  background: #f8f9fa;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.product-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(255, 107, 157, 0.2);
}

.product-image-wrapper {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: #f5f5f5;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.1);
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .product-overlay {
  opacity: 1;
}

.btn-view-detail {
  padding: 12px 30px;
  background: white;
  color: #FF6B9D;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-view-detail:hover {
  background: #FF6B9D;
  color: white;
  transform: scale(1.05);
}

.product-info {
  padding: 25px;
}

.product-category {
  display: inline-block;
  padding: 5px 15px;
  background: linear-gradient(135deg, #FFE5EC 0%, #FFF5F7 100%);
  color: #FF6B9D;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.product-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 10px;
  line-height: 1.4;
}

.product-description {
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.product-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
}

.product-price {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
}

.price-label {
  font-size: 0.8rem;
  color: #95a5a6;
}

.price-value {
  font-size: 1.6rem;
  font-weight: 700;
  background: linear-gradient(135deg, #FF6B9D 0%, #C06C84 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.view-more {
  text-align: center;
  padding-top: 20px;
}

.view-more .btn {
  padding: 15px 40px;
  font-size: 1.1rem;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .product-image-wrapper {
    height: 240px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
