<template lang="html">
    <aside class="page">
        <button type="button" @click="prevPage(); prev()">&lt;</button>
        <button type="button" v-for="page,index in pages" v-show="showPage(index)" @click="showIndex(index); fetchData(index)" :class="{active: current == index,}">{{index}}</button>
        <button type="button" @click="nextPage(); next()">&gt;</button>
    </aside>
</template>

<script>
export default {
    name: 'page',
    data: function () {
        return {
            size: 1,
            current: 0,
            total: 20,
            pageSize: 5,
            show: [],
        }
    },
    computed: {
        pages: function () {
            var pages = this.$data.total / this.$data.size;
            return pages;
        },

    },
    methods: {
        showPage: function (index) {
            if (this.$data.show.indexOf(index) != -1) {
                return true;
            }
            return false;
        },
        showIndex: function (index) {
            this.$data.current = index;
            if(this.$data.current <= parseInt(this.$data.pageSize / 2)) {
                this.$data.show.splice(0);
                for (let i = 0; i < this.$data.pageSize; i++) {
                    this.$data.show.push(i);
                }
            }
            if (this.$data.current > parseInt(this.$data.pageSize / 2)) {
                this.$data.show.splice(0);
                var tmp = parseInt(this.$data.pageSize / 2);
                for (let i = - tmp; i <= tmp; i++){
                    this.$data.show.push(this.$data.current + i);
                }
            }
            let temp = this.pages - 1 - parseInt(this.$data.pageSize / 2);
            if(this.$data.current >= temp){
                this.$data.show.splice(0);
                var right = this.pages - 1 - this.$data.current;
                var left = this.$data.pageSize - right - 1;
                for (let i = left; i > 0; i--) {
                    this.$data.show.push(this.$data.current - i);
                }
                for (let i = 0; i <= right; i++) {
                    this.$data.show.push(this.$data.current + i);
                }
            }
        },
        prevPage: function () {
            this.$data.current = this.$data.current - 1;
            if(this.$data.current < 0) {
                this.$data.current = 0;
            }
            this.showIndex(this.$data.current);
        },
        nextPage: function () {
            this.$data.current = this.$data.current + 1;
            if(this.$data.current > this.pages - 1) {
                this.$data.current = this.pages - 1;
            }
            this.showIndex(this.$data.current);
        },
        fetchData: function (index) {
            console.log('todo');
        },
        prev: function () {
            console.log('todo');
        },
        next: function () {
            console.log('todo');
        }
    },
    mounted: function () {
        for(let i = 0; i < this.pages; i++){
            if(i < this.$data.pageSize){
                this.$data.show.push(i);
            }
        }
    }
}
</script>

<style lang="css" scoped>
    .page{margin: 0 20px;overflow: hidden;}
    button{border: none;width: 25px;height: 25px;float: left;margin: 0 5px;}
    .active{background-color: #09f;}
</style>
