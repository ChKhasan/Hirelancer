<template lang="html">
  <div class="orders-list mt-6">
    <div class="left">
      <div class="flex flex-col gap-4 mb-[100px]">
        <OrderCard class="border border-solid border-grey-8" />
        <OrderCard class="border border-solid border-grey-8" />
        <OrderCard class="border border-solid border-grey-8" />
        <OrderCard class="border border-solid border-grey-8" />
        <OrderCard class="border border-solid border-grey-8" />
        <OrderCard class="border border-solid border-grey-8" />
        <OrderCard class="border border-solid border-grey-8" />
        <OrderCard class="border border-solid border-grey-8" />
        <OrderCard class="border border-solid border-grey-8" />
      </div>
      <VPagination />
    </div>
    <div class="right flex flex-col gap-6">
      <div
        class="filter px-6 py-6 border border-solid border-grey-8 rounded-3xl flex flex-col gap-6"
      >
        <div class="flex flex-col gap-6">
          <h4 class="text-[20px] font-semibold text-black">Тип работы</h4>
          <div
            class="flex flex-col gap-6 border-[0] border-b border-solid border-grey-8 pb-6"
          >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Дизайн</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Разработка и IT</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Тексты и переводы</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />СЕО и трафик</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Соцсети и реклама</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Аудио, видео, съёмка</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Бизнес и жизнь</span
            >
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <h4 class="text-[20px] font-semibold text-black">Тип заказов</h4>
          <div class="flex flex-col gap-6">
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Все типы</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Открытие</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Тексты и переводы</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />PRO заказы</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Безопасная сделка</span
            >
            <span class="text-[18px] text-grey-80 flex gap-4 items-end">
              <a-checkbox />Срочный заказ</span
            >
          </div>
        </div>
        <div class="flex gap-4">
          <button
            class="flex w-full justify-center py-[15px] rounded-lg border border-blue border-solid text-[14px] font-tt font-semibold text-white bg-blue"
          >
            Применить
          </button>
          <button
            class="flex w-full justify-center py-[15px] rounded-lg border border-blue border-solid text-[14px] font-tt font-semibold text-blue bg-white"
          >
            Сбросить
          </button>
        </div>
      </div>
      <TelegramCard />
    </div>
  </div>
</template>
<script>
import TelegramCard from "../TelegramCard.vue";
import VPagination from "../VPagination.vue";
import OrderCard from "../home/OrderCard.vue";

export default { components: { OrderCard, TelegramCard, VPagination } };
</script>
<style lang="css" scoped>
.orders-list {
  display: grid;
  grid-template-columns: 1fr 332px;
  gap: 32px;
}
:deep(.ant-checkbox-inner) {
  border-radius: 4px;
  border: 2px solid #ebebeb;
}
</style>
