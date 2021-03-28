<template>
  <div class="login-area area-padding fix">
    <div class="login-overlay"></div>
    <div class="table">
      <div class="table-cell">
        <div class="container">
          <div class="row">
            <div class="col-md-offset-3 col-md-6 col-sm-offset-3 col-sm-6 col-xs-12">
              <div class="login-form signup-form">
                <h4 class="login-title text-center">REGISTER</h4>
                <div class="row">
                  <form id="contactForm" method="POST" action="#" class="log-form">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <input type="text" id="name" class="form-control" placeholder="Username" required="" data-error="Please enter your name">
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <input type="email" id="email" class="form-control" placeholder="Your Email" required="" data-error="Please enter your name">
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <input type="password" id="msg_subject" class="form-control" placeholder="Password" required="" data-error="Please enter your message subject">
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <input type="password" id="cmsg_subject" class="form-control" placeholder="Confirm Password" required="" data-error="Please enter your message subject">
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                      <div class="check-group flexbox">
                        <label class="check-box">
                          <input type="checkbox" class="check-box-input" checked="">
                          <span class="remember-text">I agree terms &amp; conditions</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                      <button type="submit" id="submit" class="slide-btn login-btn">Signup</button>
                      <div id="msgSubmit" class="h3 text-center hidden"></div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                      <div class="clear"></div>
                      <div class="separetor text-center"><span>Or with signup</span></div>
                      <div class="sign-icon">
                        <ul>
                          <li><a class="facebook" href="#">Facebook</a></li>
                          <li><a class="twitter" href="#">twitter</a></li>
                          <li><a class="google" href="#">google+</a></li>
                        </ul>
                        <div class="acc-not">have an account?  <nuxt-link to="/login">Login</nuxt-link></div>
                      </div>
                    </div>
                  </form>
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
        name: "Signup"
    }
</script>

<style scoped>

</style>
