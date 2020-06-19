export default {
  namespaced: true,
  state: {
    permissionArr: [],
  },
  mutations: {
    PERMISSION_ARR(state, array) {
      state.permissionArr = array;
    },
  },
};
