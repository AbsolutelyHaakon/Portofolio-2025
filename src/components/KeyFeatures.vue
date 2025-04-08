<script setup>
import { defineProps } from 'vue';

// Define props to accept an array of key features
defineProps({
  features: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<template>
  <div class="key-features-grid">
    <div v-for="(feature, index) in features" :key="index" class="key-feature-item">
      <img :src="feature.logo" :alt="feature.title" class="feature-logo" />
      <h3 class="feature-title">{{ feature.title }}</h3>
    </div>
  </div>
</template>

<style scoped>
.key-features-grid {
  margin: 0 auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  text-align: center;
}

.key-feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.feature-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.feature-title {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
}
</style>