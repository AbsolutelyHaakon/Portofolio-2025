<script setup>
  import {computed} from 'vue';

  const props = defineProps({
    currentProjectId: Number,
    projects: Array,
    titleColor: String,
    projectBoxBgColor: String,
    projectBoxTextColor: String
  });

  const filteredProjects = computed(() => {
    return props.projects.filter(project => project.id !== props.currentProjectId).slice(0, 3);
  });
  </script>

  <template>
    <div class="other-projects" :style="{ backgroundColor: props.projectBoxBgColor }">
      <h2 :style="{ color: props.titleColor }">Check out My Other Projects</h2>
      <div class="projects-container">
        <router-link v-for="project in filteredProjects" :key="project.id" :to="`/project/?id=${project.id}`"
                     class="project-box" :style="{ backgroundColor: props.projectBoxBgColor, color: props.projectBoxTextColor }">
          <img :src="project.image" :alt="project.title" class="project-image"/>
          <div class="project-info">
            <h3 class="project-title">{{ project.title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </template>

  <style scoped>

  h2 {
    font-size: 2rem;
    font-weight: bolder;
    text-align: center;
  }
  .other-projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding-bottom: 100px;
  }

  .projects-container {
    display: flex;
    gap: 70px;
    justify-content: space-around;
  }

  .project-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    width: 200px;
    transition: transform 0.2s;
  }

  .project-box:hover {
    transform: scale(1.05);
  }

  .project-image {
    width: 70%;
    height: auto;
    border-radius: 10px;
  }

  .project-info {
    text-align: center;
    margin-top: 10px;
  }

  .project-title {
    font-size: 1.2rem;
    margin: 0;
  }

  .project-period {
    font-size: 0.9rem;
    color: inherit;
  }
  </style>