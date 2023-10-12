export const actions = {
  async postOrder({}, data) {
    const res = await this.$axios.$get(
      `/orders/create`,
      data
      // , {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("dis_auth_token")}`,
      //   },
      // }
    );
    return res;
  },
};
