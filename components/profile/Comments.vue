<template lang="html">
  <div class="comments flex flex-col gap-4">
    <div class="flex justify-between">
      <h1 class="text-black text-[24px] font-semibold">Отзывы клиентов</h1>
      <div class="flex gap-4 items-center">
        <a-select v-model="sort" placeholder="Положительный" class="w-[216px]">
          <a-select-option :value="region" v-for="region in [1, 2, 3, 4]" :key="region">
            {{ region }}</a-select-option
          >
        </a-select>
        <nuxt-link class="flex gap-[6px] text-blue text-base font-medium" to="/orders"
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
    <div class="">
      <div class="comments-swiper swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <CommentsCard />
          </div>
          <div class="swiper-slide">
            <CommentsCard />
          </div>
          <div class="swiper-slide">
            <CommentsCard />
          </div>
          <div class="swiper-slide">
            <CommentsCard />
          </div>
          <div class="swiper-slide">
            <CommentsCard />
          </div>
          <div class="swiper-slide">
            <CommentsCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import AlertsCard from "./AlertsCard.vue";
import CommentsCard from "./CommentsCard.vue";

export default {
  data() {
    return {
      sort: undefined,
    };
  },
  mounted() {
    const swiper = new Swiper(".comments-swiper", {
      slidesPerView: 2,
      spaceBetween: 16,
      modules: [Navigation],
      pagination: false,
      autoplay: {
        delay: 40000,
      },
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      },
    });
  },
  components: { AlertsCard, CommentsCard },
};
</script>
<style lang="css" scoped>
.comments :deep(.ant-select-selection__rendered) {
  line-height: 53px;
  margin-left: 16px;
}
.comments :deep(.ant-select-selection--single) {
  height: 53px;
}
.comments :deep(.ant-select-selection__placeholder) {
  color: var(--grey-80);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
}
.comments :deep(.ant-select-selection) {
  border-radius: 8px;
  border: 1px solid var(--grey-8);
  background: white;
}
.comments :deep(.ant-select-focused .ant-select-selection, .ant-select-selection:focus, .ant-select-selection:active) {
  box-shadow: 0 0 0 2px rgba(92, 70, 229, 0.2);
}
</style>
