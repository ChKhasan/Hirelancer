<template>
  <div class="pt-[40px] pb-[170px] xl:pb-[64px]">
    <div class="2xl:container mx-auto xl:px-4">
      <Banner />
      <PlaceOrder />
      <PlaceSpecialists :specialities="specialities" />
    </div>
    <Orders />
    <TheFreelancers :freelancers="freelancers" />
    <OrderBanner />
  </div>
</template>

<script>
import Banner from "../components/home/Banner.vue";
import Orders from "../components/home/Orders.vue";
import PlaceOrder from "../components/home/PlaceOrder.vue";
import PlaceSpecialists from "../components/home/PlaceSpecialists.vue";
import TheFreelancers from "../components/home/TheFreelancers.vue";
import OrderBanner from "../components/home/OrderBanner.vue";

export default {
  name: "IndexPage",
  async asyncData({ store }) {
    const [freeLancersData] = await Promise.all([
      store.dispatch("fetchFreelancers/getFreelancers"),
    ]);
    const freelancers = freeLancersData.content.freelancers;
    const specialities = freeLancersData.content.specialities;
    return {
      freelancers,
      specialities,
    };
  },
  mounted() {
    this.$store.dispatch("fetchBanners/getBanners");
    console.log("a");
  },

  components: {
    Banner,
    PlaceOrder,
    PlaceSpecialists,
    Orders,
    TheFreelancers,
    OrderBanner,
  },
};
</script>
<style lang="css" scoped>
:deep(.ant-progress-circle-path) {
  transition: stroke-dasharray 1s linear !important;
  stroke: red !important;
}
</style>
