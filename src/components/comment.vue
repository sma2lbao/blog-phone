<template lang="html">
    <section class="commentPane">
        <h2>{{ name }}</h2>
        <p class="date">{{ date }}</p>
        <p class="comment">{{ comment }}</p>
    </section>
</template>

<script>
export default {
    name: 'comment',
    props: ['name', 'date', 'comment'],
}
</script>

<style lang="css" scoped>
    .commentPane{margin: 0 20px;border-bottom: 1px solid #d7d7d7;font-size: 12px;padding: 20px 0;color: rgba(0, 0, 0,0.5);}
    .commentPane h2{font-weight: normal;height: 18px;line-height: 18px;}
    .date{height: 18px;line-height: 18px;}
    .comment{margin: 18px 0;}
</style>
