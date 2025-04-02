<script setup>
import WorkHistory from "@/components/WorkHistory.vue";

const profile = {
  image: 'images/qualifications/profilePic.jpg',
  number: '+47 98056032',
  mail: 'haakonsk@live.no',
  dob: '15.10.2000',
  location: 'Ålesund, Norway',
  licenses: [
    {name: 'Klasse B', icon: 'images/qualifications/car.png'},
    {name: 'Klasse A2', icon: 'images/qualifications/mc.png'},
    {name: 'Førstehjelpskurs', icon: 'images/qualifications/health.png'},
    {name: 'Tidligere Sikkerhetsklarert', icon: 'images/qualifications/safety.png'},
  ]
};

const codingExperience = [
  {name: 'Flutter', image: 'images/qualifications/flutter.png', starred: true},
  {name: 'Vue.js', image: 'images/qualifications/vue.png', starred: true},
  {name: 'JavaScript', image: 'images/qualifications/js.png'},
  {name: 'HTML', image: 'images/qualifications/html.png'},
  {name: 'CSS', image: 'images/qualifications/css.png'},
  {name: 'TS', image: 'images/qualifications/ts.png', starred: true},
  {name: 'SQL', image: 'images/qualifications/sql.png', starred: true},
  {name: 'Python', image: 'images/qualifications/python.png'},
  {name: 'Java', image: 'images/qualifications/java.png'},
  {name: 'C#', image: 'images/qualifications/csharp.png'},
  {name: 'Postman', image: 'images/qualifications/postman.png'},
  {name: 'Dart', image: 'images/qualifications/Dart.png', starred: true},
  {name: 'Firebase', image: 'images/qualifications/firebase.png', starred: true},
];
</script>

<template>
  <div class="main-container">
    <div class="left-side">
      <img :src="profile.image" alt="Profile Image" class="profile-image"/>
      <hr class="horizontal-divider"/>
      <p class="profile-title">Telefon</p>
      <p class="profile-info">{{ profile.number }}</p>
      <p class="profile-title">E-Mail</p>
      <p class="profile-info">{{ profile.mail }}</p>
      <p class="profile-title">Fødselsdato</p>
      <p class="profile-info">{{ profile.dob }}</p>
      <p class="profile-title">Bosted</p>
      <p class="profile-info">{{ profile.location }}</p>
      <hr class="horizontal-divider"/>
      <div class="licenses-grid">
        <div v-for="(license, index) in profile.licenses" :key="index" class="license-item">
          <img :src="license.icon" :alt="license.name" class="license-icon"/>
          <p class="license-name">{{ license.name }}</p>
        </div>
      </div>
    </div>
    <div class="vertical-divider"></div>
    <div class="right-side">
      <section>
        <h1>Håkon Svensen Karlsen</h1>
        <h2 style="margin-top: -10px;">Student ved NTNU Ålesund</h2>
        <p>Bachelorstudent som skriver bacheloroppgave vår 2025. Erfaring innenfor applikasjon-,webapplikasjon- og
          mobilutvikling.
          God erfaring fra ulike sektorer i næringslivet, spesielt rundt helse og helsefag som jeg ønsker å ta med meg
          i utvikling av fleksible og tilgjengelige applikasjoner.</p>
      </section>
      <hr class="horizontal-divider thick"/>
      <section>
        <h2>Coding Experience</h2>
        <div class="coding-experience">
          <div v-for="(experience, index) in codingExperience" :key="index" class="experience-item">
            <img :src="experience.image" :alt="experience.name" class="experience-icon"/>
            <p>{{ experience.name }}</p>
            <div v-if="experience.starred" class="star-icon">★</div>
          </div>
        </div>
      </section>
      <hr class="horizontal-divider thick"/>
      <h2>Arbeidserfaring</h2>
      <WorkHistory/>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  width: 100%;
  margin-top: 40px;
}

.left-side {
  width: 30%;
  max-width: 350px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
}

.profile-title {
  font-weight: bolder;
  color: #FF5733;
  font-size: 1.3rem;
  margin-top: 10px;
}

.profile-info {
  font-weight: bold;
  margin-bottom: 10px;
}

.right-side {
  width: 65%;
  padding: 20px;
}

section {
  margin-bottom: 30px;
}

.coding-experience {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
}

.experience-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #2C363F;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.experience-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.star-icon {
  position: absolute;
  height: 30px;
  width: 30px;
  top: 0;
  right: -10px;
  background-color: #FF5733;
  border-radius: 50%;
  padding: 5px;
  font-size: 1rem;
  color: #fff;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.licenses-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  margin-top: 10px;
}

.license-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.license-icon {
  width: 35px;
  height: 35px;
  margin-bottom: 5px;
}

.license-name {
  font-weight: bold;
  text-align: center;
}

.vertical-divider {
  width: 1px;
  background-color: #FF5733;
  opacity: 0.4;
  margin: 30px 10px;
}

.horizontal-divider {
  width: 100%;
  border: none;
  border-top: 1px solid #FF5733;
  opacity: 0.6;
  margin: 20px 0;
}

h1 {
  color: #FF5733;
  font-size: 2.5rem;
  margin-bottom: 0;
}

h2 {
  color: #2C363F;
  font-size: 1.3rem;
}

.thick {
  border-top-width: 2px;
  margin: 20px 10px;
}
</style>