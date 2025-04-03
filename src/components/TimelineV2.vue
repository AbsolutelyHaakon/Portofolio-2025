<script setup>
  import { ref, onMounted, watch } from 'vue';

  const timelineItems = ref([
    {
      id: 1,
      date: 'Vår 2025',
      title: 'Bacheloroppgaven - Warehouse Workflow Manager',
      featureImages: ['images/projects/wwscover.png', 'images/projects/placeholder.png', 'images/projects/placeholder.png'],
      description: 'Bachelorprosjekt i samarbeid med Solwr Solutions AS. Anvender Monte Carlo simulering og maskinlæring for å optimalisere lagerflyt.',
    },
    {
      id: 2,
      date: '2025 - Nå',
      title: 'Afasia - Spesialtilpasset treningsapplikasjon',
      featureImages: ['images/projects/afasia1.png', 'images/projects/afasia2.png'],
      description: 'Prosjekt i samarbeid med bachelorgruppen. Egenutviklet applikasjon for trening spesiallaget for afasipasienter eller andre med lignende treningsbehov.',
    },
    {
      id: 3,
      date: 'Høst 2024',
      title: 'Fitness App - Personlig treningsapplikasjon',
      featureImages: ['images/projects/fitnessapp1.png', 'images/projects/fitnessapp2.png'],
      description: 'Mobilapplikasjon laget i Flutter for mobilutviklingsfag ved NTNU. Applikasjonen lar en bruker planlegge, skape og dele treningsøkter.',
    },
    {
      id: 4,
      date: 'Vår 2024',
      title: 'Learniverse Connect - Læringsplattform',
      featureImages: ['images/projects/learniverse1.png', 'images/projects/learniverse2.png'],
      description: 'Web applikasjon skrevet i html, css og javascript. Læringsplatform som tar i bruk ekstern API for å hente inn læringsmateriale.',
    },
    {
      id: 5,
      date: '2017-2018',
      title: 'Project E',
      featureImages: ['images/projectE1.jpg', 'images/projectE2.jpg'],
      description: 'Description for Project E.',
    },
    // Add more items as needed
  ]);

  const currentIndex = ref(0);
  const currentImageIndex = ref(0);

  const setCurrentProject = (index) => {
    currentIndex.value = index;
    currentImageIndex.value = 0;
  };

  const nextImage = () => {
    currentImageIndex.value = (currentImageIndex.value + 1) % timelineItems.value[currentIndex.value].featureImages.length;
  };

  const prevImage = () => {
    currentImageIndex.value = (currentImageIndex.value - 1 + timelineItems.value[currentIndex.value].featureImages.length) % timelineItems.value[currentIndex.value].featureImages.length;
  };

  const updateImageIndex = () => {
    document.documentElement.style.setProperty('--current-image-index', currentImageIndex.value);
  };

  onMounted(() => {
    setInterval(nextImage, 10000); // Auto-slide every 3 seconds
  });

  watch(currentImageIndex, updateImageIndex);
  </script>

  <template>
    <h1 class="topptext">Mine Prosjekter</h1>
    <div class="project-container">
      <div class="project-content">
        <div class="image-slider">
          <button class="arrow left" @click="prevImage">&#9664;</button>
          <div class="images-wrapper">
            <img
                v-for="(image, index) in timelineItems[currentIndex].featureImages"
                :key="index"
                :src="image"
                :class="['project-image', { 'fade-out': index !== currentImageIndex }]"
                alt="Project Image"
            />
          </div>
          <button class="arrow right" @click="nextImage">&#9654;</button>
        </div>
        <p class="project-date">{{ timelineItems[currentIndex].date }}</p>
        <h3>{{ timelineItems[currentIndex].title }}</h3>
        <p>{{ timelineItems[currentIndex].description }}</p>
        <router-link :to="`/project/?id=${timelineItems[currentIndex].id}`" class="view-more">Lær Mer</router-link>
      </div>
    </div>
    <div class="dots-container">
          <span
              v-for="(item, index) in timelineItems"
              :key="index"
              class="dot"
              :class="{ active: index === currentIndex }"
              @click="setCurrentProject(index)">
          </span>
    </div>
  </template>

  <style scoped>

  :root {
    --current-image-index: 0;
  }

  .topptext {
    text-align: center;
    margin: -50px 0 30px 0;
    color: #2c3e50;
    font-weight: bolder;
    font-size: 2.5rem;
  }

  .project-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    background-color: #b5e5cf;
    border-radius: 15px;
  }

  .project-content {
    text-align: center;
  }

  .image-slider {
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    overflow: hidden;
  }

  .images-wrapper {
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(calc(-300px * var(--current-image-index)));
  }

  .project-image {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 6px;
    object-fit: cover;
    flex-shrink: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .project-image.fade-out {
    opacity: 0.5;
    background-color: lightgreen;
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #2c3e50;
  }

  .arrow.left {
    left: 10px;
  }

  .arrow.right {
    right: 10px;
  }

  .project-date {
    font-size: 14px;
    color: #888;
    margin-bottom: 10px;
  }

  .view-more {
    color: #FF6978;
    text-decoration: none;
  }

  .dots-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .dot {
    width: 15px;
    height: 15px;
    margin: 0 5px;
    background-color: #2c3e50;
    border-radius: 50%;
    cursor: pointer;
  }

  .dot.active {
    background-color: #B5E5CF;
  }
  </style>