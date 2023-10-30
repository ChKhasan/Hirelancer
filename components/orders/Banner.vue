<template lang="html">
  <div class="banner grid h-[200px] xl:h-[158px] bg-bg-grey rounded-3xl xl:rounded-xl px-[60px] xl:px-4 xl:overflow-hidden relative">
    <div class="left h-full flex items-center">
      <div class="flex justify-between items-center xl:items-start xl:flex-col xl:gap-2">
        <h3 class="text-[27px] text-black font-bold xl:text-base xl:max-w-[75%] relative z-30">
          Nima uchun <span class="text-blue">korxonalar</span>
          <span class="text-blue">Hirelancer’ga</span> murojaat qilishadi
        </h3>
        <p class="text-xs text-black xl:text-[12px] xl:max-w-[50%] relative z-30">
          Eski qoidalarni unuting. Siz eng yaxshi frilanserlarni mana shu yerda. ega
          chiqishingiz mumkin.
        </p>
      </div>
    </div>
    <div class="right h-full xl:absolute xl:h-[140px] xl:right-[-26px] bottom-0">
      <img class="h-full" src="@/assets/images/orders-banner.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.banner {
  grid-template-columns: 5fr 3fr;
  gap: 100px;
}
@media (max-width: 1200px) {
  .banner {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
