<template>
  <div class="blog-area fix bg-color-2 area-padding">
    <div class="container">
      <div class="row">
        <div class="blog-details">
          <div class="col-md-8 col-sm-8 col-xs-12">
            <!-- single-blog start -->
            <article class="blog-post-wrapper">
              <div class="blog-banner">
                <a href="#" class="blog-images">
                  <img :src="feature_image" alt="">
                </a>
                <div class="blog-content">
                  <div class="blog-meta">
                                            <span class="admin-type">
                                                <i class="fa fa-user"></i>
                                                {{ author }}
                                            </span>
                    <span class="date-type">
                                               <i class="fa fa-calendar"></i>
                                                {{ published_at }}
                                            </span>

                  </div>
                  <h4 id="guide-title">{{ title }}</h4>
                  <div v-html="html">

                  </div>
                </div>
              </div>
            </article>
            <div class="clear"></div>
            <div class="related-post">
              <div class="comments-heading">
                <h3>Related post</h3>
              </div>
              <div class="related-post-list">
                <!-- start single post -->
                <div class="recent-single-post">
                  <div class="post-img">
                    <a href="#">
                      <img src="/img/blog/b1.jpg" alt="">
                    </a>
                  </div>
                  <div class="pst-content">
                    <p><a href="#">Online games zone always think positive economy.</a></p>
                    <span class="date-type">
                                                27 Jan / 2018
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
                    <p><a href="#">We offer games online services for gaimming.</a></p>
                    <span class="date-type">
                                                20 June / 2018
                                            </span>
                  </div>
                </div>
                <!-- End single post -->
              </div>
            </div>
            <div class="clear"></div>
            <div v-if="0" class="single-post-comments">
              <div class="comments-area">
                <div class="comments-heading">
                  <h3>4 comments</h3>
                </div>
                <div class="comments-list">
                  <ul>
                    <li>
                      <div class="comments-details">
                        <div class="comments-list-img">
                          <img src="/img/blog/avater2.png" alt="post-author">
                        </div>
                        <div class="comments-content-wrap">
														<span>
															<b><a href="#">Alens</a></b>
															Post author
															<span class="post-time">Jan 6, 2018</span>
															<a href="#">Reply</a>
														</span>
                          <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur</p>
                        </div>
                      </div>
                    </li>
                    <li class="threaded-comments">
                      <div class="comments-details">
                        <div class="comments-list-img">
                          <img src="/img/blog/avater1.png" alt="post-author">
                        </div>
                        <div class="comments-content-wrap">
														<span>
															<b><a href="#">admin</a></b>
															Post author
															<span class="post-time">Jan 7, 2018</span>
															<a href="#">Reply</a>
														</span>
                          <p>Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel mauris. Aenean at justo dolor. Fusce ac sapien bibendum, scelerisque libero nec</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="comments-details">
                        <div class="comments-list-img">
                          <img src="/img/blog/avater2.png" alt="post-author">
                        </div>
                        <div class="comments-content-wrap">
														<span>
															<b><a href="#">Andre</a></b>
															Post author
															<span class="post-time">Nov 11, 2017</span>
															<a href="#">Reply</a>
														</span>
                          <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur</p>
                        </div>
                      </div>
                    </li>
                    <li class="threaded-comments">
                      <div class="comments-details">
                        <div class="comments-list-img">
                          <img src="/img/blog/avater1.png" alt="post-author">
                        </div>
                        <div class="comments-content-wrap">
														<span>
															<b><a href="#">admin</a></b>
															Post author
															<span class="post-time">Nov 12, 2017</span>
															<a href="#">Reply</a>
														</span>
                          <p>Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel mauris. Aenean at justo dolor. Fusce ac sapien bibendum, scelerisque libero nec</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div v-if="0" class="comment-respond">
                <h3 class="comment-reply-title">Leave a Reply </h3>
                <span class="email-notes">Your email address will not be published. Required fields are marked *</span>
                <form action="#">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <p>First Name *</p>
                      <input type="text">
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <p>Last Name *</p>
                      <input type="text">
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <p>Email *</p>
                      <input type="email">
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 comment-form-comment">
                      <p>Massage *</p>
                      <textarea id="message-box" cols="30" rows="10"></textarea>
                      <input class="add-btn contact-btn" type="submit" value="Post Comment">
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- single-blog end -->
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
                    <li><span>12</span><a href="#">Business</a></li>
                    <li><span>17</span><a href="#">Agency </a></li>
                    <li><span>07</span><a href="#">Media</a></li>
                    <li><span>18</span><a href="#">Social</a></li>
                    <li><span>14</span><a href="#">Photoshop</a></li>
                    <li><span>10</span><a href="#">development</a></li>
                    <li><span>15</span><a href="#">Design</a></li>
                  </ul>
                </div>
              </div>
              <div class="left-blog-page">
                <!-- recent start -->
                <div class="left-blog">
                  <h4>recent post</h4>
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
              <div class="left-blog-page">
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
    export default {
      name: "BlogDetails",
      data() {
        return {
          title: "",
          author: "",
          published_at: "",
          feature_image: "",
          html: "",
          postObj: null
        }
      },
      mounted() {
        const api = new GhostContentAPI({
          url: 'https://aafree.blog',
          key: '8d891b351517f8bf05d8598abd',
          version: "v3"
        });

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        if (urlParams.has("s"))
        {
          if (urlParams.get("s").trim() != "")
          {
            let slug = urlParams.get("s").trim()
            let posts = api.posts
              .read({slug: slug, include: 'tags,authors,slug'})
              .then((post) => {
                // this.postObj = post
                this.title = post.title
                this.author = post.authors[0].name

                let date = post.published_at.replace("T", "-").split("-")
                this.published_at = date[1]+"-"+date[2]+"-"+date[0]

                this.feature_image = post.feature_image
                this.html = post.html
              })
            .catch((err) => {
              window.location.href = "/guides";
            });
          }
        }

      }
    }
</script>

<style>
  figcaption {
    font-weight: bolder;
    font-style: italic;
    margin-top: -10px;
    margin-bottom: 30px;
    font-size: 14px;
  }

  img {
    margin-bottom: 15px;
  }

  #guide-title {
    margin-bottom: 35px;
  }
</style>
