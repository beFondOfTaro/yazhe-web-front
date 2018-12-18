<template>
  <div id="app">
    <router-view/>
      <login/>
  </div>
</template>

<script>
    import Login from "@/components/common/top-nav/Login";

    export default {
        name: 'App',
        components: {
            Login
        }
    }
</script>

<style>
    html,body,#app{
        height: 100%;
    }
</style>
