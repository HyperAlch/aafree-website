<template>
  <div>
  <footer class="footer-1">
    <div class="footer-area">
      <div class="container">
        <div class="row footer-top">
          <FooterContent />
        </div>
      </div>
    </div>
    <!-- Start Footer Bottom Area -->
    <div class="footer-area-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <Copyright />
          </div>
        </div>
      </div>
    </div>
    <!-- End Footer Bottom Area -->
  </footer>

    <a @click="scrollTop" id="scrollUp" href="#" :style="`position: fixed; z-index: 2147483647; display: ${scrollBtn ? 'block' : 'none' }`"><i class="ti-arrow-up"></i></a>
  </div>
</template>

<script>
    import FooterContent from "@/components/FooterContent";
    import Copyright from "@/components/Copyright";
    export default {
      name: "FooterTwo",
      components: {Copyright, FooterContent},
      data(){
        return {
          scrollBtn: false
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);

      },

      methods: {

        handleScroll () {

          if (window.scrollY > 70) {
            this.scrollBtn = true
          }
          else if (window.scrollY < 70) {
            this.scrollBtn = false
          }
        },

        scrollTop () {
          window.scrollTo(0, 0);
        }


      }
    }
</script>

<style scoped>
  .footer-top {
    margin-top: -200px;
  }

  @media only screen and (max-width: 769px) {
    .footer-top {
      margin-top: -50px;
    }
  }
</style>
