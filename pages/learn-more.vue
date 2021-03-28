<template>
  <div>
    <NavOne />
    <PageHeader title="Learn More" />
    <InfoBox />
    <FooterTwo />
  </div>
</template>

<script>
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import InfoBox from "@/components/InfoBox";
import FooterTwo from "@/components/FooterTwo";

export default {
  name: "learn-more",
  mounted() {


  },
  components: {
    FooterTwo,
    InfoBox,
    NavOne,
    PageHeader
  },
  head(){
    return {
      title: "AAFree | Learn More"
    }
  }
}
</script>

<style scoped>

</style>
