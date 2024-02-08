export const actions = {
  async getFreelancers({}, payload) {
    const res = await this.$axios.$get(`/api/client/freelancers`, { ...payload });
    return res;
  },
  async getFreelancerById({}, payload) {
    const res = await this.$axios.$get(`/api/client/freelancers/${payload.id}`, {
      ...payload.params,
    });
    return res;
  },
};
