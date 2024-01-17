<template>
  <div>
    {{ name }}
  </div>
</template>
  <script>
export default {
  name: "HookCreateEx",
  data() {
    return {
      name: "kiddo",
    };
  },
  beforeCreate() {
    //   this.name = "Sanjay Ramabuddi";
    console.log("Before Create Hook", this.name);
  },
  created() {
    this.name = "Sanjay Ramabuddi";
    console.log("Created Hook", this.name);
  },
};
</script>