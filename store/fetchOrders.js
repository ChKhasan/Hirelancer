export const actions = {
  async getOrders({}, payload) {
    const res = await this.$axios.$get(`/client/orders`, { ...payload });
    return res;
  },
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
