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
          <!-- Real Google Map Embed -->
          <div class="map-card glass-card">
            <div class="map-iframe-container">
              <iframe 
                width="100%" 
                height="280" 
                style="border:0;" 
                loading="lazy" 
                allowfullscreen 
                referrerpolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=33.6854758,-86.8196571&t=&z=17&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
            <a href="https://www.google.com/maps/place/Gina's+Market/@33.6854538,-86.8198175,17z/data=!4m6!3m5!1s0x888906b512ed91e9:0xef55a8be20f5b5bd!8m2!3d33.6854758!4d-86.8196571!16s%2Fg%2F11bwgwbtdl?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="btn btn-secondary w-full" id="btn-contact-external-map">
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

.map-iframe-container {
  width: 100%;
  height: 280px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}

.map-iframe-container iframe {
  display: block;
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
