<template>
  <div class="copyright">
    <p>
      Copyright © {{ year }}
      <a href="/">AAFree.info</a> All Rights Reserved
    </p>
  </div>
</template>

<script>
export default {
  name: "Copyright",
  data: function () {
    return {
      year: ""
    }
  },
  mounted() {
    let d = new Date();
    this.$data.year = d.getFullYear();
  }
}
</script>

<style scoped>

</style>
