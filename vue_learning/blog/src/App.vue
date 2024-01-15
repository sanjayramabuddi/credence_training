<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HomeApp data="My props" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeApp from './components/HomeApp.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  margin-top: 60px;
  background-color: #222;
}
</style>
