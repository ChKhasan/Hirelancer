<template lang="html">
  <div class="orders pt-8 pb-[170px] xl:px-4 xl:pt-6 xl:pb-6 relative">
    <transition name="fade-left" mode="out-in">
      <div class="2xl:container mx-auto xl:flex xl:flex-col xl:gap-6">
        <Banner class="xl:hidden" />
        <div class="flex justify-between items-end mt-8 xl:mt-0">
          <div class="flex flex-col gap-4 xl:w-full">
            <h1 class="text-[32px] font-semibold xl:hidden text-black">
              Faol buyurtmalar
            </h1>
            <div class="buttons flex gap-4 xl:grid xl:grid-cols-2 xl:w-full">
              <button
                :class="{ active: tab }"
                class="rounded-[8px] justify-center flex xl:h-[44px] xl:items-center xl:font-medium bg-bg-grey px-6 py-2 text-[14px] text-grey-64 font-tt"
              >
                Konkursi
              </button>
              <button
                class="rounded-[8px] justify-center flex xl:h-[44px] xl:items-center xl:font-medium bg-bg-grey px-6 py-2 text-[14px] text-grey-64 font-tt"
              >
                Заказы
              </button>
            </div>
          </div>
          <a
            href="#"
            class="telegram xl:hidden flex gap-2 h-12 px-[20px] items-center rounded-lg text-white font-semibold text-[16px]"
            >Телеграм канал заказов
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
            >
              <path
                d="M0.896455 6.79637L16.2851 0.145754C17.0088 -0.166999 17.7929 0.441585 17.6695 1.22023L15.5655 14.4962C15.4355 15.3162 14.4206 15.6299 13.8506 15.0262L10.3977 11.3686C9.72058 10.6514 9.66752 9.54749 10.2727 8.76857L12.7107 5.63084C12.8501 5.45146 12.63 5.21549 12.4414 5.34204L7.59406 8.59387C6.77148 9.14569 5.77341 9.37269 4.79309 9.2309L1.15003 8.70401C0.15204 8.55968 -0.0291716 7.1964 0.896455 6.79637Z"
                fill="white"
              /></svg
          ></a>
        </div>

        <OrdersList class="xl:mt-0" :orders="orders" />
      </div>
    </transition>
  </div>
</template>
<script>
import Banner from "../../components/orders/Banner.vue";
import OrdersList from "../../components/orders/OrdersList.vue";

export default {
  transition: {
    name: "fade-left",
    mode: "out-in",
  },
  data() {
    return {
      tab: true,
    };
  },
  async asyncData({ store }) {
    const [ordersData] = await Promise.all([store.dispatch("fetchOrders/getOrders")]);
    const orders = ordersData.data;
    return {
      orders,
    };
  },
  components: { Banner, OrdersList },
};
</script>
<style lang="css" scoped>
.buttons .active {
  background-color: white;
  border: 1px solid var(--blue);
  color: var(--blue);
}
.telegram {
  background: linear-gradient(0deg, #28a9ea 0%, #28a9ea 100%), #1878f3;
}
</style>
