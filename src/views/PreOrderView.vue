<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  deliveryType: 'pickup',
  details: '',
  selectedProducts: [] as string[]
})

const isSubmitted = ref(false)
const isLoading = ref(false)

const handlePreOrderSubmit = () => {
  if (!form.value.name || !form.value.phone) {
    alert('Please provide at least a name and phone number so we can contact you.')
    return
  }
  
  isLoading.value = true
  // Simulate API call
  setTimeout(() => {
    isLoading.value = false
    isSubmitted.value = true
  }, 1000)
}

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    phone: '',
    address: '',
    deliveryType: 'pickup',
    details: '',
    selectedProducts: []
  }
  isSubmitted.value = false
}
</script>

<template>
  <div class="preorder-view">
    <!-- Hero -->
    <section class="preorder-hero">
      <div class="container hero-content">
        <span class="badge">Reservations</span>
        <h1>Reserve & Delivery Request</h1>
        <p class="subtitle">Secure your seasonal fresh items and plants online.</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="preorder-content-section">
      <div class="container main-grid">
        <!-- Guidelines & Information -->
        <div class="preorder-guide">
          <h2>How Pre-Ordering Works</h2>
          <p>
            Due to our seasonal volume, certain items like Nana's famous fried pies, fresh boiled peanuts, and large hanging fern baskets sell out quickly. Our reservation system lets you secure your batch ahead of time.
          </p>

          <div class="steps-box">
            <div class="step-card glass-card">
              <span class="step-icon">1️⃣</span>
              <div>
                <h3>Request Submission</h3>
                <p>Fill out the form with your details, check the products you're interested in, and describe your custom order.</p>
              </div>
            </div>

            <div class="step-card glass-card">
              <span class="step-icon">2️⃣</span>
              <div>
                <h3>Phone Confirmation</h3>
                <p>We'll give you a quick phone call to review what's in stock, confirm pricing, and schedule your delivery or pick-up window.</p>
              </div>
            </div>

            <div class="step-card glass-card">
              <span class="step-icon">3️⃣</span>
              <div>
                <h3>Secure & Pay</h3>
                <p>Pick up at Highway 31, or wait for our delivery truck to arrive. Pay with cash or credit card upon receipt. Simple!</p>
              </div>
            </div>
          </div>

          <div class="delivery-notice-card glass-card">
            <h3>🚚 Delivery Guidelines</h3>
            <p>
              We offer delivery to immediate areas within Gardendale, Mount Olive, and nearby sections of North Jefferson County. 
            </p>
            <ul>
              <li><strong>Minimum order:</strong> Subject to stock availability</li>
              <li><strong>Payment:</strong> Cash or Credit Cards at the door (No EBT currently)</li>
              <li><strong>Verification:</strong> All deliveries are verified via phone before truck dispatch</li>
            </ul>
          </div>
        </div>

        <!-- Form Wrapper -->
        <div class="preorder-form-wrapper glass-card">
          <!-- Success State -->
          <div v-if="isSubmitted" class="success-state">
            <span class="success-icon">🎉</span>
            <h3>Reservation Placed!</h3>
            <p>Thank you, {{ form.name }}. We have received your pre-order details.</p>
            <p class="followup-msg">
              We will call you at <strong>{{ form.phone }}</strong> shortly to verify availability and finalize your pick-up or delivery.
            </p>
            <button @click="resetForm" class="btn btn-primary" id="btn-preorder-view-reset">
              Make Another Request
            </button>
          </div>

          <!-- Form State -->
          <form v-else @submit.prevent="handlePreOrderSubmit" id="form-preorder-page">
            <h3 class="form-title">Place Reservation</h3>
            <p class="form-desc">Fill out your contact details and select the fresh goods you want us to set aside.</p>

            <div class="form-group">
              <label class="form-label" for="preorder-name">Your Name *</label>
              <input 
                id="preorder-name" 
                type="text" 
                v-model="form.name" 
                class="form-input" 
                placeholder="Full name" 
                required 
              />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="preorder-phone">Phone Number *</label>
                <input 
                  id="preorder-phone" 
                  type="tel" 
                  v-model="form.phone" 
                  class="form-input" 
                  placeholder="(205) 285-4467" 
                  required 
                />
              </div>

              <div class="form-group">
                <label class="form-label" for="preorder-email">Email Address</label>
                <input 
                  id="preorder-email" 
                  type="email" 
                  v-model="form.email" 
                  class="form-input" 
                  placeholder="name@example.com" 
                />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="preorder-type">Pickup or Delivery Option</label>
              <select id="preorder-type" v-model="form.deliveryType" class="form-select">
                <option value="pickup">In-Store Pickup (Gardendale Hwy 31)</option>
                <option value="delivery">Local Delivery (Immediate Areas Only)</option>
              </select>
            </div>

            <div v-if="form.deliveryType === 'delivery'" class="form-group">
              <label class="form-label" for="preorder-address">Delivery Address *</label>
              <input 
                id="preorder-address" 
                type="text" 
                v-model="form.address" 
                class="form-input" 
                placeholder="Street address, city, zip code" 
                required 
              />
            </div>

            <div class="form-group">
              <label class="form-label">Items of Interest</label>
              <div class="items-checkgrid">
                <label class="check-item">
                  <input type="checkbox" value="Ferns & Flowers" v-model="form.selectedProducts" />
                  <span>Ferns & Flower Baskets</span>
                </label>
                <label class="check-item">
                  <input type="checkbox" value="Seasonal Vegetables" v-model="form.selectedProducts" />
                  <span>Fresh Vegetables</span>
                </label>
                <label class="check-item">
                  <input type="checkbox" value="Nana's Fried Pies" v-model="form.selectedProducts" />
                  <span>Nana's Fried Pies</span>
                </label>
                <label class="check-item">
                  <input type="checkbox" value="Boiled Peanuts" v-model="form.selectedProducts" />
                  <span>Boiled Peanuts</span>
                </label>
                <label class="check-item">
                  <input type="checkbox" value="Fresh Local Honey" v-model="form.selectedProducts" />
                  <span>Fresh Local Honey</span>
                </label>
                <label class="check-item">
                  <input type="checkbox" value="Jars & Relishes" v-model="form.selectedProducts" />
                  <span>Chow Chow & Jars</span>
                </label>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="preorder-details">Reservation details & quantities</label>
              <textarea 
                id="preorder-details" 
                v-model="form.details" 
                class="form-textarea" 
                rows="4" 
                placeholder="E.g., I would like to reserve 5 peach fried pies and 2 large Boston ferns for pickup on Thursday morning."
              ></textarea>
            </div>

            <button 
              type="submit" 
              class="btn btn-accent w-full" 
              :disabled="isLoading"
              id="btn-preorder-submit-page"
            >
              {{ isLoading ? 'Submitting...' : 'Submit Reservation Request' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.preorder-view {
  padding-top: 80px;
}

.preorder-hero {
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

.preorder-hero h1 {
  font-family: var(--font-serif);
  font-size: clamp(32px, 5vw, 48px);
  color: var(--color-brand);
}

.subtitle {
  font-size: 18px;
  color: var(--color-text-secondary);
}

.preorder-content-section {
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
    grid-template-columns: 1fr 1.2fr;
  }
}

.preorder-guide {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.preorder-guide h2 {
  font-family: var(--font-serif);
  font-size: 28px;
  color: var(--color-brand);
}

.steps-box {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-card {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.step-icon {
  font-size: 24px;
  line-height: 1;
}

.step-card h3 {
  font-size: 16px;
  color: var(--color-brand);
  margin-bottom: 4px;
}

.step-card p {
  font-size: 14px;
}

.delivery-notice-card {
  padding: 24px;
}

.delivery-notice-card h3 {
  font-size: 18px;
  color: var(--color-brand);
  margin-bottom: 12px;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 6px;
}

.delivery-notice-card p {
  font-size: 14px;
  margin-bottom: 12px;
}

.delivery-notice-card ul {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
  color: var(--color-text-secondary);
}

.preorder-form-wrapper {
  padding: 32px;
}

.form-title {
  font-size: 22px;
  color: var(--color-brand);
  margin-bottom: 8px;
}

.form-desc {
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 576px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
  }
}

.items-checkgrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 8px;
  background-color: var(--color-bg-secondary);
  padding: 12px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
}

.check-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  cursor: pointer;
}

.check-item input {
  width: 16px;
  height: 16px;
  accent-color: var(--color-brand);
}

.success-state {
  text-align: center;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.success-icon {
  font-size: 64px;
}

.success-state h3 {
  color: var(--color-brand);
  font-size: 24px;
}

.success-state p {
  font-size: 15px;
}

.followup-msg {
  color: var(--color-text-secondary);
  margin-bottom: 16px;
}

.w-full {
  width: 100%;
}
</style>
