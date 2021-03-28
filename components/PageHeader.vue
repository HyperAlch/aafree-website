<template>
  <div class="page-area">
    <div class="breadcumb-overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="breadcrumb">
            <div class="section-headline">
              <h2>{{ title }}</h2>
            </div>
            <ul>
              <li class="home-bread"><nuxt-link to="/" style="color: #FD54B9">Home</nuxt-link></li>
              <li>{{ title }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      name: "PageHeader",
      props: {
        title: {
          type: String
        }
      }

    }
</script>

<style scoped>

</style>
