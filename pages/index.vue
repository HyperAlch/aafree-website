<template>
  <div>
    <NavOne />
    <BannerOne />
    <CustomPatch />
    <GiftArea />
    <ScreenshotArea />
    <ClientsArea />
    <Footer />
  </div>
</template>

<script>
  import NavOne from "../components/NavOne";
  import Footer from "../components/Footer";
  import BannerOne from "../components/BannerOne";
  import ClientsArea from "../components/ClientsArea";
  import CustomPatch from "@/components/CustomPatch";
  import GiftArea from "@/components/GiftArea";
  import ScreenshotArea from "@/components/ScreenshotArea";

  export default {
    components: {
      ScreenshotArea,
      GiftArea,
      CustomPatch,
      ClientsArea,
      BannerOne,
      Footer,
      NavOne
    }
  }
</script>
