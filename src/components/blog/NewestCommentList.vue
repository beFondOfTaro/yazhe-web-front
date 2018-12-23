<template>
    <!-- 右侧 -->
    <div>
        <!-- 用户信息 -->
        <div class="jumbotron div_userinfo div_record">
            <div style="display: inline-block; margin-left: 12px;font-size: 18px;">最新评论</div>
        </div>
        <div class="div_save">
            <router-link to="/article-editor" class="list-group-item active">写文章</router-link>
        </div>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "CommentList"
    }
</script>

<style scoped>
    /* 随手记 */
    .div_record {
        margin-top: 24px;
    }

    .div_save {
        text-align: center;
    }

    /* 用户信息 */
    .div_userinfo {
        background-color: #34374C;
        color: white;
        padding: 12px 24px 12px 24px !important;
    }
</style>
