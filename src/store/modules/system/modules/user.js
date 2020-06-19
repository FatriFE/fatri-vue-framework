export default {
  namespaced: true,
  state: {
    info: {},
  },
  mutations: {
    INFO(state, info) {
      state.info = info;
    },
  },
};
