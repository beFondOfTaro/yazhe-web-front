<template>
    <!-- 右侧 -->
    <div class="col-xs-3 div_record">
        <!-- 用户信息 -->
        <div class="jumbotron div_userinfo">
            <div style="display: inline-block; margin-left: 12px;font-size: 18px;">最新评论</div>
        </div>
        <!-- 随手记录 -->
        <div style="display: flex;">
            <div style="flex: 1"><hr></div>
            <div style="text-align: center;line-height: 48px;color: #34374C">记录美好的心情</div>
            <div style="flex: 1"><hr></div>
        </div>
        <input type="text" class="form-control" placeholder="标题:美好的一天...">
        <br>
        <textarea class="form-control" rows="3" name=textarea placeholder="内容:今天捡到一分钱！！！^_^"></textarea>
        <br>
        <div class="div_save">
            <button type="button" class="btn btn-primary btn_save_record">save</button>
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
        text-align: right;
    }

    .btn_save_record {
        width: 100%;
        background-color: #34374C;
        border-color: #34374C;
    }

    /* 用户信息 */
    .div_userinfo {
        background-color: #34374C;
        color: white;
        padding: 12px 24px 12px 24px !important;
    }
</style>
