import { AccountLogin, getUserRoles } from '@/api/system/account';
import CookieService from '@/util/CookieService';
import router from '@/router/index';

export default {
  namespaced: true,
  state: {
    info: {},
  },
  actions: {
    login({ commit }, { username = '', password = '' } = {}) {
      return new Promise((resolve, reject) => {
        // 登录
        AccountLogin({
          account: username,
          credential: password,
        })
          .then((res) => {
            const { accessToken } = res;
            CookieService.setCookie('Business-Token', accessToken, 1);
            resolve(true);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    fetchAsideInfo({ rootState, commit }) {
      return new Promise((resolve, reject) => {
        // 获取用户权限
        getUserRoles()
          .then((res) => {
            if (!res || !res.id) {
              reject(new Error('Failed to get user info.'));
              return;
            }
            commit('saveInfo', {
              name: res.name,
              id: res.id,
            });
            resolve(true);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  mutations: {
    saveInfo(state, info) {
      state.info = info;
    },
    logout(state) {
      CookieService.clearLoginCookie();
      state.info = {};
      router.replace('/login');
    },
  },
};
