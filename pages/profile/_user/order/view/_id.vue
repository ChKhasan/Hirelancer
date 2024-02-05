<template lang="html">
  <div>
    <CustomerOrder v-if="$route.params.user == 'customer'" :order="order" :loading="loading" />
    <FreelancerOrder v-if="$route.params.user == 'freelancer'" :order="order" :loading="loading" />
  </div>
</template>
<script>
import CustomerOrder from "@/components/profile/orders/CustomerOrder.vue";
import FreelancerOrder from "@/components/profile/orders/FreelancerOrder.vue";

export default {
  data() {
    return {
      order: {},
      loading: true,
    };
  },
  async mounted() {
    this.__GET_ORDERS();
  },
  methods: {
    async __GET_ORDERS() {
      try {
        const data = await this.$store.dispatch("fetchOrders/getOrderById", {
          id: this.$route.params.id,
        });
        this.order = data?.content;
        console.log(data);
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
  },
  components: {
    CustomerOrder,
    FreelancerOrder,
  },
};
</script>
<style lang="css" scoped></style>
