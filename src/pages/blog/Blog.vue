<template>
    <div class="blog">
        <carousel/>
        <div class="container">
            <div class="row">
                <!-- 文章列表 -->
                <div class="col-xs-12 col-md-12"><article-list/></div>
            </div>
        </div>

    </div>
</template>

<script>
    import TopNav from "@/components/common/top-nav/TopNav";
    import Carousel from "@/components/blog/Carousel";
    import ArticleList from "@/components/blog/ArticleList";

    export default {
        name: "blog",
        components: {
            TopNav,
            Carousel,
            ArticleList
        }
    }
</script>

<style scoped>
    .blog{
        margin-top: 51px;
    }

    .hr_left {
        width: 50px;
        display: inline-block;
        vertical-align: middle;
    }

    .hr_right {
        width: 80%;
        display: inline-block;
        vertical-align: middle;
    }
</style>
