import Vue from 'vue';
import Vuex from 'vuex';

import { createPersistedState, createSharedMutations } from 'vuex-electron';

import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState({
      whitelist: [
        'ADD_PARTICIPANT',
        'REMOVE_PARTICIPANT',
      ],
    }),
    createSharedMutations(),
  ],
  strict: process.env.NODE_ENV !== 'production',
});
