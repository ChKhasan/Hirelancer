export const actions = {
  async getFreelancers({}, payload) {
    const res = await this.$axios.$get(`/index`, { ...payload });
    return res;
  },
 
};
