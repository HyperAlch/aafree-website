<template>

</template>

<script>
export default {
  name: "Alert",
  methods: {
    close() {
      let window = document.getElementById("window")
      window.close();
      document.location = window.saved_location
    }
  },
}
</script>

<style scoped>
  h3 {
    color: black;
  }

  p {
    color: black;
  }

</style>
