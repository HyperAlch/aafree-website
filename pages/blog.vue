<template>
  <div>
    <NavOne />
    <PageHeader title="Blog Grid" />
    <BlogGrid />
    <FooterPage />
  </div>
</template>

<script>
  import NavOne from "../components/NavOne";
  import FooterPage from "../components/FooterPage";
  import PageHeader from "../components/PageHeader";
  import BlogGrid from "../components/BlogGrid";

  export default {
    components: {
      BlogGrid,
      PageHeader,
      FooterPage,
      NavOne
    },
    head(){
      return {
        title: "Playdo | Blog Grid"
      }
    }
  }
</script>
