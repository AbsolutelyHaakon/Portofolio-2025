<script setup>
    import { ref, computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const icons = ref([
      { image: 'images/pill/home.png', target: '#home' },
      { image: 'images/pill/projects.png', target: '#timeline' },
      { image: 'images/pill/CV.png', target: '#cv' }
    ]);

    const scrollToSection = (target) => {
      const section = document.querySelector(target);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const route = useRoute();
    const router = useRouter();

    const showPill = computed(() => route.path === '/home');
    const showGoHome = computed(() => route.path !== '/home');

    const goHome = () => {
      router.push('/home');
    };
    </script>

    <template>
      <router-view></router-view>
      <div v-if="showPill" class="floating-pill">
        <div v-for="item in icons" :key="item.target" class="pill-icon" @click="scrollToSection(item.target)">
          <img :src="item.image" class="pill-image" />
        </div>
      </div>
      <div v-if="showGoHome" class="go-home" @click="goHome">
        Go Back
      </div>
    </template>

    <style scoped>
    .floating-pill {
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      background-color: #fff;
      border-radius: 50px;
      padding: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }

    .pill-icon {
      cursor: pointer;
      padding: 10px;
      border-radius: 50%;
      transition: background-color 0.3s;
    }

    .pill-icon:hover {
      background-color: #f0f0f0;
    }

    .pill-image {
      width: 24px;
      height: 24px;
    }

    .go-home {
      position: fixed;
      top: 20px;
      left: 20px;
      cursor: pointer;
      background-color: #fff;
      padding: 10px 15px;
      border-radius: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      font-size: 14px;
      font-weight: bold;
      color: #333;
      transition: background-color 0.3s;
      z-index: 1000;
    }

    .go-home:hover {
      background-color: #f0f0f0;
    }

    @media (max-width: 700px) {
      .floating-pill {
        display: none;
      }
    }
    </style>