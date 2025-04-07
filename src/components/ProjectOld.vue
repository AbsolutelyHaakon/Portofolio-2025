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
    features: [
      {
        image: '/images/projects/wws.png',
        title: 'Monte Carlo Simulering',
        description: 'Webapplikasjonen benytter seg av tusenvis av simuleringer med endrede variabler i arbeidsdagen ' +
            'for å estimere forventet tidsbruk på de ulike delene av arbeidsdagen. ' +
            'Dette gir managere god oversikt over oppgavene som utføres og tiden de tar. ' +
            'Gode estimasjoner fører til økt effektivitet blandt varehusearbeidere'
      },
      {
        image: '/images/projects/wws.png',
        title: 'Selvlærende Algoritme',
        description: 'Description of feature 2.'
      }
    ]
  },
  {
    id: 2,
    title: 'Afasia',
    subtitle: 'Skreddersydd Språktrening',
    period: 'Vår 2025',
    image: '/images/projects/afasia.png',
    description: 'WWS er et bachelorprosjekt i samarbeid med Solwr Solutions AS. ' +
        'Prosjektet anvender Monte Carlo simulering og maskinlæring for å optimalisere lagerflyt.' +
        'WWS er utviklet med Vue som frontend, Java som backend og mySQL som databaselagringsløsning.' +
        ' Matti Kjellstadli og Adrian Johansen har vært med på å utvikle prosjektet.',
    languages: ['flutter', 'sql', 'firebase'],
    color: "#06c0ff",
    features: [
      {
        image: '/images/projects/wws.png',
        title: 'Monte Carlo Simulering',
        description: 'Webapplikasjonen benytter seg av tusenvis av simuleringer med endrede variabler i arbeidsdagen ' +
            'for å estimere forventet tidsbruk på de ulike delene av arbeidsdagen. ' +
            'Dette gir managere god oversikt over oppgavene som utføres og tiden de tar. ' +
            'Gode estimasjoner fører til økt effektivitet blandt varehusearbeidere'
      },
      {
        image: '/images/projects/wws.png',
        title: 'Selvlærende Algoritme',
        description: 'Description of feature 2.'
      }
    ]
  },
  {
    id: 3,
    title: 'Fitness App',
    subtitle: 'Personlig Treningsapp for iOS & Android',
    period: 'Vår 2025',
    image: '/images/projects/fitnessapp.png',
    description: 'WWS er et bachelorprosjekt i samarbeid med Solwr Solutions AS. ' +
        'Prosjektet anvender Monte Carlo simulering og maskinlæring for å optimalisere lagerflyt.' +
        'WWS er utviklet med Vue som frontend, Java som backend og mySQL som databaselagringsløsning.' +
        ' Matti Kjellstadli og Adrian Johansen har vært med på å utvikle prosjektet.',
    languages: ['flutter', 'sql', 'firebase'],
    primarycolor: "#2B2B2B",
    color: "#48CD6D",
    textcolor: "#FFFFFF",
    features: [
      {
        image: '/images/projects/fitnessapp.png',
        title: 'Monte Carlo Simulering',
        description: 'Webapplikasjonen benytter seg av tusenvis av simuleringer med endrede variabler i arbeidsdagen ' +
            'for å estimere forventet tidsbruk på de ulike delene av arbeidsdagen. ' +
            'Dette gir managere god oversikt over oppgavene som utføres og tiden de tar. ' +
            'Gode estimasjoner fører til økt effektivitet blandt varehusearbeidere'
      },
      {
        image: '/images/projects/fitnessapp.png',
        title: 'Selvlærende Algoritme',
        description: 'Description of feature 2.'
      }
    ]
  },
];

onMounted(() => {
  fetchProjectId();
});
</script>

<template>
  <div class="project-detail" v-if="project.title">
    <div class="image-container" :style="{ '--project-color': project.color, backgroundColor: project.primarycolor }">
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
  <div class="features" v-if="project.title">
    <div v-for="(feature, index) in project.features" :key="index" :class="['feature', { 'feature-left': index % 2 === 0 }]">
      <div class="feature-content" :style="{backgroundColor: project.primarycolor, color: project.textcolor}">
        <h2 class="subtitle" :style="{margin: 0, color: project.color}">{{ feature.title }}</h2>
        <p>{{ feature.description }}</p>
      </div>
      <div class="feature-image"  :style="{ '--project-color': project.color, backgroundColor: project.primarycolor }">
        <img :src="feature.image" alt="Feature Image" class="circular-image"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-detail {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  margin: 100px 0 175px 0;
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
  background-color: #dce3d4 ;
}


.language-icon:nth-child(1) {
  transform: translate(225px, -60px);
  padding: 10px
}

.language-icon:nth-child(2) {
  transform: translate(130px, 0px);
  padding: 10px
}

.language-icon:nth-child(3) {
  transform: translate(15px, 50px);
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

.features {
  display: flex;
  justify-content: right;
  flex-direction: column;
  gap: 175px;
  width: 100%;
}

.feature {
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 20px;
  border-radius: 10px;
  min-width: 900px;
  max-width: 1200px;
  margin: auto;
  flex-direction: row-reverse;
  gap:60px
}

.feature-left{
  flex-direction: row;
}

.feature-content {
  flex: 1;
  text-align: left;
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 40px;
}

.feature-image {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 50%;
  position: relative;
}

.feature-image::before {
  content: '';
  position: absolute;
  width: 340px;
  height: 340px;
  background: radial-gradient(circle, var(--project-color) 40%, transparent 40%) 0 0 / 10px 10px;
  border-radius: 50%;
  z-index: -1;
  transform: translate(-5px, -5px);
}

.circular-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

p {
  font-weight: bold;
}
</style>