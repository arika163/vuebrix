import Vue from 'vue'
import Vuex from 'vuex'
import App from '@/types/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apps: [] as App[]
  },
  getters: {
    allApps(state): App[] {
      return state.apps
    }
  },
  mutations: {
    setApps(state, apps: App[]) {
      state.apps = apps
    },
    addApp(state, app: App) {
      state.apps.push(app)
    }
  },
  actions: {
    registerApp({ commit }, app: App) {
      commit('addApp', app)
    }
  },
  modules: {}
})
