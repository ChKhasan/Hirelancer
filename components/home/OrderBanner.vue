<template lang="html">
  <div class="2xl:container mx-auto">
    <div
      class="banner bg-blue rounded-[32px] mt-[100px] xl:mt-[44px] xl:mx-[16px] xl:rounded-[16px] relative"
    >
      <div
        class="left pl-[83px] py-[87px] flex flex-col justify-between items-start xl:p-[24px] xl:gap-[16px] xl:max-w-[260px] relative z-[9]"
      >
        <div>
          <h4 class="text-[40px] text-white font-semibold xl:text-[20px]">
            Начни зарабатывать с нами!
          </h4>
          <p
            class="text-white text-base font-medium mt-[40px] xl:mt-[8px] xl:text-[14px]"
          >
            Лучшие фрилансеры для выполнения ваших задач
          </p>
        </div>
        <button
          class="px-[20px] items-center max-h-[61px] py-[20px] rounded-xl bg-white text-blue flex gap-2 text-base font-medium font-tt xl:text-[14px] xl:py-[12px] xl:px-24px"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M12.5 8.5V16.5M16.5 12.5H8.5M18.5 2.5H6.5C4.29086 2.5 2.5 4.29086 2.5 6.5V18.5C2.5 20.7091 4.29086 22.5 6.5 22.5H18.5C20.7091 22.5 22.5 20.7091 22.5 18.5V6.5C22.5 4.29086 20.7091 2.5 18.5 2.5Z"
              stroke="#5C46E6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          >Опубликовать заказ
        </button>
      </div>
      <div class="right h-[100%] xl:absolute xl:right-0 xl:top-0">
        <img
          class="h-full xl:hidden"
          src="@/assets/images/order-banner.png"
          alt=""
        />
        <img
          width="100%"
          height="100%"
          class="hidden xl:block h-[100%]"
          src="@/assets/images/qol.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.banner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 436px;
}
@media screen and (max-width: 1024px) {
  .banner {
    height: unset;
    min-height: 220px;
    display: block;
  }
}
</style>
