<template lang="html">
  <div
    class="card relative order-card pt-[25px] pr-[32px] pb-[31px] pl-[34px] rounded-3xl bg-white cursor-pointer xl:border-[1px] xl:border-solid xl:border-grey-8 xl:rounded-[16px] xl:p-[16px]"
    @click="$router.push(`/orders/${order?.id}`)"
  >
    <div class="header flex justify-between xl:flex-col-reverse xl:gap-2">
      <div class="flex gap-[20px] items-center xl:gap-[12px]">
        <span
          v-if="order?.urgent"
          class="border light-yellow rounded-[500px] border-solid border-dark-yellow text-dark-yellow h-[36px] xl:h-[32px] px-[20px] xl:pl-2 xl:pr-3 flex items-center xl:text-[12px] xl:gap-1"
          ><svg
            class="xl:w-[16px] xl:h-[16px]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17.9255 14.0454C17.9255 17.3183 15.2723 19.9716 11.9994 19.9716C8.72646 19.9716 6.07324 17.3183 6.07324 14.0454C6.07324 12.9548 6.28062 11.8523 6.6336 10.7859C6.92071 11.9807 7.99626 12.8687 9.27921 12.8687C10.7819 12.8687 12 11.6505 12 10.1479C12 8.64521 10.9755 7.62256 10.9755 6.16175C10.9755 4.26039 12.3526 2.80322 13.9319 2.80322C13.9319 5.08252 14.7668 5.94496 15.6731 7.40821C16.749 9.14521 17.9255 11.0447 17.9255 14.0454Z"
              stroke="#F2994A"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          >Срочный заказ</span
        >
        <span
          v-if="order?.urgent"
          class="flex w-[1px] h-[27px] bg-grey-8 xl:hidden"
        ></span>
        <button
          class="whitespace-nowrap h-[36px] xl:h-[32px] flex items-center bg-apple-grey font-tt text-grey-64 py-2 px-4 rounded-[22px] text-[14px] xl:text-[12px]"
        >
          UI/UX dizayner
        </button>
      </div>
      <div class="flex gap-[28px] items-center xl:justify-between">
        <div class="flex gap-[16px] items-center xl:gap-[12px]">
          <p class="text-base text-grey-40 xl:text-[14px]">
            {{ moment(order?.created_at).format(hourFormat) }}
          </p>
          <span class="flex w-[1px] h-[27px] xl:h-[20px] bg-grey-8"></span>
          <p class="text-base text-grey-40 xl:text-[14px]">
            {{ moment(order?.created_at).format(dateFormat) }}
          </p>
        </div>
        <button
          class="w-[42px] h-[42px] xl:w-[40px] xl:h-[40px] rounded-full border-[2px] border-grey-light border-solid flex items-center justify-center"
        >
          <svg
            class="xl:w-[22px] xl:h-[22px]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.667 19.9139L12 16.0839L5.33301 19.9139V7.08594C5.33301 5.42894 6.67601 4.08594 8.33301 4.08594H15.666C17.323 4.08594 18.666 5.42894 18.666 7.08594V19.9139H18.667Z"
              stroke="#5C46E6"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="body flex gap-4 flex-col mt-6 border-[0] border-b border-grey-8 border-solid pb-4 xl:mt-4 xl:gap-[8px]"
    >
      <h6 class="text-[20px] font-semibold text-black xl:text-base xl:leading-[19px]">
        {{ order?.name }}
      </h6>
      <span
        class="text-base text-grey-80 xl:text-[14px] xl:line-clamp-3"
        v-html="order?.description"
      >
      </span>
      <div class="justify-start hidden xl:flex mt-[-4px]">
        <button
          class="underline text-grey-80 text-base font-medium text-center xl:text-main-color"
        >
          Подробнее
        </button>
      </div>
    </div>
    <div
      class="footer flex justify-between mt-[23px] xl:flex-row-reverse xl:mt-[20px] xl:gap-[20px]"
    >
      <h1 class="text-grey-80 text-2xl font-semibold xl:text-base" v-if="order?.price">
        {{ order?.price.toLocaleString() }} sum
      </h1>
      <h1 class="text-grey-80 text-2xl font-semibold xl:text-base" v-else>
        По договоренности
      </h1>

      <div class="flex gap-8 xl:flex-col xl:gap-[20px]">
        <div class="flex gap-[24px] items-center xl:gap-[12px]">
          <p
            class="text-base flex gap-3 text-grey-40 xl:text-[12px] xl:gap-[6px] items-center"
          >
            <svg
              class="xl:w-[16px] xl:h-[16px]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M21.1303 10.3531C22.2899 11.5732 22.2899 13.4268 21.1303 14.6469C19.1745 16.7047 15.8155 19.5 12 19.5C8.18448 19.5 4.82549 16.7047 2.86971 14.6469C1.7101 13.4268 1.7101 11.5732 2.86971 10.3531C4.82549 8.29533 8.18448 5.5 12 5.5C15.8155 5.5 19.1745 8.29533 21.1303 10.3531Z"
                stroke="#9A999B"
                stroke-width="1.5"
              />
              <circle cx="12" cy="12.5" r="3" stroke="#9A999B" stroke-width="1.5" /></svg
            >{{ order?.view_count }}
          </p>
          <span class="flex w-[1px] h-[27px] bg-grey-8"></span>
          <p
            class="text-base flex gap-3 text-grey-40 font-tt xl:text-[12px] xl:gap-[6px] items-center"
          >
            <svg
              class="xl:w-[16px] xl:h-[16px]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M13 3.5H11C6.02944 3.5 2 7.52944 2 12.5V17.5C2 19.7091 3.79086 21.5 6 21.5H13C17.9706 21.5 22 17.4706 22 12.5C22 7.52944 17.9706 3.5 13 3.5Z"
                stroke="#9A999B"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <circle cx="12" cy="12.5" r="1" fill="#9A999B" />
              <circle cx="16" cy="12.5" r="1" fill="#9A999B" />
              <circle cx="8" cy="12.5" r="1" fill="#9A999B" /></svg
            >{{ order?.request_count }} запросов
          </p>
        </div>
        <div class="buttons flex gap-6 xl:flex-col-reverse xl:hidden">
          <button
            class="underline text-grey-80 text-base font-medium text-center xl:pb-[20px]"
          >
            Подробнее
          </button>
          <button
            class="py-[15px] px-[20px] font-semibold font-tt bg-blue text-white rounded-lg text-center"
          >
            Отправить заявку
          </button>
        </div>
      </div>
    </div>
    <button
      class="py-[12px] text-[14px] w-full justify-center font-semibold font-tt bg-white text-blue rounded-lg border border-solid border-blue hidden xl:flex text-center mt-[20px]"
    >
      Отправить заявку
    </button>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["order"],
  data() {
    return {
      dateFormat: "DD.MM.YYYY",
      hourFormat: "HH:mm",
    };
  },
  methods: {
    moment,
  },
};
</script>
<style lang="css" scoped>
.light-yellow {
  background-color: rgba(242, 153, 74, 0.16);
}
</style>
