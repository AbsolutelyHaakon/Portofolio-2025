<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imageUrl: String,
  headerText: String,
  textColor: String
});
</script>

<template>
  <div class="container">
      <h1 :style="{ color: textColor }">{{ headerText }}</h1>
      <img :src="imageUrl" alt="Gannt Diagram" />
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
}

.container {
  width: 100%;
  max-width: 100vw;
  margin: 0 auto 150px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: white;
}

.container img {
  width: 90vw;
  aspect-ratio: 34 / 12;
  object-fit: cover;
}

@media (max-width: 500px) {

  .container img {
    width: 100vw;
    aspect-ratio: 34 / 12;
    object-fit: cover;
  }

  h1 {
    font-size: 1.5rem;
  }

  .container {
    margin-bottom: 50px;
  }

}
</style>