<template>
    <div>
      <div v-if="loginData.errors.length">
        <b>Please correct the following errors</b>
        <ul>
          <li v-for="err in loginData.errors" :key="err.id">
            {{ err }}
        </li>
        </ul>
      </div>
      <form @submit="login">
        <input
          type="text"
          v-model="loginData.username"
          name="username"
          placeholder="Enter username"
        />
        <br /><br />
        <input
          type="password"
          v-model="loginData.password"
          name="password"
          placeholder="Enter password"
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
export default {
  name: "LoginForm",
  data() {
    return {
      loginData: {
        errors: [],
        username: null,
        password: null,
      },
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      this.loginData.errors = [];
      if (!this.loginData.username)
        this.loginData.errors.push("Username is required");
      if (!this.loginData.password)
        this.loginData.errors.push("Password is required");

      if (this.loginData.errors.length === 0) {
        console.warn("No error");
      } else {
        console.warn("Errors:", this.loginData.errors);
      }
    },
  },
};
</script>
  