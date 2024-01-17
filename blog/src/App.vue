<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <HomeApp data="My props" />
    <DataBind />
    <PropsAdd v-bind:users="users" />
    <h1>{{ title }}</h1>
    <ChildParent v-on:updateParent="changed($event)"/> -->
    <!-- <LoginForm /> -->
    <!-- <FilterApp /> -->
    <!-- <HookCreateEx />
    <HookMountEx />
    <hookDestroyEx v-if="show"/>
    <button @click="burn">Destroy Me</button> -->
    <FetchData />
  </div>
</template>

<script>
import FetchData from './components/FetchData.vue';
// import HelloWorld from "./components/HelloWorld.vue";
// import HomeApp from "./components/HomeApp.vue";
// import DataBind from "./components/DataBind.vue";
// import PropsAdd from "./components/PropsAdd.vue";
// import ChildParent from "./components/ChildParent.vue";
// import LoginForm from "./components/LoginForm.vue";
// import FilterApp from './components/FilterApp.vue';
// import HookCreateEx from "./components/HookCreateEx.vue"
// import HookDestroyEx from './components/HookDestroyEx.vue';
// import HookMountEx from "./components/HookMountEx.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // HomeApp,
    // DataBind,
    // PropsAdd,
    // ChildParent,
    // LoginForm,
    // FilterApp,
    // HookCreateEx,
    // HookMountEx,
    // HookDestroyEx,
    FetchData
},
  data() {
    return {
      users: [
        {
          name: "Sanjay",
          email: "sanjay@gmail.com",
        },
        {
          name: "kiddo",
          email: "kiddo@gmail.com",
        },
        {
          name: "Orangee",
          email: "orangee@gmail.com",
        },
      ],
      title: "Parent hoo mai",
      show: true
    };
  },
  methods: {
    changed(title) {
      this.title = title;
    },
    burn() {
      this.show = !this.show
    }
  },
};
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
