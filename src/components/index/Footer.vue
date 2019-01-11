<template>
  <div
    id="footer"
    class="mastfoot">
    <div class="inner">
      <p>total clicks: {{ clicks }}</p>
    </div>
  </div>
</template>

<script>
    import * as common from '@/assets/js/common';

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
                this.$http.request({
                    url: common.api.get(common.api.webStatistic.clicksInc)
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
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>
