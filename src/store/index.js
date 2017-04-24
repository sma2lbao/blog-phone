import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import action from './actions'
// import getter from './getters'
import mutationTypes from './types'


Vue.use(Vuex);

const state = {
    needMenu: false,
    commentData: null,
}

export default new Vuex.Store({
    state,
    // actions,
    mutations,
})
