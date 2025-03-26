<script setup>

import MenuBar from "@/components/MenuBar.vue";
import BottomBar from "@/components/BottomBar.vue";
</script>

<template>
  <MenuBar></MenuBar>
  <router-view></router-view>
  <BottomBar></BottomBar>
</template>

<style scoped>

</style>