export const state = () => ({
  userInfo: {},
  auth: false,
});

export const mutations = {
  getUserInfo(state, payload) {
    state.userInfo = payload;
    if (localStorage.getItem("auth-token")) state.auth = true;
  },
};
