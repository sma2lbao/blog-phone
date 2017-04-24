<template lang="html">
    <article class="">
        <blogMenu v-if="this.$store.state.needMenu" />
        <div class="blog-main">
            <header>
                <i class="i-logo" @click="linkHome"></i>
                <i class="i-menu" @click="toggleM"></i>
            </header>
            <router-view></router-view>
            <router-view name="page"></router-view>
        </div>
    </article>
</template>

<script>
import articles from './modules/Articles/articles'
import comments from './modules/Comment/comments'
import articleDetail from './modules/Detail/detail'
import blogMenu from './components/menu'

export default {
    name: 'app',
    components: { articles, comments, articleDetail, blogMenu},
    created: function () {
        this.$router.push({path: '/home', query: { name: 'sma2lbao' }});
    },
    methods: {
        toggleM: function () {
            this.$store.commit('toggleMenu');
        },
        linkHome: function () {
            this.$router.push('home');
        }
    }
}

</script>

<style lang="css" scoped>
    .blog-main{padding: 40px 0;}
    .blog-main header{height: 54px;overflow: hidden;padding: 0 20px;}
    .blog-main header i:first-child{float: left;}
    .blog-main header i:last-child{float: right;}
    .i-logo{display: inline-block;background: url('./images/strange-native-logo.png') no-repeat center center;background-size: 70px 24px;width: 70px;height: 24px;}
    .i-menu{display: inline-block;background: url('./images/i-menu.png') no-repeat center center;background-size: 30px 24px;width: 30px;height: 24px;}
</style>
