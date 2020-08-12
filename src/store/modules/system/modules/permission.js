export default {
  namespaced: true,
  state: {
    permissionArr: [],
  },
  mutations: {
    savePermissionArr(state, permissionArr) {
      state.permissionArr = permissionArr;
    },
  },
};
