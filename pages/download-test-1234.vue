<template>
  <div>
    <NavOne />
    <PageHeader title="Download" />
    <DownloadSection />
    <DownloadHelp />
    <FooterTwo />
  </div>
</template>

<script>
  import NavOne from "../components/NavOne";
  import PageHeader from "../components/PageHeader";
  import FooterTwo from "@/components/FooterTwo";
  import DownloadSection from "@/components/DownloadSection";
  import DownloadHelp from "@/components/DownloadHelp";

  export default {
    components: {
      DownloadHelp,
      DownloadSection,
      FooterTwo,
      PageHeader,
      NavOne
    },
    head(){
      return {
        title: "AAFree | Download"
      }
    }
  }
</script>
