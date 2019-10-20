const state = {
  list: [],
};

const getters = {
  getLuckyBeggarList: state => state.list,
};

const mutations = {
  ADD_LUCKY_BEGGAR(state, newLuckyBeggar) {
    state.list.unshift(newLuckyBeggar);
  },
};

export default {
  state,
  getters,
  mutations,
};

