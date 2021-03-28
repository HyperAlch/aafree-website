<template>
  <div class="faq-page bg-color area-padding">
    <div class="container ">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h3>Gift Pack Instructions</h3>

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
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Step 1: Join the AAFree Discord</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      The AAFree Discord has a bot that helps distribute the free Gift Pack.<br>
                      You can join the Discord by clicking this link: <a href="https://discord.com/invite/6uBDQu7">https://discord.com/invite/6uBDQu7</a>
                    </p>
                  </div>
                </div>

                <div class="ac accordion__content">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Step 2: Find the “gift_request” channel</h2>
                  <div class="ac-a">
                    <p class="accordion__content-desc">
                      <img src="/img/aafree/gift/2.png" />
                    </p>
                  </div>
                </div>

                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Step 3: Send a bot command</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      The bot command to start the Gift Pack transfer process is formatted like this: <br><br>
                      <code>!sendgifts Character_Name</code><br><br>
                      Where ‘Character_Name’ is the name of the character you want to receive the Gift Pack. You can only have 1 Gift Pack per account, so choose carefully!
                      <img src="/img/aafree/gift/3.png" />
                      Press ‘Enter’ after typing the command and wait for the bot to inform you about the status of your request via private message.
                    </p>
                  </div>
                </div>
                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Step 4: Check your gift status</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      You should receive a message from the bot. Make sure your request was accepted, then wait 10 minutes before moving on to the next step.
                      <img src="/img/aafree/gift/4.png" />
                    </p>
                  </div>
                </div>

                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Step 5: Login and go to Cart Items</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      Go here and login: <a href="https://aafree.to/user/auth/" target="_blank">https://aafree.to/user/auth/</a><br>
                      Then click on “Cart Items”
                      <img src="/img/aafree/gift/5.png">
                    </p>
                  </div>
                </div>

                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Step 6: Claim AAFree Explorer’s Kit</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      Find the item listed as “AAFree Explorer’s Kit”
                      <img src="/img/aafree/gift/6-a.png" />
                      Check the box belonging to the “AAFree Explorer’s Kit”, choose the character name you originally specified in the Discord bot command, then press “Send Items”
                      <img src="/img/aafree/gift/6-b.png" />
                    </p>
                  </div>
                </div>

                <div class="ac">
                  <h2 class="ac-q accordion__title-text" tabIndex="0">Step 7: Claim Gift Pack in game</h2>
                  <div class="ac-a accordion__content">
                    <p class="accordion__content-desc">
                      Patiently await for your Gift Pack to be delivered in-game. This can take awhile, just keep an eye on your marketplace mail.
                      <img src="/img/aafree/gift/7-a.png" />
                      <img src="/img/aafree/gift/7-b.png" />
                      That's it! Enjoy your Gift Pack!
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
        name: "GiftInstructions",
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
