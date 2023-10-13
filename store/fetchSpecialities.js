export const actions = {
  async getSpecialities({}, payload) {
    const res = await this.$axios.$get(`/specialities`, { ...payload });
    return res;
  },
 
};
