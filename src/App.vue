<template>
  <div id="app">
      <top-nav/>
    <router-view/>
      <login/>
  </div>
</template>

<script>
    import Login from "@/components/common/top-nav/Login";
    import TopNav from "@/components/common/top-nav/TopNav";

    export default {
        name: 'App',
        components: {
            Login,
            TopNav
        }
    }
</script>

<style>
    /*
 * Globals
 */

    /* Links */
    a,
    a:focus,
    a:hover {
        color: #fff;
    }

    html,body,#app{
        height: 100%;
    }
</style>
