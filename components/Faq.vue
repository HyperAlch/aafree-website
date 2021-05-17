<template>
  <div class="faq-page bg-color-2 area-padding">
    <div class="container ">
      <div class="row">
        <!-- Start FAQ Start -->
        <div class="all-faq-text">
          <div class="col-md-8 col-sm-8 col-xs-12">
            <div class="faq-full">
              <div class="single-faq ">
                <h4>Frequently Asked Questions</h4>
              </div>

              <div class="accordion-container-one">
                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">What is the current version of the game?</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      The current Version is a custom 4.0 patch.
                    </p>
                  </div>
                </div>

                <div class="ac accordion__content">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Who is behind the server?</h2>
                  <div class="ac-a">
                    <p class="accordion__content-desc">
                      This is a private server led by a developer named Dufrain and a team of passionate fans of the game.
                    </p>
                  </div>
                </div>

                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Will the Patron / premium be available to everyone?</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      <b>Yes, all players will have a Patron/premium for an unlimited period of time.</b><br><br>
                      <b>Description of stats:</b><br>
                      Regenerates: <i>40 Labor every 5 minutes</i><br>
                      Max Labor: <i>5000</i><br>
                      Increases XP gain: <i>+500%</i><br>
                      Increases Vocation Badge gain: <i>+100%</i><br>
                      Decreases production time: <i>+100%</i><br>
                      <i>Increases Vocation Badges gain</i><br>
                      <i>Increases Honor Points gain</i><br>
                      <i>In addition, you will be able to get 3 loyalty coins for each hour of the game for the maximum of 9.</i>
                    </p>
                  </div>
                </div>
                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Am I allowed to have multiple accounts?</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      At the moment, you are allowed to have 1 main account + 2 additional ones. Thus, a maximum of 3 accounts.
                    </p>
                  </div>
                </div>

                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Is this server pay to win?</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      There will be no pay-to-win on the store or the server.
                      Things such as regrade gems have been removed from the cash shop and put in the general merchant and can be purchased with gold.
                      Everything is obtainable through realistic in-game means.
                    </p>
                  </div>
                </div>

                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">What happens to the chests and costumes from the game store?</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      You will be able to get them from your PVP + PVE activities.
                      And there will be a constant rotation of rewards from the RNG boxes that you can obtain through the general merchant.
                      In addition to a new costume vendor located in the imperial city.
                    </p>
                  </div>
                </div>

                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Will the game receive constant updates?</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      Yes. We split our time between official and custom updates / patches.
                    </p>
                  </div>
                </div>

                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Will you crack down on bots and cheaters or do you not care about them?</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      Yes, AAFree tries their best to keep any bots or cheaters out of the game. Anyone caught cheating / botting will be banned.
                    </p>
                  </div>
                </div>

                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Where is the server located?</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      The server is located in <b>Germany</b>. If you have issues with ping try Exit Lag: <a href="https://www.exitlag.com/">https://www.exitlag.com/</a>
                    </p>
                  </div>
                </div>

                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Will you drop the server in a month or give up on the project?</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      The server has been running strong since 2019.
                      AAFree isn’t going anywhere.
                      The only reason you haven’t heard of AAFree until now is because no one was advertising to English players.
                      At least until now! That’s the whole point of this fan site!
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="business-faq">
              <h3>Have more questions?</h3>
              <p>
                If you have a question not listed on this page, check out “english-chat” in the AAFree Discord!
              </p>
              <a class="ticket-btn" href="https://discord.com/invite/6uBDQu7">Join Discord</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: "Faq",
      mounted() {
        new Accordion('.accordion-container-one');
      }
    }
</script>

<style scoped>
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
