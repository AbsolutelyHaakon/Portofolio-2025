<script setup>
      import BioShort from "@/components/BioShort.vue";
      import Timeline from "@/components/Timeline.vue";
      import {useRouter} from "vue-router";
      import {onMounted, ref} from "vue";
      import Links from "@/components/Links.vue";

      const router = useRouter();
      const showTimeline = ref(false);

      onMounted(() => {
        console.log(router.currentRoute.value.path);
        setTimeout(() => {
          showTimeline.value = true;
        }, 8000);
      });
      </script>

      <template>
        <main>
          <header>
            <bio-short></bio-short>
          </header>
          <div class="timeline-container" :class="{ 'fade-in': showTimeline }">
            <Timeline v-if="showTimeline" />
          </div>
        </main>
      </template>

      <style scoped>
      header {
        color: #2c3e50;
        width: 100vw;
        padding: 50px 0 0 0;
        text-align: center;
      }

      .timeline-container {
        min-height: 600px;
        opacity: 0;
        transition: opacity 1s ease-in;
      }

      .timeline-container.fade-in {
        opacity: 1;
      }
      </style>