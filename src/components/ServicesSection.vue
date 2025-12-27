<template>
  <section class="services section">
    <div class="container">
      <h2 class="section-title">产品分类</h2>
      <p class="section-subtitle">
        精选优质宠物用品，满足您爱宠的全方位需求
      </p>

      <div class="services-grid">
        <div class="service-card" v-for="(service, index) in services" :key="index">
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="feature in service.features" :key="feature">
              <i class="fas fa-check"></i>
              {{ feature }}
            </li>
          </ul>
          <router-link to="/services" class="service-link">
            查看产品 <i class="fas fa-paw"></i>
          </router-link>
        </div>
      </div>

      <div class="services-stats">
        <div class="stat-item" v-for="(stat, index) in stats" :key="index">
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          icon: 'fas fa-drumstick-bite',
          title: '宠物食品',
          description: '天然健康的宠物主粮、零食和营养品，科学配比，守护爱宠健康',
          features: [
            '进口天然粮',
            '营养罐头',
            '健康零食',
            '营养补充剂'
          ]
        },
        {
          icon: 'fas fa-gamepad',
          title: '玩具用品',
          description: '安全耐用的宠物玩具，丰富多样的互动游戏，让宠物快乐每一天',
          features: [
            '益智玩具',
            '互动玩具',
            '磨牙玩具',
            '电动玩具'
          ]
        },
        {
          icon: 'fas fa-cut',
          title: '美容护理',
          description: '专业的宠物美容护理产品，让您的爱宠保持清洁美丽',
          features: [
            '洗护用品',
            '美容工具',
            '指甲护理',
            '口腔护理'
          ]
        },
        {
          icon: 'fas fa-bed',
          title: '生活用品',
          description: '舒适温馨的宠物生活用品，打造爱宠的专属空间',
          features: [
            '窝垫床褥',
            '食盆水碗',
            '外出用品',
            '猫砂猫厕'
          ]
        },
        {
          icon: 'fas fa-vest',
          title: '服饰配饰',
          description: '时尚实用的宠物服饰配饰，让您的爱宠成为街上最靓的仔',
          features: [
            '四季服装',
            '牵引绳具',
            '项圈胸背',
            '装饰配饰'
          ]
        },
        {
          icon: 'fas fa-heartbeat',
          title: '健康医护',
          description: '专业的宠物健康护理产品，预防保健，关爱每一天',
          features: [
            '驱虫用品',
            '医疗用品',
            '急救护理',
            '保健用品'
          ]
        }
      ],
      stats: [
        { number: '1000+', label: '优质商品' },
        { number: '50+', label: '知名品牌' },
        { number: '10万+', label: '服务客户' },
        { number: '99%', label: '好评率' }
      ]
    }
  }
}
</script>

<style scoped>
.services {
  background: linear-gradient(135deg, #FFF5F7 0%, #FFE5EC 100%);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.service-card {
  background: white;
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 3px;
  background: linear-gradient(135deg, #FF6B9D 0%, #C06C84 100%);
  transition: left 0.3s ease;
}

.service-card:hover::before {
  left: 0;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(255, 107, 157, 0.15);
}

.service-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6B9D 0%, #C06C84 100%);
  color: white;
  font-size: 2rem;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 15px;
}

.service-description {
  color: #7f8c8d;
  margin-bottom: 25px;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 25px 0;
  text-align: left;
}

.service-features li {
  padding: 8px 0;
  color: #5a6c7d;
  display: flex;
  align-items: center;
}

.service-features i {
  color: #FF6B9D;
  margin-right: 10px;
  font-size: 0.8rem;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #FF6B9D;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.service-link:hover {
  color: #C06C84;
  transform: translateX(5px);
}

.services-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
}

.stat-item {
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(255, 107, 157, 0.1);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #FF6B9D 0%, #C06C84 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.stat-label {
  color: #7f8c8d;
  font-weight: 500;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .service-card {
    padding: 30px;
  }

  .services-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
</style>