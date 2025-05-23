<script setup>

</script>

<template>
  <div class="navbar-container">
    <nav class="navbar">
      <div class="nav-logo">HSK</div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/cv">CV</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
      </ul>
    </nav>
  </div>
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

.nav-links li .router-link-active {
  border-bottom: 2px solid #242c2c;
  padding-bottom: 2px;
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
</style>