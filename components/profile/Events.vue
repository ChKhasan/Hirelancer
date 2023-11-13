<template lang="html">
  <div class="portfolios flex flex-col gap-6 xl:gap-4 xl:pb-6 xl:border-[0] xl:border-solid xl:border-b xl:border-grey-light">
    <div class="flex justify-between">
      <h1 class="text-black text-[24px] font-semibold xl:text-[18px]">Участие в мероприятиях</h1>
      <button class="xl:block hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M7 10.5L12 14.5L17 10.5"
            stroke="#020105"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div class="flex gap-2 xl:hidden">
        <div
          class="swiper-button-prev prev-btn min-w-[44px] h-[44px] rounded-full flex justify-center items-center border border-solid border-grey-8"
        >
          <span
            ><svg
              class="rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.33325 5.83301L11.6666 9.99967L8.33325 14.1663"
                stroke="#7037EA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></span>
        </div>
        <div
          class="swiper-button-next next-btn min-w-[44px] h-[44px] rounded-full flex justify-center items-center border border-solid border-grey-8"
        >
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.33325 5.83301L11.6666 9.99967L8.33325 14.1663"
                stroke="#7037EA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></span>
        </div>
      </div>
    </div>
    <div class="xl:hidden">
      <div class="events-swiper swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <EventsCard />
          </div>
          <div class="swiper-slide">
            <EventsCard />
          </div>
          <div class="swiper-slide">
            <EventsCard />
          </div>
          <div class="swiper-slide">
            <EventsCard />
          </div>
          <div class="swiper-slide">
            <EventsCard />
          </div>
          <div class="swiper-slide">
            <EventsCard />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col gap-[6px] xl:flex hidden  xl:gap-2">
      <EventsCard />
      <EventsCard />
      <EventsCard />
      <EventsCard />
      <EventsCard />
      <EventsCard />
    </div>
  </div>
</template>
<script>
import { Swiper, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import EventsCard from "./EventsCard.vue";
export default {
  mounted() {
    const swiper = new Swiper(".events-swiper", {
      slidesPerView: 2,
      spaceBetween: 16,
      modules: [Navigation],
      pagination: false,
      autoplay: {
        delay: 40000,
      },
      breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      },
    });
  },
  components: { EventsCard },
};
</script>
<style lang="css" scoped>
.prev-btn,
.next-btn {
  position: static;
}
.prev-btn::after,
.next-btn::after {
  display: none;
}
</style>
