<template>
  <div class="col-md-4 col-sm-6 col-xs-12">
    <div class="single-blog" v-on:click="displayVideo" style="cursor: pointer">
      <div class="blog-image">
        <a class="image-scale">
          <img :src="src" alt="">
        </a>
      </div>
      <div class="blog-content">
        <div class="blog-meta" v-if="0">
                                        <span class="admin-type">
                                            <i class="fa fa-user"></i>
                                            Admin
                                        </span>
          <span class="date-type">
                                            <i class="fa fa-calendar"></i>
                                            20 july, 2019
                                        </span>
          <span class="comments-type">
                                            <i class="fa fa-comment-o"></i>
                                            13
                                        </span>
        </div>
        <a>
          <h4>{{ title }}</h4>
          <p>{{ description }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScreenshotCard",
  props: ['title', 'description', 'src'],
  methods: {
    displayVideo()
    {
      const SweetAlert = require("sweetalert2")
      let iframe = null

      if (this.$props.title == "Silver Shard")
      {
        iframe = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/tKZlSkqI-oM?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      }

      if (this.$props.title == "Minecraft Housing")
      {
        iframe = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/GXkUSuSgsN0?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      }

      if (this.$props.title == "Enter the Stargate")
      {
        iframe = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/ukqoqnGemGM?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      }

      if (this.$props.title == "Ghost City Pripyat")
      {
        iframe = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/ryUa5lIbSuM?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      }

      if (this.$props.title == "Multi-colored Houses")
      {
        iframe = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/EzV0k5cr4n0?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      }

      if (this.$props.title == "Alchemy Tower")
      {
        iframe = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube-nocookie.com/embed/uvH2EBhQjBA?controls=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
      }

      SweetAlert.fire({
        title: '',
        showConfirmButton: false,
        html: `<div class="embed-responsive embed-responsive-16by9">
                    ${iframe}
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
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped>

</style>
