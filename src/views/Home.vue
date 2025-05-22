<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const qualifications = [
  {name: 'Flutter', image: '/images/qualifications/originals/flutter.png'},
  {name: 'Vue.', image: '/images/qualifications/originals/vue.png'},
  {name: 'JavaScript', image: '/images/qualifications/originals/js.png'},
  {name: 'HTML', image: '/images/qualifications/originals/html.png'},
  {name: 'CSS', image: '/images/qualifications/originals/css.png'},
  {name: 'TypeScript', image: '/images/qualifications/originals/ts.png'},
  {name: 'SQL', image: '/images/qualifications/originals/sql.png'},
  {name: 'Python', image: '/images/qualifications/originals/python.png'},
  {name: 'Java', image: '/images/qualifications/originals/java.png'},
  {name: 'C#', image: '/images/qualifications/originals/csharp.png'}
];

const logos = [
  {url: 'https://github.com/AbsolutelyHaakon', image: '/images/external/githubwhite.png'},
  {url: 'https://www.linkedin.com/in/h%C3%A5kon-svensen-karlsen-a19a49348/', image: '/images/external/linkedin.png'},
];

const showMain = ref(false);
onMounted(() => {
  showMain.value = true;
});
</script>
<template>
  <div class="navbar-container">
    <nav class="navbar">
      <div class="nav-logo">HSK</div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/cv">CV</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/contact">Contact Me</router-link></li>
      </ul>
    </nav>
  </div>
  <Transition name="fade-slide">
    <main v-if="showMain" class="home-main">
    <section class="left">
      <h1 class="name">Håkon Karlsen</h1>
      <div class="description-container">
        <p class="description-combined">
          <span class="description-fade description-bold">
            An aspiring full-stack developer,
          </span>
          <span class="description-2">
            with experience within app- and web development looking to develop sustainable solutions.
          </span>
        </p>
      </div>
      <div class="vertical-links">
        <div
            v-for="qualification in qualifications"
            :key="qualification.name"
            class="icon-link"
        >
          <img :src="qualification.image" class="icon-img" :alt="qualification.name" />
          <span class="icon-name">{{ qualification.name }}</span>
        </div>
      </div>
      <!-- Buttons below qualifications -->
     <div class="link-buttons">
       <a
         class="btn btn-filled"
         :href="logos[0].url"
         target="_blank"
         rel="noopener"
       >
         GitHub
         <img :src="logos[0].image" alt="GitHub" class="btn-logo" />
       </a>
       <a
         class="btn btn-outline"
         :href="logos[1].url"
         target="_blank"
         rel="noopener"
       >
         LinkedIn
       </a>
     </div>
    </section>
    <section class="right">
      <div class="profile-img-wrapper">
        <div class="profile-green-box">
        </div>
        <img class="profile-img" src="/images/qualifications/profilePicV3.jpg" alt="Profile" />
      </div>
    </section>
  </main>
  </Transition>
</template>

<style scoped>
.navbar-container {
  width: 100vw;
  background: rgba(222, 222, 222, 1);
  position: relative;
  z-index: 100;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 40px;
  position: sticky;
  top: 0;
  z-index: 10;
  max-width: 1300px;
  margin: auto;
}
.nav-logo {
  font-size: 1.7rem;
  font-weight: bold;
  color: #242c2c;
}
.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 2;
}
.nav-links li a {
  position: relative;
  text-decoration: none;
  color: #242c2c;
  font-weight: 500;
  font-size: 1.1rem;
  overflow: hidden;
  z-index: 100;
  transition: color 0.2s;
}
.nav-links li a:hover {
  color: #ffffff;
}
.nav-links li a:hover::before {
  width: calc(100% + 12px);
  height: calc(100% + 8px);
}
.nav-links li a::before {
  content: "";
  position: absolute;
  left: -6px;
  top: -4px;
  width: 0;
  height: 100%;
  background: #262b2c;
  z-index: -1;
  transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
}
.home-main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 600px;
  gap: 60px;
  background-image: url('/images/figures/fullsquig.png');
  width: 100%;
  max-width: 1300px;
  margin: auto;
}
.left {
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.name {
  font-size: 3.5rem;
  font-weight: bold;
  color: #242c2c;
  margin-bottom: 0px;
  line-height:  1.2;
}
.description-combined {
  font-size: 1.2rem;
  color: #000000;
  line-height: 1.6;
  margin-top: 0;
  margin-bottom: 15px;
}
.description-fade {
  display: inline-block;
  background: linear-gradient(to right, #79af8d 0%, #78a889 9%, rgba(224,247,239,0) 55%, rgba(224,247,239,0) 100%);
  border-radius: 8px;
  padding: 2px 0 2px 10px;
}
.description-bold {
  font-weight: bold;
  color: #212121;
}
.description-2 {
  background: none;
  font-weight: normal;
}
.right {
  flex: 1;
  max-width: 350px;
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
}
.profile-img-wrapper {
  position: relative;
  width: 100%;
  max-width: 350px;
  height: 350px;
  display: flex;
  align-items: flex-end;
}
.profile-green-box {
  position: absolute;
  left: -40px;
  top: -40px;
  width: 270px;
  height: 470px;
  border-radius: 10px;
  z-index: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  background-image: url('/images/figures/greenpattern.png');
  background-repeat: repeat;
  background-size: auto;
}
.profile-img {
  width: 100%;
  height: 100%;
  max-width: 350px;
  object-fit: cover;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  position: relative;
  z-index: 1;
}
.vertical-links {
  display: flex;
  gap: 12px;
  align-items: center;
}

.icon-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  position: relative;
  transition: background 0.2s;
  overflow: visible;
}

.icon-name {
  margin-top: 6px;
  color: #242c2c;
  padding: 2px 10px;
  border-radius: 8px;
  opacity: 0;
  max-height: 0;
  pointer-events: none;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: bold;
  z-index: 2;
  transition: opacity 0.5s, max-height 0.5s;
}
.icon-link:hover .icon-name {
  opacity: 1;
  max-height: 40px;
}
.icon-img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}


.link-buttons {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}

.btn {
  padding: 10px 28px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.5s, color 0.5s, border 0.5s;
  outline: none;
  display: inline-block;
}

.btn-filled {
  background: #2b513f;
  color: #fff;
  border: 2px solid #2b513f;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
}

.btn-filled:hover {
  background: #212c2b;
  border-color: #212c2b;
}

.btn-outline {
  display: flex;
  align-items: center;
  background: transparent;
  color: #212c2b;
  border: 2px solid #212c2b;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.btn-outline:hover {
  background: #212c2b;
  color: #ffffff;
  border-color: #212c2b;
}

.btn-logo {
  width: 22px;
  height: 22px;
  margin-left: 10px;
  vertical-align: middle;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
}
.fade-slide-enter-active {
  transition: opacity 1.5s cubic-bezier(0.4,0,0.2,1), transform 1.5s cubic-bezier(0.4,0,0.2,1);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

@media (max-width: 900px) {
  .home-main {
    flex-direction: column;
    gap: 40px;
    padding: 24px 0;
  }
  .left, .right {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
  .profile-img-wrapper {
    margin: auto;
  }
}


.squig1 img {
  z-index: 50;
  width: 100%;
  height: 100%;
}
</style>