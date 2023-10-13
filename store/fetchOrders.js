export const actions = {
  async postOrder({}, data) {
    const res = await this.$axios.$post(`/orders/create`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    });
    return res;
  },
  async postSendRequest({}, data) {
    const res = await this.$axios.$post(`/order_request`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    });
    return res;
  },
};
