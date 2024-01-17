<template>
  <div>
    <h1>Props Usage</h1>
    <h3 v-for="user in users" :key="user.name">
      {{ user.name }} - {{user.email }}
    </h3>
  </div>
</template>
<script>
export default {
  name: "PropsAdd",
  props: [
    "users"
  ]
};
</script>
