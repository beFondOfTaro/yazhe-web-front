<template>
    <div class="col-xs-9">
        <div class="list-group div_article">
            <!-- 子头栏 -->
            <a href="#" class="list-group-item active item_article_first">
                <h4 class="list-group-item-heading">
                    最新文章
                </h4>
            </a>
            <!-- 文章列表 -->
            <div class="list-group-item item_article">
                <div class="row">
                    <div class="div_center col-xs-9">
                        <div class="list-group-item-heading div_article_title">
                            <strong>
                                Android框架设计理念
                            </strong>
                        </div>
                        <p class="list-group-item-text div_article_content">
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                        </p>
                    </div>
                    <!-- 右侧图片，信息 -->
                    <div class="col-xs-3 div_right_info">
                        <img class="iv_article img-rounded" src="../../assets/img/article-img.jpg">
                    </div>
                </div>
            </div>
            <div class="list-group-item item_article">
                <div class="row">
                    <div class="div_center col-xs-9">
                        <div class="list-group-item-heading div_article_title">
                            <strong>
                                Android框架设计理念
                            </strong>
                        </div>
                        <p class="list-group-item-text div_article_content">
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                        </p>
                    </div>
                    <!-- 右侧图片，信息 -->
                    <div class="col-xs-3 div_right_info">
                        <img class="iv_article img-rounded" src="../../assets/img/article-img.jpg">
                    </div>
                </div>
            </div>
            <div class="list-group-item item_article">
                <div class="row">
                    <div class="div_center col-xs-9">
                        <div class="list-group-item-heading div_article_title">
                            <strong>
                                Android框架设计理念
                            </strong>
                        </div>
                        <p class="list-group-item-text div_article_content">
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                        </p>
                    </div>
                    <!-- 右侧图片，信息 -->
                    <div class="col-xs-3 div_right_info">
                        <img class="iv_article img-rounded" src="../../assets/img/article-img.jpg">
                    </div>
                </div>
            </div>
            <div class="list-group-item item_article">
                <div class="row">
                    <div class="div_center col-xs-9">
                        <div class="list-group-item-heading div_article_title">
                            <strong>
                                Android框架设计理念
                            </strong>
                        </div>
                        <p class="list-group-item-text div_article_content">
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                            所有设计源于生活，框终点在于分层、层与层之间如何交流。
                        </p>
                    </div>
                    <!-- 右侧图片，信息 -->
                    <div class="col-xs-3 div_right_info">
                        <img class="iv_article img-rounded" src="../../assets/img/article-img.jpg">
                        <div>2017/12/9 12:09</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleList"
    }
</script>

<style scoped>
    /* 文章列表 */
    .div_article {
        margin-top: 24px;
    }

    /* 文章顶部栏 */
    .item_article_first {
        background-color: #34374C !important;
        border-color: #34374C !important;
    }

    .item_article {
        min-height: 120px;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: hidden;
    }

    .item_article .row {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: hidden;
    }

    .div_center {
        height: auto;
        max-height: 140px;
        overflow: hidden;
    }

    .div_article_title {
        font-size: 22px;
    }

    .div_article_content {
        color: #a0a0a0;
        word-wrap: break-word;
        word-break: break-all;
        width: 100%;
    }

    .iv_article {
        width: 88px;
        height: 88px;
        margin: auto;
    }

    .div_right_info {
        text-align: right;
    }

</style>
