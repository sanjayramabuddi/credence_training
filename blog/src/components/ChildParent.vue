<template>
  <div>
    <h2>Child Component</h2>
    <button v-on:click="updateP">Update data in parent</button>
  </div>
</template>
<script>
export default {
  name: "ChildParent",
  methods: {
    updateP() {
      this.$emit("updateParent", "Change hogaya mai");
    },
  },
};
</script>