<script setup>
import {ref} from "vue";

const profile = {
  name: "Håkon Svensen Karlsen",
  title: "Computer Sciende Graduate",
  image: "/images/qualifications/profilePicV3.jpg",
  contact: [
    { image: "/images/icons/email.png", value: "haakonsk@live.no" },
    { image: "/images/icons/phone.png", value: "+47 98056032" },
    { image: "/images/icons/location.png", value: "Ålesund, Møre and Romsdal" }
  ],
  qualifications: [
    {name: 'Flutter', image: '/images/qualifications/originals/flutter.png'},
    {name: 'Vue', image: '/images/qualifications/originals/vue.png'},
    {name: 'JavaScript', image: '/images/qualifications/originals/js.png'},
    {name: 'HTML', image: '/images/qualifications/originals/html.png'},
    {name: 'CSS', image: '/images/qualifications/originals/css.png'},
    {name: 'TypeScript', image: '/images/qualifications/originals/ts.png'},
    {name: 'SQL', image: '/images/qualifications/originals/sql.png'},
    {name: 'Python', image: '/images/qualifications/originals/python.png'},
    {name: 'Java', image: '/images/qualifications/originals/java.png'},
    {name: 'C#', image: '/images/qualifications/originals/csharp.png'}
  ],
  documents: [
    { name: "CV (PDF)", image: "/images/pill/CV.png", url: "https://drive.google.com/file/d/1t5DTbRghAGMhkEiO76iWsCxKyHUbbeGp/view?usp=sharing" },
    { name: "Recommendation Letter", image: "/images/pill/lor.png", url: "https://drive.google.com/file/d/1DyzIqkF85zUIuNoa97zJz1uth1YJ-cQn/view?usp=sharing" },
    { name: "Cover Letter", image: "/images/pill/coverletter.png", url: "https://www.linkedin.com/in/h%C3%A5kon-svensen-karlsen-a19a49348/" },
    {name: "GitHub", url: 'https://github.com/AbsolutelyHaakon', image: '/images/external/githubwhite.png'},
    {name: "LinkedIn", url: 'https://www.linkedin.com/in/h%C3%A5kon-svensen-karlsen-a19a49348/', image: '/images/external/linkedin.png'}
  ]
};

const description = "A short professional summary about yourself goes here.";
const education = [
  { school: "NTNU Ålesund", degree: "B.Sc. in Computer Science", year: "2022 - 2025", description: "Primarily focused on creating both mobile- and web applications. Experience in machine learning, data visualization, graphic design & more." },
  { school: "NTNU Trondheim", degree: "B.Sc. in Economy", year: "2019 - 2020", description: "Completed first year in economics bachelor's degree before changing direction." }
];
const experience = [
  { company: "Insoft AS", role: "Developer (Internship)", years: "2024", details: "Internship for a software development company. Development of an ERP-system written in TypeScript, JavaScript, Java & mySQL. Code in production." },
  { company: "Veøy Møre", role: "Distribution Driver", years: "2023 - Now", details: "Distribution of medicine, business- and personal delivery. Worked 2 days a week next to my studies" },
  { company: "Medvind Assistanse", role: "Care Assistant", years: "2022 - 2023", details: "Care assistant for child contributing to an equal daily life." },
  { company: "Teknobingo", role: "Bingo Host", years: "2020-2022", details: "Host at several bingo halls. Independent work during and after my studies." },
  { company: "MIO BPA", role: "Care Assistant", years: "2021", details: "Care assistant for older gentleman." },
  { company: "Lindesnes Kommune", role: "Care Assistant", years: "2019 - 2020", details: "Care assistant for older gentleman during the summer break." }
];

</script>

<template>
  <div class="cv-container">
    <aside class="cv-sidebar">
      <div class="name-section">
        <img :src="profile.image" alt="Profile" class="profile-img" />
        <h2 class="profile-name">{{ profile.name }}</h2>
        <h3 class="profile-title">{{ profile.title }}</h3>
      </div>
      <div class="contact-info">
        <div v-for="c in profile.contact" :key="c.value" class="contact-item">
          <img :src="c.image" alt="" class="contact-icon" />
          <span>{{ c.value }}</span>
        </div>
      </div>
      <div class="documents">
        <h2>Links</h2>
        <div class="document-grid">
          <a
              v-for="doc in profile.documents"
              :key="doc.url"
              :href="doc.url"
              target="_blank"
              rel="noopener"
              class="document-card"
          >
            <span class="document-icon-wrapper">
              <img :src="doc.image" alt="" class="document-icon" />
              <span class="document-title">{{ doc.name }}</span>
            </span>
          </a>
        </div>
      </div>
    </aside>
    <main class="cv-main">
      <section class="description">
        <h2>Description</h2>
        <p>{{ description }}</p>
      </section>
      <section class="qualifications">
        <h2>Coding Experience</h2>
        <div class="qual-grid">
          <div
              v-for="q in profile.qualifications"
              :key="q.name"
              class="qual-grid-item"
          >
            <img :src="q.image" :alt="q.name" class="qual-img" />
            <span>{{ q.name }}</span>
          </div>
        </div>
      </section>
      <section class="education">
        <h2>Education</h2>
        <ul class="timeline">
          <li v-for="e in education" :key="e.school" class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div>
                <strong>{{ e.school }}</strong> — {{ e.degree }} ({{ e.year }})
              </div>
              <div class="timeline-description">{{ e.description }}</div>
            </div>
          </li>
        </ul>
      </section>
      <section class="experience">
        <h2>Work Experience</h2>
        <ul class="timeline">
          <li v-for="ex in experience" :key="ex.company" class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div>
                <strong>{{ ex.company }}</strong> — {{ ex.role }} ({{ ex.years }})
              </div>
              <div class="timeline-description">{{ ex.details }}</div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<style scoped>
.cv-container {
  display: flex;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  max-width: 1300px;
  margin: auto;
}
.cv-sidebar {
  width: 35%;
  background: #dedede;
  color: #fff;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name-section {
  width: 100%;
  background-color: #2b513f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.profile-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 18px;
}
.profile-name {
  font-size: 1.8rem;
  margin: 0 0 8px 0;
  font-weight: 600;
  line-height: 1.2;
}
.profile-title {
  font-size: 1.1rem;
  margin-bottom: 24px;
  font-weight: 400;
  margin-top: -4px;
}
.contact-info {
  width: 100%;
  margin: 32px 0;
  background-color: #2b513f;
  padding: 24px;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-weight: 600;
}
.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1rem;

}
.contact-icon {
  width: 22px;
  height: 22px;
  margin-right: 10px;
}
.cv-main {
  width: 65%;
  padding: 48px 40px;
  background-color: #dedede;
  color: #242c2c;
}
.cv-main section {
  margin-bottom: 32px;
}
.cv-main h2 {
  margin-bottom: 12px;
  font-size: 1.3rem;
  color: #2b513f;
}
.cv-main ul {
  padding-left: 18px;
}
.qualifications {
  width: 100%;
  margin-bottom: 32px;
}
.qual-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 16px;
  margin-top: 8px;
}
.qual-grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e7e5e5;
  color: #242c2c;
  border-radius: 10px;
  padding: 8px;
  transition: background 0.3s, box-shadow 0.3s;
  border: 2px solid transparent;
  user-select: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.qual-img {
  width: 24px;
  height: 24px;
  margin-bottom: 8px;
}
.qual-grid-item span {
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
}

.timeline {
  position: relative;
  margin: 0;
  padding: 0 0 0 32px;
  list-style: none;
}

.timeline-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  min-height: 95px;
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
  width: 16px;
  height: 16px;
  background: #2b513f;
  border-radius: 50%;
  border: 3px solid #dedede;
  z-index: 1;
}

.timeline-item:not(:last-child)::after {
  content: "";
  position: absolute;
  left: 7px;
  top: 16px;
  width: 2px;
  height: calc(100% - 16px);
  border-left: 2px dashed #2b513f;
  z-index: 0;
}

.timeline-content {
  margin-left: 32px;
  flex: 1;
}

.timeline-description {
  margin-top: 6px;
  color: #555;
  font-size: 0.98em;
}

.experience {
  margin-top: -48px;
}

.documents {
  width: 100%;
  background-color: #2b513f;
  padding: 24px;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.documents h2 {
  margin-bottom: 12px;
  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;
}

.documents ul {
  list-style: none;
  padding: 0;
}

.documents li {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1rem;
}

.documents li a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
}

.document-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  gap: 16px;
  margin-top: 8px;
}

.document-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1e3a2a;
  border-radius: 12px;
  padding: 18px 8px 10px 8px;
  text-decoration: none;
  color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  transition: background 0.5s, box-shadow 0.5s, transform 0.5s;
  cursor: pointer;
  border: 2px solid transparent;
}

.document-card:hover {
  background: #2b513f;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  transform: translateY(-2px) scale(1.04);
  border-color: #fff;
}

.document-icon-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.document-icon {
  display: block;
  width: 38px;
  height: 38px;
  margin-bottom: 10px;
  transition: opacity 0.3s;
}

.document-title {
  display: none;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  color: #fff;
  margin-top: 2px;
  word-break: break-word;
  line-height: 1.1rem;
  transition: opacity 0.3s;
}

.document-card:hover .document-icon {
  display: none;
}

.document-card:hover .document-title {
  display: block;
}

@media (max-width: 900px) {
  .cv-container {
    flex-direction: column;
  }
  .cv-sidebar, .cv-main {
    width: 100%;
    padding: 24px 12px;
  }
  .cv-sidebar {
    align-items: flex-start;
  }
}
</style>