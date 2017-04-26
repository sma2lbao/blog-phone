import Vue from 'vue'
import Router from 'vue-router'
import articles from '../modules/Articles/articles'
import detail from '../modules/Detail/detail'
import comment from '../modules/Comment/comments.vue'
import addComment from '../components/addComment.vue'
import page from '@/components/page'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: __dirname,
  routes: [
      {
          path: '/',
          name: 'home',
          components: {
              default: articles,
              page: page,
          }
      },
      {
          path: '/detail',
          name: 'detail',
          component: detail,
          children: [
              {
                  path:'',
                  components: {
                      default: comment,
                      addComment: addComment,
                  }
              }
          ]
      }
  ],
  scrollBehavior (to, from, savePosition) {
      if(savePosition) {
          return savePosition;
      }
      return { x: 0, y: 0 }
  }
})
