<template>
  <div class="pricing-area bg-color area-padding-2">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h3>Membership Pricing</h3>
            <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="pricing-content">
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="table-list">
              <div class="top-price-inner">
                <h4>Silver Plan</h4>
                <div class="rates">
                  <span class="prices"><span class="dolar">$</span>50</span><span class="users">Per Month</span>
                </div>
              </div>
              <ol>
                <li class="check">Online System</li>
                <li class="check">Free apps</li>
                <li class="check cross">full access</li>
                <li class="check">live preview</li>
                <li class="check cross">Support unlimited</li>
              </ol>
              <div class="price-btn">
                <nuxt-link to="/order-from">Buy Plan</nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="table-list">
              <span class="base">Top Rated</span>
              <div class="top-price-inner">
                <h4>Gold Plan</h4>
                <div class="rates">
                  <span class="prices"><span class="dolar">$</span>80</span><span class="users">Per Month</span>
                </div>
              </div>
              <ol>
                <li class="check">Online System</li>
                <li class="check">Free apps</li>
                <li class="check cross">full access</li>
                <li class="check">live preview</li>
                <li class="check">Support unlimited</li>
              </ol>
              <div class="price-btn">
                <nuxt-link to="/order-from">Buy Plan</nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="table-list">
              <div class="top-price-inner">
                <h4>Platinum Plan</h4>
                <div class="rates">
                  <span class="prices"><span class="dolar">$</span>99</span><span class="users">Per Month</span>
                </div>
              </div>
              <ol>
                <li class="check">Online System</li>
                <li class="check">Free apps</li>
                <li class="check">full access</li>
                <li class="check">live preview</li>
                <li class="check">Support unlimited</li>
              </ol>
              <div class="price-btn">
                <nuxt-link to="/order-from">Buy Plan</nuxt-link>
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
        name: "Pricing"
    }
</script>

<style scoped>

</style>
