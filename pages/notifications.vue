<template lang="html">
  <transition name="fade-left" mode="out-in">
  <div class="notifications pt-12 pb-[400px]">
    <div class="2xl:container mx-auto flex flex-col gap-12">
      <h2 class="text-black text-[32px] font-semibold">Bildirish nomalar</h2>
      <div class="body flex flex-col gap-10">
        <div class="list grid grid-cols-2 gap-4">
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
        <VPagination />
      </div>
    </div>
  </div>
  </transition>
</template>
<script>
import NotificationCard from "../components/NotificationCard.vue";
import VPagination from "../components/VPagination.vue";

export default {
  transition: {
    name: "fade-left",
    mode: "out-in",
  },
  components: { VPagination, NotificationCard },
};
</script>
<style lang="css" scoped>

</style>
