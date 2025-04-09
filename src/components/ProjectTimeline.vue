<script setup>
    import { defineProps } from 'vue';

    defineProps({
      timeline: {
        type: Array,
        required: true,
        default: () => [],
      },
    });
    </script>

    <template>
      <h1>Roadmap</h1>
      <div class="timeline">
        <div
          v-for="(item, index) in timeline"
          :key="index"
          class="timeline-item"
          :class="{ 'flashing': item.live }"
        >
          <div class="timeline-date">{{ item.date }}</div>
          <div class="timeline-content">
            <h3 class="timeline-title">{{ item.title }}</h3>
            <ul class="timeline-milestones">
              <li v-for="(milestone, idx) in item.milestones" :key="idx">{{ milestone }}</li>
            </ul>
          </div>
        </div>
      </div>
    </template>

    <style scoped>
    h1 {
      text-align: center;
      margin: -50px 0 30px 0;
      color: #06c0ff;
      font-weight: bolder;
      font-size: 2.5rem;
    }

    .timeline {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      margin: 20px auto;
      width: 80%;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 45%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #06c0ff;
      transform: translateX(-50%);
    }

    .timeline-item {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      position: relative;
      margin-bottom: 20px;
      width: 100%;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: 45%;
      top: 5px;
      width: 15px;
      height: 15px;
      background: #2B2D42;
      border-radius: 50%;
      border: 2px solid #06c0ff;
      transform: translateX(-50%);
    }

    .timeline-date {
      font-size: 0.9rem;
      color: #888;
      margin-right: 20px;
      text-align: right;
      width: 45%;
    }

    .timeline-content {
      margin-left: 40px;
      width: 55%;
    }

    @keyframes flash {
      0%, 100% {
        background-color: #2B2D42;
      }
      50% {
        background-color: #48CD6D;
      }
    }

    .timeline-item.flashing::before {
      animation: flash 2s infinite;
    }

    @media (max-width: 500px) {

      ul {
        list-style-type: none;
        padding: 0;
      }

      li {
        font-size: 0.8rem;
      }

    }
    </style>