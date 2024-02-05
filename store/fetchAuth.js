export const actions = {
  async getUserInfo({}) {
    const res = await this.$axiosInstance.$get(`/auth/user`);
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
    const res = await this.$axiosInstance.$post(`/auth/register`, payload);
    return res;
  },
  async postUserEdit({}, payload) {
    const res = await this.$axiosInstance.$post(
      `/settings/freelancer/update-personal-data`,
      payload
    );
    return res;
  },
};
