import Vue from "vue";
import Vuex from "vuex";
import authentication from './authentication';
import posts from './posts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {},
  actions: {},
  modules: {
    authentication,
    posts
  }
});
