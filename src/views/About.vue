<template>
  <div class="about-page">
    <div class="page-header">
      <div class="container">
        <h1>关于我们</h1>
        <p>了解我们的企业历程、团队实力和核心价值</p>
      </div>
    </div>

    <AboutSection />
  </div>
</template>

<script>
import AboutSection from '../components/AboutSection.vue'

export default {
  name: 'About',
  components: {
    AboutSection
  }
}
</script>

<style scoped>
.about-page {
  margin-top: 80px;
}

.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
}

.page-header h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.9;
}
</style>