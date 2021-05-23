<template>
  <div>
    <script src="/js-lib/content-api.min.js"></script>
    <NavOne />
    <PageHeader title="Game Guide" />
    <BlogDetails />
    <FooterTwo />
  </div>
</template>

<script>
  import NavOne from "../components/NavOne";
  import FooterPage from "../components/FooterPage";
  import PageHeader from "../components/PageHeader";
  import BlogDetails from "../components/BlogDetails";
  import FooterTwo from "../components/FooterTwo";

  export default {
    components: {
      BlogDetails,
      PageHeader,
      FooterPage,
      NavOne,
      FooterTwo
    },
    head(){
      return {
        title: "AAFree | Game Guide"
      }
    }
  }
</script>
