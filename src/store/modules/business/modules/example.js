export default {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    saveList(state, list) {
      state.list = list;
    },
  },
};
