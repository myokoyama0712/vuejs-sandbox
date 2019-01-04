import axios from 'axios'

export default {
  namespaced: true,

  state: {
    message: '',
  },

  mutations: {
    updateMessage(state, payload) {
      state.message = payload
    },
  },

  actions: {
    updateMessageByApiCall({ commit }) {
      axios.get('http://127.0.0.1:5000/api/get')
            .then(response => {
              commit('updateMessage', response)
            })
    }
  },
}
