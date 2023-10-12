<template lang="html">
  <div class="portfolios flex flex-col gap-6">
    <div class="flex justify-between">
      <h1 class="text-black text-[24px] font-semibold">Участие в мероприятиях</h1>
      <div class="flex gap-2">
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
    <div class="">
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
