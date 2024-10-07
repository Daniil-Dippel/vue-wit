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
    fetchLogData({ commit }) {
      const accessToken = localStorage.getItem('accessToken');
      fetch("http://34.141.16.56/api/v1/account/userinfo/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => {
        commit('logDataAdd', data);  // Сохраняем данные в store
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
    }
  },
  modules: {}
})
