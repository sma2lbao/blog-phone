<template lang="html">
    <transition name="move">
        <div class="">
            <transition name="fade">
                <article class="detail">
                <h1>{{ detail.title }}</h1>
                <h2>{{ detail.subtitle }}</h2>
                <span class="dateStyle"><i class="i-date"></i>{{ detail.date }}</span>
                <p class="artStyle">{{ detail.article }}</p>
                <span class="commStyle"><i class="i-comment"></i>{{ detail.commentCount }} Comments</span>
                <p class="tagsStyle"><span><i class="i-tag"></i>{{ detail.tags }}</span><span><i></i>Thesis</span></p>
            </article>
            </transition>
            <router-view></router-view>
            <router-view name="addComment"></router-view>
        </div>
    </transition>
</template>

<script>
import articleJson from '../../json/detail.json'
export default {
    name: 'articleDetail',
    data: function () {
        return{
            detail: {}
        }
    },
    mounted: function () {
        var articleObj = articleJson;
        this.$data.detail = articleObj;
        console.log(this.$route.query);
    },

}
</script>

<style lang="css" scoped>
    .detail{margin: 0 20px;overflow: hidden;padding-bottom: 25px;border-bottom: 1px solid #d7d7d7;}
    h1{font-size: 36px;line-height: 36px;margin-top: 10px;}
    h2{font-weight: normal;margin-top: 10px;font-size: 16px;line-height: 26px;margin-bottom: 30px;}
    .artStyle{word-break:break-word;}
    .i-date{display: inline-block;background: url('../../images/i-cal.png') no-repeat center center;background-size: 20px 20px;width: 20px;height: 20px;vertical-align: middle;margin-right: 5px;}
    .dateStyle{color: rgba(0, 0, 0, 0.5);font-size: 14px;margin-bottom: 30px;display: block;}
    .i-comment{display: inline-block;background: url('../../images/i-bubble.png') no-repeat center center;background-size: 20px 20px;height: 21px;width: 20px;vertical-align: middle;margin-right: 5px;}
    .commStyle{display: block;color: rgba(0, 0, 0, 0.5);font-size: 14px;margin-top: 40px;}
    .tagsStyle{margin-top: 6px;font-size: 14px;color: rgba(0, 0, 0, 0.5);}
    .i-tag{display: inline-block;background: url('../../images/i-tag.png') no-repeat center center;background-size: 20px 20px;height: 21px;width: 20px;vertical-align: middle;margin-right: 5px;}
    .move-enter{transform:skewX(90deg);}
    .move-enter-active{transition: all 1s;}
</style>
