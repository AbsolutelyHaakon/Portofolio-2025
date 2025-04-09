<script setup>
    import {ref, onMounted} from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const timelineItems = ref([
      {
        id: 1,
        date: 'Spring 2025',
        title: 'Bachelor Thesis - Warehouse Workflow Manager',
        image: '/images/projects/wwscover.png',
        description: 'Bachelor project in collaboration with Solwr Solutions AS. Uses Monte Carlo simulation and machine learning to optimize warehouse flow.',
      },
      {
        id: 2,
        date: '2025 - Present',
        title: 'Afasia - Customized Training Application',
        image: '/images/projects/afasiacover.png',
        description: 'Project in collaboration with the bachelor group. Self-developed application for training specifically designed for aphasia patients or others with similar training needs.',
      },
      {
        id: 3,
        date: 'Fall 2024',
        title: 'Fitness App - Personal Training Application',
        image: '/images/projects/fitnessappcover.png',
        description: 'Mobile application made in Flutter for mobile development course at NTNU. The application allows a user to plan, create, and share workouts.',
      },
      {
        id: 4,
        date: 'Spring 2024',
        title: 'Learniverse Connect - Learning Platform',
        image: '/images/projects/learniversecover.png',
        description: 'Web application written in HTML, CSS, and JavaScript. Learning platform that uses an external API to fetch learning materials.',
      },
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
      gap:50px
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
      background-color: rgba(249, 249, 249, 0.8); /* Set background color with opacity */
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 600px;
      position: relative;
      z-index: 1;
      color: #2E1F27;
    }

    .timeline-content * {
      opacity: 1;
    }

    .timeline-date {
      font-size: 0.9rem;
      color: #2c3e50;
      margin-bottom: 10px;
    }

    .timeline-background-image {
      position: absolute;
      top: 50%;
      left: 50%;
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: 200px;
      transform: translate(-50%, -50%) rotate(-10deg);
      z-index: 0;
      pointer-events: none;
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

    .sectionText {
      text-align: center;
      margin: 0 0 50px 0;
      color: #3D5B59;
      font-weight: bolder;
      font-size: 2.5rem;
    }

    .view-more {
      position: absolute;
      bottom: -40px;
      right: 10px;
      background-color: #2E1F27;
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 0.8rem;
      text-decoration: none;
      transition: background-color 0.3s;
    }

    .view-more:hover {
      background-color: #8fcbb3;
    }

    @media (max-width: 900px) {
      .sectionText {
        font-size: 2rem;
      }

      .timeline-item {
        flex-direction: column;
        align-items: flex-start;
        padding-left: 0;
      }

      .timeline-dot {
        display: none;
      }

      .timeline-content {
        width: 90%;
        max-width: none;
        margin: auto;
      }

      .timeline-line {
        display: none;
      }

    }
    </style>

    <template>
      <h2 class="sectionText" id="timeline">My Projects</h2>
      <div class="timeline-container">
        <div class="timeline-line"></div>
        <div class="item-container">
          <div v-for="(item, index) in timelineItems" :key="index" class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3>{{ item.title }}</h3>
              <p class="timeline-date">{{ item.date }}</p>
              <p>{{ item.description }}</p>
              <router-link :to="`/project/?id=${item.id}`" class="view-more">View More</router-link>
            </div>
            <img :src="item.image" alt="Project Background Image" class="timeline-background-image"/>
          </div>
        </div>
      </div>
    </template>