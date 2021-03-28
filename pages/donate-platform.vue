<template>
  <div>
    <NavOne />
    <PageHeader title="Donation Platform" />
    <TicketArea />
    <FooterTwo />
  </div>
</template>

<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import TicketArea from "../components/TicketArea";
  import FooterTwo from "@/components/FooterTwo";

  export default {
    components: {
      FooterTwo,
      TicketArea,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "AAFree | Donation Platform"
      }
    }
  }
</script>
