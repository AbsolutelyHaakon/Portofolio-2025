<script setup>
    import { ref } from 'vue';

    const timelineItems = ref([
      {
        id: 1,
        date: 'Vår 2025',
        title: 'Bacheloroppgaven - Warehouse Workflow Manager',
        image: 'images/projects/wws.png',
        description: 'Bachelorprosjekt i samarbeid med Solwr Solutions AS. Anvender Monte Carlo simulering og maskinlæring for å optimalisere lagerflyt.',
      },
      {
        id: 2,
        date: '2025 - Nå',
        title: 'Afasia - Spesialtilpasset treningsapplikasjon',
        image: 'images/projects/afasia.png',
        description: 'Prosjekt i samarbeid med bachelorgruppen. Egenutviklet applikasjon for trening spesiallaget for afasipasienter eller andre med lignende treningsbehov.',
      },
      {
        id: 3,
        date: 'Høst 2024',
        title: 'Fitness App - Personlig treningsapplikasjon',
        image: 'images/projects/fitnessapp.png',
        description: 'Mobilapplikasjon laget i Flutter for mobilutviklingsfag ved NTNU. Applikasjonen lar en bruker planlegge, skape og dele treningsøkter.',
      },
      {
        id: 4,
        date: 'Vår 2024',
        title: 'Learniverse Connect - Læringsplattform',
        image: 'mages/projects/learniverse.png',
        description: 'Web applikasjon skrevet i html, css og javascript. Læringsplatform som tar i bruk ekstern API for å hente inn læringsmateriale.',
      },
      {
        id: 5,
        date: '2017-2018',
        title: 'Project E',
        image: 'images/projectE.jpg',
        description: 'Description for Project E.',
      },
      // Add more items as needed
    ]);
    </script>

    <template>
      <h1 class="topptext">Mine Prosjekter</h1>
      <div class="timeline">
        <div v-for="(item, index) in timelineItems" :key="index"
             :class="['timeline-item', { 'timeline-item-right': index % 2 === 0 }]">
          <div class="timeline-content">
            <div class="left">
              <img :src="item.image" alt="Timeline Image" class="timeline-image"/>
            </div>
            <div class="right">
              <h3>{{ item.title }}</h3>
              <p class="timeline-date">{{ item.date }}</p>
              <p>{{ item.description }}</p>
              <router-link :to="`/project/?id=${item.id}`" class="view-more" >Lær Mer</router-link>
            </div>
          </div>
        </div>
      </div>
    </template>

    <style scoped>
    .topptext {
      text-align: center;
      margin: -50px 0 30px 0;
      color: #FF5733;
      font-weight: bolder;
      font-size: 2.5rem;
    }
    .timeline {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      max-width: 1300px;
      margin: 0 auto;
      padding: 20px 0;
    }

    .timeline-item {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      padding: 20px;
      position: relative;
    }

    .timeline-item:nth-child(odd) {
      justify-content: flex-start;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      width: 30%;
      height: 3px;
      background: repeating-linear-gradient(
          90deg,
          #FF5733,
          #FF5733 10px,
          #ffffff 10px,
          #ffffff 20px
      );
      top: 50%;
      transform: translateY(-50%);
      z-index: -1;
    }

    .timeline-item:nth-child(even)::before {
      left: 50%;
    }

    .timeline-item:nth-child(odd)::before {
      right: 50%;
    }

    .timeline::after {
      content: '';
      position: absolute;
      width: 3px;
      background-color: #2C363F;
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -3px;
    }

    .timeline-content {
      width: 45%;
      padding: 20px;
      background-color: #D6DBD2;
      position: relative;
      border-radius: 15px;
      display: flex;
      gap: 30px;
    }

    .timeline-item:nth-child(even) .timeline-content {
      flex-direction: row-reverse;
      text-align: right;
      padding-bottom: 40px;
    }

    .timeline-item:nth-child(even) .view-more {
      margin-top:10px;
      text-align: right;
      position: absolute;
      bottom: 15px;
      left: 20px;
    }

    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #2C363F;
      border-radius: 12px;
      margin: auto;
    }

    .timeline-image {
      width: 100px;
      height: auto;
      border-radius: 6px;
      object-fit: cover;
    }

    .timeline-date {
      font-size: 14px;
      color: #888;
    }

    .view-more {
      display: block;
      text-align: right;
      color: #FF5733;
      text-decoration: none;
      margin-top: 10px;
    }

@media (max-width: 1200px) {
      .timeline {
        align-items: flex-start;
        max-width: 80%;
      }

      .timeline-item {
        justify-content: flex-start;
        width: 100%;
      }

      .timeline-item::before {
        display: none;
      }

      .timeline::after {
        display: none;
      }

      .timeline-content {
        width: 100%;
        flex-direction: row;
        text-align: left;
      }

      .timeline-item:nth-child(even) .timeline-content {
        flex-direction: row;
        text-align: left;
      }

      .timeline-item:nth-child(even) .view-more {
        text-align: left;
        position: static;
        margin-top: 10px;
      }
    }    </style>