<template lang="html">
  <div class="buttons flex gap-6">
    <button
      @click="$router.push(`/profile/${$route.params.user}/orders/active/status`)"
      :class="{ active: $route.params.status == 'active' }"
      class="px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium"
    >
      Активные заказы (1)
    </button>
    <button
      v-if="$route.params.user == 'freelancer'"
      @click="$router.push(`/profile/${$route.params.user}/orders/offers/status`)"
      :class="{ active: $route.params.status == 'offers' }"
      class="px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium"
    >
      Предложения (1)
    </button>
    <button
      @click="$router.push(`/profile/${$route.params.user}/orders/completed/status`)"
      :class="{ active: $route.params.status == 'completed' }"
      class="px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium"
    >
      Выполненные (56)
    </button>
    <button
      @click="$router.push(`/profile/${$route.params.user}/orders/cancel/status`)"
      :class="{ active: $route.params.status == 'cancel' }"
      class="px-6 py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium"
    >
      Отмена (56)
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
</style>
