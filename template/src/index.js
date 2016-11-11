import Vue from 'vue'
import store from 'store'
import router from 'router'
import {sync} from 'vuex-router-sync'

sync(store, router)

const app = new Vue({
  store,
  router,
  render(h) {
    return h('div', {attrs: {id: '__ream'}}, [
      h('router-view')
    ])
  }
})

export {
  app, store, router
}
