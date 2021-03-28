<template>
  <div>
    <NavOne />
    <PageHeader title="Claim Gift" />
    <GiftItems />
    <GiftInstructions />
    <FooterTwo />
  </div>
</template>

<script>
import NavOne from "@/components/NavOne";
import PageHeader from "@/components/PageHeader";
import FooterTwo from "@/components/FooterTwo";
import GiftItems from "@/components/GiftItems";
import GiftInstructions from "@/components/GiftInstructions";

export default {
  name: "gift",
  mounted() {


  },
  components: {
    GiftInstructions,
    GiftItems,
    FooterTwo,
    NavOne,
    PageHeader
  },
  head(){
    return {
      title: "AAFree | Claim Gift"
    }
  }
}
</script>

<style scoped>

</style>
