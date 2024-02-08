export const actions = {
    async getRegions({}, payload) {
      const res = await this.$axios.$get(`/api/regions`, { ...payload });
      return res;
    },
    async getCountries({}, payload) {
      const res = await this.$axios.$get(`/api/countries`, { ...payload });
      return res;
    },
  };
  