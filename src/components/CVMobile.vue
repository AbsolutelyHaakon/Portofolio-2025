<script setup>
import { ref } from 'vue';

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
    image: '/images/cv/ntnu.png',
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
    image: '/images/cv/veoy.png',
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
    image: '/images/cv/insoft.png',
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
    image: '/images/cv/medvind.png',
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
    image: '/images/cv/teknobingo.png',
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
    image: '/images/cv/ntnu.png',
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
    image: '/images/cv/mio.png',
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
    image: '/images/cv/lindesnes.png',
    qualifications: [
      'Personlig stell',
      'Matlaging',
      'Vasking',
      'Generell assistanse'
    ]
  },
];
</script>

<template>
  <h2 class="topptext" id="cv">Work & Education History</h2>
  <div class="cv-container">
    <div v-for="work in timelineData" :key="work.id" class="work-details">
      <div class="left-side">
        <img :src="work.image" alt="Work" class="selected-image" />
        <h2 class="selected-title">{{ work.title }}</h2>
        <h3 class="selected-subtitle">{{ work.subtitle }}</h3>
        <p class="selected-description">{{ work.description }}</p>
      </div>
      <div class="selected-details">
        <h3 class="selected-details-title" v-if="work.title.includes('NTNU')">Hovedemner</h3>
        <ul v-if="work.title.includes('NTNU')">
          <li v-for="(topic, index) in work.topics" :key="index">{{ topic }}</li>
        </ul>
        <h3 class="selected-details-title" v-if="!work.title.includes('NTNU') && work.referenceTitle">Referanse</h3>
        <p class="selected-details-line" style="font-size: 1rem; font-weight: bold">{{ work.referenceName }}</p>
        <p class="selected-details-line">{{ work.referenceTitle }}</p>
        <a v-if="work.referenceURL" :href="work.referenceURL" target="_blank">Referansedokument</a>
        <h3 class="selected-details-title" style="margin-bottom: 10px" v-if="!work.title.includes('NTNU')">Utbytte</h3>
        <ul>
          <li v-for="(qualification, index) in work.qualifications" :key="index">{{ qualification }}</li>
        </ul>
      </div>
      <div class="horizontal-line"></div>
    </div>
  </div>
</template>

<style scoped>
.cv-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
  margin: 0 0 300px 0;
}

.work-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px 20px;
  border-radius: 10px;
  width: 90%;
  min-width: 300px;
  max-width: 1200px;
  position: relative;
  color: #2E1F27;
}

.left-side {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.selected-title {
  font-size: 2rem;
  font-weight: bolder;
  text-align: center;
}

.selected-description {
  text-align: center;
  font-size: 1.2rem;
  max-width: 600px;
}

.selected-details {
  font-size: 1rem;
  margin-top: 10px;
  text-align: center;
}

.selected-details-title {
  font-size: 1.5rem;
  font-weight: bolder;
  margin-top: 10px;
}

.topptext {
  text-align: center;
  color: #3D5B59;
  font-weight: bolder;
  font-size: 2rem;
  margin: 50px auto 20px auto;
}

.horizontal-line {
  width: 90%;
  height: 3px;
  background-color: #3D5B59;
  margin: 20px auto;
  border-radius: 10px;
  opacity: 0.5;
}

@media (max-width: 750px) {
  .selected-description {
    display: none;
  }

  h3 {
    margin-top: -10px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  h1 {
    color: #2E1F27;
  }

  .cv-container {
    margin-bottom: 100px;
  }
}
@media (min-width: 750px) {
  .work-details {
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
  }

  .selected-details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .horizontal-line {
    display: none;
  }
  .selected-description {
    font-size: 1rem;
  }

}
</style>