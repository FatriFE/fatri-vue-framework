export default {
  namespaced: true,
  state: {
    asideList: false,
  },
  mutations: {
    ASIDE_LIST(state, list) {
      state.asideList = list;
    },
  },
};
