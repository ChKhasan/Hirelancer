<template lang="html">
  <div
    class="profile-orders-card border border-solid rounded-2xl border-grey-8 px-8 py-6 flex flex-col gap-4"
  >
    <div class="head flex justify-between items-center">
      <div class="flex gap-[10px] flex-col items-start">
        <span
          class="flex gap-[4px] status-red items-center rounded-[8px] px-[8px] py-[4px] text-light-red text-[14px] font-medium"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17.9255 14.0455C17.9255 17.3184 15.2723 19.9716 11.9994 19.9716C8.72646 19.9716 6.07324 17.3184 6.07324 14.0455C6.07324 12.9549 6.28062 11.8523 6.6336 10.7859C6.92071 11.9808 7.99626 12.8688 9.27921 12.8688C10.7819 12.8688 12 11.6506 12 10.1479C12 8.64528 10.9755 7.62262 10.9755 6.16181C10.9755 4.26045 12.3526 2.80328 13.9319 2.80328C13.9319 5.08258 14.7668 5.94502 15.6731 7.40827C16.749 9.14528 17.9255 11.0448 17.9255 14.0455Z"
              stroke="#F2154A"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          >Срочный заказ</span
        >
        <h3 class="text-[20px] text-black font-medium">
          Требуется дизайнер Figma для воссоздания существующего дизайна веб-сайта
        </h3>
      </div>
      <p class="text-[20px] text-black font-medium">2 160 000 сум</p>
    </div>
    <div class="body flex justify-between">
      <div class="flex gap-[40px]">
        <div class="flex gap-4 items-center">
          <div class="image min-w-[56px] h-[56px] rounded-full overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="@/assets/images/Avatar 5.png"
              alt=""
            />
          </div>
          <div class="info flex flex-col">
            <p class="text-[14px] text-grey-40">Клиент</p>
            <p class="text-base text-grey-80 font-medium">Ikromova Munisa</p>
          </div>
        </div>
        <span class="h-[56px] w-[1px] bg-grey-8"></span>
        <div class="flex flex-col gap-2">
          <p class="text-base text-grey-64 flex gap-[6px]">
            Срок начала: <span class="text-black">25.03.2023</span>
          </p>
          <p class="text-base text-grey-64 flex gap-[6px]">
            Срок выполнение: <span class="text-black">05.04.2023</span>
          </p>
        </div>
      </div>
      <div class="flex items-end">
        <nuxt-link
          to="/profile/orders/order"
          class="text-blue text-base font-medium flex gap-2 items-center"
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
    </div>
    <div class="offers" v-if="$route.name.includes('orders-offers')">
      <div
        class="rounded-[8px] border border-solid border-light-yellow-br bg-light-yellow px-6 py-4 cursor-pointer overflow-hidden"
      >
        <div @click="open(1)" class="flex justify-between">
          <div class="flex gap-[80px]">
            <h4 class="text-base font-medium text-black">Предложения</h4>
            <div class="flex gap-[40px]">
              <p class="text-base text-grey-64 flex gap-[6px]">
                Срок: <span class="text-black">5 дней</span>
              </p>
              <p class="text-base text-grey-64 flex gap-[6px]">
                Цена: <span class="text-black">600 000 сум</span>
              </p>
            </div>
          </div>
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 10L12 14L17 10"
                stroke="#020105"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></span>
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
