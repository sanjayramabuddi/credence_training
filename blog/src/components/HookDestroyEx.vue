<template>
  <div>
    <h1>
        {{ name }}
    </h1>
  </div>
</template>
    <script>
export default {
  name: "HookDestroyEx",
  data() {
    return {
      name: "Hello Hook Destroy",
    };
  },
  beforeDestroy() {
    console.warn("Before Destroy Hook");
  },
  destroyed() {
    console.warn("Destroyed Hook");
  },
};
</script>