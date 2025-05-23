<script setup>
import {ref, onMounted} from 'vue';
const profileImage = '/images/qualifications/profilePicV3.jpg';
const name = 'Håkon Svensen Karlsen';
const logos = [
  {url: 'https://github.com/AbsolutelyHaakon', image: '/images/external/github.png'},
  {url: 'https://www.linkedin.com/in/h%C3%A5kon-svensen-karlsen-a19a49348/', image: '/images/external/linkedin.png'},
];

const nameRef = ref(null);
const showBio = ref(false);
const showQualifications = ref(false);
const profileImageRef = ref(null);

onMounted(() => {
  const element = nameRef.value;
  const fullText = name;
  let index = 0;

  function type() {
    if (index <= fullText.length) {
      element.innerHTML = fullText.substring(0, index++);
      setTimeout(type, 125);
    } else {
      showBio.value = true;
      setTimeout(() => {
        showQualifications.value = true;
      }, 2000);
    }
  }

  type();

  setTimeout(() => {
    profileImageRef.value.classList.add('fade-in');
  }, 1500);
});
</script>

<template>
  <div class="bio-box">
    <div class="left">
      <img :src="profileImage" alt="Profile" class="profile-image" ref="profileImageRef"/>
    </div>
    <div class="right">
      <p class="intro">Hello, I am</p>
      <h2 class="name" ref="nameRef"></h2>
      <h3 class="intro" style="margin-top: -20px">An aspiring full-stack developer</h3>
    </div>
  </div>
  <div class="logos">
    <div v-for="(logo, index) in logos" :key="index" class="logo-item">
      <a :href="logo.url" target="_blank">
        <img :src="logo.image" :alt="logo.name" class="logo-image"/>
      </a>
      <div v-if="index < logos.length - 1" class="separator"></div>
    </div>
  </div>
</template>

<style scoped>
.bio-box {
  display: flex;
  border-radius: 10px;
  padding: 20px;
  max-width: 1200px;
  margin: 10px auto;
  height: 300px;
}

.left {
  flex: 1;
  text-align: center;
}

.profile-image {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  opacity: 0;
  transition: opacity 1s ease-in;
}

.profile-image.fade-in {
  opacity: 1;
}

.right {
  flex: 2;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;
}

.name {
  margin: -15px 0 0 0;
  font-size: 4rem;
  font-weight: bolder;
  color: #3D5B59;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.1em solid #3D5B59;
  animation: blink-caret 1.25s step-end infinite;
  min-height: 3rem;
}

@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #3D5B59;
  }
}

.intro {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bolder;
  color: #2E1F27;
}

h2, h3, h4 {
  margin: 5px 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 5px;
}

.logos {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  min-width: 300px;
  max-width: 500px;
  margin:auto;
}

.logo-item {
  display: flex;
  align-items: center;
}

.logo-image {
  width: 50px;
  height: 50px;
  transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.logo-image:hover {
  filter: hue-rotate(90deg) brightness(0.99);
  transform: scale(1.1);
}

.separator {
  width: 2px;
  height: 75px;
  background-color: #3D5B59;
  border-radius: 1px;
  margin: 0 40px;
}

@media (max-width: 1200px) {
  .profile-image {
    width: 250px;
    height: 250px;
  }

  .right {
    padding-left: 10px;
  }

  .intro {
    font-size: 1.2rem;
  }

  .name {
    font-size: 2.5rem;
  }

  .bio-box {
    height: 300px;
    justify-content: center;
  }

}

@media (max-width: 900px) {
  .profile-image {
    width: 250px;
    height: 250px;
  }

  .left {
    margin-top: 8px;
  }
  .right {
    padding-left: 0;
  }

  .intro {
    font-size: 1.2rem;
  }

  .name {
    font-size: 2rem;
  }

  .bio-box {
    height: 300px;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 20px;
    margin-bottom: 50px;
  }

}
</style>