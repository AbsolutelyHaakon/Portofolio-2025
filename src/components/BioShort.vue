<script setup>
const profileImage = 'images/qualifications/profilePic.jpg';
const name = 'Håkon Svensen Karlsen';
const title = 'Bachelor i ingeniørfag, data';
const city = 'NTNU Ålesund';
const email = "haakonsk@live.no";
const qualifications = [
  {name: 'Flutter' ,image: 'images/qualifications/flutter.png'},
  { name: 'Vue.js', image: 'images/qualifications/vue.png' },
  { name: 'JavaScript', image: 'images/qualifications/js.png' },
  { name: 'HTML', image: 'images/qualifications/html.png' },
  { name: 'CSS', image: 'images/qualifications/css.png' },
  {name: 'TS', image: 'images/qualifications/ts.png'},
  {name: 'SQL', image: 'images/qualifications/sql.png'},
];const biography = 'Student på 24 år som fullfører bachelor ved NTNU Ålesund. God erfaring fra en rekke prosjekter og praksis i IT-Firma. Denne siden detaljerer prosjektene og arbeidserfaringen jeg mener er relevant for fremtidig arbeid. Oppdateringer på ulike prosjekter finnes også her.';
</script>

<template>
  <div class="bio-box">
    <div class="left">
      <img :src="profileImage" alt="Profile Image" class="profile-image" />
      <h2>{{ name }}</h2>
      <div style="gap:1px ">
        <h3 class="UT">{{ title }}</h3>
        <p class="UT">{{ city }}</p>
        <p class="UT">{{email}}</p>
      </div>
    </div>
    <div class="right">
    <p class="bio">{{ biography }}</p>
    </div>
  </div>
  <div class="qualification-box">
    <h4 style="margin-left: 15px">Hovedkvalifikasjoner</h4>
    <ul class="strengths">
      <li v-for="qualification in qualifications" :key="qualification.name">
        <img :src="qualification.image" :alt="qualification.name" class="strengths-image" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.bio-box {
  display: flex;
  border-radius: 10px;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  height: 400px;
}

.left {
  flex: 1;
  text-align: center;
}

.profile-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.right {
  flex: 2;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.strengths-image {
  width: 45px;
  height: 45px;
}

.strengths-image:hover {
  transform: scale(1.4);
}

.strengths {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 100%;
  padding: 0 20px;
}

.qualification-box {
  display: flex;
  justify-items: center;
  margin: auto;
  gap: 10px;
  flex-direction: column;
  max-width: 1000px;
}

.bio {
  margin: 100px 15px 0 15px;
}

.UT {
  text-align: left;
  margin: 0 0 0 25px;
}
</style>