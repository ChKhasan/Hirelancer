export const state = () => ({
  userInfo: {},
  auth: false,
  pageData: {},
});

export const mutations = {
  getUserInfo(state, payload) {
    state.userInfo = payload;

    localStorage.getItem("auth-token")
      ? (state.auth = true)
      : (state.auth = false);
  },
  setPageData(state, payload) {
    state.pageData = payload;
  },
  logout(state) {
    localStorage.removeItem("auth-token");
    state.auth = false;
  },
};
export const actions = {
  logout({ commit }, payload) {
    try {
      this.$axiosInstance.$get("/api/auth/logout");
      commit("logout");
    } catch (e) {
      commit("logout");
    }
  },
};
