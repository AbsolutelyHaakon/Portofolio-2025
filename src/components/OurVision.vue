<script setup>
import ImageGallery from "@/components/ImageGallery.vue";

const visionData = {
  title: "Our Vision",
  subtitle: "The Problem With the Current Solution",
  description1: `After talks with trained speech therapists, we have identified the need for appropriately designed training applications that treat
                    <span class="highlight">aphasia patients</span> and others with similar training needs better Applications that are currently in use are either too <span class="badhighlight">restrictive</span>, <span class="badhighlight">childish</span>, or not designed for the target group. Below are a couple of images of current application which we believe are <span class="badhighlight">sub-par</span>, based on the patients needs`,
  images: [
    {image: "/images/projects/afasia/problem.png"},
    {image: "/images/projects/afasia/problem1.png"},
    {image: "/images/projects/afasia/problem2.png"},
    {image: "/images/projects/afasia/problem3.png"},
    {image: "/images/projects/afasia/problem4.png"},
    {image: "/images/projects/afasia/problem5.png"},
    {image: "/images/projects/afasia/problem6.png"},
    {image: "/images/projects/afasia/problem7.png"},
  ],
  subtitle2: "Our Commitment",
  description2: ` <span class="highlight">Afasia</span> plans to create an application appropriate for adult learners that has a  <span class="highlight">modern and familiar feel.</span> The application will be extremely flexible to suit the accessibility needs of a large range of users. <span class="highlight">Custom made exercises</span> allow specialists to set up effective and familiar learning environments which contributes to the patients' <span class="highlight">motivation and learning.</span>  The application will be designed to be used in a variety of settings, including at home, in the clinic, or in a group setting. The goal is to create an application that is not only effective but also <span class="highlight">enjoyable</span> to use.`,
};
</script>

<template>
  <div class="vision-container">
    <h1>{{ visionData.title }}</h1>
    <h2>{{ visionData.subtitle }}</h2>

    <p v-html="visionData.description1" style="align-self: flex-start; text-align: left"></p>

    <ImageGallery
        :images="visionData.images"
        backgroundColor="#2B2D42"
        textColor="#555"
        titleColor="#2c363f"
    />

    <h2 style="align-self: flex-end">{{ visionData.subtitle2 }}</h2>
    <p v-html="visionData.description2" style="align-self: flex-end; text-align: right"></p>
  </div>
</template>

<style scoped>
.vision-container {
  text-align: center;
  padding: 0 10% 150px 10%;
  background-color: #2B2D42;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #06c0ff;
}

h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #5bb2d2;
  margin-top: 30px;
  align-self: flex-start;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ffffff;
  margin: 0;
}
</style>