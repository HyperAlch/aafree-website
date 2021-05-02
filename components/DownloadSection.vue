<template>
  <div class="pricing-area bg-color-2 area-padding-2">
    <div class="container">

      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="alert alert-danger" role="alert">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span class="sr-only"></span>
            <h3 class="alert-danger">Important</h3>
            AAFree’s download servers and some of its game files have been falsely flagged as malware (our best guess is by XLGames and / or Gamigo, but we don’t know for sure). We are currently in the process of contacting each Anti Virus company to try and undo the damage.
            If you are having any trouble with false positives by your Anti Virus, please go to our <a href="https://discord.com/invite/6uBDQu7">Discord</a> for help.
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h3>Download Tutorial</h3>
            <a class="ready-btn" onclick="window.location = 'https://aafree.to/download/'">Skip Tutorial</a>
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
                  Step 1<br>
                  Torrent Software
                </a>
              </li>
              <li v-bind:class="{ active: gameDownloadActive, 'nav-item': !gameDownloadActive, clickable: !gameDownloadActive}" v-on:click="switchVideo(1)">
                <a class="nav-link" id="two-tab">
                  Step 2<br>
                  Game Download
                </a>
              </li>
              <li v-bind:class="{ active: gameInstallActive, 'nav-item': !gameInstallActive, clickable: !gameInstallActive}" v-on:click="switchVideo(2)">
                <a class="nav-link" id="three-tab">
                  Step 3<br>
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
                        <div class="clickable single-gaimer" v-on:click="displayVideoPopup">
                          <img class="gaimer" src="/img/icon/m2.png" alt="">
                          <div class="gaimer-content">
                            <h6>Confused about torrents?</h6>
                            <span class="bit-mony">Here's a crash course</span>
                          </div>
                        </div>
                        <div id="discordBox" class="clickable single-gaimer last-content" onclick="window.location = 'https://discord.com/invite/6uBDQu7'">
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
          videoHTML: '<iframe id="tutorialVideo" class="embed-responsive-item" width="560" height="315" src="https://www.youtube-nocookie.com/embed/sPCDzDqhEpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
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

            if (window.innerWidth < 992)
            {
              let discordBox = document.getElementById('discordBox')
              discordBox.scrollIntoView();
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


            // class="embed-responsive-item"
            const step1 = '<iframe id="tutorialVideo" class="embed-responsive-item" width="560" height="315" src="https://www.youtube-nocookie.com/embed/sPCDzDqhEpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            const step2 = '<iframe id="tutorialVideo" class="embed-responsive-item" width="560" height="315" src="https://www.youtube-nocookie.com/embed/n9T7MkfvL7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            const step3 = '<iframe id="tutorialVideo" class="embed-responsive-item" width="560" height="315" src="https://www.youtube-nocookie.com/embed/tXV_2i8r4xE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            const videos = [step1, step2, step3];

            this.$data.videoHTML = videos[num];

          },
          displayVideoPopup() {
            const SweetAlert = require("sweetalert2")
            SweetAlert.fire({
              title: '',
              showConfirmButton: false,
              html: `<div class="embed-responsive embed-responsive-16by9">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EkkFT1bRCT0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br>
                <h3>Click on page to close</h3>
                `,
              width: 800,
              padding: 0,
              backdrop: 'rgb(0,0,0, 0.9)',
              background: 'rgba(76, 175, 80, 0.0)'

            })
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
