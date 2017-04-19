<template lang="html">
    <div class="artSum">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <span class="artDate"><i class="i-date"></i>{{ date }}</span>
        <p class="art"> {{ article }} </p>
        <span class="artCom" v-if="commentCount > 0"><i class="i-comment"></i>{{ commentCount }} comments</span>
        <span class="artCom" v-else > 0"><i class="i-comment"></i>no comments</span>
        <p class="artTags"><span v-for="tag in tags"><i class="i-tag"></i>{{ tag }}</span></p>
    </div>
</template>

<script>
export default {
    name: 'articleSummary',
    props: ['title', 'subtitle', 'date', 'article', 'commentCount', 'tags']
}
</script>

<style lang="css" scoped>
    .artSum{padding: 20px 0px;height: 454px;border-bottom: 1px solid #d7d7d7;margin: 0 20px;}
    .artSum:last-of-type{border-bottom: none;}
    .artSum h1{font-size: 26px;height: 60px;line-height: 30px;overflow: hidden;}
    .artSum h2{font-size: 14px;height: 42px;margin: 14px 0;font-weight: 500;}
    .artDate{display: block;height: 21px;margin-top: 12px;font-size: 12px;line-height: 21px;color: rgba(0, 0, 0, 0.5);}
    .i-date{display: inline-block;background: url('../images/i-cal.png') no-repeat center center;background-size: 20px 20px;width: 20px;height: 20px;vertical-align: middle;margin-right: 5px;}
    .art{height: 168px;margin: 21px 0;font-size: 14px;line-height: 21px;overflow: hidden;text-align: justify;}
    .artCom{display: block;height: 21px;font-size: 12px;line-height: 21px;opacity: 0.5;}
    .i-comment{display: inline-block;background: url('../images/i-bubble.png') no-repeat center center;background-size: 20px 20px;height: 21px;width: 20px;vertical-align: middle;margin-right: 5px;}
    .artTags{height: 21px;line-height: 21px;overflow: hidden;margin-top: 6px;color: rgba(0, 0, 0, 0.5);}
    .artTags>span{margin-right: 20px;}
    .i-tag{display: inline-block;background: url('../images/i-tag.png') no-repeat center center;background-size: 20px 20px;height: 21px;width: 20px;vertical-align: middle;margin-right: 5px;}
</style>
