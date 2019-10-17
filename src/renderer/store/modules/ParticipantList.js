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

export default {
  state,
  getters,
  mutations,
};
