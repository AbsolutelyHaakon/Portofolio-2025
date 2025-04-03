<script setup>
import BioShort from "@/components/BioShort.vue";
import Timeline from "@/components/Timeline.vue";
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import BioV2 from "@/components/BioV2.vue";
import TimelineV2 from "@/components/TimelineV2.vue";
import TimelineV3 from "@/components/TimelineV3.vue";
import CV2 from "@/components/CV2.vue";

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
</script>
<template>
  <main class="background">
    <header id="home">
      <BioV2/>
    </header>
    <div class="svg-container">
      <svg class="svg-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#b5e5cf" fill-opacity="0.5"
              d="M0,192L21.8,186.7C43.6,181,87,171,131,149.3C174.5,128,218,96,262,101.3C305.5,107,349,149,393,170.7C436.4,192,480,192,524,202.7C567.3,213,611,235,655,224C698.2,213,742,171,785,165.3C829.1,160,873,192,916,213.3C960,235,1004,245,1047,250.7C1090.9,256,1135,256,1178,234.7C1221.8,213,1265,171,1309,133.3C1352.7,96,1396,64,1418,48L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
      </svg>
      <svg class="svg-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1"
              d="M0,128L21.8,138.7C43.6,149,87,171,131,186.7C174.5,203,218,213,262,202.7C305.5,192,349,160,393,154.7C436.4,149,480,171,524,176C567.3,181,611,171,655,181.3C698.2,192,742,224,785,213.3C829.1,203,873,149,916,122.7C960,96,1004,96,1047,106.7C1090.9,117,1135,139,1178,138.7C1221.8,139,1265,117,1309,101.3C1352.7,85,1396,75,1418,69.3L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
      </svg>
      <svg class="svg-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#b5e5cf" fill-opacity="1"
              d="M0,0L21.8,0C43.6,0,87,0,131,37.3C174.5,75,218,149,262,160C305.5,171,349,117,393,101.3C436.4,85,480,107,524,122.7C567.3,139,611,149,655,149.3C698.2,149,742,139,785,165.3C829.1,192,873,256,916,256C960,256,1004,192,1047,154.7C1090.9,117,1135,107,1178,106.7C1221.8,107,1265,117,1309,112C1352.7,107,1396,85,1418,74.7L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
      </svg>
    </div>
    <h2 class="sectionText">Proficient Coding Experience In</h2>
    <div class="qualification-container">
      <div v-for="qualification in qualifications" :key="qualification.name" class="qualification-item">
        <img :src="qualification.image" :alt="qualification.name" class="qualification-image"/>
      </div>
    </div>
    <div class="timeline-container">
      <TimelineV3/>
    </div>
    <CV2/>
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
  height: 320px;
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
  max-width: 1200px;
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
</style>