<template lang="html">
  <div class="portfolio xl:px-4">
    <!-- <ProfileLayout :profile="true"> -->
    <div class="head flex flex-col gap-4 mt-8 xl:mt-0">
      <div class="flex justify-between xl:hidden">
        <h3 class="text-[24px] text-black font-semibold">Заказы</h3>
        <button
          @click="$router.push('/profile/orders/add')"
          class="bg-blue flex justify-center gap-2 h-[60px] w-[220px] px-6 rounded-[8px] text-white text-base text-medium items-center"
        >
          Добавить проект
        </button>
      </div>
      <div class="flex justify-between items-center">
        <OrdersTab />
        <button
          class="border border-solid border-grey-8 rounded-[12px] h-12 w-12 flex justify-center items-center xl:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.875 8.58366C15.875 12.6107 12.6104 15.8753 8.58329 15.8753C4.55622 15.8753 1.29163 12.6107 1.29163 8.58366C1.29163 4.55658 4.55622 1.29199 8.58329 1.29199C12.6104 1.29199 15.875 4.55658 15.875 8.58366ZM8.58329 17.1253C13.3007 17.1253 17.125 13.3011 17.125 8.58366C17.125 3.86623 13.3007 0.0419922 8.58329 0.0419922C3.86586 0.0419922 0.041626 3.86623 0.041626 8.58366C0.041626 13.3011 3.86586 17.1253 8.58329 17.1253ZM16.1086 15.2251C15.8645 14.981 15.4688 14.981 15.2247 15.2251C14.9806 15.4691 14.9806 15.8649 15.2247 16.1089L16.8913 17.7756C17.1354 18.0197 17.5311 18.0197 17.7752 17.7756C18.0193 17.5315 18.0193 17.1358 17.7752 16.8917L16.1086 15.2251Z"
              fill="#020105"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="list flex flex-col gap-4 mt-6 mb-[40px]" v-if="loading">
      <a-skeleton
        :paragraph="false"
        class="loading-card"
        v-for="elem in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
        :key="elem"
      />
    </div>
    <div
      class="list flex flex-col gap-4 mt-6 mb-[40px]"
      v-if="$route.params.user == 'customer' && !loading"
    >
      <CompletedOrdersCard v-for="order in orders" :order="order" :key="order?.id" />
    </div>

    <div class="list flex flex-col gap-4 mt-6 mb-[40px]" v-else>
      <ProfileOrdersCard v-for="order in orders" :order="order" :key="order?.id" class="xl:hidden" />
      <ProfileOrderCardMobile v-for="order in orders" :order="order" :key="order?.id" class="xl:flex hidden"/>
    </div>
    <div
      class="w-full h-[150px] flex justify-center items-center"
      v-if="!loading && orders.length == 0"
    >
      <a-empty />
    </div>
    <div>
      <VPagination />
    </div>
    <!-- </ProfileLayout> -->
  </div>
</template>
<script>
import ProfileLayout from "@/components/profile/ProfileLayout.vue";
import PortfolioCard from "@/components/profile/portfolio/PortfolioCard.vue";
import VPagination from "@/components/VPagination.vue";
import ProfileOrdersCard from "@/components/profile/orders/ProfileOrdersCard.vue";
import ProfileOrderCardMobile from "@/components/profile/orders/ProfileOrderCardMobile.vue";
import OrdersTab from "@/components/profile/orders/OrdersTab.vue";
import Loader from "@/components/Loader.vue";
import CompletedOrdersCard from "@/components/profile/orders/CompletedOrdersCard.vue";

export default {
  layout: "profileLayout",
  data() {
    return {
      orders: [],
      loading: true,
    };
  },
  async mounted() {
    this.__GET_ORDERS();
  },
  methods: {
    async __GET_ORDERS() {
      try {
        const data = await this.$store.dispatch("fetchOrders/getMyOrders", {
          params: {
            status:
              this.$route.params.status == "active"
                ? 1
                : this.$route.params.status == "completed"
                ? 0
                : -1,
            client: this.$store.state.userInfo["id"],
          },
        });
        this.orders = data?.data;
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
  },
  components: {
    ProfileLayout,
    PortfolioCard,
    ProfileOrdersCard,
    OrdersTab,
    Loader,
    CompletedOrdersCard,
    ProfileOrderCardMobile,
  },
};
</script>
<style lang="css" scoped>
:deep(.loading-card .ant-skeleton-title) {
  width: 100%;
  height: 230px;
  border-radius: 16px;
}
</style>
