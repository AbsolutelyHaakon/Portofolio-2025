<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const menuItems = ref([
  { name: 'Hjem', path: '/home', color: '#2d363e' },
  { name: 'CV', path: '/CV' },
  { name: 'Prosjekt', path: '/project' },
  { name: 'Kontakt', path: '/contact' }
]);

const route = useRoute();


</script>

<template>
  <div class="menu-bar" :style="{ backgroundColor: route.path === '/home' ? '#2C363F' : 'transparent', color: route.path === '/home' ? '#F2F5EA' : 'inherit' }">
    <router-link
      v-for="(item, index) in menuItems"
      :key="index"
      :to="item.path"
      class="menu-item"
      :class="{ active: route.path === item.path }"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<style scoped>
.menu-bar {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  width: 100%;
}

.menu-item {
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s;
}

.menu-item:hover {
  color: #FF5733;
}

.menu-item.active {
  color: #FF5733;
}
</style>