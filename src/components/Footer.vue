<template>
  <footer class="main-footer">
    <div class="container footer-grid">
      <!-- Brand Info -->
      <div class="footer-brand">
        <div class="brand-title">
          <span class="brand-icon">🌿</span>
          <h4>Gina's Market</h4>
        </div>
        <p class="brand-description">
          A family-owned open-air market providing Gardendale and North Jefferson County with fresh produce, vibrant plants, and handmade jarred goods.
        </p>
        <div class="payment-badges">
          <span class="payment-badge">Cash accepted</span>
          <span class="payment-badge">Cards accepted</span>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="footer-links">
        <h5>Quick Links</h5>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/products">Our Products</RouterLink></li>
          <li><RouterLink to="/contact">Hours & Location</RouterLink></li>
          <li><RouterLink to="/about">About Us</RouterLink></li>
          <li><RouterLink to="/preorder">Pre-Order Delivery</RouterLink></li>
        </ul>
      </div>

      <!-- Business Hours -->
      <div class="footer-hours">
        <h5>Operating Hours</h5>
        <div class="season-notice">
          <span class="season-badge">Season: March - Nov 1st</span>
        </div>
        <ul class="hours-list">
          <li><span class="day">Tues - Thur</span> <span class="time">9:00 AM - 6:00 PM</span></li>
          <li><span class="day">Friday</span> <span class="time">9:00 AM - 5:00 PM</span></li>
          <li><span class="day">Saturday</span> <span class="time">9:00 AM - 4:00 PM</span></li>
          <li><span class="day">Sun & Mon</span> <span class="time closed">Closed</span></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="footer-contact" id="contact-info">
        <h5>Get In Touch</h5>
        <ul class="contact-list">
          <li>
            <span class="contact-icon">📍</span>
            <a href="https://maps.google.com/?q=2531+Snow+Rogers+Road,+Gardendale,+AL+35071" target="_blank" rel="noopener noreferrer">
              2531 Snow Rogers Road<br>Gardendale, AL 35071
            </a>
          </li>
          <li>
            <span class="contact-icon">📞</span>
            <a href="tel:+12052854467">(205) 285-4467</a>
          </li>
          <li>
            <span class="contact-icon">✉️</span>
            <a href="mailto:ginasmarket2531@gmail.com">ginasmarket2531@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container bottom-container">
        <p>&copy; {{ new Date().getFullYear() }} Gina's Market. All rights reserved.</p>
        <p class="designer-credit">Designed for modern farm-fresh convenience.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  background-color: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: 64px 0 0;
  margin-top: auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  padding-bottom: 48px;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
  }
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.brand-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-title h4 {
  font-family: var(--font-display);
  font-size: 24px;
  color: var(--color-brand);
}

.brand-icon {
  font-size: 24px;
}

.brand-description {
  font-size: 14px;
  color: var(--color-text-secondary);
  max-width: 320px;
}

.payment-badges {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.payment-badge {
  font-size: 11px;
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-secondary);
  font-weight: 500;
}

.footer-links h5, .footer-hours h5, .footer-contact h5 {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-brand);
  margin-bottom: 20px;
}

.footer-links ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  font-size: 14px;
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--color-brand);
}

.season-notice {
  margin-bottom: 12px;
}

.season-badge {
  font-size: 12px;
  background-color: rgba(42, 75, 55, 0.1);
  color: var(--color-brand);
  padding: 4px 10px;
  border-radius: var(--radius-full);
  font-weight: 600;
}

.hours-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
}

.hours-list li {
  display: flex;
  justify-content: space-between;
  color: var(--color-text-secondary);
}

.hours-list .day {
  font-weight: 500;
}

.hours-list .closed {
  color: var(--color-accent);
  font-weight: 500;
}

.contact-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
}

.contact-list li {
  display: flex;
  gap: 12px;
  color: var(--color-text-secondary);
}

.contact-list a {
  transition: color var(--transition-fast);
}

.contact-list a:hover {
  color: var(--color-brand);
}

.contact-icon {
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 2px;
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding: 24px 0;
  background-color: rgba(0, 0, 0, 0.02);
}

.bottom-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 12px;
  color: var(--color-text-secondary);
}

@media (min-width: 768px) {
  .bottom-container {
    flex-direction: row;
  }
}

.designer-credit {
  font-style: italic;
}
</style>
