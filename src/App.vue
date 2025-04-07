<script setup>
import MenuBar from "@/components/MenuBar.vue";
import BottomBar from "@/components/BottomBar.vue";
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const icons = ref([
  { image: 'images/pill/home.png', target: '#home' },
  { image: 'images/pill/projects.png', target: '#timeline' },
  { image: 'images/pill/cv.png', target: '#cv' }
]);

const scrollToSection = (target) => {
  const section = document.querySelector(target);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const route = useRoute();
const showPill = computed(() => route.path === '/home');
</script>

<template>
  <router-view></router-view>
  <div v-if="showPill" class="floating-pill">
    <div v-for="item in icons" :key="item.target" class="pill-icon" @click="scrollToSection(item.target)">
      <img :src="item.image" class="pill-image" />
    </div>
  </div>
</template>

<style scoped>
.floating-pill {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  border-radius: 50px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.pill-icon {
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.pill-icon:hover {
  background-color: #f0f0f0;
}

.pill-image {
  width: 24px;
  height: 24px;
}
</style>