<template>
  <div id="wrapper" class="site-wrapper">

    <div class="site-wrapper-inner">

      <div class="cover-container">
        <div class="inner cover">
          <h1 class="cover-heading">这里是雅哲的小网站</h1>
          <p class="lead">网站正在努力建设中噢，更多功能后续开放</p>
        </div>
        
      </div>

    </div>
  </div>
</template>

<script>
    import TopNav from "@/components/common/top-nav/TopNav"

    export default {
        name: 'Index',
        components: {
            TopNav
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
        padding-top: 51px;
    }

    /* Extra markup and styles for table-esque vertical and horizontal centering */
    .site-wrapper {
        display: table;
        width: 100%;
        height: 100%; /* For at least Firefox */
        min-height: 100%;
        -webkit-box-shadow: inset 0 0 100px rgba(0,0,0,.5);
        box-shadow: inset 0 0 100px rgba(0,0,0,.5);

    }
    .site-wrapper-inner {
        vertical-align: top;
        position: absolute;
        width: 100%;
        bottom: 50%;
    }
    .cover-container {
        margin-right: auto;
        margin-left: auto;
    }

    /* Padding for spacing */
    .inner {
        padding: 30px;
    }

    /*
     * Cover
     */

    .cover {
        padding: 0 20px;
    }
    .cover .btn-lg {
        padding: 10px 20px;
        font-weight: bold;
    }

    @media (min-width: 768px) {
        /* Start the vertical centering */
        .site-wrapper-inner {
            vertical-align: middle;
        }
        /* Handle the widths */
        .cover-container {
            width: 100%; /* Must be percentage or pixels for horizontal alignment */
        }
    }

    @media (min-width: 992px) {
        .cover-container {
            width: 700px;
        }
    }
</style>
