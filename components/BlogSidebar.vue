<template>
  <div class="blog-area fix bg-color-2 area-padding">
    <div class="container">

      <div class="row">
        <div class="blog-sidebar-right">
          <div class="col-md-8 col-sm-8 col-xs-12">
            <div class="row">
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
                      <li><a href="#">Prev</a></li>
                      <li class="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">Next</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Start Right Sidebar blog -->
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="left-head-blog right-side">
              <div class="left-blog-page">
                <!-- search option start -->
                <form action="#">
                  <div class="blog-search-option">
                    <input type="text" placeholder="Search...">
                    <button class="button" type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </form>
                <!-- search option end -->
              </div>
              <div class="left-blog-page">
                <div class="left-blog blog-category">
                  <h4>categories</h4>
                  <ul>
                    <li><span>12</span><a href="#">Crafting</a></li>
                    <li><span>17</span><a href="#">Gathering</a></li>
                    <li><span>07</span><a href="#">Combat</a></li>
                    <li><span>18</span><a href="#">Technical</a></li>
                    <li><span>14</span><a href="#">Other</a></li>
                  </ul>
                </div>
              </div>
              <div class="left-blog-page">
                <!-- recent start -->
                <div class="left-blog">
                  <h4>recommended posts</h4>
                  <div class="recent-post">
                    <!-- start single post -->
                    <div class="recent-single-post">
                      <div class="post-img">
                        <a href="#">
                          <img src="/img/blog/b1.jpg" alt="">
                        </a>
                      </div>
                      <div class="pst-content">
                        <p><a href="#">We offer games online services for gaimming.</a></p>
                        <span class="date-type">
														26 Jan / 2019
													</span>
                      </div>
                    </div>
                    <!-- End single post -->
                    <!-- start single post -->
                    <div class="recent-single-post">
                      <div class="post-img">
                        <a href="#">
                          <img src="/img/blog/b2.jpg" alt="">
                        </a>
                      </div>
                      <div class="pst-content">
                        <p><a href="#">playdo is an live games and casino board.</a></p>
                        <span class="date-type">
														20 June / 2019
													</span>
                      </div>
                    </div>
                    <!-- End single post -->
                    <!-- start single post -->
                    <div class="recent-single-post">
                      <div class="post-img">
                        <a href="#">
                          <img src="/img/blog/b3.jpg" alt="">
                        </a>
                      </div>
                      <div class="pst-content">
                        <p><a href="#">Online games zone always think positive economy.</a></p>
                        <span class="date-type">
														26 Feb / 2019
													</span>
                      </div>
                    </div>
                    <!-- End single post -->
                    <!-- start single post -->
                    <div class="recent-single-post">
                      <div class="post-img">
                        <a href="#">
                          <img src="/img/blog/b4.jpg" alt="">
                        </a>
                      </div>
                      <div class="pst-content">
                        <p><a href="#">Lottery can change life any human life</a></p>
                        <span class="date-type">
														13 Nov / 2019
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
        </div>
        <!-- End Right Sidebar -->
      </div>
      <!-- End row -->
    </div>
  </div>
</template>

<script>
    import BlogListing from "./BlogListing";
    export default {
        name: "BlogSidebar",
        components: {BlogListing},
        data() {
          return {
            postArray: []
          }
        },
        mounted() {
          const api = new GhostContentAPI({
            url: 'https://aafree.blog',
            key: '8d891b351517f8bf05d8598abd',
            version: "v3"
          });

          // To Do: Make pagination work

          api.posts
            .browse({limit: 5, page: 1,include: 'tags,authors,slug,excerpt'})
            .then((posts) => {
              posts.forEach((post) => {
                this.postArray.push(post);
              });
            })
            .catch((err) => {
              console.error(err);
            });


        }
    }
</script>

<style scoped>

</style>
