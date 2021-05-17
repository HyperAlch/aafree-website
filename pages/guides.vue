<template>
  <div>
    <NavOne />
    <PageHeader title="Guides List" />
    <BlogSidebar />
    <FooterTwo />
    <script src="/js-lib/content-api.min.js"></script>
  </div>
</template>

<script>
  import NavOne from "../components/NavOne";
  import FooterPage from "../components/FooterPage";
  import PageHeader from "../components/PageHeader";
  import BlogSidebar from "../components/BlogSidebar";
  import FooterTwo from "../components/FooterTwo";

  export default {
    components: {

      BlogSidebar,
      PageHeader,
      FooterPage,
      NavOne,
      FooterTwo,
    },
    head(){
      return {
        title: "AAFree | Guides List"
      }
    }
  }
</script>
