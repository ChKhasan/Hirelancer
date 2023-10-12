<template lang="html">
  <div class="alerts">
    <div class="flex justify-between">
      <h1 class="text-black text-[24px] font-semibold">Отзывы клиентов</h1>
      <nuxt-link class="flex gap-[6px] text-blue text-base font-medium" to="/orders"
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
    <div class="alerts-list grid grid-cols-2 gap-4 mt-6">
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
    </div>
  </div>
</template>
<script>
import AlertsCard from "./AlertsCard.vue";
import CommentsCard from "./CommentsCard.vue";

export default {
  components: { AlertsCard, CommentsCard },
};
</script>
<style lang="css" scoped></style>
