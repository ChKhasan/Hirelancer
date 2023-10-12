<template lang="html">
  <div class="portfolio">
    <ProfileLayout :profile="true">
      <div class="head flex flex-col gap-4 mt-8">
        <div class="flex justify-between">
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
            class="border border-solid border-grey-8 rounded-[12px] h-12 w-12 flex justify-center items-center"
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
      <div class="list flex flex-col gap-4 mt-6 mb-[40px]">
        <ProfileOrdersCard />
        <ProfileOrdersCard />
        <ProfileOrdersCard />
        <ProfileOrdersCard />
        <ProfileOrdersCard />
        <ProfileOrdersCard />
        <ProfileOrdersCard />
        <ProfileOrdersCard />
        <ProfileOrdersCard />
        <ProfileOrdersCard />
        <ProfileOrdersCard />
        <ProfileOrdersCard />
      </div>
      <div>
        <VPagination />
      </div>
    </ProfileLayout>
  </div>
</template>
<script>
import ProfileLayout from "@/components/profile/ProfileLayout.vue";
import PortfolioCard from "@/components/profile/portfolio/PortfolioCard.vue";
import VPagination from "@/components/VPagination.vue";
import ProfileOrdersCard from "@/components/profile/orders/ProfileOrdersCard.vue";
import OrdersTab from "@/components/profile/orders/OrdersTab.vue";

export default {
  components: {
    ProfileLayout,
    PortfolioCard,
    ProfileOrdersCard,
    OrdersTab,
  },
};
</script>
<style lang="css" scoped></style>
