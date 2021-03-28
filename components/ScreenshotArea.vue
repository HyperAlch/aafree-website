<template>
  <div class="blog-area fix bg-color area-padding-2">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h3>In-Game Screenshots</h3>
            <p>Some cool screenshots of content you can't get anywhere else!<br> <u>Click on them to see more</u></p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="blog-grid home-blog">
          <!-- Start single blog -->
          <!-- End single blog -->
          <screenshot-card title="Silver Shard" description="A new location featuring The Imperial City from Oblivion!" src="/img/blog/b1.jpg"></screenshot-card>
          <screenshot-card title="Minecraft Housing" description="Enjoy a variety of minecraft themed housing and home decor!" src="/img/blog/minecraft.png"></screenshot-card>
          <screenshot-card title="Enter the Stargate" description="A portal to lands never before seen. Go on through!" src="/img/blog/portal.png"></screenshot-card>
          <screenshot-card title="Ghost City Pripyat" description="Visit the ninth nuclear city to be hit by  Chernobyl power plant in Russia..." src="/img/blog/Pripyat.png"></screenshot-card>
          <screenshot-card title="Multi-colored Houses" description="Enjoy a new, free, custom house included in your gift box. More information above" src="/img/blog/multi-colored.png"></screenshot-card>
          <screenshot-card title="Alchemy Tower" description="A massive tower with a beautiful inside. 12 seed beds and lots of land around it!" src="/img/blog/alch-tower.png"></screenshot-card>

        </div>
      </div>
      <!-- End row -->
    </div>
  </div>
</template>

<script>
    import ScreenshotCard from "@/components/ScreenshotCard";
    export default {
        name: "ScreenshotArea",
      components: {ScreenshotCard},
      data() {
        return {

        }
      },
      methods: {
      }
    }
</script>

<style scoped>

</style>
