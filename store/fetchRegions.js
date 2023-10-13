export const actions = {
    async getRegions({}, payload) {
      const res = await this.$axios.$get(`/regions`, { ...payload });
      return res;
    },
   
  };
  