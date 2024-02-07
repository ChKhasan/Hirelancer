export const actions = {
  async getOrders({}, payload) {
    const res = await this.$axios.$get(`/client/orders`, { ...payload });
    return res;
  },
  async getMyOrders({}, payload) {
    const res = await this.$axiosInstance.$get(`/client/orders`, {
      ...payload,
    });
    return res;
  },
  async getOrderById({}, payload) {
    const res = await this.$axios.$get(`/client/orders/${payload.id}`);
    return res;
  },
  async postOrder({}, data) {
    const res = await this.$axiosInstance.$post(`/orders/create`, data);
    return res;
  },
  async putOrder({}, payload) {
    return await this.$axiosInstance.$post(
      `/orders/update/${payload.id}?_method=put`,
      payload.data
    );
  },
  async postCanceledOrder({}, paylaod) {
    const res = await this.$axiosInstance.$post(
      `/orders/cancel/${paylaod.id}?_method=put`,
      {}
    );
    return res;
  },
  async postSendRequest({}, data) {
    const res = await this.$axiosInstance.$post(`/order_request`, data);
    return res;
  },
  async postSelectRequest({}, payload) {
    const res = await this.$axiosInstance.$post(`/orders/${payload.id}/select?_method=put`, payload.data);
    return res;
  },
};
