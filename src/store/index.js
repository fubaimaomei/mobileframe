import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import utils from "@/utils";
import { SPINNER_SHOW, SPINNER_HIDE } from "./mutation-types.js";
const qs = require("querystring");

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    spinner_getters(state) {
      return state.spinner;
    }
  },
  state: {
    spinner: false // 页面加载状态
  },
  mutations: {
    [SPINNER_SHOW](state) {
      state.spinner = true;
    },
    [SPINNER_HIDE](state) {
      state.spinner = false;
    }
  },
  actions: {},
  modules: {}
});
