<template lang="html">
  <div class="orders similar-orders bg-bg-grey py-[120px]">
    <div class="max-w-[1286px] mx-auto list-grid mb-8">
      <div class="flex justify-between">
        <h1 class="text-black text-[32px] font-semibold">O’xshash buytmalar</h1>
        <nuxt-link class="flex gap-[6px] text-blue text-[18px] font-medium" to="/orders"
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
    </div>
    <div class="max-w-[1286px] mx-auto list-grid">
      <div class="list flex flex-col gap-4">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      <div class="flex flex-col gap-4">
        <TelegramCard class="bg-white" />
        <div class="relative rounded-2xl bg-white px-4 h-[371px]">
          <div class="py-4 flex flex-col justify-between">
            <h6 class="text-base font-medium text-black">
              Подписать на телеграм канал заказов
            </h6>
            <a class="text-blue text-[14px] font-medium font-tt underline mt-[19px]" href=""
              >Подробнее</a
            >
          </div>
          <div>
            <img
              class="absolute top-[39px] w-ful h-[332px] bottom-0"
              src="@/assets/images/telegram-card.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TelegramCard from "../TelegramCard.vue";
import OrderCard from "../home/OrderCard.vue";

export default { components: { OrderCard, TelegramCard } };
</script>
<style lang="css" scoped>
.list-grid {
  display: grid;
  grid-template-columns: 1fr 332px;
  gap: 16px;
}
</style>
