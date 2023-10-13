export const state = () => ({
  userInfo: {},
});

export const mutations = {
  getUserInfo(state, payload) {
    state.userInfo = payload;
  },
};
