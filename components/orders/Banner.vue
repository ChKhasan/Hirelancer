<template lang="html">
  <div class="banner h-[200px] bg-bg-grey rounded-3xl px-[60px]">
    <div class="left h-full flex items-center">
      <div class="flex justify-between items-end">
        <h3 class="text-[27px] text-black font-bold">
          Nima uchun <span class="text-blue">korxonalar</span>
          <span class="text-blue">Hirelancer’ga</span> murojaat qilishadi
        </h3>
        <p class="text-xs text-black">
          Eski qoidalarni unuting. Siz eng yaxshi frilanserlarni mana shu yerda. ega
          chiqishingiz mumkin.
        </p>
      </div>
    </div>
    <div class="right h-full">
      <img class="h-full" src="@/assets/images/orders-banner.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.banner {
  display: grid;
  grid-template-columns: 5fr 3fr;
  gap: 100px;
}
</style>
