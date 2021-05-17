<template>
  <header class="header-one">
    <!-- Start top bar -->
    <div class="topbar-area">
      <div class="container">
        <div class="row">
          <div class=" col-md-8 col-sm-8 col-xs-12">
            <div class="topbar-left">
              <ul>
                <li v-if="0"><a href="#"><i class="fa fa-server"></i> Server Online</a></li>
                <li><a href="#"><i class="fa fa-clock-o"></i> Server Time: <span v-text="time"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="topbar-right">
              <ul class="hidden-xs">
                <li><a href="#"><img src="/img/icon/login.png" alt="">&nbsp;Login &nbsp;/&nbsp; Signup</a>
                  <ul>
                    <li v-on:click="toGoOfficial('/user/')"><a href="#">Login</a></li><br>
                    <li v-on:click="toGoOfficial('/reg/')"><a href="#">Signup</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="hidden-sm hidden-md hidden-lg" style="margin-bottom: 10px"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- End top bar -->
    <!-- header-area start -->
    <div id="sticker" :class="`header-area hidden-xs ${sticky ? 'stick' : ''}`">
      <div class="container">
        <div class="row">
          <!-- logo start -->
          <div class="col-md-3 col-sm-3">
            <div class="logo">
              <!-- Brand -->
              <a class="navbar-brand " href="/">
                <img src="/img/logo/logo2.png" alt="">
              </a>
            </div>
            <!-- logo end -->
          </div>
          <div class="col-md-9 col-sm-9">



            <!-- mainmenu start -->
            <nav class="navbar navbar-default">
              <div class="collapse navbar-collapse" id="navbar-example">
                <div class="main-menu">
                  <ul class="nav navbar-nav navbar-left">
                    <li><nuxt-link class="pagess" to="/">Home</nuxt-link></li>
                    <li><nuxt-link class="pagess" to="#">About</nuxt-link>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/learn-more">Learn More</nuxt-link></li>
                        <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
                        <li><nuxt-link to="/gift">Gift Pack</nuxt-link></li>
                      </ul>
                    </li>
                    <li v-on:click="toGoOfficial('/news/')"><nuxt-link class="pagess" to="#">News</nuxt-link></li>
                    <li><nuxt-link class="pagess" to="/download">Game Download</nuxt-link></li>
                    <li><nuxt-link class="pagess" to="/donate">Donate</nuxt-link></li>
                    <li><nuxt-link class="pagess" to="/guides">Guides</nuxt-link></li>
                    <li onclick="window.location = 'https://discord.com/invite/6uBDQu7'"><nuxt-link class="pagess" to="#">Discord</nuxt-link></li>

                  </ul>
                </div>
              </div>
            </nav>
            <!-- mainmenu end -->
          </div>

        </div>
      </div>
    </div>
    <!-- header-area end -->
    <!-- mobile-menu-area start -->
    <div class="mobile-menu-area hidden-lg hidden-md hidden-sm">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="mobile-menu">
              <div class="logo">
                <a href="/index"><img src="/img/logo/logo2.png" alt="" /></a>
              </div>
              <div @click="mobileToggle = !mobileToggle" id="menu-button" class="menu-button"><i class="fa fa-bars"></i></div>

              <nav id="dropdown">
                <ul :style="`display: ${mobileToggle ? 'block' : 'none'}`">
                  <li><a class="pagess" href="/">Home</a></li>

                  <li><a class="pagess" href="/learn-more">Learn More</a></li>
                  <li><a class="pagess" href="/faq">FAQ</a></li>
                  <li><a class="pagess" href="/gift">Gift Pack</a></li>
                  <li v-on:click="toGoOfficial('/news/')"><a class="pagess" href="#">News</a></li>
                  <li><a class="pagess" href="/download">Game Download</a></li>
                  <li><a class="pagess" href="/donate">Donate</a></li>
                  <li><a class="pagess" href="/guides">Guides</a></li>
                  <li onclick="window.location = 'https://discord.com/invite/6uBDQu7'"><a class="pagess" href="#">Discord</a></li>

                  <br>
                  <li v-on:click="toGoOfficial('/user/')"><a class="pagess pink" href="#">Login</a></li>
                  <li v-on:click="toGoOfficial('/reg/')"><a class="pagess pink" href="#">Signup</a></li>
                  <br>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- mobile-menu-area end -->
    <script src="/js-lib/luxon.min.js"></script>

  </header>
</template>

<script>
    const SweetAlert = require("sweetalert2")
    export default {
      name: "NavOne",
      data(){
        return {
          sticky: false,
          mobileToggle: false,
          time: ""
        }
      },
      mounted() {
        let DateTime = luxon.DateTime;
        this.$data.time = DateTime.local().setZone("UTC+3").toFormat("HH ':' mm").replaceAll(" ", "");
      },
      methods: {
        toGoOfficial(urlPiece) {
          let url = "https://aafree.to"+urlPiece;
          SweetAlert.fire({
            title: 'Tip',
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: `<span style="font-size: 15px;">Continue</span>`,
            backdrop: true,
            html: `<span style="color: black;font-size: 15px;">You are about to be redirected  to the official, international website. Your <b>browsers translation feature</b> may be necessary!</span>`,

          }).then((result) => {
            if (result.isConfirmed) {
              window.location = url;
            }
          });
        },
        handleScroll() {
          if (window.scrollY > 70) {
            this.sticky = true
          } else if (window.scrollY < 70) {
            this.sticky = false
          }
        },
      }
    }
</script>

<style scoped>
  .pink {
    color: #D5057F;
  }


  @media only screen and (min-width: 480px) {
    .fa-clock-o {
      margin-left: 30px;
    }
  }
</style>
