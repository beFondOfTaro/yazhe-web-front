<template>
  <div id="wrapper" class="site-wrapper">

    <div class="site-wrapper-inner">

      <div class="cover-container">
        <top-nav></top-nav>
        <div class="inner cover">
          <h1 class="cover-heading">这里是雅哲的小网站</h1>
          <p class="lead">网站正在努力建设中噢，更多功能后续开放</p>
        </div>
        <Footer></Footer>
      </div>

    </div>
    <login/>
  </div>
</template>

<script>
    import Footer from '@/components/index/Footer'
    import Login from '@/components/index/Login'
    import TopNav from "@/components/common/top-nav/TopNav"

    export default {
        name: 'Index',
        components: {
            Login,
            TopNav,
            Footer
        }
    }
</script>

<style scoped>
    #wrapper{
        height: 100%;
        background-color: #333;
        color: #fff;
        text-align: center;
        background-image: url("../assets/img/bg.jpg");
    }
</style>
