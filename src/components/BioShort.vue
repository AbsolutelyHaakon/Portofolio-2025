<script setup>
import {ref, onMounted} from 'vue';

const profileImage = 'images/qualifications/profilePic.jpg';
const name = 'Håkon Svensen Karlsen';
const qualifications = [
  {name: 'Flutter', image: 'images/qualifications/flutter.png'},
  {name: 'Vue.js', image: 'images/qualifications/vue.png'},
  {name: 'JavaScript', image: 'images/qualifications/js.png'},
  {name: 'HTML', image: 'images/qualifications/html.png'},
  {name: 'CSS', image: 'images/qualifications/css.png'},
  {name: 'TS', image: 'images/qualifications/ts.png'},
  {name: 'SQL', image: 'images/qualifications/sql.png'},
];
const biography = 'En student på 24 år som fullfører bachelor ved NTNU Ålesund. God erfaring fra en rekke prosjekter og praksis i IT-Firma. Denne siden detaljerer prosjektene og arbeidserfaringen jeg mener er relevant for fremtidig arbeid. Oppdateringer på ulike prosjekter finnes også her.';

const nameRef = ref(null);
const showBio = ref(false);
const showQualifications = ref(false);

onMounted(() => {
  const element = nameRef.value;
  const fullText = name;
  let index = 0;

  function type() {
    if (index <= fullText.length) {
      element.innerHTML = fullText.substring(0, index++);
      setTimeout(type, 200);
    } else {
      showBio.value = true;
      setTimeout(() => {
        showQualifications.value = true;
      }, 2000); // 2 seconds delay
    }
  }

  type();
});
</script>

<template>
  <div class="bio-box">
    <div class="left">
      <img :src="profileImage" alt="Profile" class="profile-image"/>
    </div>
    <div class="right">
      <p class="intro">Hei, jeg er</p>
      <h2 class="name" ref="nameRef"></h2>
      <p :class="{ bio: true, 'bio-visible': showBio }">{{ biography }}</p>
    </div>
  </div>
  <div class="qualification-box" :class="{ 'qualifications-visible': showQualifications }">
    <h2>Hovedkvalifikasjoner</h2>
    <ul class="strengths">
      <li v-for="qualification in qualifications" :key="qualification.name">
        <img :src="qualification.image" :alt="qualification.name" class="strengths-image"/>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.bio-box {
  display: flex;
  border-radius: 10px;
  padding: 20px;
  max-width: 1000px;
  margin: 10px auto;
  height: 400px;
}

.left {
  flex: 1;
  text-align: center;
}

.profile-image {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.right {
  flex: 2;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;
}

.name {
  margin: -15px 0 0 0;
  font-size: 3rem;
  font-weight: bold;
  color: #FF5733;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.1em solid #FF5733;
  animation: blink-caret 1.25s step-end infinite;
  min-height: 3rem;
}

@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #FF5733;
  }
}

.intro {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bolder;
  color: #2c3e50;
}

.bio {
  max-width: 500px;
  margin: -10px 0 0 0;
  text-align: left;
  font-size: 1.2rem;
  color: #2c3e50;
  opacity: 0;
  transition: opacity 1s ease-in;
}

.bio-visible {
  opacity: 1;
}

h2, h3, h4 {
  margin: 5px 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 5px;
}

.strengths-image {
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease-in-out;
}

.strengths-image:hover {
  transform: scale(1.4);
}

.strengths {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 100%;
  padding: 0 20px;
  margin-top: 20px;
}

.qualification-box {
  display: flex;
  justify-items: center;
  margin: 100px auto 50px auto;
  gap: 10px;
  flex-direction: column;
  max-width: 1100px;
  opacity: 0;
  transition: opacity 1s ease-in;
}

.qualifications-visible {
  opacity: 1;
}

.UT {
  text-align: left;
  margin: 0 0 0 25px;
}
</style>