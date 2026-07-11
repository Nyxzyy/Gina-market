<template>
  <div class="about-view">
    <!-- Header Hero -->
    <section class="about-hero">
      <div class="container hero-content">
        <span class="badge">Our Story</span>
        <h1>About Gina's Market</h1>
        <p class="subtitle">Rooted in Gardendale, growing with our community.</p>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="about-content">
      <div class="container content-grid">
        <div class="story-text">
          <h2>Serving North Jefferson County Since 2022</h2>
          <p>
            Gina's Market is a locally owned and operated open-air plant and produce market serving Gardendale, Mt. Olive, and the surrounding North Jefferson County area in Alabama.
          </p>
          <p>
            Located at the corner of Highway 31 and Snow Rogers Road, our market has become a seasonal landmark. Each year, from the first week of March through November 1st, we open our doors to share the bounty of local farms and gardens.
          </p>
          <p>
            We believe that good food and beautiful spaces bring people together. Whether you are looking for gorgeous hanging baskets of ferns for your front porch, fresh squash and sweet tomatoes for dinner, or a jar of local honey, we strive to provide the best quality and service.
          </p>
        </div>

        <div class="story-sidebar glass-card">
          <h3>Quick Facts</h3>
          <ul class="facts-list">
            <li>
              <strong>📍 Location:</strong>
              <span>2531 Snow Rogers Road, Gardendale, AL 35071</span>
            </li>
            <li>
              <strong>📅 Typical Season:</strong>
              <span>First week of March – November 1st</span>
            </li>
            <li>
              <strong>💳 Payment Methods:</strong>
              <span>We accept Cash and Credit Cards. (No EBT accepted at this time)</span>
            </li>
            <li>
              <strong>🚚 Delivery:</strong>
              <span>Available to the immediate Gardendale/Mt. Olive area (subject to order volume).</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <span class="badge">Our Pillars</span>
          <h2>What We Stand For</h2>
        </div>
        <div class="values-grid">
          <div class="value-card glass-card">
            <span class="value-icon">🧑‍🌾</span>
            <h3>Locally Sourced</h3>
            <p>We partner with Alabama growers and regional farmers to source the freshest fruits and vegetables daily, keeping our carbon footprint low and supporting our neighbors.</p>
          </div>
          <div class="value-card glass-card">
            <span class="value-icon">❤️</span>
            <h3>Family & Legacy</h3>
            <p>From our family to yours. We value warm southern hospitality, friendly conversations, and traditional family treats like Nana's handmade fried pies.</p>
          </div>
          <div class="value-card glass-card">
            <span class="value-icon">🌱</span>
            <h3>Community Growth</h3>
            <p>We aren't just selling plants and food; we are helping Gardendale grow. We offer premium advice on bedding plants and ferns tailored for our local climate.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-view {
  padding-top: 80px;
}

.about-hero {
  background: linear-gradient(135deg, rgba(42, 75, 55, 0.08), rgba(205, 127, 93, 0.05));
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

.about-hero h1 {
  font-family: var(--font-serif);
  font-size: clamp(32px, 5vw, 48px);
  color: var(--color-brand);
}

.subtitle {
  font-size: 18px;
  color: var(--color-text-secondary);
}

.about-content {
  padding: 80px 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
}

@media (min-width: 992px) {
  .content-grid {
    grid-template-columns: 1.8fr 1.2fr;
  }
}

.story-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.story-text h2 {
  font-family: var(--font-serif);
  font-size: 28px;
  color: var(--color-brand);
  margin-bottom: 10px;
}

.story-text p {
  font-size: 16px;
  line-height: 1.8;
}

.story-sidebar {
  padding: 32px;
}

.story-sidebar h3 {
  font-size: 20px;
  color: var(--color-brand);
  margin-bottom: 20px;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 10px;
}

.facts-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 14px;
}

.facts-list li {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.facts-list strong {
  color: var(--color-brand);
  font-family: var(--font-display);
}

.facts-list span {
  color: var(--color-text-secondary);
}

/* Values Section */
.values-section {
  padding: 80px 0;
  background-color: rgba(42, 75, 55, 0.02);
  border-top: 1px solid var(--color-border);
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

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

@media (min-width: 768px) {
  .values-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.value-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px;
}

.value-icon {
  font-size: 40px;
}

.value-card h3 {
  font-size: 20px;
  color: var(--color-brand);
}

.value-card p {
  font-size: 14px;
  line-height: 1.6;
}
</style>
