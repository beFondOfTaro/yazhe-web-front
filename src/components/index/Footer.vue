<template>
  <div
    id="footer"
    class="mastfoot">
      <hr>
    <div class="inner">
        <p>Copyright ©2019 <a target="_blank" href="http://www.miitbeian.gov.cn">蜀ICP备18029048号</a></p>
      <p>total clicks: {{ clicks }}</p>
    </div>
  </div>
</template>

<script>
    import {api, getApi, http} from "@/assets/js/api";

    export default {
        name: 'Footer',
        data () {
            return {
                clicks: 0
            }
        },
        created: function () {
            this.clicksInc()
        },
        methods: {
            clicksInc: function () {
                let vue = this;
                http.request({
                    url: getApi(api.webStatistic.clicksInc)
                }).then(function (res) {
                    vue.clicks = res.data.data;
                });
            }
        }
    };
</script>

<style scoped>
    /*
     * Footer
     */

    .mastfoot {
        color: rgba(255,255,255,.5);
        width: 100%;
        text-align: center;
        color: #6c757d!important;
        line-height: 21px;
        font-size: 17px;
    }
    a{
        color: #212529;
        font-family: Lora,'Times New Roman',serif;
    }
</style>
