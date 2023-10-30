<template lang="html">
  <div class="orders-list mt-6">
    <div class="filter-head hidden xl:flex justify-between">
      <h4 class="text-black text-[14px] font-medium">13 630 результатов</h4>
      <button
        @click="open"
        class="flex items-center gap-2 text-blue text-[14px] font-medium"
      >
        Фильтры<svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M2.5 5H8.33333"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.5 10H10"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.8333 10H17.5"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.6667 5L17.5 5"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.8333 15L16.6667 15"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.5 15H5"
            stroke="#5C46E6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="6.66667" cy="15" r="1.66667" stroke="#5C46E6" stroke-width="1.5" />
          <ellipse
            cx="14.1667"
            cy="10"
            rx="1.66667"
            ry="1.66667"
            stroke="#5C46E6"
            stroke-width="1.5"
          />
          <ellipse
            cx="10"
            cy="5.00004"
            rx="1.66667"
            ry="1.66667"
            stroke="#5C46E6"
            stroke-width="1.5"
          />
        </svg>
      </button>
    </div>
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
        class="filter px-6 py-6 border  border-solid border-grey-8 rounded-3xl flex flex-col gap-6"
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
      <vue-bottom-sheet-vue2 ref="myBottomSheet" class="bottom-drawer" >
        <div
          class="filter px-6 xl:border-0 py-6 xl:px-4 xl:pb-4 xl:py-4 border border-solid border-grey-8 rounded-3xl flex flex-col gap-6"
        >
          <div class="flex flex-col gap-6">
            <h4 class="text-[20px] xl:text-[18px] font-semibold text-black">Тип работы</h4>
            <div
              class="flex flex-col gap-6 border-[0] xl:border-0 border-b border-solid border-grey-8 pb-6 xl:pb-0"
            >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Дизайн</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Разработка и IT</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Тексты и переводы</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />СЕО и трафик</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Соцсети и реклама</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Аудио, видео, съёмка</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Бизнес и жизнь</span
              >
            </div>
          </div>
          <div class="flex flex-col gap-6">
            <h4 class="text-[20px] xl:text-[18px] font-semibold text-black">Тип заказов</h4>
            <div class="flex flex-col gap-6">
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Все типы</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Открытие</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Тексты и переводы</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />PRO заказы</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Безопасная сделка</span
              >
              <span class="xl:text-base text-[18px] text-grey-80 flex gap-4 items-end">
                <a-checkbox />Срочный заказ</span
              >
            </div>
          </div>
          <div class="flex gap-4 xl:flex-col xl:gap-2 xl:mt-4">
            <button
              class="flex w-full justify-center py-[15px] rounded-lg xl:rounded-xl border border-blue border-solid text-[14px] font-tt font-semibold text-white bg-blue"
            >
              Применить
            </button>
            <button
              class="flex w-full justify-center py-[15px] rounded-lg xl:rounded-xl border border-blue border-solid text-[14px] font-tt font-semibold text-blue bg-white"
            >
              Сбросить
            </button>
          </div>
        </div>
      </vue-bottom-sheet-vue2>
      <TelegramCard />
    </div>
  </div>
</template>
<script>
import TelegramCard from "../TelegramCard.vue";
import VPagination from "../VPagination.vue";
import OrderCard from "../home/OrderCard.vue";

export default {
  methods: {
    open() {
      this.$refs.myBottomSheet.open();
    },
    close() {
      this.$refs.myBottomSheet.close();
    },
  },
  components: { OrderCard, TelegramCard, VPagination },
};
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
.orders-list :deep(.ant-checkbox + span) {
  padding-left: 16px;
  color: var(--blue-night);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.orders-list :deep(.ant-checkbox-checked .ant-checkbox-inner) {
  border-color: var(--blue);
  background-color: var(--blue);
}
.orders-list
  :deep(.ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover
    .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner) {
  border-color: var(--blue);
}
.orders-list :deep(.ant-checkbox-checked::after) {
  border-color: var(--blue);
}
@media (max-width: 1200px) {
  .orders-list {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
.bottom-drawer :deep(.bottom-sheet__content) {
  border-radius: 16px 16px 0px 0px;
  overflow: hidden;
  /* max-height: 90vh !important; */
}
</style>
