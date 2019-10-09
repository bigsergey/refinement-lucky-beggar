const state = {
  list: [
    'First Person',
    'Second Person',
    'Third Person',
    'Fourth Person',
  ],
};

const getters = {
  getParticipantList: state => state.list,
};

const mutations = {
  ADD_PARTICIPANT(state, newParticipant) {
    state.list.push(newParticipant);
  },
  REMOVE_PARTICIPANT(state, index) {
    state.list.splice(index, 1);
  },
};

const actions = {
  ADD_PARTICIPANT(store, newParticipant) {
    // eslint-disable-next-line
    console.log(store, newParticipant);
    store.commit('ADD_PARTICIPANT', newParticipant);
  },
  REMOVE_PARTICIPANT(store, index) {
    store.commit('REMOVE_PARTICIPANT', index);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
