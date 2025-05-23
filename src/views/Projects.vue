<script setup>
import {onMounted, ref} from "vue";

const featuredProject = {
  title: 'Warehouse Workflow Simulator',
  description: 'Leverage the power of machine learning and Monte Carlo simulations to estimate and optimize warehouse workflows. ' +
      ' thesis developed in collaboration with Solwr Software AS',
  image: '/images/projects/wws/zoneManagementPage.png',
  languages: [
    {name: 'Vue.', image: '/images/qualifications/originals/vue.png'},
    {name: 'JavaScript', image: '/images/qualifications/originals/js.png'},
    {name: 'HTML', image: '/images/qualifications/originals/html.png'},
    {name: 'CSS', image: '/images/qualifications/originals/css.png'},
    {name: 'TypeScript', image: '/images/qualifications/originals/ts.png'},
    {name: 'SQL', image: '/images/qualifications/originals/sql.png'},
    {name: 'Java', image: '/images/qualifications/originals/java.png'},
  ]
}

const smallProjects = [
  {
    id: 2,
    title: 'Fluentia',
    description: 'Word & Image recognition training application for adults. Currently in development and awaiting testing with LHL. Developed for iOS and Android.',
    image: '/images/projects/fluntiacover.png',
    languages: [
      {name: 'Flutter', image: '/images/qualifications/originals/flutter.png'},
      {name: 'Dart', image: '/images/qualifications/originals/dart.png'},
      {name: 'SQL', image: '/images/qualifications/originals/sql.png'},
    ]
  },
  {
    id: 3,
    title: 'Fitness App',
    description: 'Mobile application developed in Flutter for the mobile development course at NTNU. ' +
        'The app allows users to plan, create, and share workouts.',
    image: '/images/projects/fitnessappcover2.png',
    languages: [
      {name: 'Flutter', image: '/images/qualifications/originals/flutter.png'},
      {name: 'Firebase', image: '/images/qualifications/originals/firebase.png'},
      {name: 'SQL', image: '/images/qualifications/originals/sql.png'},
    ]
  },
  {
    id: 4,
    title: 'Learniverse Connect',
    description: 'Learniverse Connect is a web-application developed in Vue with a Java backend that let´s you explore a flurry of interesting computer courses provided by other third-party education resources.',
    image: '/images/projects/learniversecover2.png',
    languages: [
      {name: 'Vue.', image: '/images/qualifications/originals/vue.png'},
      {name: 'JavaScript', image: '/images/qualifications/originals/js.png'},
      {name: 'Java', image: '/images/qualifications/originals/java.png'},

    ]
  }
]

const showFeatured = ref(false);
const showSmall = ref(false);

onMounted(() => {
  showFeatured.value = true;
  setTimeout(() => {
    showSmall.value = true;
  }, );
});
</script>

<template>
  <Transition name="fade-in-featured">
  <main v-if="showFeatured" class="project-showcase">
      <img src="/images/figures/projectsdoodle2.png" class="background-img" alt="Background" />
      <div class="project-info-box">
        <img :src="featuredProject.image" :alt="featuredProject.title" class="project-img"/>
        <div class="project-info">
          <h2 class="project-title">{{ featuredProject.title }}</h2>
          <p class="project-desc">{{ featuredProject.description }}</p>
          <div class="project-actions">
            <button class="btn btn-outline">Read Thesis</button>
            <router-link :to="`/project/?id=1`" class="btn btn-filled">Explore</router-link>
          </div>
        </div>
      </div>
      <div class="project-langs">
        <div
            v-for="lang in featuredProject.languages"
            :key="lang.name"
            class="lang-icon"
            :title="lang.name"
        >
          <img :src="lang.image" :alt="lang.name"/>
        </div>
      </div>
    </main>
  </Transition>

  <Transition name="fade-in-small">
    <div v-if="showSmall" class="small-projects-grid">
    <div v-for="project in smallProjects" :key="project.id" class="small-project-box">
      <img :src="project.image" :alt="project.title" class="small-project-img"/>
      <div class="small-project-info">
        <h3 class="small-project-title">{{ project.title }}</h3>
        <p class="small-project-desc">{{ project.description }}</p>
        <div class="small-project-langs">
          <div
              v-for="lang in project.languages"
              :key="lang.name"
              class="lang-icon"
              :title="lang.name"
          >
            <img :src="lang.image" :alt="lang.name"/>
          </div>
        </div>
        <router-link :to="`/project/?id=${project.id}`" class="btn btn-filled small-view-btn">Explore</router-link>
      </div>
    </div>
  </div>
  </Transition>
</template>

<style scoped>
.project-info-wrapper {
  position: relative;
  width: 100%;
}

.background-img {
  position: absolute;
  top: -90px;
  left: 60px;
  width: 100%;
  height: 650px;
  z-index: -1;
  pointer-events: none;
  object-fit: cover;
}

.project-showcase {
  position: relative;
  display: flex;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  margin: 80px auto;
  min-height: 200px;
  z-index: 10;
}

.project-info-box {
  background: #f8fafb;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);
  width: 100%;
  height: 450px;
  padding: 20px 10px 40px 740px;
  border-radius: 18px;
}

.project-img {
  position: absolute;
  top: -40px;
  left: -60px;
  width: 800px;
  height: 450px;
  object-fit: fill;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  z-index: 2;
}

.project-info {
  flex: 1;
  padding: 0 24px;
}

.project-title {
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 12px;
  color: #242c2c;
}

.project-desc {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #222;
}

.project-actions {
  margin-top: 110px;
  display: flex;
  gap: 16px;
}

.btn {
  font-size: 1rem;
  font-weight: 600;
  padding: 10px 28px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;
  outline: none;
  border: none;
  text-decoration: none;
}

.btn-outline {
  background: transparent;
  border: 2px solid #c5c2c2;
  color: #c5c2c2;
  pointer-events: none;
}

.btn-filled {
  background: #2b513f;
  border: 2px solid #2b513f;
  color: #fff;
}

.btn-filled:hover {
  background: #242c2c;
  border-color: #242c2c;
}

.project-langs {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.lang-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s;
}

.lang-icon img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.lang-icon:hover {
  transform: scale(1.2);
}

.small-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 120px auto 200px auto;
  padding: 0 10px;
}

.small-project-box {
  background: #f8fafb;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px 18px 18px 18px;
  min-height: 350px;
  position: relative;
  transition: transform 0.5s;
}

.small-project-box:hover {
  transform: translateY(-5px);
}

.small-project-img {
  width: 100%;
  max-width: 260px;
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 18px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s;
}

.small-project-img img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 10px;
}

.small-project-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.small-project-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #242c2c;
  margin-bottom: 8px;
  text-align: center;
}

.small-project-desc {
  font-size: 0.98rem;
  color: #222;
  margin-bottom: 14px;
  text-align: center;
}

.small-project-langs {
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
}

.small-view-btn {
  padding: 7px 22px;
  font-size: 0.98rem;
  border-radius: 7px;
}

.fade-in-featured-enter-active,
.fade-in-small-enter-active {
  transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-in-featured-enter-from,
.fade-in-small-enter-from {
  opacity: 0;
}
.fade-in-featured-enter-to,
.fade-in-small-enter-to {
  opacity: 1;
}
.fade-in-featured-enter-from {
  transform: translateY(40px);
}
.fade-in-featured-enter-to {
  transform: translateY(0);
}

/* Responsive adjustments */
@media (max-width: 800px) {
  .project-showcase {
    flex-direction: column;
    gap: 24px;
    padding: 100px 10px 24px 10px;
  }

  .project-img {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }

  .project-info {
    padding: 0;
    text-align: center;
  }

  .project-actions {
    justify-content: center;
  }

  .small-projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>