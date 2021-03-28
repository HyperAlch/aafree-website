<template>
  <div class="contact-area bg-color-2 area-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h3>Contact us</h3>
            <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="contact-inner">
          <!-- Start contact icon column -->
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="contact-icon text-center">
              <div class="single-icon">
                <i class="ti-email"></i>
                <p>
                  Email : playdo03@gmail.com<br>
                  <span>Web: www.rockstheme.com</span>
                </p>
              </div>
            </div>
          </div>
          <!-- Start contact icon column -->
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="contact-icon text-center">
              <div class="single-icon">
                <i class="ti-link"></i>
                <p>
                  Facebook :playdo032-gbook<br>
                  <span>Twiter:playdo032-tgames</span>
                </p>
              </div>
            </div>
          </div>
          <!-- Start contact icon column -->
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="contact-icon text-center">
              <div class="single-icon">
                <i class="ti-map"></i>
                <p>
                  Location :street-32, Road-23<br>
                  <span>House-10, Newyork city</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="contact-inner">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <!-- Start Map -->
            <div class="contact-images">
              <img src="/img/about/ab.jpg" alt="">
            </div>
            <!-- End Map -->
          </div>
          <!-- End contact icon -->
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="contact-form">
              <div class="row">
                <form id="contactForm" method="POST" action="#" class="contact-form">
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <input type="text" id="name" class="form-control" placeholder="Name" required="" data-error="Please enter your name">
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <input type="email" class="email form-control" id="email" placeholder="Email" required="" data-error="Please enter your email">
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <input type="text" id="msg_subject" class="form-control" placeholder="Subject" required="" data-error="Please enter your message subject">
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <textarea id="message" rows="7" placeholder="Massage" class="form-control" required="" data-error="Write your message"></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12">
                    <button type="submit" id="submit" class="contact-btn">Submit</button>
                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                    <div class="clearfix"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- End contact Form -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>
