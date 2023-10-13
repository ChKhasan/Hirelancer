<template lang="html">
  <div class="place-order flex flex-col mb-[96px] xl:mb-[40px]">
    <h2
      class="text-black text-[32px] mb-8 font-semibold xl:text-[18px] xl:mb-[12px]"
    >
      Buyurtma qanday beriladi
    </h2>
    <div class="list">
      <PlaceOrderCard />
      <PlaceOrderCard />
      <PlaceOrderCard />
      <PlaceOrderCard />
    </div>
    <p class="text-base text-black text-center mt-4 xl:hidden">
      🛡 Xizmatda pulingiz xavfsiz. Ishni qabul qilganingizdan so'ng pudratchi
      to'lovni oladi. Agar frilanser ish bo'lmasa, biz pulni qaytarib beramiz
    </p>
  </div>
</template>
<script>
import PlaceOrderCard from "./PlaceOrderCard.vue";

export default {
  components: { PlaceOrderCard },
};
</script>
<style lang="css" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
@media screen and (max-width: 1024px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
</style>
