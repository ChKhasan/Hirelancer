<template lang="html">
  <div class="telegram grid telegram-card relative rounded-2xl bg-bg-grey px-4">
    <div class="py-4 flex flex-col justify-between">
      <h6 class="text-base font-medium text-black">
        Подписать на телеграм канал заказов
      </h6>
      <a class="text-blue text-[14px] font-medium font-tt underline" href="">Подробнее</a>
    </div>
    <div>
      <img
        loading="lazy"
        class="absolute bottom-0"
        src="@/assets/images/telegram.png"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.telegram {
  grid-template-columns: 3fr 2fr;

  height: 120px;
}
</style>
