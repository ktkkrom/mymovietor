import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import key from '../key.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authorized: false,
    username: ''
  },
  mutations: {
    setAuthorized(state, status) {
      state.authorized = status;
    },
    setUserName(state, username) {
      state.username = username;
    }
  },
  actions: {
    setAuthorization(context, userData) {
      context.commit('setAuthorized', userData.status);
      axios.get(`https://api.themoviedb.org/3/account?api_key=${key}&session_id=${userData.sessionId}`)
        .then(response => context.commit('setUserName', response.data.username))
    }
  }
})