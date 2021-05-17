<template>
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="single-blog ">
      <div class="blog-image">
        <a class="image-scale" href="#">
          <img :src="image_url" alt="">
        </a>
      </div>
      <div class="blog-content">
        <div class="blog-meta">
                                                    <span class="admin-type">
                                                        <i class="fa fa-user"></i>
                                                        {{ main_author }}
                                                    </span>
          <span class="date-type">
                                                        <i class="fa fa-calendar"></i>
                                                        {{ published_at_date }}
                                                    </span>
        </div>
        <a :href="slugURL">
          <h4>{{ title }}</h4>
        </a>
        <p>{{ excerpt }}</p>
        <a class="blog-btn" :href="slugURL"> Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogListing",
  props: ['author', 'published_at', 'title', 'slug', 'excerpt', 'image_url'],
  computed: {
    slugURL: function () {
      return "/guide?s="+this.slug
    },
    published_at_date: function () {
      let date = this.published_at.replace("T", "-").split("-");
      return date[1]+"-"+date[2]+"-"+date[0];
    },
    main_author: function () {
      return this.author[0].name;
    }
  }
}
</script>

<style scoped>

</style>
