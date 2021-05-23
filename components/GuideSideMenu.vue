<template>
  <div class="col-md-4 col-sm-12 col-xs-12">
    <br class="hidden-md">
    <div class="left-head-blog right-side">
      <div class="left-blog-page">
        <!-- search option start -->
        <form v-if="0" action="#">
          <div class="blog-search-option">
            <input type="text" placeholder="Search...">
            <button class="button" type="submit">
              <i class="fa fa-search hidden-md hidden-sm"></i>
            </button>
          </div>
        </form>
        <!-- search option end -->
      </div>
      <div class="left-blog-page">
        <div class="left-blog blog-category">
          <h4>categories</h4>
          <ul>
            <li><span><i class="fa fa-globe"></i></span><a href="/guides">All</a></li>
            <li><span><i class="fa fa-leaf"></i></span><a href="/guides?tag=crafting-gathering">Crafting / Gathering</a></li>
<!--            <li><span><i class="fa fa-map-marker"></i></span><a href="/guides?tag=quest">Quests</a></li>-->
            <li><span><i class="fa fa-bolt"></i></span><a href="/guides?tag=combat">Combat</a></li>
            <li><span><i class="fa fa-laptop"></i></span><a href="/guides?tag=technical">Technical</a></li>
<!--            <li><span><i class="fa fa-cube"></i></span><a href="/guides?tag=custom-items">Custom Items</a></li>-->
            <li><span><i class="fa fa-question"></i></span><a href="/guides?tag=other">Other</a></li>
          </ul>
        </div>
      </div>
      <div class="left-blog-page">
        <!-- recent start -->
        <div class="left-blog">
          <h4>recommended posts</h4>
          <div class="recent-post">
            <!-- start single post -->

            <div class="recent-single-post" v-for="post in featured_posts">
              <div class="post-img">
                <a :href="slugURL(post.slug)">
                  <img :src="post.feature_image" alt="">
                </a>
              </div>
              <div class="pst-content">
                <p><a :href="slugURL(post.slug)">{{ post.title }}</a></p>
                <span class="date-type">
														{{ convertDate(post.published_at) }}
													</span>
              </div>
            </div>
            <!-- End single post -->

          </div>
        </div>
        <!-- recent end -->
      </div>
      <div v-if="0" class="left-blog-page">
        <div class="left-tags blog-tags">
          <div class="popular-tag left-side-tags left-blog">
            <h4>popular tags</h4>
            <ul>
              <li><a href="#">Business</a></li>
              <li><a href="#">Agency </a></li>
              <li><a href="#">Media</a></li>
              <li><a href="#">Social</a></li>
              <li><a href="#">Photoshop</a></li>
              <li><a href="#">Seo</a></li>
              <li><a href="#">development</a></li>
              <li><a href="#">Search</a></li>
              <li><a href="#">Design</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuideSideMenu",
  props: ['featured_posts'],
  data() {
    return {

    }
  },
  methods: {
    convertDate: function (data) {
      let date = data.replace("T", "-").split("-");
      return date[1]+"-"+date[2]+"-"+date[0];
    },
    slugURL: function (slug) {
      return "/guide?s="+slug
    },
  },
  mounted() {
    for (let i = 0; i < this.$props.featured_posts.length; i++)
    {

    }
  }
}
</script>

<style scoped>

</style>
