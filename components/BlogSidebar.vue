<template>
  <div class="blog-area fix bg-color-2 area-padding">
    <div class="container">

      <div class="row">
        <div class="blog-sidebar-right">
          <div class="col-md-8 col-sm-12 col-xs-12">
            <div class="row">
              <div v-if="max" class="alert alert-danger text-center" style="font-size: 20px" role="alert">
                No More Guides
              </div>
              <div class="blog-left-content">
                <!-- Start single blog -->
                <span v-for="post in postArray">
                  <BlogListing
                    :title="post.title"
                    :slug="post.slug"
                    :excerpt="post.excerpt"
                    :image_url="post.feature_image"
                    :published_at="post.published_at"
                    :author="post.authors"
                  />
                </span>

                <!-- End single blog -->

                <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="blog-pagination">
                    <ul class="pagination">
                      <li><a href="#" v-on:click="pageBackword(page)">Prev</a></li>
                      <li class="active"><a>{{ page }}</a></li>
                      <li><a href="#" v-on:click="pageForward(page)">Next</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Start Right Sidebar blog -->
          <GuideSideMenu
            v-if="showFeaturedPosts"
            :featured_posts="postFeaturedArray"
             />
        </div>
        <!-- End Right Sidebar -->
      </div>
      <!-- End row -->
    </div>
  </div>
</template>

<script>
    import BlogListing from "./BlogListing";
    import GuideSideMenu from "./GuideSideMenu";
    export default {
        name: "BlogSidebar",
        components: {GuideSideMenu, BlogListing},
        data() {
          return {
            postArray: [],
            tagsArray: [],
            postFeaturedArray: [],
            showFeaturedPosts: false,
            page: 1,
            max: false,
            filter: "",
            tag: "",
          }
        },
        mounted() {

          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);

          // Check if page is specified. If so, is it a valid integer. If not, default to 1 (declared above)
          if (urlParams.has("page"))
          {
            if (urlParams.get("page").trim() != "")
            {
              if (Number.isInteger(parseInt(urlParams.get("page").trim())))
              {
                this.page = parseInt(urlParams.get("page").trim());
              }
            }
          }

          if (urlParams.has("max"))
          {
            if (urlParams.get("max").trim() != "")
            {
              this.max = true;
            }
          }

          if (urlParams.has("tag"))
          {
            if (urlParams.get("tag").trim() != "")
            {
              let tags = ['combat', 'crafting-gathering', 'custom-item', 'other', 'quests', 'technical'];
              let tag = urlParams.get("tag").trim();
              for (let i = 0; i < tags.length; i++)
              {
                if (tag == tags[i])
                {
                  this.tag = tag;
                  this.filter = "tag:"+tag;
                }
              }

            }
          }

          try {
            const api = new GhostContentAPI({
              url: 'https://aafree.blog',
              key: '8d891b351517f8bf05d8598abd',
              version: "v3"
            });


            api.posts
              .browse({filter: this.filter, limit: 3, page: this.page, include: 'tags,authors,slug,excerpt'})
              .then((posts) => {
                posts.forEach((post) => {
                  if (post.tags.length > 0)
                  {
                    this.postArray.push(post);
                  }
                  this.tagsArray.push(post.tags);

                });
                if (this.postArray.length == 0)
                {
                  let page = this.page;
                  if (page > 1)
                  {
                    page -= 1;
                    let tagAddon = "";
                    if (this.tag != "") { tagAddon = "&tag="+this.tag; }

                    window.location.href = "/guides?page=" + page.toString() + "&max=true" + tagAddon;
                  }
                }
              })
              .catch((err) => {
                console.error(err);
              });

            api.posts
              .browse({filter: 'featured:true', limit: 4, include: 'tags,authors,slug,excerpt'})
              .then((posts) => {
                posts.forEach((post) => {
                  if (post.tags.length > 0)
                  {
                    this.postFeaturedArray.push(post);
                  }
                  this.showFeaturedPosts = true;
                });
              })
              .catch((err) => {
                console.error(err);
              });

          } catch (e) {
            if (e instanceof ReferenceError) {
              console.warn("GhostContentAPI not found, reloading page...");
              location.reload();
              return;
            }
          }
        },
        methods: {
          pageForward: function (page) {
            page += 1;
            let tagAddon = "";
            if (this.tag != "") { tagAddon = "&tag="+this.tag; }

            window.location.href = "/guides?page=" + page.toString() + tagAddon;



          },
          pageBackword: function (page) {
            if (page > 1)
            {
              page -= 1;
              let tagAddon = "";
              if (this.tag != "") { tagAddon = "&tag="+this.tag; }

              window.location.href = "/guides?page=" + page.toString() + tagAddon;
            }
          }
        }
    }
</script>

<style scoped>

</style>
