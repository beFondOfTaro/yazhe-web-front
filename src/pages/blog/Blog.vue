<template>
    <div class="blog">
        <carousel/>
        <div class="container">
            <div class="row">
                <!-- 文章列表 -->
                <div class="col-xs-9 col-md-9 col-xs-offset-2 col-md-offset-2"><article-list/></div>
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
</style>
