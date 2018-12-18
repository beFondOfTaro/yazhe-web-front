<template>
    <div id="blog">
        <top-nav/>
        <carousel/>
        <!-- 技术日记 -->
        <div class="container div_divider">
            <!-- 分割线 -->
            <hr class="hr_left">L<hr class="hr_right">
            <div class="row">
                <!-- 文章列表 -->
                    <article-list/>
                    <newest-comment-list/>
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
    .div_divider {
        margin-top: 24px;
        color: #34374C;
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
