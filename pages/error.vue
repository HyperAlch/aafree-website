<template>
  <div>
    <NavOne />
    <PageHeader title="Error" />
    <Error />
  </div>
</template>

<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Error from "../components/Error";


  export default {
    components: {
      Error,
      PageHeader,
      NavOne,
    },
    head(){
      return {
        title: "AAFree | Error"
      }
    }
  }
</script>
