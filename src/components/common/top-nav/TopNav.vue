<template>
    <!-- Fixed navbar -->
    <nav id="top-nav" class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button
                        type="button"
                        class="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#navbar"
                        aria-expanded="false"
                        aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"/>
                    <span class="icon-bar"/>
                    <span class="icon-bar"/>
                </button>
                <a
                        class="navbar-brand"
                        href="#">Yazhe's</a>
            </div>
            <div
                    id="navbar"
                    class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <router-link tag="li" to="/" active-class="active" exact><a href="/">首页</a></router-link>
                    <router-link tag="li" to="/blog" active-class="active" exact><a href="/">博客</a></router-link>
                    <!--  -->
                    <router-link tag="li" to="/about" active-class="active" exact><a>关于</a></router-link>
                    <li class="dropdown">
                        <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">下拉 <span class="caret"/></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li
                                    role="separator"
                                    class="divider"/>
                            <li class="dropdown-header">Nav header</li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                </ul>
                <User/>
            </div><!--/.nav-collapse -->
        </div>
    </nav>

</template>

<script>
    import User from "./User";

    export default {
        name: "TopNav",
        components: {
            User
        }
    }
</script>

<style scoped>
    #top-nav {
        text-shadow: 0 1px 3px rgba(0,0,0,.5);
    }
</style>
