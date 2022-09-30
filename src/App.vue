<template>
  <NavBar />
  <router-view />
</template>
<script setup>
import NavBar from "./components/NavBar.vue";
import AboutMe from "./views/AboutMe.vue";
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
}

#nav {
  padding: 30px;
}

a {
  color: green;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
  border-radius: 4px;
}
</style>
