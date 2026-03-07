<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <div class="nav-wrapper">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/img/logo.svg" alt="宠物玩具Logo" class="logo-img" />
            <span class="logo-text">爱宠优品</span>
          </router-link>
        </div>

        <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
          <ul class="nav-list">
            <li class="nav-item">
              <router-link to="/" class="nav-link" @click="closeMenu">首页</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" @click="closeMenu">关于我们</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/services" class="nav-link" @click="closeMenu">产品分类</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" @click="closeMenu">联系我们</router-link>
            </li>
          </ul>

          <div class="nav-actions">
            <a href="tel:+86-400-123-4567" class="btn btn-outline">
              <i class="fas fa-phone"></i>
              400-123-4567
            </a>
          </div>
        </nav>

        <button class="mobile-menu-btn" @click="toggleMenu">
          <span class="hamburger-line" :class="{ 'active': isMenuOpen }"></span>
          <span class="hamburger-line" :class="{ 'active': isMenuOpen }"></span>
          <span class="hamburger-line" :class="{ 'active': isMenuOpen }"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavHeader',
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

.logo {
  display: flex;
  align-items: center;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2c3e50;
}

.logo-img {
  height: 40px;
  margin-right: 10px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #FF6B9D 0%, #C06C84 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  padding: 8px 0;
  position: relative;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #FF6B9D;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #FF6B9D 0%, #C06C84 100%);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.nav-actions .btn {
  font-size: 0.9rem;
  padding: 8px 20px;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background: #2c3e50;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

@media (max-width: 768px) {
  .nav {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 40px 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-list {
    flex-direction: column;
    gap: 20px;
    text-align: center;
    margin-bottom: 30px;
  }

  .nav-actions {
    text-align: center;
  }

  .mobile-menu-btn {
    display: flex;
  }
}
</style>