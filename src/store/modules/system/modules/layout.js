export default {
  namespaced: true,
  state: {
    collapsed: false,
    isFullscreen: false,
  },
  mutations: {
    COLLAPSED(state, collapsed) {
      state.collapsed = collapsed;
    },
    IS_FULL_SCREEN(state, fullscreen) {
      state.isFullscreen = fullscreen;
    },
  },
};
