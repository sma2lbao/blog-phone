<template lang="html">
    <section class="commentPane">
        <input type="text" placeholder="你的名字" v-model="name">
        <textarea class="" placeholder="你的评论" v-model="comment">

        </textarea>
        <button type="button" @click="addComment">发布评论</button>
        <transition name="fade">
            <aside v-show="isError" class="errorTip">
            名字和评论不能为空
        </aside>
        </transition>
    </section>
</template>

<script>
export default {
    name: 'addComment',
    data: function () {
        return {
            name: '',
            comment: '',
            isError: false,
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
            if (!this.$data.name || !this.$data.comment) {
                this.$data.isError = true;
                return;
            }
            this.$store.commit('addComment', commentObj);
            this.init();
        },
        init: function () {
            this.$data.name = "";
            this.$data.comment = "";
        }
    },
    watch: {
        isError: function (newVal, oldVal) {
            // console.log(newVal);
            if (newVal) {
                setTimeout(function () {
                    this.$data.isError = false;
                }.bind(this), 2000);
            }
        }
    }
}
</script>

<style lang="css" scoped>
    .commentPane{margin: 0 20px;padding: 20px 20px 20px 20px;background-color: #d9d9d9;overflow: hidden;}
    input{height: 30px;width: 100%;font-size: 14px;border: none;padding: 10px;}
    textarea{height: 120px;width: 100%;margin-top: 10px;font-size: 14px;border: none;padding: 10px;display: block;resize: none;}
    button{display: block;float: right;margin-top: 10px;border: none;background-color: #fff;width: 70px;height: 30px;text-align: center;border-radius: 3px;}
    .errorTip{position: fixed;bottom: 0;right: 0;left: 0;height: 100px;width: 100%;background: rgba(131, 35, 227, 0.99);line-height: 100px;text-align: center;color: #fff;}
    .fade-enter{height: 0;overflow: hidden;;}
    .fade-enter-active{transition: all 1s;}
    .fade-leave-active{transition: all 1s;}
    .fade-leave-active{height: 0;}
</style>
