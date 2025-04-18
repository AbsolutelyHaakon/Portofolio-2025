<script setup>
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    required: true,
  },
  titleColor: {
    type: String,
    required: true,
  },
});

const currentIndex = ref(0);
const currentTitle = ref('');
const currentDescription = ref('');
const touchStartX = ref(0);
const touchEndX = ref(0);

const scrollLeft = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const scrollRight = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const handleTouchStart = (event) => {
  touchStartX.value = event.touches[0].clientX;
};

const handleTouchMove = (event) => {
  touchEndX.value = event.touches[0].clientX;
};

const handleTouchEnd = () => {
  const deltaX = touchStartX.value - touchEndX.value;
  if (deltaX > 50) {
    scrollRight(); // Swipe left
  } else if (deltaX < -50) {
    scrollLeft(); // Swipe right
  }
};

onMounted(() => {
  updateContent();
});

watch(currentIndex, () => {
  updateContent();
});

const updateContent = () => {
  const currentImage = props.images[currentIndex.value];
  currentTitle.value = currentImage.title || '';
  currentDescription.value = currentImage.description || '';
};
</script>

<template>
  <div
    class="content"
    :style="{ backgroundColor: props.backgroundColor }"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div class="image-gallery" :style="{ backgroundColor: props.backgroundColor }">
      <button class="scroll-button left" @click="scrollLeft">‹</button>
      <div class="image-container">
        <div
          v-for="(image, index) in props.images"
          :key="index"
          :class="[
            'image-item',
            {
              'center': index === currentIndex,
              'left': (index + 1) % props.images.length === currentIndex,
              'right': (index - 1 + props.images.length) % props.images.length === currentIndex,
              'hidden': index !== currentIndex &&
                        (index + 1) % props.images.length !== currentIndex &&
                        (index - 1 + props.images.length) !== currentIndex,
            },
          ]"
          :style="{ backgroundImage: `url(${image.image})` }"
        ></div>
      </div>
      <button class="scroll-button right" @click="scrollRight">›</button>
    </div>
    <div class="image-details" v-if="currentTitle || currentDescription" :style="{ color: props.titleColor }">
      <h2 class="image-title">{{ currentTitle }}</h2>
      <div class="horizontal-divider" :style="{ backgroundColor: props.titleColor }"></div>
      <p class="image-description" :style="{ color: props.textColor }">{{ currentDescription }}</p>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  padding: 20px;
  background-color: #f8f9fa;
}

.image-gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 95%;
  margin: 0 auto;
  min-height: 100%;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 60vh;
}

.image-item {
  position: absolute;
  width: 60vw;
  max-height: 60vh;
  aspect-ratio: 16 / 9;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.5s, opacity 0.5s;
}

.image-item.center {
  transform: scale(1) translateX(0);
  z-index: 2;
  opacity: 1;
}

.image-item.left {
  transform: scale(0.8) translateX(-250px);
  z-index: 1;
  opacity: 0.5;
}

.image-item.right {
  transform: scale(0.8) translateX(250px);
  z-index: 1;
  opacity: 0.5;
}

.image-item.hidden {
  transform: scale(0.6) translateX(0);
  z-index: 0;
  opacity: 0.2;
}

.scroll-button {
  display: flex;
  justify-items: center;
  align-items: center;
  border: none;
  font-size: 2.8rem;
  padding: 5px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  color: #fff;
  background-color: transparent;
}

.scroll-button.left {
  left: 10px;
}

.scroll-button.right {
  right: 10px;
}

.image-details {
  text-align: center;
  transition: opacity 0.5s;
  max-width: 1000px;
  margin: 20px auto 0 auto;
}

.image-title {
  font-size: 1.5rem;
  margin: 0;
}

.image-description {
  font-size: 1rem;
  color: #555;
  max-width: 80%;
  margin: 0 auto;
}

.horizontal-divider {
  width: 90%;
  height: 3px;
  margin: 10px auto;
  border-radius: 24px;
}


@media (max-width: 500px) {

  .image-item {
    width: 90vw;
    height: 100%;
  }

  .scroll-button {
    font-size: 2rem;
  }

  .image-title {
    font-size: 1.2rem;
  }

  .image-description {
    font-size: 0.9rem;
  }

  .scroll-button {
    display: none;
  }

  .image-container {
    width: 100%;
    height: 40vh;
  }

  .image-details {
    margin-top: 5px;
  }
}
</style>