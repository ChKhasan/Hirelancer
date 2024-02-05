export const actions = {
  async postWork({}, data) {
    const res = await this.$axios.$post(`/works`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    });
    return res;
  },
  async putWork({}, payload) {
    const res = await this.$axiosInstance.$post(
      `/works/${payload.id}`,
      payload?.data
    );
    return res;
  },
  async getWorkById({}, payload) {
    const res = await this.$axios.$get(`/works/${payload}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    });
    return res;
  },
  async getWorks({}, payload) {
    const res = await this.$axios.$get(`/works`, { ...payload });
    return res;
  },
};
