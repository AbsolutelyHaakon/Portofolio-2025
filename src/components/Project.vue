<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import router from "@/router/index.js";

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
        title: 'Project Title 1',
        image: 'src/assets/images/project1.jpg',
        description: 'This is a detailed description of project 1.',
      },
      {
        id: 2,
        title: 'Project Title 2',
        image: 'src/assets/images/project2.jpg',
        description: 'This is a detailed description of project 2.',
      },
      // Add more projects as needed
    ];

    onMounted(() => {
      fetchProjectId();
    });
    </script>

    <template>
      <div class="project-detail" v-if="project.title">
        <div class="image-container">
          <img :src="project.image" alt="Project Image" class="main-image" />
          <div class="overlay">
            <h1 class="title">{{ project.title }}</h1>
          </div>
        </div>
        <div class="description">
          <p>{{ project.description }}</p>
        </div>
      </div>
      <div v-else>
        <p>Project not found.</p>
      </div>
    </template>

    <style scoped>
    .project-detail {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .image-container {
      position: relative;
      width: 100%;
      max-width: 1200px;
    }

    .main-image {
      width: 100%;
      height: auto;
      display: block;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .title {
      color: white;
      font-size: 2em;
      text-align: center;
    }

    .description {
      margin-top: 20px;
      text-align: left;
      width: 100%;
    }
    </style>