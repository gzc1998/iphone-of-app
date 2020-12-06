import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curmenu:{
      path:'/',
      name:'剧集',
      bgcolor:'red'
    }
  },
  mutations: {
    changecurmenu(state,data){
      state.curmenu=data;
    }
  },
  actions: {
  },
  modules: {
  }
})
