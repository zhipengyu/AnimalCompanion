<template>
  <div id="app">
    <NavHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    NavHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>