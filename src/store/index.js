import { createStore } from 'vuex'

export default createStore({
  state: {
    activeElement: "",
    logData: "",
  },
  mutations: {
    upload (state, newStates) {
      state.activeElement = newStates;
    },
    logDataAdd (state, newData) {
      state.logData = newData;
    }
  },
  actions: {
  },
  modules: {}
})
