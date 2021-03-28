<template>
  <div class="games-area bg-color-2 area-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h3>Online games</h3>
            <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="all-games games-carousel">

          <swiper :options="swiperOptions">

          <swiper-slide>
          <!-- single-games end-->
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-games">
              <h4>Wins goal</h4>
              <div class="games-img">
                <img src="/img/games/g1.png" alt="">
              </div>
              <a class="games-btn" href="#">Play Now</a>
            </div>
          </div>
          <!-- single-games end-->
          </swiper-slide>

            <swiper-slide>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-games">
              <h4>Best Reward</h4>
              <div class="games-img">
                <img src="/img/games/g2.png" alt="">
              </div>
              <a class="games-btn" href="#">Play Now</a>
            </div>
          </div>
          <!-- single-games end-->
            </swiper-slide>

            <swiper-slide>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-games">
              <h4>Win Award</h4>
              <div class="games-img">
                <img src="/img/games/g3.png" alt="">
              </div>
              <a class="games-btn" href="#">Play Now</a>
            </div>
          </div>
          <!-- single-games end-->
            </swiper-slide>

            <swiper-slide>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-games">
              <h4>best win</h4>
              <div class="games-img">
                <img src="/img/games/g4.png" alt="">
              </div>
              <a class="games-btn" href="#">Play Now</a>
            </div>
          </div>
          <!-- single-games end-->
            </swiper-slide>
            <swiper-slide>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="single-games">
              <h4>Pirates of sea</h4>
              <div class="games-img">
                <img src="/img/games/g5.png" alt="">
              </div>
              <a class="games-btn" href="#">Play Now</a>
            </div>
          </div>
          <!-- single-games end-->
            </swiper-slide>
            <div class="swiper-pagination bullets" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: "GamesArea",
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },

    data() {
      return {
        swiperOptions: {
          slidesPerView : 4,
          loop: true,
          speed: 1000,
          spaceBetween : 30,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          // Responsive breakpoints
          breakpoints: {
            1024:{
              slidesPerView : 4
            },
            768:{
              slidesPerView : 2
            },
            640:{
              slidesPerView : 2
            },
            320:{
              slidesPerView : 1
            }
          }
        }

      }
    }
  }
</script>

<style scoped>

</style>
