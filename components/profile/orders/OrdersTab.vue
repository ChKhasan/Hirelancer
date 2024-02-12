<template lang="html">
  <div class="buttons flex gap-6 xl:overflow-y-scroll xl:gap-2 xl:mx-[-16px] scroll-none">
    <button
      @click="$router.push(`/profile/${$route.params.user}/orders/active/status`)"
      :class="{ active: $route.params.status == 'active' }"
      class="xl:ml-4 px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium xl:whitespace-nowrap xl:border xl:h-9 xl:py-0 xl:flex xl:items-center xl:rounded-[8px] xl:text-[14px]"
    >
      Активные заказы (0)
    </button>
    <button
      v-if="$route.params.user == 'customer'"
      @click="$router.push(`/profile/${$route.params.user}/orders/pending/status`)"
      :class="{ active: $route.params.status == 'pending' }"
      class="px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium xl:whitespace-nowrap xl:border xl:h-9 xl:py-0 xl:flex xl:items-center xl:rounded-[8px] xl:text-[14px]"
    >
      Ожидание модерации (0)
    </button>
    <button
      v-if="$route.params.user == 'freelancer'"
      @click="$router.push(`/profile/${$route.params.user}/orders/offers/status`)"
      :class="{ active: $route.params.status == 'offers' }"
      class="px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium xl:whitespace-nowrap xl:border xl:h-9 xl:py-0 xl:flex xl:items-center xl:rounded-[8px] xl:text-[14px]"
    >
      Ожидания подверждения (0)
    </button>

    <button
      @click="$router.push(`/profile/${$route.params.user}/orders/completed/status`)"
      :class="{ active: $route.params.status == 'completed' }"
      class="px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium xl:whitespace-nowrap xl:border xl:h-9 xl:py-0 xl:flex xl:items-center xl:rounded-[8px] xl:text-[14px]"
    >
      {{ $route.params.user == "customer" ? "Выполненные" : "Завершено" }} (0)
    </button>
    <button
      @click="$router.push(`/profile/${$route.params.user}/orders/cancel/status`)"
      :class="{ active: $route.params.status == 'cancel' }"
      class="xl:mr-4 px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium xl:whitespace-nowrap xl:border xl:h-9 xl:py-0 xl:flex xl:items-center xl:rounded-[8px] xl:text-[14px]"
    >
      Отмена (0)
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.buttons .active {
  border-color: var(--blue);
  color: var(--blue);
  background-color: #fff;
}
@media (max-width: 1200px) {
  .scroll-none::-webkit-scrollbar {
    display: none;
  }
}
</style>
