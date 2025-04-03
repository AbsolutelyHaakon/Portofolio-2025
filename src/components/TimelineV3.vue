<script setup>
import {ref, onMounted} from 'vue';

const timelineItems = ref([
  {
    id: 1,
    date: 'Spring 2025',
    title: 'Bachelor Thesis - Warehouse Workflow Manager',
    image: 'images/projects/wwscover.png',
    description: 'Bachelor project in collaboration with Solwr Solutions AS. Uses Monte Carlo simulation and machine learning to optimize warehouse flow.',
  },
  {
    id: 2,
    date: '2025 - Present',
    title: 'Afasia - Customized Training Application',
    image: 'images/projects/afasia1.png',
    description: 'Project in collaboration with the bachelor group. Self-developed application for training specifically designed for aphasia patients or others with similar training needs.',
  },
  {
    id: 3,
    date: 'Fall 2024',
    title: 'Fitness App - Personal Training Application',
    image: 'images/projects/fitnessapp1.png',
    description: 'Mobile application made in Flutter for mobile development course at NTNU. The application allows a user to plan, create, and share workouts.',
  },
  {
    id: 4,
    date: 'Spring 2024',
    title: 'Learniverse Connect - Learning Platform',
    image: 'images/projects/learniverse1.png',
    description: 'Web application written in HTML, CSS, and JavaScript. Learning platform that uses an external API to fetch learning materials.',
  },
  {
    id: 5,
    date: '2017-2018',
    title: 'Project E',
    image: 'images/projectE1.jpg',
    description: 'Description for Project E.',
  },
  // Add more items as needed
]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      } else {
        entry.target.classList.remove('fade-in');
      }
    });
  });

  document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
  });
});
</script>

<style scoped>
.timeline-container {
  display: flex;
  justify-content: center;
}

.item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px;
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  padding-left: 40px; /* Add padding to create a gap */
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.timeline-item.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.timeline-dot {
  width: 20px;
  height: 20px;
  background-color: #b5e5cf;
  border-radius: 50%;
  position: absolute;
  left: -31px;
  top: 50%;
  transform: translateY(-50%);
}

.timeline-content {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

.timeline-date {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 10px;
}

.timeline-image {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 10px;
}

.timeline-line {
  width: 2px;
  background: repeating-linear-gradient(
      to bottom,
      #b5e5cf,
      #b5e5cf 5px,
      transparent 5px,
      transparent 10px
  );
}
</style>

<template>
  <div class="timeline-container">
    <div class="timeline-line"></div>
    <div class="item-container">
      <div v-for="(item, index) in timelineItems" :key="index" class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>{{ item.title }}</h3>
          <p class="timeline-date">{{ item.date }}</p>
          <img :src="item.image" alt="Project Image" class="timeline-image"/>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>