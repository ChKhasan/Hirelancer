export const state = () => ({
  userInfo: {},
  auth: false,
});

export const mutations = {
  getUserInfo(state, payload) {
    state.userInfo = payload;

    localStorage.getItem("auth-token")
      ? (state.auth = true)
      : (state.auth = false);
  },
  logout(state) {
    localStorage.removeItem("auth-token");
    state.auth = false;
  },
};
export const actions = {
  logout({ commit }, payload) {
    try {
      this.$axios.$get("/auth/logout", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
      });
      commit("logout");
    } catch (e) {
      commit("logout");
    }
  },
};
