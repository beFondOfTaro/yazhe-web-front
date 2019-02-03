<template>
  <div id="app">
      <top-nav/>
    <router-view/>
      <login/>
      <register/>
      <Footer/>
  </div>
</template>

<script>
    import Login from "@/components/common/top-nav/Login";
    import TopNav from "@/components/common/top-nav/TopNav";
    import Register from "@/components/common/top-nav/Register";
    import Footer from "@/components/index/Footer";

    export default {
        name: 'App',
        components: {
            Footer,
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
        font-family: Lora,'Times New Roman',serif;
        color: #212529;
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
    }
    a{
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
    }
</style>
