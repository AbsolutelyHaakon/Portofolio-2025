<script setup>
import {ref, computed} from 'vue';

const timelineData = [
  {
    id: 1,
    title: 'Veøy Møre',
    subtitle: 'Distribusjontransportør',
    description: 'Under studietiden ved NTNU Ålesund har jeg hovedsaklig jobbet som distribusjontransportør for Veøy Møre. ' +
        'Under studietiden har jeg arbeidet mellom en til to ganger i uka og fulle sommrer. ' +
        'Hovedoppgaven består rundt distribusjon av privat, bedrift og medisinvarer. ',
    date: '2023 - 2025',
    image: 'images/cv/veoy.png',
    referenceName: 'Leif Kåre Nogva',
    referenceTitle: 'Daglig leder',
    qualifications: [
      'Selvstendig Arbeidssdag',
      'Intense arbeidsdager',
      'Stort planleggingsansvar',
    ],
  },
  {
    id: 2,
    title: 'NTNU Ålesund ',
    subtitle: 'Dataingeniør - Bachelor',
    description: 'Dataingeniørstudiet til NTNU Ålesund gir en god blanding av programmering- og ' +
        'ingeniørfaglige emner som forbereder deg til arbeidsdagen.' +
        'Studiet fokuserer hovedsaklig på mobil- og apputvikling, spesielt rundt design og backend for webapplikasjoner. ' +
        'For mer informasjon, se hjemme- og prosjektsidene',
    date: '2022 - 2025',
    image: 'images/cv/ntnu.png',
    topics: [
      'Mobilapplikasjonutvikling',
      'Webapplikasjoner',
      'Datavisualisering',
      'Databasestrukturer',
    ]
  },
  {id: 3, title: 'Insoft AS', description: 'Description for Job 2', date: 'OKT 2024'},
  {id: 4, title: 'Medvind Assistanse ', description: 'Description for Job 2', date: '2022'},
  {id: 5, title: 'Teknobingo', description: 'Description for Job 3', date: '2020 - 2022'},
  {id: 6, title: 'NTNU Trondheim', description: 'Description for Job 4', date: '2019 - 2020'},
  {id: 7, title: 'Mio BPA', description: 'Description for Job 4', date: '2021'},
  {id: 8, title: 'Mandal Kommune', description: 'Description for Job 5', date: '2019 - 2020'},
];

const selectedWork = ref(timelineData[0]);

const selectWork = (work) => {
  selectedWork.value = work;
};

const isSelected = (work) => {
  return selectedWork.value.id === work.id;
};
</script>

<template>
  <div class="cv-container">
    <div class="timeline">
      <div class="line"></div>
      <div
          v-for="work in timelineData"
          :key="work.id"
          class="timeline-point"
          @click="selectWork(work)"
      >
        <div class="work-title">{{ work.title }}</div>
        <div :class="['circle', { 'selected': isSelected(work) }]"></div>
        <div class="date">{{ work.date }}</div>
      </div>
    </div>
    <div class="work-details">
      <div class="left-side">
        <img :src="selectedWork.image" alt="Work" class="selected-image"/>
        <h2 class="selected-title">{{ selectedWork.title }}</h2>
        <h3 class="selected-subtitle">{{ selectedWork.subtitle }}</h3>
        <p class="selected-description">{{ selectedWork.description }}</p>
      </div>
      <div class="selected-details">
        <h3 class="selected-details-title" v-if="!selectedWork.title.includes('NTNU')">Referanse</h3>
        <h3 class="selected-details-title" v-if="selectedWork.title.includes('NTNU')">Hovedemner</h3>
        <div class="h-divider"></div>
        <p class="selected-details-line">{{ selectedWork.referenceName }}</p>
        <p class="selected-details-line">{{ selectedWork.referenceTitle }}</p>
        <ul v-if="selectedWork.title.includes('NTNU')">
          <li v-for="(topic, index) in selectedWork.topics" :key="index">{{ topic }}</li>
        </ul>
        <div class="h-divider" v-if="!selectedWork.title.includes('NTNU')"></div>
        <h3 class="selected-details-title" style="margin-bottom: 10px" v-if="!selectedWork.title.includes('NTNU')">
          Utbytte</h3>
        <ul>
          <li v-for="(qualification, index) in selectedWork.qualifications" :key="index">{{ qualification }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  text-align: left;
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
}

li::before {
  content: "+";
  position: absolute;
  left: 0;
  color: #FF5733;
  font-weight: bolder;
  font-size: 1rem;
}

.h-divider {
  width: 100%;
  height: 2px;
  background-color: #2c3e50;
  margin: 10px 0;
  border-radius: 50%;
}

.selected-title {
  font-size: 2.5rem;
  font-weight: bolder;
  text-align: left;
}

.selected-description {
  text-align: left;
  font-size: 1.1rem;
  max-width: 450px;
}

.selected-details {
  margin-top: 10px;
  text-align: center;
}

.selected-details-title {
  font-size: 1.6rem;
  font-weight: bolder;
}

.selected-subtitle {
  color: #FF5733;
  font-size: 1.1rem;
  font-weight: bolder;
  text-align: left;
  margin: -12px 0 0 10px;
}

.selected-image {
  position: absolute;
  width: 100%;
  max-width: 1200px;
  border-radius: 10px;
  opacity: 0.1;
  z-index: -1;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-15deg);
}

.cv-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
}

.timeline {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 50px 0 20px 0;
}

.line {
  position: absolute;
  top: 47%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #2c3e50;
  z-index: -1;
}

.timeline-point {
  cursor: pointer;
  margin: 0 10px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-point:hover .circle {
  background-color: #FF5733;
}

.circle {
  width: 20px;
  height: 20px;
  background-color: #2c3e50;
  border-radius: 50%;
  margin-bottom: 5px;
  position: relative;
  z-index: 1;
}

.circle.selected {
  background-color: #FF5733;
}

.date {
  font-size: 0.8rem;
  color: #2c3e50;
}

.work-details {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  min-width: 300px;
  max-width: 1200px;
  position: relative;
  z-index: 1;
}

.left-side {
  display: flex;
  flex-direction: column;
}
</style>