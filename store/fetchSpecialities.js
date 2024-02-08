export const actions = {
  async getSpecialities({}, payload) {
    const res = await this.$axios.$get(`/api/client/specialities`, {
      ...payload,
    });
    return res;
  },
  async postSpecialities({}, payload) {
    const res = await this.$axiosInstance.$post(
      `/api/settings/freelancer/update-specialities`,
      payload
    );
    return res;
  },
};
