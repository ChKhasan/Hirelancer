<template lang="html">
  <div
    class="profile-orders-card border border-solid rounded-2xl border-grey-8 px-8 py-6 flex flex-col xl:px-4 xl:py-4"
  >
    <div class="head flex justify-between items-center xl:flex-col xl:items-start">
      <div
        class="flex gap-[10px] flex-col items-start xl:pb-4 xl:border-[0] xl:border-b xl:border-solid xl:border-grey-8"
      >
        <h3
          class="text-[20px] text-black font-medium cursor-pointer xl:text-base"
          @click="$router.push(`/profile/customer/order/edit/${order?.id}`)"
        >
          {{ order?.name }}
        </h3>
      </div>
      <p class="text-[20px] text-black font-medium xl:text-base" v-if="order?.price">
        {{ order?.price }} сум
      </p>
    </div>
    <div class="body flex justify-between mt-6">
      <div class="flex gap-[40px] xl:gap-0 xl:grid xl:grid-cols-2 xl:w-full">
        <div class="flex gap-4 items-center xl:order-last">
          <p class="text-base text-grey-64 flex gap-[6px] xl:flex-col xl:text-[12px]">
            Срок выполнение:
            <span class="text-black xl:text-[14px]">{{
              order?.start_of_execution ? order?.start_of_execution : "---"
            }}</span>
          </p>
        </div>
        <span class="h-[24px] w-[1px] bg-grey-8 xl:hidden"></span>
        <div class="flex items-center gap-2">
          <p class="text-base text-grey-64 flex gap-[6px] xl:flex-col xl:text-[12px]">
            Срок начала:
            <span class="text-black xl:text-[14px]">{{
              order?.end_of_execution ? order?.end_of_execution : "---"
            }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="offers flex flex-col gap-4 mt-2 xl:mt-6">
      <div class="flex justify-end">
        <nuxt-link
          :to="`/profile/customer/order/view/${order?.id}`"
          class="text-blue text-base font-medium flex gap-2 items-center xl:w-full xl:border xl:border-solid xl:border-main-color xl:rounded-[8px] xl:h-11 xl:justify-center xl:text-[14px] xl:font-medium xl:flex xl:gap-2 xl:items-center"
          >Подробнее<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14 8L18 12M18 12L14 16M18 12L6 12"
              stroke="#5C46E6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
        ></nuxt-link>
      </div>
      <div
        class="rounded-[8px] border border-solid border-light-yellow-br xl:border-yellow-br bg-light-yellow px-6 xl:pl-4 xl:pr-3 py-4 xl:py-3 cursor-pointer overflow-hidden"
      >
        <div @click="open(1)" class="flex justify-between">
          <div class="flex gap-[80px]">
            <h4 class="text-base font-medium text-black xl:text-dark-yellow xl:text-[14px]">
              Предложений: {{ order?.request_count }}
            </h4>
          </div>
          <span
            ><svg
            class="xl:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 2L18 2C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18L2 6C2 3.79086 3.79086 2 6 2Z"
                stroke="#28303F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 8H16M16 8V11M16 8L8 16M8 16L8 13M8 16H11"
                stroke="#28303F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          >
          <svg class="hidden xl:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 2L18 2C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18L2 6C2 3.79086 3.79086 2 6 2Z" stroke="#F2994A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13 8H16M16 8V11M16 8L8 16M8 16L8 13M8 16H11" stroke="#F2994A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
        </div>
        <div
          class="flex justify-between offer-body"
          :class="{ inactive: !offersList.includes(1) }"
        >
          <div class="pt-6 flex flex-col gap-6">
            <p class="text-base text-grey-80">
              Join our world-class innovation team, revolutionizing education at ASU Prep
              Digital. Our mission is to enhance student performance and provide access to
              transformative educational pathways. We're seeking Graphic Designers to
              create visually engaging digital lessons for grades 8-12.
            </p>
            <div class="flex justify-end">
              <button class="text-light-red text-base font-medium">
                Отменить запрос
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["order"],
  data() {
    return {
      offersList: [],
    };
  },
  methods: {
    open(id) {
      if (!this.offersList.includes(id)) {
        this.offersList.push(id);
      } else {
        this.offersList = this.offersList.filter((item) => item != id);
      }
    },
  },
};
</script>
<style lang="css" scoped>
.status-red {
  background: rgba(237, 50, 55, 0.1);
}
.offers .inactive {
  max-height: 0;
  transition: 0.3s linear;
}
.offer-body {
  max-height: 300px;
  transition: 0.3s linear;
}
</style>
