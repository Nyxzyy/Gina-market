<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['main-header', { 'scrolled': isScrolled }]">
    <div class="container header-container">
      <RouterLink to="/" class="logo-area" id="nav-logo-link">
        <span class="logo-icon">🌿</span>
        <div class="logo-text">
          <span class="logo-title">Gina's Market</span>
          <span class="logo-subtitle">Hwy 31 • Gardendale</span>
        </div>
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="desktop-nav">
        <RouterLink to="/" class="nav-link" active-class="active" id="nav-home">Home</RouterLink>
        <RouterLink to="/products" class="nav-link" active-class="active" id="nav-products">Products</RouterLink>
        <RouterLink to="/contact" class="nav-link" active-class="active" id="nav-location">Location & Hours</RouterLink>
        <RouterLink to="/about" class="nav-link" active-class="active" id="nav-about">About Us</RouterLink>
        <RouterLink to="/preorder" class="btn btn-accent header-cta" id="nav-cta">Pre-Order</RouterLink>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button 
        class="mobile-menu-toggle" 
        @click="toggleMobileMenu" 
        :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle navigation menu"
        id="btn-mobile-toggle"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <!-- Mobile Nav -->
      <div :class="['mobile-menu', { 'open': isMobileMenuOpen }]">
        <nav class="mobile-nav">
          <RouterLink to="/" class="mobile-link" @click="toggleMobileMenu" id="mob-nav-home">Home</RouterLink>
          <RouterLink to="/products" class="mobile-link" @click="toggleMobileMenu" id="mob-nav-products">Products</RouterLink>
          <RouterLink to="/contact" class="mobile-link" @click="toggleMobileMenu" id="mob-nav-location">Location & Hours</RouterLink>
          <RouterLink to="/about" class="mobile-link" @click="toggleMobileMenu" id="mob-nav-about">About Us</RouterLink>
          <RouterLink to="/preorder" class="btn btn-accent w-full" @click="toggleMobileMenu" id="mob-nav-cta">Pre-Order</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 24px 0;
  transition: all var(--transition-normal);
}

.main-header.scrolled {
  padding: 16px 0;
  background-color: var(--color-bg-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  font-size: 28px;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 22px;
  color: var(--color-brand);
  line-height: 1.1;
}

.logo-subtitle {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: 32px;
}

.nav-link {
  font-family: var(--font-display);
  font-weight: 500;
  color: var(--color-text-primary);
  position: relative;
  padding: 8px 0;
  transition: color var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-brand);
  transition: width var(--transition-fast);
}

.nav-link:hover, .nav-link.active {
  color: var(--color-brand);
}

.nav-link:hover::after, .nav-link.active::after {
  width: 100%;
}

.header-cta {
  padding: 8px 20px;
  font-size: 14px;
}

.mobile-menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
}

.mobile-menu-toggle .bar {
  width: 100%;
  height: 2px;
  background-color: var(--color-text-primary);
  transition: all var(--transition-fast);
}

.mobile-menu-toggle[aria-expanded="true"] .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.mobile-menu-toggle[aria-expanded="true"] .bar:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle[aria-expanded="true"] .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 280px;
  height: 100vh;
  background-color: var(--color-bg-primary);
  box-shadow: var(--shadow-lg);
  padding: 100px 24px 24px;
  transition: right var(--transition-normal);
  z-index: 1050;
  border-left: 1px solid var(--color-border);
}

.mobile-menu.open {
  right: 0;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.mobile-link {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 500;
  color: var(--color-text-primary);
  padding: 8px 0;
  border-bottom: 1px solid var(--color-border);
}

.mobile-link:hover {
  color: var(--color-brand);
}

.w-full {
  width: 100%;
}

@media (min-width: 768px) {
  .desktop-nav {
    display: flex;
  }
  .mobile-menu-toggle {
    display: none;
  }
  .mobile-menu {
    display: none;
  }
}
</style>
