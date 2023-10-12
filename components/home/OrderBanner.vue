<template lang="html">
  <div class="2xl:container mx-auto">
    <div class="banner bg-blue rounded-[32px] mt-[100px]">
      <div class="left pl-[83px] py-[87px] flex flex-col justify-between items-start">
        <div>
          <h4 class="text-[40px] text-white font-semibold"> Начни зарабатывать с нами!</h4>
          <p class="text-white text-base font-medium mt-[40px]">
            Лучшие фрилансеры для выполнения ваших задач
          </p>
        </div>
        <button
          class="px-[20px] items-center max-h-[61px] py-[20px] rounded-xl bg-white text-blue flex gap-2 text-base font-medium font-tt"
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
      <div class="right">
        <img class="h-full" src="@/assets/images/order-banner.png" alt="" />
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
</style>
