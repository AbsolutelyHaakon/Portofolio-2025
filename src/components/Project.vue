<script setup>
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import router from "@/router/index.js";
import ImageGallery from "@/components/ImageGallery.vue";
import Wave from "@/components/Wave.vue";

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
    color: ["#F06961FF", "#d3716a", "#2C3E50", "#FFF"],
    images: [{
      image: '/images/projects/wws1.png',
      title: 'Monte Carlo Simulering',
      description: 'Webapplikasjonen benytter seg av tusenvis av simuleringer med endrede variabler i arbeidsdagen ' +
          'for å estimere forventet tidsbruk på de ulike delene av arbeidsdagen. ' +
          'Dette gir managere god oversikt over oppgavene som utføres og tiden de tar. ' +
          'Gode estimasjoner fører til økt effektivitet blandt varehusearbeidere'
    },
      {
        image: '/images/projects/wws2.png',
        title: 'Selvlærende Algoritme',
        description: 'Description of feature 2.'
      },
      {
        image: '/images/projects/wws3.png',
        title: 'Selvlærende Algoritme',
        description: 'Description of feature 2.'
      },
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
      <div class="language-icons" >
        <img v-for="(lang, index) in project.languages" :key="index" :src="`/images/qualifications/${lang}.png`"
             :alt="lang" class="language-icon" :style="{backgroundColor:project.color[1]}"/>
      </div>
    </div>
    <div class="content">
      <h1 class="title">{{ project.title }}</h1>
      <h2 class="subtitle" :style="{color: project.color[0]}">{{ project.subtitle }}</h2>
      <div class="description">
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
  <Wave :colors="project.color"/>
  <ImageGallery :images="project.images" v-if="project.images && project.images.length > 0"
                :background-color="project.color[2]" :text-color="project.color[3]" :title-color="project.color[0]"/>
  />
</template>

<style scoped>
.project-detail {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  max-width: 100vw;
  margin: 100px 0 20px 0;
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
  background-color: #e3dbd4;
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