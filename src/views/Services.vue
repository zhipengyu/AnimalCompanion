<template>
  <div class="services-page">
    <div class="page-header">
      <div class="container">
        <h1>服务项目</h1>
        <p>专业的技术服务，满足您的多样化需求</p>
      </div>
    </div>

    <ServicesSection />
  </div>
</template>

<script>
import ServicesSection from '../components/ServicesSection.vue'

export default {
  name: 'Services',
  components: {
    ServicesSection
  }
}
</script>

<style scoped>
.services-page {
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