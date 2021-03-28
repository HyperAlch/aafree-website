<template>
  <div>
    <NavOne />
    <PageHeader title="FAQ" />
    <Faq />
    <FooterTwo />
  </div>
</template>

<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import Faq from "../components/Faq";
  import FooterTwo from "@/components/FooterTwo";

  export default {
    components: {
      Faq,
      PageHeader,
      NavOne,
      FooterTwo
    },
    head(){
      return {
        title: "AAFree | FAQ"
      }
    }
  }
</script>
