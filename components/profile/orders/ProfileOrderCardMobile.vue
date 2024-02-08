<template lang="html">
  <div
    class="profile-orders-card border border-solid rounded-[16px] border-grey-8 px-4 py-4 flex flex-col gap-4"
  >
    <div class="head">
      <h3
        class="text-base text-black font-semibold pb-4 border-[0] border-b border-solid border-grey-8"
      >
        {{ order?.name }}
      </h3>
    </div>
    <div class="body">
      <div class="flex justify-between">
        <p class="text-base text-black font-semibold" v-if="order?.price">
          {{ order?.price }} сум
        </p>
        <span
          class="flex gap-[4px] status-red items-center px-[8px] py-[4px] text-dark-yellow text-[12px] font-medium border border-solid border-dark-yellow rounded-[500px]"
          ><svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9503 9.36369C11.9503 11.5456 10.1815 13.3145 7.99958 13.3145C5.81764 13.3145 4.04883 11.5456 4.04883 9.36369C4.04883 8.63663 4.18708 7.9016 4.4224 7.19066C4.6138 7.98724 5.33084 8.57922 6.18614 8.57922C7.18792 8.57922 8.00002 7.76711 8.00002 6.76534C8.00002 5.76356 7.31698 5.08179 7.31698 4.10792C7.31698 2.84034 8.23509 1.8689 9.28796 1.8689C9.28796 3.38843 9.84455 3.96339 10.4488 4.93889C11.166 6.09689 11.9503 7.36322 11.9503 9.36369Z"
              stroke="#F2994A"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Срочный заказ</span
        >
      </div>
      <div class="mt-3">
        <div class="flex gap-4 items-center">
          <div class="image min-w-[56px] h-[56px] rounded-full overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="@/assets/images/Avatar 5.png"
              alt=""
            />
          </div>
          <div class="info flex flex-col">
            <p class="text-[12px] text-grey-40">Клиент</p>
            <p class="text-[14px] text-grey-80 font-medium">Ikromova Munisa</p>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="grid grid-cols-2 gap-2">
          <p class="text-[12px] text-grey-64 flex gap-[6px] flex-col">
            Срок начала:
            <span class="text-black text-[14px] font-medium">25.03.2023</span>
          </p>
          <p class="text-[12px] text-grey-64 flex gap-[6px] flex-col">
            Срок выполнение:
            <span class="text-black text-[14px] font-medium">05.04.2023</span>
          </p>
        </div>
      </div>
      <div class="mt-4">
        <nuxt-link
        :to="`/profile/customer/order/view/${order?.id}`"
          class="text-main-color border border-solid border-main-color rounded-[8px] h-11 justify-center text-[14px] font-medium flex gap-2 items-center"
          >Подробнее<svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 8L18 12M18 12L14 16M18 12L6 12"
              stroke="#5C46E6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </nuxt-link>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  props: ["order"],
};
</script>
<style lang="css" scoped>
.status-red {
  background: rgba(255, 200, 152, 0.16);
}
</style>
