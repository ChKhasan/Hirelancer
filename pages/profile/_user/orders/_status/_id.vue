<template lang="html">
  <div>
    <CustomerOrder v-if="$route.params.user == 'customer'" />
    <FreelancerOrder v-if="$route.params.user == 'freelancer'"/>
  </div>
</template>
<script>
import CustomerOrder from "@/components/profile/orders/CustomerOrder.vue";
import FreelancerOrder from "@/components/profile/orders/FreelancerOrder.vue";

export default {
  components: {
    CustomerOrder,
    FreelancerOrder,
  },
};
</script>
<style lang="css" scoped></style>
