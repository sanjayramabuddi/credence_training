<template>
  <div>
    <h1 id="app">{{ name }}</h1>
  </div>
</template>
    <script>
export default {
  name: "HookMountEx",
  data() {
    return {
      name: "Sanjay Kiddo",
    };
  },
  beforeMount() {
    console.warn("Before Mount Hook", document.getElementById("app"));
  },
  mounted() {
    console.warn("Mounted Hook", document.getElementById("app"));
  },
};
</script>