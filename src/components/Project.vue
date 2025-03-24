<script setup>
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import router from "@/router/index.js";
import placeholderImage from '../../images/projects/placeholder.png';
import CurvedLine from "@/components/CurvedLine.vue";

const route = useRoute();
const project = ref({});

const fetchProjectId = async () => {
  const projectId = Number(route.query.id);
  console.log(projectId);
  if (!projectId) {
    console.error('Project ID not provided in URL.');
    await router.push('/home');
  }

  project.value = projects.find(p => p.id === projectId) || {};
};

const projects = [
  {
    id: 1,
    title: 'Bacheloroppgaven ',
    subtitle: 'Warehouse Workflow Manager',
    period: 'Vår 2025',
    image: '/images/projects/wws.png',
    description: 'WWS er et bachelorprosjekt i samarbeid med Solwr Solutions AS. ' +
        'Prosjektet anvender Monte Carlo simulering og maskinlæring for å optimalisere lagerflyt.' +
        'WWS er utviklet med Vue som frontend, Java som backend og mySQL som databaselagringsløsning.' +
        ' Matti Kjellstadli og Adrian Johansen har vært med på å utvikle prosjektet.',
    languages: ['vue', 'js', 'sql'],
    color: "#F06961FF",
  },
  {
    id: 2,
    title: 'Project Title 2',
    image: '@/assets/images/projects/placeholder.png',
    description: 'This is a detailed description of project 2.',
    languages: ['html', 'css'],
  },
  // Add more projects as needed
];

onMounted(() => {
  fetchProjectId();
});
</script>

<template>
  <div class="project-detail" v-if="project.title">
    <div class="image-container" :style="{ '--project-color': project.color }">
      <img :src="project.image" alt="Project Image" class="main-image"/>
      <div class="language-icons">
        <img v-for="(lang, index) in project.languages" :key="index" :src="`/images/qualifications/${lang}.png`"
             :alt="lang" class="language-icon"/>
      </div>
    </div>
    <div class="content">
      <h1 class="title">{{ project.title }}</h1>
      <h2 class="subtitle" :style="{color: project.color}">{{ project.subtitle }}</h2>
      <div class="description">
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Project not found.</p>
  </div>
</template>

<style scoped>
.project-detail {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 100px 0;
  padding: 20px;
  text-align: center;
  gap: 50px;
}

.image-container {
  position: relative;
  width: 300px;
  height: 300px;
  max-width: 300px;
  max-height: 300px;
  margin-bottom: 20px;
  background-color: #2c3e50;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  --project-color: #2c3e50;
}

.image-container::before {
  content: '';
  position: absolute;
  width: 340px;
  height: 340px;
  background: radial-gradient(circle, var(--project-color) 40%, transparent 40%) 0 0 / 10px 10px;
  border-radius: 50%;
  z-index: -1;
  transform: translate(-5px, -5px);
}

.main-image {
  width: 80%;
  height: 80%;
  border-radius: 50%;
  object-fit: cover;
}

.language-icons {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.language-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}


.language-icon:nth-child(1) {
  transform: translate(225px, -60px);
  background-color: #badaa0;
  padding: 10px
}

.language-icon:nth-child(2) {
  transform: translate(130px, 0px);
  background-color: #dad2a0;
  padding: 10px
}

.language-icon:nth-child(3) {
  transform: translate(15px, 50px);
  background-color: #d8daa0;
  padding: 10px
}


.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 200px;
  max-width: 550px;
}

.title {
  color: #2c363f;
  font-size: 3rem;
  font-weight: 900;
  margin: 0;
}

.subtitle {
  margin: -1rem 0 0 1rem;
  font-weight: bold;
  color: #A24936;
}

.description {
  margin: 10px 0 0 3rem;
  color: #555;
  text-align: right;
  font-size: 1rem;

  line-height: 1.5;
  text-indent: -2em;
  padding-left: 2em;
}

p {
  font-weight: bold;
}
</style>