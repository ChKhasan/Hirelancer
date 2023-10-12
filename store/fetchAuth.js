export const actions = {
  async postSendCode({}, payload) {
    const res = await this.$axios.$post(`/auth/send-code`, { ...payload });
    return res;
  },
 
};
