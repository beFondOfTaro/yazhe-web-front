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
                <img src="img/ic_p4.jpg">
                <p class="carousel-caption">
                    骑马
                </p>
            </div>
            <div class="item">
                <img src="img/ic_p5.jpg">
                <p class="carousel-caption">
                    骑马
                </p>
            </div>
            <div class="item">
                <img src="img/ic_p6.jpg">
                <p class="carousel-caption">
                    骑马
                </p>
            </div>
            <div class="item">
                <img src="img/ic_p7.jpg">
                <p class="carousel-caption">
                    骑马
                </p>
            </div>
            <div class="item">
                <img src="img/ic_p8.jpg">
                <p class="carousel-caption">
                    骑马
                </p>
            </div>
            <div class="item">
                <img src="img/ic_p9.jpg">
                <p class="carousel-caption">
                    骑马
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

</style>
