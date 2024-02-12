<template lang="html">
  <div
    class="profile-orders-card border border-solid rounded-2xl border-grey-8 px-8 py-6 flex flex-col gap-4"
  >
    <div class="head flex justify-between items-center">
      <div class="flex gap-[10px] flex-col items-start">
        <!-- <span
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
        > -->
        <h3 class="text-[20px] text-black font-medium">
          {{ order?.name }}
        </h3>
      </div>
      <p class="text-[20px] text-black font-medium" v-if="order?.price">
        {{ order?.price }} сум
      </p>
    </div>
    <div class="body flex justify-between">
      <div class="flex" :class="!order?.client?.avatar ? 'gap-5' : 'gap-[40px]'">
        <div class="flex gap-4 items-center">
          <div
            v-if="order?.client?.avatar"
            class="image min-w-[56px] h-[56px] rounded-full overflow-hidden"
          >
            <img
              class="w-full h-full object-cover"
              src="@/assets/images/user-avatar.jpg"
              alt=""
            />
          </div>
          <div
            class="info flex gap-2"
            :class="!order?.client?.avatar ? 'flex-row items-center' : 'flex-col'"
          >
            <p class="text-[14px] text-grey-40">Клиент</p>
            <p class="text-base text-grey-80 font-medium">{{ order?.client?.name }}</p>
          </div>
        </div>
        <span class="h-full w-[1px] bg-grey-8"></span>
        <div
          class="flex"
          :class="!order?.client?.avatar ? 'flex-row gap-5' : 'flex-col gap-2'"
        >
          <p class="text-base text-grey-64 flex gap-[6px]">
            Срок начала:
            <span class="text-black">{{
              moment(order?.created_at).format(dateFormat)
            }}</span>
          </p>
          <span v-if="!order?.client?.avatar" class="h-full w-[1px] bg-grey-8"></span>
          <p class="text-base text-grey-64 flex gap-[6px]">
            Срок выполнение: <span class="text-black">----</span>
          </p>
        </div>
      </div>
      <div class="flex items-end">
        <nuxt-link
          :to="`/profile/freelancer/order/view/${order?.id}`"
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
    <div
      class="offers"
      v-if="$route.params.status == 'offers' || $route.params.status == 'completed'"
    >
      <div
        class="rounded-[8px] border border-solid px-6 py-4 cursor-pointer overflow-hidden"
        :class="
          order?.selected_request?.freelancer?.id == $store.state.userInfo?.id
            ? 'border-[#C5EBC5] bg-[#FAFFFA] '
            : 'border-light-yellow-br bg-light-yellow '
        "
      >
        <div @click="open(1)" class="flex justify-between">
          <div class="flex gap-[80px]">
            <h4 class="text-base font-medium text-black flex items-center gap-2">
              <svg
                v-if="
                  order?.selected_request?.freelancer?.id == $store.state.userInfo?.id
                "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M17 12C17 13.1046 16.1046 14 15 14H7V17C7 18.1046 7.89543 19 9 19H19C20.1046 19 21 18.1046 21 17V9C21 7.89543 20.1046 7 19 7H17V12Z"
                    fill="#009A10"
                  />
                </g>
                <path
                  d="M3.75 15H15.1072C16.1526 15 17.0001 14.1046 17.0001 13V5C17.0001 3.89543 16.1526 3 15.1072 3H3.75V15Z"
                  fill="#009A10"
                />
                <path
                  opacity="0.4"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 1.25C3.41421 1.25 3.75 1.58579 3.75 2V22C3.75 22.4142 3.41421 22.75 3 22.75C2.58579 22.75 2.25 22.4142 2.25 22V2C2.25 1.58579 2.58579 1.25 3 1.25Z"
                  fill="#009A10"
                />
              </svg>
              Предложения
            </h4>
            <div class="flex gap-[40px]">
              <p class="text-base text-grey-64 flex gap-[6px]">
                Срок: <span class="text-black">{{ order?.deadline }} дней</span>
              </p>
              <p class="text-base text-grey-64 flex gap-[6px]">
                Цена: <span class="text-black">{{ order?.price }} сум</span>
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
            <span class="text-base text-grey-80" v-html="order?.description"> </span>
            <div
              class="flex justify-end"
              v-if="order?.selected_request?.freelancer?.id != $store.state.userInfo?.id"
            >
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
import moment from "moment";
export default {
  props: ["order"],
  data() {
    return {
      offersList: [],
      dateFormat: "DD.MM.YYYY",
      test: true,
    };
  },
  methods: {
    moment,
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
