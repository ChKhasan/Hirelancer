export const actions = {
  async postOrder({}, data) {
    const res = await this.$axios.$post(`/orders/create`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    });
    return res;
  },
};
