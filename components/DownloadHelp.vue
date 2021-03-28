<template>
  <div class="faq-page bg-color area-padding">
    <div class="container ">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h3>Technical Information</h3>

          </div>
        </div>
      </div>
      <div class="row">
        <!-- Start FAQ Start -->
        <div class="all-faq-text">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="faq-full">


              <div class="accordion-container-one">
                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Stuttering and other graphical issues</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">

                    </p>
                    <ol>
                      <li>Go to Game Settings, Screen Settings</li>
                      <li>Change the screen mode to window mode or full screen mode</li>
                      <li>Set the FPS Limit to 60 or lower</li>
                      <li>Do not minimize the game window</li>
                    </ol>
                  </div>
                </div>

                <div class="ac accordion__content">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Launcher Issues</h2>
                  <div class="ac-a">
                    <p class="accordion__content-desc">

                    </p>
                    <ol>
                      <li>Disable the antivirus or add the launcher to your anti virus whitelist</li>
                      <li>Run the launcher as an administrator</li>
                      <li>If you have an old version that is not updated, download the new one and install it over the old one</li>
                    </ol>
                  </div>
                </div>
                <div class="ac accordion__content">
                <h2 class="ac-q accordion__title-text" tabIndex="0">Minimum System Requirements</h2>
                <div class="ac-a">
                  <p class="accordion__content-desc">
                    - ОS: Windows 7/8/8.1/10<br>
                    - CPU: Intel Core 2 Duo. or higher<br>
                    - Memory: 4GB RAM<br>
                    - Disk space: 60 GB.<br>
                    - Videocard: GeForce 8000 512MB or Radeon HD 4000 512Mb.<br>
                  </p>

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
        name: "DownloadHelp",
      mounted() {
        new Accordion('.accordion-container-one');
      }
    }
</script>

<style scoped>
  .accordion__content-desc img {
    margin-top:  10px;
    margin-bottom:  10px;
    display: block;
  }

  .ac {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #26253f;
    background-color: #26253f;
    box-sizing: border-box
  }

  .ac>.ac-q {
    font: bold 15px Arial, sans-serif;
    font-size: 16px;
    color: #fff;
    padding: 10px 30px 10px 10px;
    margin: 0;
    text-decoration: none;
    display: block;
    cursor: pointer;
    position: relative
  }

  .ac>.ac-q::after {
    content: '+';
    text-align: center;
    width: 15px;
    right: 10px;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    position: absolute
  }

  .ac>.ac-a {
    overflow: hidden;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease
  }

  .ac>.ac-a p {
    font: 16px/1.5 Arial, sans-serif;
    color: #c4d5f6;
    margin: 0;
    padding: 10px
  }

  .ac.js-enabled>.ac-a {
    visibility: hidden
  }

  .ac.is-active>.ac-a {
    visibility: visible
  }

  .ac.is-active>.ac-q::after {
    content: '\2013'
  }

</style>
