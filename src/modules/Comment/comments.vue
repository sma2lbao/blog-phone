<template lang="html">
    <section>
        <h1>comments</h1>
        <comment v-for="comment in comments"
            :name="comment.name"
            :date="comment.date"
            :comment="comment.comment"
        />
        <p class="tip">Thanks for the comment!</p>
    </section>
</template>

<script>
import comment from '../../components/comment'
import commentData from '../../json/comment.json'
export default {
    data: function () {
        return {
            comments: [],
        }
    },
    name: 'comments',
    components: { comment, },
    mounted: function () {
        var commentJson = commentData;
        this.$store.state.commentData = commentJson;
        this.$data.comments = this.$store.state.commentData;
    },
}
</script>

<style lang="css" scoped>
    h1{margin: 0 20px;color: rgba(0, 0, 0, 0.5);font-size: 21px;height: 21px;line-height: 21px;font-weight: normal;font-style: italic;margin-top: 20px;margin-bottom: 5px;}
    .tip{font-size: 12px;margin: 20px;color: rgba(0, 0, 0, 0.5);}
</style>
