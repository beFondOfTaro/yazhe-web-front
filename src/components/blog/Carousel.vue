<template>
    <!-- 图片轮播 -->
    <!-- 圆点 -->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
            <li data-target="#carousel-example-generic" data-slide-to="4"></li>
            <li data-target="#carousel-example-generic" data-slide-to="5"></li>
        </ol>

        <!-- 内容 -->
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img src="../../assets/img/timg.jpg">
                <p class="carousel-caption">
                    星空
                </p>
            </div>
            <div class="item">
                <img src="../../assets/img/timg.jpg">
                <p class="carousel-caption">
                    星空
                </p>
            </div>
            <div class="item">
                <img src="../../assets/img/timg.jpg">
                <p class="carousel-caption">
                    星空
                </p>
            </div>
            <div class="item">
                <img src="../../assets/img/timg.jpg">
                <p class="carousel-caption">
                    星空
                </p>
            </div>
            <div class="item">
                <img src="../../assets/img/timg.jpg">
                <p class="carousel-caption">
                    星空
                </p>
            </div>
            <div class="item">
                <img src="../../assets/img/timg.jpg">
                <p class="carousel-caption">
                    星空
                </p>
            </div>
        </div>

        <!-- 切换按钮 -->
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "Carousel"
    }
</script>

<style scoped>
    /* 轮播图 */
    .carousel,.carousel .item {
        background-color: #000;
        height: 532px;
    }
    .carousel img{
        margin: auto;
        width: 100%;
    }
    .carousel-caption{
        margin-bottom: 58px;
    }
    .carousel-indicators {
        margin-bottom: 38px;
    }

    @media screen and (max-width:980px){
        .carousel,.carousel .item {
            height: 320px;
        }
    }
</style>
