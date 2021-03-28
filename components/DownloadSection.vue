<template>
  <div class="pricing-area bg-color-2 area-padding-2">
    <div class="container">

      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h3>Download Tutorials</h3>

          </div>
        </div>
      </div>
      <div class="row">
        <!-- End single page -->
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="tab-menu">


            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li v-bind:class="{ active: torrentSoftwareActive, 'nav-item': !torrentSoftwareActive, clickable: !torrentSoftwareActive}" v-on:click="switchVideo(0)">
                <a class="nav-link" id="one-tab">
                  Torrent Software
                </a>
              </li>
              <li v-bind:class="{ active: gameDownloadActive, 'nav-item': !gameDownloadActive, clickable: !gameDownloadActive}" v-on:click="switchVideo(1)">
                <a class="nav-link" id="two-tab">
                  Game Download
                </a>
              </li>
              <li v-bind:class="{ active: gameInstallActive, 'nav-item': !gameInstallActive, clickable: !gameInstallActive}" v-on:click="switchVideo(2)">
                <a class="nav-link" id="three-tab">
                  Game Install
                </a>
              </li>
            </ul>



          </div>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="tab-content">
            <div class="tab-pane active" id="tab-one" role="tabpanel" aria-labelledby="one-tab">
              <div class="tab-inner">
                <div class="Gaimer-zone row">
                  <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="gaimer-inner">
                      <div class="gaimer-list">

                        <div class="clickable single-gaimer" onclick="window.location = 'https://picotorrent.org/'">
                          <img class="gaimer" src="/img/icon/m1.png" alt="">
                          <div class="gaimer-content">
                            <h6>Torrent Software</h6>
                            <span class="bit-mony">Download</span>
                          </div>
                        </div>
                        <div class="clickable single-gaimer" onclick="window.location = 'https://aafree.to/download/'">
                          <img class="gaimer" src="/img/icon/m4.png" alt="">
                          <div class="gaimer-content">
                            <h6>Game Torrent File</h6>
                            <span class="bit-mony">Download</span>
                          </div>
                        </div>
                        <div class="clickable single-gaimer">
                          <img class="gaimer" src="/img/icon/m2.png" alt="">
                          <div class="gaimer-content">
                            <h6>Having issues?</h6>
                            <span class="bit-mony">Try looking here</span>
                          </div>
                        </div>
                        <div class="clickable single-gaimer last-content" onclick="window.location = 'https://discord.com/invite/6uBDQu7'">
                          <img class="gaimer" src="/img/icon/m3.png" alt="">
                          <div class="gaimer-content">
                            <h6>Need even more support?</h6>
                            <span class="bit-mony">Try Discord</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="col-md-8 col-sm-12 col-xs-12">
                    <div class="single-page">
                      <div class="embed-responsive embed-responsive-16by9" v-html="videoHTML">
                      </div>
                    </div>
                  </div>
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
        name: "DownloadSection",
      data: function () {
        return {
          torrentSoftwareActive: true,
          gameDownloadActive: false,
          gameInstallActive: false,
          videoHTML: '<iframe class=\"embed-responsive-item\" width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/XIMLoLxmTDw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>'
        }
      },
        mounted() {

        },
      methods: {
          switchVideo(num) {
            let videosActive = [this.$data.torrentSoftwareActive, this.$data.gameDownloadActive, this.$data.gameInstallActive];

            if (videosActive[num] == true)
            {
              return;
            }

            this.$data.torrentSoftwareActive = false;
            this.$data.gameDownloadActive = false;
            this.$data.gameInstallActive = false;

            switch (num) {
              case 0:
                this.$data.torrentSoftwareActive = true;
                break;
              case 1:
                this.$data.gameDownloadActive = true;
                break;
              case 2:
                this.$data.gameInstallActive = true;
            }


            let blankVideo = "<iframe class=\"embed-responsive-item\" width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/XIMLoLxmTDw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
            let videos = [blankVideo, blankVideo, blankVideo];

            this.$data.videoHTML = videos[num];

          }
      }
    }
</script>

<style scoped>
 .clickable {
   cursor: pointer;
 }


 @media only screen and (min-width: 1200px)
 {
   .single-gaimer {
     padding-top: 17px;
     padding-bottom: 17px;
   }

   .clickable > img {
     width: 50px;
   }

   .clickable > .gaimer-content > span, .clickable > .gaimer-content > h6 {
     font-size: 20px;
   }

   .nav-link {
     font-size: 22px !important;
   }

 }

</style>
