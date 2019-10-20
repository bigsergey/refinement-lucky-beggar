const state = {
  list: [],
  historyRecordNumber: 4,
};

const getters = {
  getLuckyBeggarList: state => state.list.slice(0, state.historyRecordNumber),
  getHistoryRecordNumber: state => state.historyRecordNumber,
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

