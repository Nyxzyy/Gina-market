<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitted = ref(false)
const isLoading = ref(false)

const handleContactSubmit = () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Please fill in all required fields.')
    return
  }
  
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    isSubmitted.value = true
  }, 1000)
}

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  isSubmitted.value = false
}
</script>

<template>
  <div class="contact-view">
    <!-- Hero -->
    <section class="contact-hero">
      <div class="container hero-content">
        <span class="badge">Find & Contact Us</span>
        <h1>Hours & Directions</h1>
        <p class="subtitle">We are easy to find and always happy to help.</p>
      </div>
    </section>

    <!-- Location & Contact Grid -->
    <section class="contact-section">
      <div class="container main-grid">
        <!-- Details & Instructions -->
        <div class="contact-details">
          <h2>Visit Our Open-Air Market</h2>
          
          <div class="info-blocks">
            <div class="info-block glass-card">
              <span class="block-icon">📍</span>
              <div>
                <h3>Address</h3>
                <p>2531 Snow Rogers Road, Gardendale, AL 35071</p>
                <p class="sub-text">(Corner of Highway 31 and Snow Rogers Road)</p>
              </div>
            </div>

            <div class="info-block glass-card">
              <span class="block-icon">⏰</span>
              <div>
                <h3>Operating Hours</h3>
                <p><strong>Tues - Thur:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Friday:</strong> 9:00 AM - 5:00 PM</p>
                <p><strong>Saturday:</strong> 9:00 AM - 4:00 PM</p>
                <p class="closed text-accent"><strong>Sun & Mon:</strong> Closed</p>
              </div>
            </div>

            <div class="info-block glass-card">
              <span class="block-icon">📞</span>
              <div>
                <h3>Call or Email</h3>
                <p><strong>Phone:</strong> <a href="tel:+12052854467" class="hover-link">(205) 285-4467</a></p>
                <p><strong>Email:</strong> <a href="mailto:ginasmarket2531@gmail.com" class="hover-link">ginasmarket2531@gmail.com</a></p>
              </div>
            </div>
          </div>

          <div class="directions-card glass-card">
            <h3>How to Find Us</h3>
            <div class="instr-step">
              <span class="step-num">🚗</span>
              <p><strong>From I-65:</strong> Take the Mt. Olive Road Exit and head East. Turn left onto Highway 31 at the intersection. Go North—we are located at the next red light on your right.</p>
            </div>
            <div class="instr-step">
              <span class="step-num">🚗</span>
              <p><strong>Coming North on Hwy 31:</strong> Drive past the Old Antique Mall. We are at the red light just North of Mt. Olive Road, right on the corner of Hwy 31 and Snow Rogers Road.</p>
            </div>
          </div>
        </div>

        <!-- Map & Contact Form -->
        <div class="interactive-column">
          <!-- Illustrative Map Block -->
          <div class="map-card glass-card">
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
            <a href="https://maps.google.com/?q=2531+Snow+Rogers+Road,+Gardendale,+AL+35071" target="_blank" rel="noopener noreferrer" class="btn btn-secondary w-full" id="btn-contact-external-map">
              Open in Google Maps
            </a>
          </div>

          <!-- Contact Form -->
          <div class="form-card glass-card">
            <div v-if="isSubmitted" class="success-state">
              <span class="success-icon">📬</span>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out, {{ form.name }}. We have received your message and will respond to your email at <strong>{{ form.email }}</strong> as soon as possible.</p>
              <button @click="resetForm" class="btn btn-primary" id="btn-contact-reset">Send Another Message</button>
            </div>

            <form v-else @submit.prevent="handleContactSubmit" id="form-contact">
              <h3>Send Us a Message</h3>
              <p class="form-desc">Have a question about what plants are in stock or seasonal hours? Drop us a note!</p>

              <div class="form-group">
                <label class="form-label" for="contact-name">Name *</label>
                <input 
                  id="contact-name" 
                  type="text" 
                  v-model="form.name" 
                  class="form-input" 
                  placeholder="Your name" 
                  required 
                />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-email">Email Address *</label>
                <input 
                  id="contact-email" 
                  type="email" 
                  v-model="form.email" 
                  class="form-input" 
                  placeholder="name@example.com" 
                  required 
                />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-subject">Subject</label>
                <input 
                  id="contact-subject" 
                  type="text" 
                  v-model="form.subject" 
                  class="form-input" 
                  placeholder="What is this regarding?" 
                />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-message">Message *</label>
                <textarea 
                  id="contact-message" 
                  v-model="form.message" 
                  class="form-textarea" 
                  rows="4" 
                  placeholder="Type your message here..." 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="btn btn-accent w-full" 
                :disabled="isLoading"
                id="btn-contact-submit"
              >
                {{ isLoading ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-view {
  padding-top: 80px;
}

.contact-hero {
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

.contact-hero h1 {
  font-family: var(--font-serif);
  font-size: clamp(32px, 5vw, 48px);
  color: var(--color-brand);
}

.subtitle {
  font-size: 18px;
  color: var(--color-text-secondary);
}

.contact-section {
  padding: 60px 0 80px;
}

.main-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: flex-start;
}

@media (min-width: 992px) {
  .main-grid {
    grid-template-columns: 1.1fr 0.9fr;
  }
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.contact-details h2 {
  font-family: var(--font-serif);
  font-size: 28px;
  color: var(--color-brand);
}

.info-blocks {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-block {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  transition: transform var(--transition-normal);
}

.info-block:hover {
  transform: translateY(-2px);
}

.block-icon {
  font-size: 32px;
  line-height: 1;
}

.info-block h3 {
  font-size: 16px;
  color: var(--color-brand);
  margin-bottom: 6px;
}

.info-block p {
  font-size: 14px;
}

.sub-text {
  font-size: 12px !important;
  color: var(--color-text-secondary);
  margin-top: 2px;
}

.hover-link:hover {
  color: var(--color-brand);
}

.directions-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.directions-card h3 {
  font-size: 18px;
  color: var(--color-brand);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 8px;
}

.instr-step {
  display: flex;
  gap: 16px;
}

.step-num {
  font-size: 20px;
  flex-shrink: 0;
}

.instr-step p {
  font-size: 14px;
  line-height: 1.6;
}

/* Map and Form */
.interactive-column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.map-card {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mock-map {
  background-color: var(--color-bg-secondary);
  height: 240px;
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

.form-card {
  padding: 32px;
}

.form-card h3 {
  font-size: 20px;
  color: var(--color-brand);
  margin-bottom: 8px;
}

.form-desc {
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: 24px;
}

.success-state {
  text-align: center;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.success-icon {
  font-size: 64px;
}

.success-state h3 {
  color: var(--color-brand);
  font-size: 24px;
}

.success-state p {
  margin-bottom: 16px;
  font-size: 14px;
}

.w-full {
  width: 100%;
}
</style>
