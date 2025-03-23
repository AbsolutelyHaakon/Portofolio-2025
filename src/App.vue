<script setup>
import BioShort from "@/components/BioShort.vue";
import CurvedLine from "@/components/CurvedLine.vue";
import Timeline from "@/components/Timeline.vue";
</script>

<template>
  <main>
    <header>
      <bio-short></bio-short>
    </header>
    <CurvedLine />

    <div class="timeline-container">
      <Timeline />
    </div>
  </main>
</template>

<style scoped>
header {
  background-color: #2C363F;
  color: #F2F5EA;
  width: 100vw;
  padding: 50px 0 0 0;
  text-align: center;
}

.timeline-container {
  position: relative;
  top: -350px;
}
</style>