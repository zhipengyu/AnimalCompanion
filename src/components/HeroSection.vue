<template>
  <section class="hero">
    <div class="hero-background">
      <div class="hero-slide"
           v-for="(slide, index) in slides"
           :key="index"
           :class="{ 'active': currentSlide === index }"
           :style="{ backgroundImage: `url(${slide.image})` }">
      </div>
    </div>

    <div class="hero-content">
      <div class="container">
        <div class="hero-text">
          <h1 class="hero-title">{{ slides[currentSlide].title }}</h1>
          <p class="hero-subtitle">{{ slides[currentSlide].subtitle }}</p>
          <div class="hero-buttons">
            <router-link to="/services" class="btn btn-primary">
              <i class="fas fa-paw"></i>
              选购产品
            </router-link>
            <router-link to="/contact" class="btn btn-outline">
              <i class="fas fa-phone"></i>
              联系我们
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-indicators">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        class="indicator"
        :class="{ 'active': currentSlide === index }"
        @click="currentSlide = index">
      </button>
    </div>

    <div class="scroll-indicator">
      <div class="scroll-arrow">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          title: '爱宠，从选对用品开始',
          subtitle: '精选优质宠物用品，给宠物最好的关爱与尽心守护，让每个毛孩子都能健康快乐成长',
          image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&h=1080&fit=crop'
        },
        {
          title: '科学养宠，专业关爱',
          subtitle: '从营养食品到日常护理，从玩具零食到美容用品，为您的爱宠提供全方位关怀',
          image: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=1920&h=1080&fit=crop'
        },
        {
          title: '品质生活，从宠物开始',
          subtitle: '严选全球优质品牌，专业品质保障，让宠物与主人一起享受更美好的生活',
          image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=1080&fit=crop'
        }
      ],
      slideInterval: null
    }
  },
  mounted() {
    this.startAutoSlide()
  },
  beforeUnmount() {
    this.stopAutoSlide()
  },
  methods: {
    startAutoSlide() {
      this.slideInterval = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length
      }, 5000)
    },
    stopAutoSlide() {
      if (this.slideInterval) {
        clearInterval(this.slideInterval)
      }
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.hero-slide.active {
  opacity: 1;
}

.hero-slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 40px;
  line-height: 1.8;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  animation: fadeInUp 1s ease-out 0.2s both;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.4s both;
}

.hero-buttons .btn {
  font-size: 1.1rem;
  padding: 15px 35px;
  border-radius: 50px;
}

.hero-indicators {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 3;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
}

.scroll-indicator {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  animation: bounce 2s infinite;
}

.scroll-arrow {
  color: white;
  font-size: 1.5rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-buttons .btn {
    width: 200px;
  }
}
</style>