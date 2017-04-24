<template lang="html">
    <section class="commentPane">
        <input type="text" placeholder="你的名字" v-model="name">
        <textarea class="" placeholder="你的评论" v-model="comment">

        </textarea>
        <button type="button" @click="addComment">发布评论</button>
    </section>
</template>

<script>
export default {
    name: 'addComment',
    data: function () {
        return {
            name: '',
            comment: '',
        }
    },
    methods: {
        addComment: function () {
            console.log('name:' + this.$data.name + ",comment:" + this.$data.comment + ",date:" + (new Date()));
            var commentObj = {
                name: this.$data.name,
                comment: this.$data.comment,
                date: (new Date())
            };
            this.$store.commit('addComment', commentObj);
            this.init();
        },
        init: function () {
            this.$data.name = "";
            this.$data.comment = "";
        }
    }
}
</script>

<style lang="css" scoped>
    .commentPane{margin: 0 20px;padding: 20px 20px 20px 20px;background-color: #d9d9d9;overflow: hidden;}
    input{height: 30px;width: 100%;font-size: 14px;border: none;padding: 10px;}
    textarea{height: 120px;width: 100%;margin-top: 10px;font-size: 14px;border: none;padding: 10px;display: block;resize: none;}
    button{display: block;float: right;margin-top: 10px;border: none;background-color: #fff;width: 70px;height: 30px;text-align: center;border-radius: 3px;}
</style>
