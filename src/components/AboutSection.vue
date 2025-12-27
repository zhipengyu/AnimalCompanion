<template>
  <section class="about section">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2 class="section-title">关于我们</h2>
          <p class="section-subtitle">
            用心守护每一个毛孩子，让爱宠健康快乐成长
          </p>

          <div class="about-description">
            <p>
              爱宠优品成立于2018年，是一家专注于宠物用品销售与服务的专业电商平台。
              我们始终坚持"用心守护，专业关爱"的理念，为千万宠物家庭提供优质的产品和贴心的服务。
            </p>
            <p>
              我们严选全球知名宠物品牌，从食品、玩具到日用品，每一件商品都经过严格的质量把关。
              我们相信，只有真正爱宠物的人，才能提供最适合它们的产品。
            </p>
          </div>

          <div class="about-features">
            <div class="feature-item" v-for="(feature, index) in features" :key="index">
              <div class="feature-icon">
                <i :class="feature.icon"></i>
              </div>
              <div class="feature-content">
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <router-link to="/about" class="btn btn-primary">
            了解更多 <i class="fas fa-paw"></i>
          </router-link>
        </div>

        <div class="about-visual">
          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=400&fit=crop"
                 alt="可爱宠物" />
          </div>

          <div class="experience-badge">
            <div class="badge-content">
              <span class="years">5+</span>
              <span class="text">年专注宠物</span>
            </div>
          </div>
        </div>
      </div>

      <div class="values-section">
        <h3 class="values-title">我们的承诺</h3>
        <div class="values-grid">
          <div class="value-item" v-for="(value, index) in values" :key="index">
            <div class="value-icon">
              <i :class="value.icon"></i>
            </div>
            <h4>{{ value.title }}</h4>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      features: [
        {
          icon: 'fas fa-shield-alt',
          title: '品质保证',
          description: '严选全球知名品牌，确保每件商品质量可靠'
        },
        {
          icon: 'fas fa-truck',
          title: '快速配送',
          description: '自营仓储物流，全国大部分地区48小时送达'
        },
        {
          icon: 'fas fa-headset',
          title: '贴心服务',
          description: '专业养宠顾问在线咨询，7x24小时售后支持'
        }
      ],
      values: [
        {
          icon: 'fas fa-heart',
          title: '以爱为本',
          description: '用爱心对待每一只宠物，提供最贴心的关怀'
        },
        {
          icon: 'fas fa-certificate',
          title: '品质至上',
          description: '严格把控产品质量，只为宠物健康负责'
        },
        {
          icon: 'fas fa-users',
          title: '客户第一',
          description: '倾听客户需求，提供超越期待的服务体验'
        },
        {
          icon: 'fas fa-leaf',
          title: '绿色环保',
          description: '倡导环保理念，选用可持续发展的产品'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about {
  background: white;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 100px;
}

.about-text .section-title {
  text-align: left;
  margin-bottom: 15px;
}

.about-text .section-subtitle {
  text-align: left;
  margin-bottom: 30px;
}

.about-description {
  margin-bottom: 40px;
}

.about-description p {
  color: #5a6c7d;
  line-height: 1.8;
  margin-bottom: 20px;
}

.about-features {
  margin-bottom: 40px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
}

.feature-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: linear-gradient(135deg, #FF6B9D 0%, #C06C84 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.feature-content h4 {
  color: #2c3e50;
  margin-bottom: 8px;
  font-weight: 600;
}

.feature-content p {
  color: #7f8c8d;
  line-height: 1.6;
}

.about-visual {
  position: relative;
}

.about-image {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(255, 107, 157, 0.15);
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
}

.experience-badge {
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #FF6B9D 0%, #C06C84 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
}

.badge-content {
  text-align: center;
  color: white;
}

.years {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.text {
  display: block;
  font-size: 0.9rem;
  margin-top: 5px;
}

.values-section {
  text-align: center;
}

.values-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 50px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.value-item {
  text-align: center;
  padding: 30px;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.value-item:hover {
  background: #FFF5F7;
  transform: translateY(-5px);
}

.value-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6B9D 0%, #C06C84 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.value-item h4 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 600;
}

.value-item p {
  color: #7f8c8d;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .about-visual {
    order: -1;
  }

  .experience-badge {
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: 100px;
  }

  .years {
    font-size: 1.5rem;
  }

  .text {
    font-size: 0.8rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>