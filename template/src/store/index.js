import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {count: 0},
  mutations: {
    INCREMENT(state) {
      state.count++
    }
  },
  actions: {
    incrementAsync({commit}) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('INCREMENT')
          resolve()
        }, 500)
      })
    }
  }
})

export default store
