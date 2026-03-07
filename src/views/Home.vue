<template>
  <div class="home">
    <HeroSection />
    <ServicesSection />
    <ProductsSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ProductsSection from '../components/ProductsSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    ServicesSection,
    ProductsSection,
    AboutSection,
    ContactSection
  }
}
</script>

<style scoped>
.home {
  margin-top: 80px;
}
</style>