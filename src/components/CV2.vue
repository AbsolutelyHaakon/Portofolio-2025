<script setup>
import {ref, computed} from 'vue';

const timelineData = [
  {
    id: 1,
    title: 'NTNU Ålesund ',
    subtitle: 'Computer Science - Bachelor',
    description: "The CS bachelor program at NTNU Ålesund combines programming and engineering subjects to prepare you for work as a computer engineer. " +
        "It focuses on mobile and app development, especially design and backend for web applications. " +
        "Detailed information regarding school projects can be found in the project page",

    date: '2022 - 2025',
    image: '/images/cv/ntnu.png',
    topics: [
      'App-Development',
      'Web-Applications',
      'Data Visualization',
      'Database Structures',
    ]
  },
  {
    id: 2,
    title: 'Veøy Møre',
    subtitle: 'Distribution Carrier',
    description: "During my studies at NTNU Ålesund, I mainly worked as a distribution carrier for Veøy Møre." +
        "Throughout my studies, I worked one to two times a week and full-time during the summers." +
        "The main task involved the distribution of private, business, and medical goods." +
        "Would you like a reference number? Please contact me first.",
    date: '2023 - Now',
    image: '/images/cv/veoy.png',
    referenceName: 'Leif Kåre Nogva',
    referenceTitle: 'Operations Manager',
    qualifications: [
      'Independent Workdays',
      'Intense Workdays',
      'High Planning Responsibility',
    ],
  },
  {
    id: 3,
    title: 'Insoft AS',
    subtitle: 'Internship October 2024',
    description: "Internship as part of the IDATA2505 course, with over 120 internship hours at an IT company." +
        "The internship at Insoft gave me insight into working life as a developer and " +
        "provided valuable experience with TypeScript and SQL, as well as working in larger teams." +
        "At Insoft, I had a workday similar to that of other employees, " +
        "with regular stand-up meetings and leadership meetings as a standard part of the internship.",
    date: 'OCT 2024',
    image: '/images/cv/insoft.png',
    referenceName: 'Robin Helland',
    referenceTitle: 'Project Coordinator',
    referenceURL: 'https://drive.google.com/file/d/1lgEAOcB7rE2L7oMlv20fOOfEGVtMdQBt/view?usp=sharing',
    qualifications: [
      'Industry experience in TypeScript',
      'Experience handling large data systems',
      'Collaboration in larger teams',
      'Weekly stand-up and leadership meetings',
    ],
  },
  {
    id: 4,
    title: 'Medvind Assistanse ',
    subtitle: 'Personal Assistant',
    description: "Personal assistant for a child with cerebral palsy." +
        "Important and challenging work where putting others' needs first " +
        "is essential to ensure they can experience daily life on equal terms with others." +
        "A rewarding role that provides valuable insight into the various challenges people with disabilities face in everyday life.",
    date: '2022',
    image: '/images/cv/medvind.png',
    qualifications: [
      'Insight into a challenging daily life',
      'Communication-building work',
    ],
  },
  {
    id: 5,
    title: 'Teknobingo',
    subtitle: 'Bingo Host',
    description: "Employed at Teknobingo Heimdal and Orkanger during the period 2020 - 2022 while between studies." +
        "The role involved sales, cleaning, and maintenance of the bingo halls." +
        "It was independent work requiring good communication skills, as customers experience both wins and losses, some bigger than others.",
    date: '2020 - 2022',
    image: '/images/cv/teknobingo.png',
    referenceName: 'Camilla Reppe Nordli',
    referenceTitle: 'Managing Director',
    qualifications: [
      'Sales Experience',
      'Challengening Customer Situations',
      'Cash Handling',
    ],
  },
  {
    id: 6,
    title: 'NTNU Trondheim',
    subtitle: 'Economy - Bachelor',
    description: "Completed 1 year of the Economics program at NTNU in Trondheim." +
        "Gained valuable insight into business economics." +
        "Passed all subjects in the first year before realizing that a career in economic sectors wasn't the right fit for me." +
        "Subjects such as law, business economics, and macroeconomics are beneficial in the development of financial software.",
    date: '2019 - 2020',
    image: '/images/cv/ntnu.png',
    topics: [
      'Business Studies',
      'Macroeconomics and Microeconomics',
      'Law Studies',
      'Societal Economics',
    ]
  },
  {
    id: 7,
    title: 'Mio BPA',
    subtitle: 'Personal Assistant',
    description: "Personal assistant for an elderly man who was recently paralyzed due to an injury from a fall" +
        "I was involved in the process of moving him from a temporary residence to a renovated, customized home designed for his needs." +
        "My previous experience in assistance was invaluable in ensuring that the transition, process, and care were of a high standard.'",
    date: '2021',
    image: '/images/cv/mio.png',
    qualifications: [
      'Care and assistance for a high demanding patient',
      'Adaptation regarding the move to a new home',
    ]
  },
  {
    id: 8,
    title: 'Lindesnes Kommune',
    subtitle: 'Careworker at Municipal Housing',
    description: "Two-year summer job as a care assistant for two residents in municipal housing." +
        "There was a significant need for assistance in daily life due to conditions such as severe epilepsy and speech difficulties." +
        "My tasks included personal care, cooking, cleaning, and traveling." +
        "It was an extremely rewarding and important role that I had the opportunity to experience early in my career.",
    date: '2019 - 2020',
    image: '/images/cv/lindesnes.png',
    qualifications: [
      'Personal Care',
      'Cooking',
      'Cleaning',
      'General Assistance',
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
          Reference</h3>
        <h3 class="selected-details-title" v-if="selectedWork.title.includes('NTNU')">Main Courses</h3>
        <div class="h-divider" v-if="selectedWork.referenceTitle"></div>
        <p class="selected-details-line" style="font-size: 1rem; font-weight: bold">{{ selectedWork.referenceName }}</p>
        <p class="selected-details-line">{{ selectedWork.referenceTitle }}</p>
        <a v-if="selectedWork.referenceURL" :href="selectedWork.referenceURL" target="_blank">Reference Document</a>
        <ul v-if="selectedWork.title.includes('NTNU')">
          <li v-for="(topic, index) in selectedWork.topics" :key="index">{{ topic }}</li>
        </ul>
        <div class="h-divider" v-if="!selectedWork.title.includes('NTNU') && selectedWork.referenceTitle"></div>
        <h3 class="selected-details-title" style="margin-bottom: 10px" v-if="!selectedWork.title.includes('NTNU')">
          Key Takeaways</h3>
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
  opacity: 0.3;
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