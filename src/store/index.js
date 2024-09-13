import { createStore } from 'vuex'


let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart?.length) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
}
export default createStore({
  state: {
    activeElement: "",
  },
  getters: {
  },
  mutations: {
    upload (state, newStates){
      state.activeElement = newStates
    },
  },
  actions: {
  },
  modules: {
  }
})
