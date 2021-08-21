import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const layout = {
  namespaced: true,
  state: {
    layout: 'login-layout',
  },
  mutations: {
    SET_LAYOUT(state, newLayout) {
      state.layout = newLayout
    },
  },
};
const huella = {
  namespaced: true,
  state: {
    toneladas: 0,
    points:0
  },
  mutations: {
    ADD_HUELLA_POINTS(state, value) {
      state.points += value
    },
    REMOVE_HUELLA_POINTS(state, value) {
      state.points -= value
    },
    SET_TONELADAS(state, value) {
      state.toneladas = value
    }
  },
};

const store = new Vuex.Store({
  modules: {
    layout,
    huella
  },
});
export default store;