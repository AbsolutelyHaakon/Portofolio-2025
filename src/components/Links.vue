<script setup>
const links = [
  { url: 'https://www.linkedin.com/in/h%C3%A5kon-svensen-karlsen-a19a49348/', img: 'images/external/linkedin.png' },
  { url: 'https://github.com/AbsolutelyHaakon', img: 'images/external/github.png' },
  { url: 'https://x.com/BFG_HSK', img: 'images/external/x.png' }
];
</script>

<template>
  <div class="links-container">
    <div v-for="(link, index) in links" :key="index" class="link-wrapper">
      <div class="link-item">
        <a :href="link.url" target="_blank">
          <img :src="link.img" alt="Link image" />
        </a>
      </div>
      <div v-if="index < links.length - 1" class="vertical-line"></div>
    </div>
  </div>
</template>

<style scoped>
.links-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: auto auto 100px auto;
  max-width: 900px;
}

.link-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.link-item img {
  max-height: 50px;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.link-item img:hover {
  filter: grayscale(0%);
}

.vertical-line {
  width: 6px;
  height: 70px;
  background-color: #eeecec;
  border-radius: 2px;
}
</style>
