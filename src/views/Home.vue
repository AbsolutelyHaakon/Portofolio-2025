<script setup>
import BioShort from "@/components/BioShort.vue";
import Timeline from "@/components/Timeline.vue";
import {useRouter} from "vue-router";
import {onMounted, onUnmounted, ref} from "vue";
import BioV2 from "@/components/BioV2.vue";
import TimelineV2 from "@/components/TimelineV2.vue";
import TimelineV3 from "@/components/TimelineV3.vue";
import CV2 from "@/components/CV2.vue";
import Wave from "@/components/Wave.vue";
import CVMobile from "@/components/CVMobile.vue";

const router = useRouter();
const showTimeline = ref(false);

onMounted(() => {
  console.log(router.currentRoute.value.path);
  setTimeout(() => {
    showTimeline.value = true;
  }, 8000);
});

const qualifications = [
  {name: 'Flutter', image: 'images/qualifications/flutter.png'},
  {name: 'Vue.', image: 'images/qualifications/vue.png'},
  {name: 'JavaScript', image: 'images/qualifications/js.png'},
  {name: 'HTML', image: 'images/qualifications/html.png'},
  {name: 'CSS', image: 'images/qualifications/css.png'},
  {name: 'TS', image: 'images/qualifications/ts.png'},
  {name: 'SQL', image: 'images/qualifications/sql.png'},
  {name: 'Python', image: 'images/qualifications/python.png'},
];

const colors = [
  '#b5e5cf',
  '#b5e5cf',
  '#ffffff',
];

const isLargeScreen = ref(false);

const updateScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 900;
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener("resize", updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenSize);
});
</script>
<template>
  <main class="background">
    <header id="home">
      <BioV2/>
    </header>
    <Wave :colors="colors"/>
    <h2 class="sectionText">Proficient Coding Experience In</h2>
    <div class="qualification-container">
      <div v-for="qualification in qualifications" :key="qualification.name" class="qualification-item">
        <img :src="qualification.image" :alt="qualification.name" class="qualification-image"/>
      </div>
    </div>
    <div class="timeline-container">
      <TimelineV3/>
    </div>
    <CV2 v-if="isLargeScreen" />
    <CVMobile v-if="!isLargeScreen" />
  </main>
</template>
<style scoped>
.background {
  justify-content: center;
  font-weight: normal;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  background: linear-gradient(to bottom, #b5e5cf, #ffffff) no-repeat;
  background-size: 100% 600px;
  color: #333;
  z-index: 1;
  position: relative;
  overflow: hidden;
}

body {
  background-color: #ffffff;
}

header {
  color: #2c3e50;
  width: 100vw;
  padding: 50px 0 0 0;
  text-align: center;
}

.svg-container {
  position: relative;
  width: 100%;
  height:auto;
}

.svg-bottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.svg-middle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
}

.svg-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}


.qualification-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px auto;
  max-width: 1000px;
}

.qualification-item {
  text-align: center;
  flex: 1 1 10%;
  margin: 10px;
}

.qualification-image {
  width: 65px;
  height: 65px;
  object-fit: contain;
  transition: transform 0.3s ease-in;
}

.qualification-image:hover {
  transform: scale(1.1);
}

.sectionText {
  text-align: center;
  margin: 20px 0 30px 0;
  color: #3D5B59;
  font-weight: bolder;
  font-size: 2.5rem;
}

.timeline-container {
  min-height: 600px;
  margin-top: 200px;
  background: white;
}

.timeline-container.fade-in {
  opacity: 1;
}

@media (max-width: 900px) {
  .sectionText {
    font-size: 2rem;
  }

  .qualification-image {
    width: 50px;
    height: 50px;
  }

  .timeline-container {
    margin-top: 70px;
  }
}

@media (max-width: 500px) {
  .qualification-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 0;
  }

}
</style>