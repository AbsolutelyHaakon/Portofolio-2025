<script setup>
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import router from "@/router/index.js";
import ImageGallery from "@/components/ImageGallery.vue";
import Wave from "@/components/Wave.vue";
import UpsideDownWave from "@/components/UpsideDownWave.vue";
import Gant from "@/components/Gant.vue";
import OtherProjects from "@/components/OtherProjects.vue";
import ProjectTimeline from "@/components/ProjectTimeline.vue";
import OurVision from "@/components/OurVision.vue";
import KeyFeatures from "@/components/KeyFeatures.vue";

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
    title: 'Bachelor Thesis ',
    subtitle: 'Warehouse Workflow Manager',
    period: 'Vår 2025',
    image: '/images/projects/wws.png',
    description: "WWS is a bachelor's project in collaboration with Solwr Solutions AS. " +
        "The project applies Monte Carlo simulation and machine learning to optimize warehouse workflows. " +
        "WWS is developed with Vue as the frontend, Java as the backend, and MySQL as the database solution. " +
        "Matti Kjellstadli and Adrian Johansen have contributed to the development of the project.",
    languages: ['vue', 'js', 'sql'],
    color: ["#F06961FF", "#d3716a", "#2C3E50", "#FFF"],
    images: [
      {
        image: '/images/projects/wws1.png',
        title: 'Optimize Warehouse Workflow',
        description: 'Warehouse Workflow Manager empowers managers with a clear and intuitive ' +
            'drag-and-drop interface to assign workers to their designated zones. ' +
            'With a comprehensive visual layout, it eliminates confusion and ensures ' +
            'everyone knows exactly where and how tasks are being carried out.'
      },
      {
        image: '/images/projects/wws2.png',
        title: 'Monte Carlo Simulering',
        description: 'The web application runs thousands of simulations with adjusted variables throughout the workday ' +
            'to estimate the expected time spent on different tasks. This gives managers a clear overview of the tasks ' +
            'being performed and how long they take. Accurate time estimates help improve efficiency among warehouse workers.'
      },
      {
        image: '/images/projects/wws3.png',
        title: 'Selvlærende Algoritme',
        description: 'The web application uses a self-learning algorithm that continuously improves its predictions based on historical data. ' +
            'This means that the more the application is used, the better it becomes at estimating time and optimizing workflows.'
      },
    ],
    gant: '/images/projects/wws/wwsgant.png',
    repo: 'https://github.com/mattkje/group01-bachelor-2025'
  },
  {
    id: 2,
    title: 'Afasia',
    subtitle: 'Tailored Language Training',
    period: 'Vår 2025',
    image: '/images/projects/afasia.png',
    description: 'Afasia offers a tailord learning experience for individuals suffering from aphasia or have similar training needs. ' +
        'The application offers a variety of unique and customizable training exercises which challenge the users word recognition and ' +
        'language skills. The application is designed to be user-friendly and intuitive, making it easy for users to navigate and access the exercises.',
    languages: ['flutter', 'sql', 'firebase'],
    color: ["#06c0ff", "#5bb2d2", "#2B2D42", "#FFFFFF"],
    images: [
      {
        image: '/images/projects/afasia/afasia1.png',
        title: 'Tailored Learning Experience',
        description: 'Afasia is developed with the needs of the user in mind. The flexible application allows for multiple ways to train and learn.' +
            'Audio, text, and image-based exercises are all available to the user to ensure that it suits everyone. ' +
            'Create quizzes on your own or use our ready-made templates to guide your learning experience.',
      },
      {
        image: '/images/projects/afasia/afasia2.png',
        title: 'Tailored Learning Experience',
        description: 'Afasia is developed with the needs of the user in mind. The flexible application allows for multiple ways to train and learn.' +
            'Audio, text, and image-based exercises are all available to the user to ensure that it suits everyone. ' +
            'Create quizzes on your own or use our ready-made templates to guide your learning experience.',
      },
      {
        image: '/images/projects/afasia/afasia.png',
        title: 'Tailored Learning Experience',
        description: 'Afasia is developed with the needs of the user in mind. The flexible application allows for multiple ways to train and learn.' +
            'Audio, text, and image-based exercises are all available to the user to ensure that it suits everyone. ' +
            'Create quizzes on your own or use our ready-made templates to guide your learning experience.',
      },
    ],
    repo: 'https://github.com/AbsolutelyHaakon/Afasia',
    timelineData: [
      {
        date: 'February 2025',
        title: 'Project Kickoff',
        live: true,
      },
      {
        date: 'June 2025',
        title: 'Alpha Stage',
        milestones: ['Good Range of Quizzes', 'Customizable Exercises', 'Ready made template games'],
      },
      {
        date: 'June - July 2025',
        title: 'Testing Phase',
        milestones: ['Testing with LHL', 'Feedback Collection'],
      },
      {
        date: 'July - August 2025',
        title: 'Release',
        milestones: ['Final Adjustments', 'Launch on App Store and Play Store', 'Collaboration with LHL and other organizations'],
      }

    ],
    website: 'https://google.com',
  },
  {
    id: 4,
    title: 'Learniverse Connect',
    subtitle: 'Unleash Your Learning Journey',
    period: 'Spring 2025',
    image: '/images/projects/learniversecover.png',
    description: 'Learniverse Connect is a web-application developed in Vue with a Java backend that let´s you explore a flurry of interesting computer courses provided by other third-party education resources.' +
        'Learniverse acts as a hub for learning by aggregating courses from various platforms, allowing users to discover and enroll in courses that suit their interests and needs.',
    languages: ['vue', 'java', 'sql'],
    primarycolor: "#2B2B2B",
    color: ["#060610", "#262634", "#5666FF", "#FFFFFF"],
    textcolor: "#FFFFFF",
    repo: 'https://github.com/mattkje/course-project-team-5',
    guidelines: 'https://drive.google.com/file/d/1V2BEHiv6gD-9OTAMy0yJt4XK7ouZ8Iy7/view?usp=sharing',
    images: [
      {
        image: '/images/projects/learniverse/learniverse1.png',
        title: 'Digital Learning Hub',
        description: 'Learniverse Connect collects a large amount of learning resources from various platforms, ' +
            'allowing users to discover and enroll in courses that suit their interests and needs. ' +
            'The application is designed to be user-friendly and intuitive, making it easy for users to navigate and access the courses.',
      },
      {
        image: '/images/projects/learniverse/learniverse2.png',
        title: 'Physical & Digital Courses',
        description: 'Learniverse offers a range of physical and digital courses, including our very own "Learniverse Plus" courses. ' +
            'These courses are designed to provide users with a comprehensive learning experience, combining both online and offline resources.',
      },
      {
        image: '/images/projects/learniverse/learniverse3.png',
        title: 'In-House Payment',
        description: 'Learniverse has all features needed to properly evaluate and enroll in courses in-house.',
      },
      {
        image: '/images/projects/learniverse/learniverse4.png',
        title: 'Mobile Friendly',
        description: 'Learniverse Connect is fully optimized for any device, including mobile!',
      },
    ],
    features : [
      {
        logo: '/images/projects/learniverse/feature1.png',
        title: 'API Enabled',
      },
      {
        logo: '/images/projects/learniverse/feature2.png',
        title: 'Pro and Free Version'
      },
      {
        logo: '/images/projects/learniverse/feature3.png',
        title: 'Secure Authentication',
      },
      {
        logo: '/images/projects/learniverse/feature4.png',
        title: 'Large Course Library',
      },
      {
        logo: '/images/projects/learniverse/feature5.png',
        title: 'Compare Provides',
      },
      {
        logo: '/images/projects/learniverse/feature6.png',
        title: 'Modern Web-Application',
      },
    ],
  },
  {
    id: 3,
    title: 'Fitness App',
    subtitle: 'Personalized Workout App for iOS and Android',
    period: 'Spring 2025',
    image: '/images/projects/fitnessapp.png',
    description: 'The Fitness App is a mobile application developed in Flutter for the mobile development course at NTNU. ' +
        'The app allows users to plan, create, and share workouts. It is designed to be user-friendly and intuitive, making it easy for to complete their workouts',
    languages: ['flutter', 'sql', 'firebase'],
    primarycolor: "#2B2B2B",
    color: ["#48CD6D", "#7fc993", "#2B2B2B", "#FFFFFF"],
    textcolor: "#FFFFFF",
    repo: 'https://github.com/AbsolutelyHaakon/FitnessApp-IDATA2503',
    guidelines: 'https://drive.google.com/file/d/1X6cp7JXRYb5ppM1tNB506aFxgsASPIn-/view?usp=sharing',
    images: [
      {
        image: '/images/projects/fitnessapp/fitnessapp1.jpg',
        title: 'Complete Workout Experience',
        description: 'The Fitness App offers a variety of features to enhance the workout experience. ' +
            'Users can create their own workouts, track their progress, and share their achievements with friends. ' +
            'The app also includes a social media feature that allows users to connect with other fitness enthusiasts.',
      },
      {
        image: '/images/projects/fitnessapp/fitnessapp2.jpg',
        title: 'Workout Companion',
        description: 'During your workout the application tracks your exercises, allowing you to track your progress later.' +
            ' Break timers ensure you keep a healthy pace during your workout. Notifications notify you once you need to get back on the weights.',
      },
      {
        image: '/images/projects/fitnessapp/fitnessapp3.jpg',
        title: 'View and Share your Workouts',
        description: 'The Fitness App allows you to view your workouts and share them with your friends. ' +
            'You can also view your friends workouts and get inspired by their training routines. ' +
            'The app also includes a social media feature that allows users to connect with other fitness enthusiasts.',
      },
      {
        image: '/images/projects/fitnessapp/fitnessapp4.jpg',
        title: 'Custom Workout routines',
        description: 'Create your own exercises and workouts or choose from a variety of user-made templates.',
      },
      {
        image: '/images/projects/fitnessapp/fitnessapp5.jpg',
        title: 'Plan your week',
        description: 'Our calendar feature allows for good planning opportunities to make sure you stay on track in your fitness journey.',
      },
      {
        image: '/images/projects/fitnessapp/fitnessapp6.jpg',
        title: 'Complete Exercises',
        description: 'Image and video integration ensures all exercises are easy to learn and understand ',
      },
    ],
    features : [
      {
        logo: '/images/projects/fitnessapp/feature1.png',
        title: 'Cloud Backup',
      },
      {
        logo: '/images/projects/fitnessapp/feature2.png',
        title: 'Social Integration'
      },
      {
        logo: '/images/projects/fitnessapp/feature3.png',
        title: 'Complete Customization',
      },
      {
        logo: '/images/projects/fitnessapp/feature4.png',
        title: 'Workout Tracking',
      },
      {
        logo: '/images/projects/fitnessapp/feature5.png',
        title: 'Habit Tracking',
      },
      {
        logo: '/images/projects/fitnessapp/feature6.png',
        title: 'Progress Tracking',
      },
    ],
  },

];

onMounted(() => {
  fetchProjectId();
});


</script>

<template>
  <div class="project-detail" v-if="project.title">
    <div class="image-container"
         :style="{ '--project-color': project.color[0], backgroundColor: project.primarycolor }">
      <img :src="project.image" alt="Project Image" class="main-image"/>
      <div class="language-icons">
        <img v-for="(lang, index) in project.languages" :key="index" :src="`/images/qualifications/originals/${lang}.png`"
             :alt="lang" class="language-icon" :style="{backgroundColor:project.color[1]}"/>
      </div>
    </div>
    <div class="content">
      <h1 class="title">{{ project.title }}</h1>
      <h2 class="subtitle" :style="{color: project.color[0]}">{{ project.subtitle }}</h2>
      <div class="description">
        <p>{{ project.description }}</p>
      </div>
      <div class="button-container">
        <a v-if="project.repo" :href="project.repo" target="_blank" class="github-button"
           :style="{backgroundColor: project.color[2]}">
          <img src="/images/external/githubwhite.png" alt="GitHub Logo" class="github-logo"/>
          <span>GitHub</span>
        </a>
        <a v-if="project.website" target="_blank" class="website-button"
           :style="{backgroundColor: project.color[1]}">
          <img src="/images/external/websiteicon.png" alt="Website Icon" class="website-logo"/>
          <span>Website Coming Soon</span>
        </a>
        <a v-if="project.guidelines" :href="project.guidelines"  target="_blank" class="website-button"
           :style="{backgroundColor: project.color[0]}">
          <img src="/images/external/paintbrush.png" alt="Website Icon" class="website-logo"/>
          <span>Design Guidelines</span>
        </a>
      </div>
    </div>
  </div>
  <Wave :colors="project.color"/>
  <ImageGallery :images="project.images" v-if="project.images && project.images.length > 0"
                :background-color="project.color[2]" :text-color="project.color[3]" :title-color="project.color[0]"/>
  <UpsideDownWave :colors="project.color"/>
  <Gant v-if="project.gant" :text-color="project.color[0]" header-text="Gannt Diagram" :image-url="project.gant"/>
  <ProjectTimeline :timeline="project.timelineData" v-if="project.timelineData && project.timelineData.length > 0"/>
  <KeyFeatures :features="project.features" v-if="project.id === 3 || project.id === 4"/>
  <Wave :colors="project.color"/>
  <OurVision v-if="project.id === 2"/>
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

.github-button {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  gap: 10px;
  text-decoration: none;
  color: #fff;
  border-radius: 50px;
  padding: 10px 30px;
  font-size: 1rem;
  font-weight: bold;
  transition: transform 0.2s, background-color 0.2s;
  margin-top: 20px;
}

.github-button:hover {
  transform: scale(1.05);
  background-color: #444;
}

.github-logo {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.website-button {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  gap: 10px;
  text-decoration: none;
  color: #fff;
  border-radius: 50px;
  padding: 10px 30px;
  font-size: 1rem;
  font-weight: bold;
  transition: transform 0.2s, background-color 0.2s;
  margin-top: 20px;
}

.website-button:hover {
  transform: scale(1.05);
  background-color: #444;
}

.website-logo {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.button-container {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: flex-end;
}
</style>