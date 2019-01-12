<template>
  <div id="app">
      <top-nav/>
    <router-view/>
      <login/>
      <register/>
  </div>
</template>

<script>
    import Login from "@/components/common/top-nav/Login";
    import TopNav from "@/components/common/top-nav/TopNav";
    import Register from "@/components/common/top-nav/Register";

    export default {
        name: 'App',
        components: {
            Login,
            TopNav,
            Register
        },
        data() {
            return {
                
            }
        },
        mounted() {
            
        }
    }
</script>

<style>
    /*
 * Globals
 */

    html,body,#app{
        height: 100%;
    }
</style>
