<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

interface FeaturedProduct {
  name: string
  icon: string
  description: string
  badge?: string
}

const featuredProducts = ref<FeaturedProduct[]>([
  { name: 'Ferns & Hanging Baskets', icon: '🌿', description: 'Gorgeous, lush green ferns perfect for porches and patios.', badge: 'Popular' },
  { name: 'Vine-Ripened Tomatoes', icon: '🍅', description: 'Sweet, juicy, locally-grown garden tomatoes.', badge: 'Fresh Crop' },
  { name: 'Nana\'s Fried Pies', icon: '🥧', description: 'Famous hand-made fried pies in apple, peach, and other seasonal fillings.', badge: 'Best Seller' },
  { name: 'Fresh Local Honey', icon: '🍯', description: 'Pure, raw local Alabama honey.', badge: 'Local Farm' }
])
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-content">
          <span class="badge badge-accent hero-badge">Opening March 2026</span>
          <h1 class="hero-title">Modern Farm-Fresh Goodness</h1>
          <p class="hero-desc">
            Gina's Market is a family-owned open-air market in Gardendale, AL. We bring you the finest seasonal plants, Alabama-grown produce, Nana's fried pies, and local specialties.
          </p>
          <div class="hero-ctas">
            <RouterLink to="/products" class="btn btn-primary" id="btn-hero-explore">Browse Catalog</RouterLink>
            <RouterLink to="/preorder" class="btn btn-secondary" id="btn-hero-preorder">Pre-Order Delivery</RouterLink>
          </div>
          <div class="hero-quick-info">
            <div class="info-item">
              <span class="info-icon">📍</span>
              <span>Hwy 31 & Snow Rogers Rd</span>
            </div>
            <div class="info-item">
              <span class="info-icon">📞</span>
              <span>(205) 285-4467</span>
            </div>
          </div>
        </div>
        
        <div class="hero-image-wrapper">
          <div class="image-card">
            <img src="/images/market_hero.jpg" alt="Gina's Market Open Air Stand" class="hero-img" />
            <div class="image-overlay">
              <span class="overlay-tag">🚜 Farm-to-Table</span>
              <span class="overlay-tag">🌸 Spring Flowers</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seasonal Opening Callout -->
    <section class="opening-callout">
      <div class="container">
        <div class="callout-card">
          <div class="callout-info">
            <span class="big-icon">📢</span>
            <div>
              <h3>March 2026 Re-Opening!</h3>
              <p>We are packing up our winter coats and getting ready for our first week in March. Check back for fresh spring ferns, flowers, and local favorites!</p>
            </div>
          </div>
          <div class="callout-hours">
            <h4>2026 Operating Hours</h4>
            <p><strong>Tues - Thur:</strong> 9:00 AM - 6:00 PM</p>
            <p><strong>Friday:</strong> 9:00 AM - 5:00 PM</p>
            <p><strong>Saturday:</strong> 9:00 AM - 4:00 PM</p>
            <p class="closed-notice"><strong>Sun & Mon:</strong> Closed</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights Section -->
    <section class="highlights-section">
      <div class="container">
        <div class="section-header">
          <span class="badge">Why Shop Local</span>
          <h2>The Gina's Market Experience</h2>
        </div>
        <div class="highlights-grid">
          <div class="highlight-card glass-card">
            <div class="highlight-icon-box bg-green">🥦</div>
            <h3>Seasonal Produce</h3>
            <p>Picked at the peak of flavor. From juicy summer tomatoes to autumn apples, our offerings change with the seasons.</p>
          </div>
          <div class="highlight-card glass-card">
            <div class="highlight-icon-box bg-terracotta">🌺</div>
            <h3>Ferns & Flowers</h3>
            <p>Beautify your outdoor spaces with our premium ferns, hibiscus, and starter bedding plants perfect for local soils.</p>
          </div>
          <div class="highlight-card glass-card">
            <div class="highlight-icon-box bg-honey">🍯</div>
            <h3>Local Jarred Goods</h3>
            <p>Local Alabama raw honey, chow chow, pickles, salsa, pickled beets, boiled peanuts, and Nana's famous fried pies.</p>
          </div>
          <div class="highlight-card glass-card">
            <div class="highlight-icon-box bg-blue">🚚</div>
            <h3>Local Delivery</h3>
            <p>We offer convenient delivery to immediate areas. Place a pre-order reservation online to secure your fresh batch.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="featured-products">
      <div class="container">
        <div class="section-header">
          <span class="badge">Customer Favorites</span>
          <h2>Featured Offerings</h2>
          <p>A few of our most popular seasonal items. Explore our full catalog to see everything we carry.</p>
        </div>

        <div class="products-grid">
          <div 
            v-for="product in featuredProducts" 
            :key="product.name" 
            class="product-card glass-card"
          >
            <div class="product-header">
              <span class="product-icon">{{ product.icon }}</span>
              <span v-if="product.badge" class="badge badge-accent product-badge">{{ product.badge }}</span>
            </div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>

        <div class="catalog-cta">
          <RouterLink to="/products" class="btn btn-primary" id="btn-view-full-catalog">
            View Full Digital Catalog →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Pre-Order Reservation Callout -->
    <section class="preorder-callout-section">
      <div class="container preorder-card-box">
        <div class="preorder-banner-card glass-card">
          <div class="banner-text">
            <span class="badge">Reservations</span>
            <h2>Pre-Order & Home Delivery</h2>
            <p>Want to secure Nana's fried pies before they sell out? Need fresh ferns delivered to your door in Gardendale or Mt. Olive? Submit a delivery request online and pay on arrival.</p>
            
            <div class="mini-steps">
              <div class="mini-step"><span class="step-num">1</span> Request online</div>
              <div class="mini-step"><span class="step-num">2</span> Phone verification</div>
              <div class="mini-step"><span class="step-num">3</span> Hand-delivery</div>
            </div>
          </div>
          <div class="banner-action">
            <RouterLink to="/preorder" class="btn btn-accent" id="btn-preorder-cta">
              Start Reservation →
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Location Summary Section -->
    <section class="location-summary-section">
      <div class="container location-grid">
        <div class="location-map-card glass-card">
          <!-- Illustrative Map Block -->
          <div class="mock-map">
            <div class="map-grid-lines"></div>
            <div class="highway-hwy31">Highway 31</div>
            <div class="road-snowrogers">Snow Rogers Road</div>
            <div class="highway-i65">I-65 Exit</div>
            <div class="map-pin">
              <span class="pin-dot">🌿</span>
              <span class="pin-pulse"></span>
              <div class="pin-tooltip">Gina's Market</div>
            </div>
          </div>
        </div>
        <div class="location-text">
          <span class="badge">Find Us</span>
          <h2>Conveniently Located</h2>
          <p>
            We are situated on the corner of **Highway 31 and Snow Rogers Road** in Gardendale, Alabama. Easy to reach from the Mt. Olive Road exit on I-65.
          </p>
          <div class="quick-details">
            <p>📍 <strong>Address:</strong> 2531 Snow Rogers Road, Gardendale, AL</p>
            <p>💳 <strong>Payment:</strong> Cash & Credit Cards (No EBT)</p>
          </div>
          <RouterLink to="/contact" class="btn btn-secondary" id="btn-home-directions">
            Full Driving Directions & Contact Info
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  padding-top: 80px;
}

/* Hero Section */
.hero-section {
  padding: 60px 0;
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}

@media (min-width: 992px) {
  .hero-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.hero-badge {
  font-size: 14px;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 700;
  line-height: 1.15;
  color: var(--color-brand);
}

.hero-desc {
  font-size: 18px;
  max-width: 500px;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 10px;
  width: 100%;
}

.hero-quick-info {
  display: flex;
  gap: 24px;
  margin-top: 20px;
  font-size: 14px;
  color: var(--color-text-secondary);
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.info-icon {
  font-size: 18px;
}

.hero-image-wrapper {
  position: relative;
}

.image-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
  position: relative;
  aspect-ratio: 16 / 9;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.image-card:hover .hero-img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 10px;
}

.overlay-tag {
  background-color: rgba(26, 61, 43, 0.85);
  color: var(--color-text-light);
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 500;
  backdrop-filter: blur(4px);
}

/* Seasonal Opening Callout */
.opening-callout {
  padding: 40px 0;
}

.callout-card {
  background: linear-gradient(135deg, var(--color-brand-dark), var(--color-brand));
  color: var(--color-text-light);
  border-radius: var(--radius-md);
  padding: 32px;
  box-shadow: var(--shadow-md);
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;
}

@media (min-width: 768px) {
  .callout-card {
    grid-template-columns: 2fr 1fr;
  }
}

.callout-info {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.callout-info h3 {
  font-size: 24px;
  color: var(--color-text-light);
  margin-bottom: 8px;
}

.callout-info p {
  color: rgba(250, 248, 245, 0.85);
  font-size: 15px;
}

.big-icon {
  font-size: 40px;
  line-height: 1;
}

.callout-hours {
  background-color: rgba(250, 248, 245, 0.1);
  padding: 20px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(250, 248, 245, 0.15);
  font-size: 14px;
}

.callout-hours h4 {
  font-size: 16px;
  color: var(--color-text-light);
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(250, 248, 245, 0.2);
  padding-bottom: 6px;
}

.callout-hours p {
  color: rgba(250, 248, 245, 0.9);
  margin-bottom: 6px;
}

.closed-notice {
  color: var(--color-accent) !important;
  font-weight: 500;
}

/* Highlights Section */
.highlights-section {
  padding: 80px 0;
  background-color: rgba(42, 75, 55, 0.02);
}

.section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.section-header h2 {
  font-family: var(--font-serif);
  font-size: clamp(28px, 4vw, 38px);
  color: var(--color-brand);
}

.highlights-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .highlights-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 992px) {
  .highlights-grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.highlight-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.highlight-icon-box {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.bg-green { background-color: rgba(74, 122, 93, 0.15); }
.bg-terracotta { background-color: rgba(205, 127, 93, 0.15); }
.bg-honey { background-color: rgba(226, 169, 62, 0.15); }
.bg-blue { background-color: rgba(62, 142, 226, 0.15); }

.highlight-card h3 {
  font-size: 18px;
}

.highlight-card p {
  font-size: 14px;
}

/* Featured Products */
.featured-products {
  padding: 80px 0;
}

.products-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 40px;
}

@media (min-width: 576px) {
  .products-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 992px) {
  .products-grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
  color: var(--color-text-secondary);
}

.catalog-cta {
  text-align: center;
}

/* Pre-Order Callout */
.preorder-callout-section {
  padding: 80px 0;
  background-color: rgba(205, 127, 93, 0.02);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.preorder-banner-card {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  background: linear-gradient(135deg, rgba(42, 75, 55, 0.05), rgba(205, 127, 93, 0.05));
  border: 1px solid var(--color-border);
}

@media (min-width: 992px) {
  .preorder-banner-card {
    flex-direction: row;
    align-items: center;
  }
}

.banner-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.banner-text h2 {
  font-family: var(--font-serif);
  font-size: 32px;
  color: var(--color-brand);
}

.banner-text p {
  max-width: 650px;
  font-size: 15px;
}

.mini-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 8px;
}

.mini-step {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.mini-step .step-num {
  width: 20px;
  height: 20px;
  background-color: var(--color-brand);
  color: var(--color-text-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
}

/* Location Summary */
.location-summary-section {
  padding: 80px 0;
}

.location-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
}

@media (min-width: 768px) {
  .location-grid {
    grid-template-columns: 1.1fr 0.9fr;
  }
}

.location-map-card {
  padding: 16px;
}

.mock-map {
  background-color: var(--color-bg-secondary);
  height: 260px;
  border-radius: var(--radius-sm);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.map-grid-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
  background-size: 20px 20px;
}

.highway-hwy31 {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 48px;
  background-color: rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-rl;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
}

.road-snowrogers {
  position: absolute;
  top: 60%;
  left: 0;
  right: 0;
  height: 36px;
  background-color: rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
}

.highway-i65 {
  position: absolute;
  left: 10%;
  top: 20%;
  padding: 6px;
  background-color: var(--color-bg-tertiary);
  border-radius: var(--radius-sm);
  font-size: 10px;
  font-weight: 600;
  color: var(--color-text-secondary);
  border: 1px dashed var(--color-border);
}

.map-pin {
  position: absolute;
  left: calc(50% + 24px);
  top: calc(60% - 18px);
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
}

.pin-dot {
  font-size: 28px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
  animation: bounce 2s infinite;
}

.pin-pulse {
  position: absolute;
  bottom: -4px;
  width: 12px;
  height: 6px;
  background: rgba(42, 75, 55, 0.4);
  border-radius: 50%;
  transform: scale(1);
  animation: pulse 2s infinite;
}

.pin-tooltip {
  background-color: var(--color-brand);
  color: var(--color-text-light);
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  margin-top: 4px;
  white-space: nowrap;
  box-shadow: var(--shadow-sm);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes pulse {
  0% { transform: scale(0.6); opacity: 1; }
  100% { transform: scale(1.6); opacity: 0; }
}

.location-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.location-text h2 {
  font-family: var(--font-serif);
  font-size: 32px;
  color: var(--color-brand);
}

.location-text p {
  font-size: 16px;
}

.quick-details {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px 0;
}
</style>
