<script setup>
import {ref, computed} from 'vue';

const timelineData = [
  {
    id: 1,
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
  {
    id: 2,
    title: 'Veøy Møre',
    subtitle: 'Distribusjontransportør',
    description: 'Under studietiden ved NTNU Ålesund har jeg hovedsaklig jobbet som distribusjontransportør for Veøy Møre. ' +
        'Under studietiden har jeg arbeidet mellom en til to ganger i uka og fulle sommrer. ' +
        'Hovedoppgaven består rundt distribusjon av privat, bedrift og medisinvarer. Ønsker du refernsenummer? Ta kontakt med meg først. ',
    date: '2023 - Nå',
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
    id: 3,
    title: 'Insoft AS',
    subtitle: 'Praksis Oktober 2024',
    description: 'Praksis i sammenheng med IDATA2505 med over 120 praksistimer hos en IT-Bedrift.' +
        'Praksisen i Insoft ga meg innsikt i arbeidslivet som en utvikler og ga meg god erfaring i TypeScript og SQL samt det å jobbe i større team.' +
        'Insoft ga meg en arbeidsdasg på lik linje med andre ansatte så regelmessige standup- og ledermøter var standard i praksisperioden.',
    date: 'OKT 2024',
    image: 'images/cv/insoft.png',
    referenceName: 'Robin Helland',
    referenceTitle: 'Prosjektkoordinator',
    referenceURL: 'https://drive.google.com/file/d/1lgEAOcB7rE2L7oMlv20fOOfEGVtMdQBt/view?usp=sharing',
    qualifications: [
      'Industrierfaring i Typescript',
      'Erfaring i store datasystemer',
      'Arbeid i større teams',
      'Ukentlige standup- og ledermøter',
    ],
  },
  {
    id: 4,
    title: 'Medvind Assistanse ',
    subtitle: 'Personlig Assistent',
    description: 'Personlig assistent for barn med celebral parese. ' +
        'Viktig og utfordrende arbeid der man setter andres behov først for å sikre at de kan ' +
        'oppleve en hverdag på lik linje med andre. ' +
        'Givende arbeid som gir god innblikk i de ulike utfordringene mennesker med nedsettelser opplever i hverdagen.',
    date: '2022',
    image: 'images/cv/medvind.png',
    qualifications: [
      'Innlblikk i en utfordrende hverdag',
      'Kommunikasjonsbyggende arbeid',
    ],
  },
  {
    id: 5,
    title: 'Teknobingo',
    subtitle: 'Bingovert',
    description: 'Ansatt i Teknobingo Heimdal og Orkanger i perioden 2020 - 2022 da jeg var mellom studier. ' +
        'Inneholdt salg, vasking og vedlikehold på bingohaller. ' +
        'Selvstending arbeid som krever god kommunikasjonsevne da kunder går igjennom både seier og tap, noen større enn andre.',
    date: '2020 - 2022',
    image: 'images/cv/teknobingo.png',
    referenceName: 'Camilla Reppe Nordli',
    referenceTitle: 'Daglig leder',
    qualifications: [
      'Salgserfaring',
      'Behandling av varierende kundesituasjoner',
      'Pengehåndetering',
    ],
  },
  {
    id: 6,
    title: 'NTNU Trondheim',
    subtitle: 'Økonomi - Bachelor',
    description: 'Fullførte 1 år på økonomistudiet ved NTNU i Trondheim.' +
        ' God innsikt i bedriftsøkonomi. ' +
        'Alle fag bestått første året før jeg fant ut at en karriere innenfor økonomiske sektorer ikke passet meg. ' +
        'Emner som rettslære, bedrifts- og samfunnsøkonomi kommer godt med i utvikling av økonomiske programvarer.',
    date: '2019 - 2020',
    image: 'images/cv/ntnu.png',
    topics: [
      'Bedriftslære',
      'Makro- og mikroøkonomi',
      'Rettslære',
      'Samfunnsøkonomi',
    ]
  },
  {
    id: 7,
    title: 'Mio BPA',
    subtitle: 'Personlig Assistent',
    description: 'Personlig assistent for eldre mann som nylig ble lammet grunnet skade under fall. ' +
        'Var med på prossessen i å flytte han fra midlertidlig boplass til et renovert skreddersydd hjem laget for hans behov. ' +
        'Min tidligere erfaringen innenfor assitanse kom godt med for å sørge at overgangen, prosessen og pleien var av god standard. ',
    date: '2021',
    image: 'images/cv/mio.png',
    qualifications: [
      'Pleie og omsorg for krevende bruker',
      'Tilpassningsutfordringer i forhold til hjemflyttning'
    ]
  },
  {
    id: 8,
    title: 'Mandal Kommune',
    subtitle: 'Pleiearbeider på kommunale boliger',
    description: 'Toårig sommerjob som pleieassistent for to brukere på kommunale boliger. ' +
        'Stort behov for assistanse i hverdagen som følge av blandt annet sterk epilepsi og språkvansker. ' +
        'Arbeidsoppgaver var blant annet personlig stell, matlaging, vasking, reising. ' +
        'Ekstremt givende og viktig arbeid som jeg fikk oppleve tidlig i arbeidslivet mitt.',
    date: '2019 - 2020',
    image: 'images/cv/lindesnes.png',
    qualifications: [
      'Personlig stell',
      'Matlaging',
      'Vasking',
      'Generell assistanse'
    ]
  },
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
  <h2 class="topptext" id="cv">Work & Education History</h2>
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
        <h3 class="selected-details-title" v-if="!selectedWork.title.includes('NTNU')&& selectedWork.referenceTitle">
          Referanse</h3>
        <h3 class="selected-details-title" v-if="selectedWork.title.includes('NTNU')">Hovedemner</h3>
        <div class="h-divider" v-if="selectedWork.referenceTitle"></div>
        <p class="selected-details-line" style="font-size: 1rem; font-weight: bold">{{ selectedWork.referenceName }}</p>
        <p class="selected-details-line">{{ selectedWork.referenceTitle }}</p>
        <a v-if="selectedWork.referenceURL" :href="selectedWork.referenceURL" target="_blank">Referansedokument</a>
        <ul v-if="selectedWork.title.includes('NTNU')">
          <li v-for="(topic, index) in selectedWork.topics" :key="index">{{ topic }}</li>
        </ul>
        <div class="h-divider" v-if="!selectedWork.title.includes('NTNU') && selectedWork.referenceTitle"></div>
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

.topptext {
  text-align: center;
  margin: 100px 0 30px 0;
  color: #3D5B59;
  font-weight: bolder;
  font-size: 2.5rem;
}

a {
  color: #2c3e50;
}

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
  color: #2c3e50;
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
  font-size: 3rem;
  font-weight: bolder;
  text-align: left;
}

.selected-description {
  text-align: left;
  font-size: 1.3rem;
  max-width: 450px;
}

.selected-details {
  font-size: 1.1rem;
  margin-top: 10px;
  text-align: center;
}

.selected-details-title {
  font-size: 2rem;
  font-weight: bolder;
}

.selected-subtitle {
  color: #2c3e50;
  font-size: 1.5rem;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
  margin: 0 0 300px 0;
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
  top: 32px;
  left: 0;
  right: 0;
  height: 2px;
  background: repeating-linear-gradient(
      to right,
      #b5e5cf,
      #b5e5cf 5px,
      transparent 5px,
      transparent 10px
  );
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
  background-color: #2c3e50;
}

.circle {
  width: 20px;
  height: 20px;
  background-color: #b5e5cf;
  border-radius: 50%;
  margin-bottom: 5px;
  position: relative;
  z-index: 1000;
}

.circle.selected {
  background-color: #2c3e50;
}

.date {
  font-size: 0.8rem;
  color: #2c3e50;
}

.work-details {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 150px;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  min-width: 300px;
  max-width: 1200px;
  position: relative;
  z-index: 1;
  color: #2E1F27
}

.left-side {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1200px) {
  .cv-container {
    margin-top: 0;
  }

  .timeline {
    margin-top: 0;
  }
}

@media (max-width: 900px) {
  .topptext {
    font-size: 2rem;
    margin-top: 50px;
    margin-bottom: 0;
  }

}
</style>