<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useMarketStore } from '../stores/market'

const store = useMarketStore()
const activeTab = ref<'all' | 'plants' | 'produce' | 'fruit' | 'specialties'>('all')
const searchQuery = ref('')

const filteredProducts = computed(() => {
  return store.products.filter(p => {
    const matchesCategory = activeTab.value === 'all' || p.category === activeTab.value
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})
</script>

<template>
  <div class="products-view">
    <!-- Header -->
    <section class="products-hero">
      <div class="container hero-content">
        <span class="badge">Fresh Offerings</span>
        <h1>Our Market Products</h1>
        <p class="subtitle">Direct from local farms to your kitchen and garden.</p>
      </div>
    </section>

    <!-- Search & Filter Controls -->
    <section class="catalog-section">
      <div class="container">
        <div class="controls-bar glass-card">
          <!-- Search input -->
          <div class="search-box">
            <span class="search-icon">🔍</span>
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Search products (e.g. tomatoes, ferns)..." 
              class="search-input"
              id="product-search"
            />
            <button 
              v-if="searchQuery" 
              @click="searchQuery = ''" 
              class="clear-btn"
              aria-label="Clear search"
            >
              ✕
            </button>
          </div>

          <!-- Category filter tabs -->
          <div class="category-tabs">
            <button 
              :class="['tab-btn', { 'active': activeTab === 'all' }]" 
              @click="activeTab = 'all'"
              id="tab-all-view"
            >
              All
            </button>
            <button 
              :class="['tab-btn', { 'active': activeTab === 'plants' }]" 
              @click="activeTab = 'plants'"
              id="tab-plants-view"
            >
              🌿 Plants
            </button>
            <button 
              :class="['tab-btn', { 'active': activeTab === 'produce' }]" 
              @click="activeTab = 'produce'"
              id="tab-produce-view"
            >
              🍅 Vegetables
            </button>
            <button 
              :class="['tab-btn', { 'active': activeTab === 'fruit' }]" 
              @click="activeTab = 'fruit'"
              id="tab-fruit-view"
            >
              🍑 Fruit
            </button>
            <button 
              :class="['tab-btn', { 'active': activeTab === 'specialties' }]" 
              @click="activeTab = 'specialties'"
              id="tab-specialties-view"
            >
              🥧 Sweets & Jars
            </button>
          </div>
        </div>

        <!-- Products Grid -->
        <div v-if="filteredProducts.length > 0" class="products-grid">
          <div 
            v-for="product in filteredProducts" 
            :key="product.id" 
            class="product-card glass-card"
          >
            <div class="product-header">
              <span class="product-icon">{{ product.icon }}</span>
              <span v-if="product.badge" class="badge badge-accent product-badge">{{ product.badge }}</span>
            </div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <div class="product-footer">
              <div class="product-seasons">
                <span 
                  v-for="season in product.seasons" 
                  :key="season" 
                  :class="['season-tag', season]"
                >
                  {{ season }}
                </span>
              </div>
              <span class="avail-indicator">● Seasonal</span>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="empty-state glass-card">
          <span class="empty-icon">🌾</span>
          <h3>No products found</h3>
          <p>We couldn't find any products matching "{{ searchQuery }}". Try adjusting your search query or categories.</p>
          <button @click="searchQuery = ''; activeTab = 'all'" class="btn btn-primary" id="btn-reset-filters">
            Reset Filters
          </button>
        </div>

        <!-- Preorder Banner -->
        <div class="preorder-banner glass-card">
          <div class="banner-content">
            <h3>Special Requests or Deliveries?</h3>
            <p>Looking for a specific volume of produce, custom hanging flower baskets, or want to secure fried pies ahead of time? Place a preorder request.</p>
          </div>
          <RouterLink to="/preorder" class="btn btn-accent" id="btn-banner-preorder">
            Start Pre-Order Request
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.products-view {
  padding-top: 80px;
}

.products-hero {
  background: linear-gradient(135deg, rgba(74, 122, 93, 0.08), rgba(205, 127, 93, 0.05));
  padding: 80px 0;
  text-align: center;
  border-bottom: 1px solid var(--color-border);
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.products-hero h1 {
  font-family: var(--font-serif);
  font-size: clamp(32px, 5vw, 48px);
  color: var(--color-brand);
}

.subtitle {
  font-size: 18px;
  color: var(--color-text-secondary);
}

.catalog-section {
  padding: 60px 0 80px;
}

.controls-bar {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin-bottom: 40px;
}

@media (min-width: 992px) {
  .controls-bar {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 480px;
}

.search-icon {
  position: absolute;
  left: 16px;
  font-size: 18px;
  color: var(--color-text-secondary);
}

.search-input {
  width: 100%;
  padding: 12px 48px;
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-primary);
  font-size: 15px;
  transition: all var(--transition-fast);
}

.search-input:focus {
  outline: none;
  border-color: var(--color-brand);
  background-color: var(--color-bg-primary);
  box-shadow: 0 0 0 3px rgba(42, 75, 55, 0.15);
}

.clear-btn {
  position: absolute;
  right: 16px;
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: var(--color-text-secondary);
}

.clear-btn:hover {
  color: var(--color-brand);
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tab-btn {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  padding: 8px 16px;
  border-radius: var(--radius-full);
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.tab-btn:hover {
  border-color: var(--color-brand);
  color: var(--color-brand);
}

.tab-btn.active {
  background-color: var(--color-brand);
  color: var(--color-text-light);
  border-color: var(--color-brand);
}

.products-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 56px;
}

@media (min-width: 576px) {
  .products-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 992px) {
  .products-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.product-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-icon {
  font-size: 32px;
}

.product-card h3 {
  font-size: 18px;
}

.product-card p {
  font-size: 14px;
  line-height: 1.6;
  flex-grow: 1;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.product-seasons {
  display: flex;
  gap: 6px;
}

.season-tag {
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: var(--radius-full);
}

.season-tag.spring {
  background-color: rgba(74, 122, 93, 0.1);
  color: var(--color-brand-light);
}

.season-tag.summer {
  background-color: rgba(205, 127, 93, 0.1);
  color: var(--color-accent);
}

.season-tag.fall {
  background-color: rgba(226, 169, 62, 0.1);
  color: var(--color-honey);
}

.avail-indicator {
  font-size: 11px;
  color: var(--color-brand-light);
  font-weight: 500;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 56px;
}

.empty-icon {
  font-size: 48px;
}

.empty-state h3 {
  color: var(--color-brand);
  font-size: 22px;
}

.empty-state p {
  max-width: 400px;
  margin-bottom: 8px;
}

/* Preorder Banner */
.preorder-banner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  padding: 32px;
  background: linear-gradient(135deg, rgba(42, 75, 55, 0.05), rgba(205, 127, 93, 0.05));
  border: 1px solid var(--color-border);
}

@media (min-width: 768px) {
  .preorder-banner {
    flex-direction: row;
    align-items: center;
  }
}

.banner-content h3 {
  font-size: 20px;
  color: var(--color-brand);
  margin-bottom: 8px;
}

.banner-content p {
  font-size: 14px;
  max-width: 600px;
}
</style>
