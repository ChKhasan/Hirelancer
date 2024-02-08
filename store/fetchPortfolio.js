export const actions = {
  async postWork({}, data) {
    const res = await this.$axiosInstance.$post(`/api/works`, data);
    return res;
  },
  async putWork({}, payload) {
    const res = await this.$axiosInstance.$post(
      `/api/works/${payload.id}`,
      payload?.data
    );
    return res;
  },
  async getWorkById({}, payload) {
    const res = await this.$axiosInstance.$get(`/api/works/${payload}`);
    return res;
  },
  async getWorks({}, payload) {
    const res = await this.$axios.$get(`/api/works`, { ...payload });
    return res;
  },
};
