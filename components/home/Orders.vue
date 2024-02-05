<template lang="html">
  <div class="orders bg-bg-grey py-[120px] xl:py-6 xl:px-4">
    <div class="max-w-[954px] mx-auto">
      <div class="flex justify-between">
        <h1 class="text-black text-[32px] font-semibold xl:text-[18px]">
          Faol buyurtmalar
        </h1>
        <nuxt-link
          class="flex gap-[6px] text-blue text-[18px] items-center font-medium xl:text-[14px]"
          to="/orders"
          >Ko’proq ko’rish
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14 16L18 12M18 12L14 8M18 12L6 12"
              stroke="#5C46E6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></nuxt-link>
      </div>
      <div class="list flex flex-col gap-4 mt-8 xl:mt-[16px]">
        <OrderCard v-for="order in orders" :order="order" :key="order.id"/>
      </div>
    </div>
  </div>
</template>
<script>
import OrderCard from "./OrderCard.vue";

export default { props: ["orders"], components: { OrderCard } };
</script>
<style lang="css" scoped></style>
