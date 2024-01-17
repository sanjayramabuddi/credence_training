<template>
  <div>
    <h2>Fetching Data from API</h2>
    <h3>Employee List -</h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FetchData",
  mounted() {
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  },
};
</script>
