<template>
    <div class="blog">
        <!-- 技术日记 -->
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-12"><carousel/></div>
                <!-- 分割线 -->
                <div class="col-xs-12 col-md-12"><hr class="hr_left">L<hr class="hr_right"></div>
                <!-- 文章列表 -->
                <div class="col-xs-9 col-md-9"><article-list/></div>
                <div class="col-xs-3 col-md-3"><newest-comment-list/></div>
            </div>
        </div>

    </div>
</template>

<script>
    import TopNav from "@/components/common/top-nav/TopNav";
    import Carousel from "@/components/blog/Carousel";
    import ArticleList from "@/components/blog/ArticleList";
    import NewestCommentList from "@/components/blog/NewestCommentList";

    export default {
        name: "blog",
        components: {
            TopNav,
            Carousel,
            ArticleList,
            NewestCommentList
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
