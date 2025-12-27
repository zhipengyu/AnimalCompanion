<template>
  <div class="contact-page">
    <div class="page-header">
      <div class="container">
        <h1>联系我们</h1>
        <p>随时欢迎您的咨询，我们将竭诚为您服务</p>
      </div>
    </div>

    <ContactSection />
  </div>
</template>

<script>
import ContactSection from '../components/ContactSection.vue'

export default {
  name: 'Contact',
  components: {
    ContactSection
  }
}
</script>

<style scoped>
.contact-page {
  margin-top: 80px;
}

.page-header {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
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