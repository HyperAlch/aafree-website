<template>
  <div class="intro-area">
    <div class="bg-wrapper">
      <img class="bg-image" src="/img/background/slide-bg.png">
    </div>
    <div class="intro-content">
      <div class="slider-content">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="slide-all-text">
                <!-- layer 1 -->
                <div class="layer-1 wow fadeInUp" data-wow-delay="0.3s">
                  <h2 class="title2">
                    An Archeage<br>
                    <span style="color: #FF55B9">Private Server</span><br>
                    <span class="color">Done Right!</span>
                  </h2>
                </div>
                <!-- layer 2 -->
                <div class="layer-2 wow fadeInUp" data-wow-delay="0.5s">
                  <p>
                    AAFree is the international ArcheAge private server of your dreams.
                    It supports a variety of languages, along with custom content and patches that can only be found here.
                    The best parts of ArcheAge, without the pay to win!
                  </p>
                </div>
                <!-- layer 3 -->
                <div class="layer-3 wow fadeInUp" data-wow-delay="0.7s">
                  <a href="/learn-more" class="ready-btn" >Learn More</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 hidden-xs">
              <div class="slide-images-inner wow fadeInUp" data-wow-delay="0.5s">
                <div class="slide-images">
                  <img class="aa-logo" src="/img/slider/s1.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BannerOne"
    }
</script>

<style scoped>

.bg-image {
  height: 800px;
}

.intro-content {
  margin-top: -200px;
}

.aa-logo {
  width: 100%;
}


@media only screen and (min-width: 1270px) {
  .bg-image {
    height: 1000px;
  }
  .aa-logo {
    width: 500px;
  }
  .intro-content {
    margin-top: -180px;
  }
}

@media only screen and (max-width: 992px) {
  .bg-image {
    height: 740px;
  }
  .aa-logo {
    width: 700px;
  }
  .intro-content {
    margin-top: -110px;
  }
}
@media only screen and (max-width: 768px) {
  .bg-image {
    height: 740px;
  }
  .aa-logo {
    width: 700px;
  }
  .intro-content {
    margin-top: -200px;
  }
}

</style>
