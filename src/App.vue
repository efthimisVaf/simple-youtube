<template>
  <div id="app">
    <a href="."><img id="logo" alt="App logo" src="./assets/social-1834016_1920.png"></a>
    <HomePage/>
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  width: 20%;
  height: auto;
  margin-bottom: -40px;
  margin-top: -120px;
}
</style>
