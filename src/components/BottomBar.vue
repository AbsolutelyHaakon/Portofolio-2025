<script setup>
const contactInfo = {
  personal: {
    name: 'Håkon Svensen Karlsen',
    email: 'haakonsk@live.no',
    phone: '+47 98056032',
  },
  business: {
    name: 'Afasia',
    email: 'contact@afasia.no',
  },
  links: [
    { name: 'GitHub', url: 'https://github.com', logo: 'images/external/github.png' },
    { name: 'LinkedIn', url: 'https://linkedin.com', logo: 'images/external/linkedin.png' },
    { name: 'Twitter', url: 'https://twitter.com', logo: 'images/external/x.png' },
  ],
};
</script>

<template>
  <div class="bottom-bar">
    <div class="contact-info">
      <div class="personal-info">
        <h2>Personlig informasjon</h2>
        <p style="font-size: 1rem">{{ contactInfo.personal.name }}</p>
        <p><a :href="`mailto:${contactInfo.personal.email}`">{{ contactInfo.personal.email }}</a></p>
        <p><a :href="`tel:${contactInfo.personal.phone}`">{{ contactInfo.personal.phone }}</a></p>
      </div>
      <div class="business-info">
        <h2>Prosjekt</h2>
        <p style="font-size: 1rem">{{ contactInfo.business.name }}</p>
        <p><a :href="`mailto:${contactInfo.business.email}`">{{ contactInfo.business.email }}</a></p>
      </div>
    </div>
    <div class="links">
      <div class="link-logos">
        <a v-for="link in contactInfo.links" :key="link.url" :href="link.url" target="_blank">
          <img :src="link.logo" :alt="link.name" class="link-logo" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 40px;
  background-color: #2c3e50;
  color: white;
  position: relative;
  bottom: 0;
  width: 100vw;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);
  margin-top: 150px;
}

.contact-info {
  display: flex;
  gap: 50px;
}

.personal-info, .business-info {
  display: flex;
  flex-direction: column;
}

.links {
  display: flex;
  flex-direction: column;
}

.link-logo {
  margin-top: 50px;
  margin-right: 20px;
  width: 30px;
  height: 30px;
}

a {
  color: #FF5733;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}

.logo {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.logo img {
  width: 100px;
  height: auto;
}
</style>