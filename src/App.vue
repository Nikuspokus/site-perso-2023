<template>
  <NavBar />
  <div id="nav">
    <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link>  
  </div>
  <router-view />
</template>
<script setup>
import NavBar from './components/NavBar.vue';
</script>

<style >
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
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
