export const actions = {
  async getSpecialities({}, payload) {
    const res = await this.$axios.$get(`/client/specialities`, { ...payload });
    return res;
  },
  async postSpecialities({}, payload) {
    const res = await this.$axios.$post(
      `/settings/freelancer/update-specialities`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
      }
    );
    return res;
  },
};
