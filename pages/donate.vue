<template>
  <div>
    <NavOne />
    <PageHeader title="Donations" />
    <ChipsArea />
    <DonateHelp />
    <FooterTwo />
  </div>
</template>

<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import ChipsArea from "../components/ChipsArea";
  import DonateHelp from "@/components/DonateHelp";
  import FooterTwo from "@/components/FooterTwo";

  export default {
    components: {
      FooterTwo,
      DonateHelp,
      ChipsArea,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "AAFree | Donate"
      }
    }
  }
</script>
