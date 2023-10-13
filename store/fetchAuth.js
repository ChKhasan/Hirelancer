export const actions = {
  async getUserInfo({}) {
    const res = await this.$axios.$get(`/auth/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    });
    return res;
  },
  async postSendCode({}, payload) {
    const res = await this.$axios.$post(`/auth/send-code`, { ...payload });
    return res;
  },
  async postLogin({}, payload) {
    const res = await this.$axios.$post(`/auth/login`, { ...payload });
    return res;
  },
  async postRegister({}, payload) {
    const res = await this.$axios.$post(`/auth/register`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    });
    return res;
  },
};
