<template lang="html">
  <div class="personal-block">
    <div
      class="rounded-2xl px-[32px] pt-[40px] pb-[32px] bg-bg-grey min-h-[667px] flex flex-col justify-between"
    >
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-6 items-center">
          <div
            class="image w-[112px] h-[112px] rounded-full border-[1px] border-solid border-grey-8 relative"
          >
            <img class="w-full h-full" src="../../assets/images/Avatar 5.png" alt="" />
            <span class="absolute bottom-0 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.883 1.99531C11.4792 1.33021 12.5208 1.33021 13.117 1.99531L14.8362 3.91342C15.2771 4.40525 15.8946 4.70264 16.554 4.74065L19.1256 4.88888C20.0172 4.94028 20.6667 5.7547 20.5184 6.63547L20.0907 9.17554C19.981 9.82685 20.1336 10.4951 20.515 11.0343L22.0024 13.1373C22.5182 13.8665 22.2864 14.882 21.5053 15.3152L19.2527 16.5645C18.6751 16.8849 18.2478 17.4208 18.064 18.0552L17.3472 20.5293C17.0987 21.3872 16.1602 21.8391 15.3345 21.4986L12.9533 20.5163C12.3427 20.2645 11.6573 20.2645 11.0467 20.5163L8.6655 21.4986C7.83981 21.8391 6.90129 21.3872 6.65276 20.5293L5.93602 18.0552C5.75223 17.4208 5.32488 16.8849 4.74728 16.5645L2.4947 15.3152C1.71362 14.882 1.48182 13.8665 1.9976 13.1373L3.48505 11.0343C3.86645 10.4951 4.01897 9.82685 3.9093 9.17554L3.48159 6.63547C3.33328 5.7547 3.98276 4.94028 4.87445 4.88888L7.44601 4.74065C8.10539 4.70264 8.72294 4.40525 9.16378 3.91342L10.883 1.99531Z"
                  fill="#5C46E6"
                  stroke="white"
                />
                <path
                  d="M8.25 11.8159L9.72987 13.2878C10.146 13.6088 10.7924 13.5596 11.1361 13.1809L15 9.75"
                  stroke="white"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          <div class="info flex flex-col gap-2 w-full justify-center">
            <a-skeleton
              :paragraph="false"
              :loading="!userInfo['name'] || !userInfo['surname']"
            >
              <h3 class="text-black text-[20px] font-semibold text-center">
                {{ `${userInfo["name"]} ${userInfo["surname"]}` }}
              </h3>
            </a-skeleton>
            <a-skeleton
              :paragraph="false"
              :loading="!userInfo['name'] || !userInfo['surname']"
            >
              <p class="text-base text-center text-grey-40">
                Зарегистрирован: более 5 лет назад
              </p>
            </a-skeleton>
          </div>
          <div
            class="status flex justify-between w-full px-6"
            v-if="userInfo['name'] || userInfo['surname']"
          >
            <p class="text-grey-80 text-[14px]">ID: {{ userInfo["id"] }}</p>
            <span class="w-[1px] h-[20px] bg-grey-8"> </span>
            <p class="text-grey-80 text-[14px] flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M8.36076 2.7265C9.03133 1.31382 10.9688 1.31382 11.6394 2.7265L12.7983 5.16797C13.0646 5.72895 13.5793 6.11777 14.1748 6.20773L16.7662 6.59924C18.2656 6.82577 18.8644 8.74161 17.7794 9.84123L15.9042 11.7417C15.4733 12.1783 15.2767 12.8074 15.3784 13.424L15.8211 16.1074C16.0772 17.6601 14.5098 18.8442 13.1686 18.1111L10.8508 16.8442C10.3182 16.5531 9.68196 16.5531 9.14939 16.8442L6.83155 18.1111C5.49041 18.8442 3.92293 17.6601 4.17907 16.1075L4.62174 13.424C4.72345 12.8074 4.52684 12.1783 4.09598 11.7417L2.22081 9.84123C1.1358 8.74161 1.73452 6.82577 3.23397 6.59924L5.82539 6.20773C6.42082 6.11777 6.93555 5.72895 7.20184 5.16797L8.36076 2.7265Z"
                  fill="#F2C94C"
                /></svg
              >{{ userInfo["rating"] }}
            </p>
            <span class="w-[1px] h-[20px] bg-grey-8"> </span>
            <p class="text-grey-80 text-[14px] flex gap-2 items-center">
              <svg
                v-if="userInfo['online']"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="4" fill="#00CD69" />
                <circle
                  opacity="0.3"
                  cx="8"
                  cy="8"
                  r="5.75"
                  stroke="#00CD69"
                  stroke-width="0.5"
                />
                <circle
                  opacity="0.2"
                  cx="8"
                  cy="8"
                  r="7.75"
                  stroke="#00CD69"
                  stroke-width="0.5"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="4" fill="#f2154a" />
                <circle
                  opacity="0.3"
                  cx="8"
                  cy="8"
                  r="5.75"
                  stroke="#f2154a"
                  stroke-width="0.5"
                />
                <circle
                  opacity="0.2"
                  cx="8"
                  cy="8"
                  r="7.75"
                  stroke="#f2154a"
                  stroke-width="0.5"
                /></svg
              >{{ userInfo["online"] ? "Online" : "Offline" }}
            </p>
          </div>
          <a-skeleton :paragraph="false" v-else />
        </div>
        <div class="buttons" v-if="$route.name == 'freelancer'">
          <button
            class="border border-solid border-blue rounded-[12px] h-12 flex gap-2 justify-center items-center text-base text-blue font-medium"
          >
            Написать
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M9.33984 10.698L9.34165 10.6951M12.5 10.698L12.5018 10.6951M15.6602 10.698L15.662 10.6951M17.5 5.3584H7.5C5.843 5.3584 4.5 6.7014 4.5 8.3584V13.0224C4.5 14.6794 5.843 16.0224 7.5 16.0224H8.815L8.827 19.8634L13.298 16.0224H17.5C19.157 16.0224 20.5 14.6794 20.5 13.0224V8.3584C20.5 6.7014 19.157 5.3584 17.5 5.3584Z"
                stroke="#7037EA"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            class="border border-solid border-grey-8 rounded-[12px] h-12 flex justify-center items-center"
          >
            <svg
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
        <div class="grid grid-cols-2 client-types" v-if="profile">
          <button
            @click="$router.push(`/profile/freelancer`)"
            :class="{ activeF: $route.params.user == 'freelancer' }"
            class="border-[2px] border-solid border-grey-light h-12 flex justify-center items-center gap-2 rounded-l-[12px]"
          >
            Я - Фрилансер
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.979 14.673C14.246 15.489 13.183 16.003 12 16.003C10.816 16.003 9.75199 15.489 9.01899 14.671M9.33299 8.86997V9.65797M14.667 8.78797V9.57597M21.333 12.001C21.333 17.1554 17.1545 21.334 12 21.334C6.84552 21.334 2.66699 17.1554 2.66699 12.001C2.66699 6.8465 6.84552 2.66797 12 2.66797C17.1545 2.66797 21.333 6.8465 21.333 12.001Z"
                stroke="#28303F"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            @click="$router.push(`/profile/customer`)"
            :class="{ activeC: $route.params.user == 'customer' }"
            class="border-[2px] border-solid border-grey-light h-12 flex justify-center items-center gap-2 rounded-r-[12px]"
          >
            Я - заказчик
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M2.5 8H4.5L10.7622 10.7397C11.7241 11.1605 12.1664 12.2784 11.7528 13.2434V13.2434C11.337 14.2136 10.2136 14.663 9.24342 14.2472L7.5 13.5"
                stroke="#28303F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.83541 16.3292C2.46493 16.1439 2.01442 16.2941 1.82918 16.6646C1.64394 17.0351 1.79411 17.4856 2.16459 17.6708L2.83541 16.3292ZM11.8354 13.3292L11.1646 12.9938L10.4938 14.3354L11.1646 14.6708L11.8354 13.3292ZM19.75 18C19.75 18.4142 20.0858 18.75 20.5 18.75C20.9142 18.75 21.25 18.4142 21.25 18H19.75ZM14.2331 15.3666L13.8977 16.0374L14.2331 15.3666ZM16.9164 16.75H18.5V15.25H16.9164V16.75ZM18.5 19.25H10.3885V20.75H18.5V19.25ZM7.14625 18.4846L2.83541 16.3292L2.16459 17.6708L6.47542 19.8262L7.14625 18.4846ZM14.5685 14.6957L11.8354 13.3292L11.1646 14.6708L13.8977 16.0374L14.5685 14.6957ZM10.3885 19.25C9.26302 19.25 8.15295 18.9879 7.14625 18.4846L6.47542 19.8262C7.69041 20.4337 9.03015 20.75 10.3885 20.75V19.25ZM19.75 18C19.75 18.6904 19.1904 19.25 18.5 19.25V20.75C20.0188 20.75 21.25 19.5188 21.25 18H19.75ZM18.5 16.75C19.1904 16.75 19.75 17.3096 19.75 18H21.25C21.25 16.4812 20.0188 15.25 18.5 15.25V16.75ZM16.9164 15.25C16.1014 15.25 15.2975 15.0602 14.5685 14.6957L13.8977 16.0374C14.835 16.506 15.8685 16.75 16.9164 16.75V15.25Z"
                fill="#28303F"
              />
              <circle cx="18.5" cy="8" r="4" stroke="#28303F" stroke-width="1.5" />
            </svg>
          </button>
        </div>
        <div class="messengers flex flex-col gap-3">
          <h6 class="text-[12px] font-semibold text-grey-40 uppercase">
            Социальные сети
          </h6>
          <PersonalMessengers :userInfo="userInfo" />
        </div>
        <!-- <div v-if="profile">
          <div
            class="personalBlock-price border border-dashed border-blue rounded-[15px] px-[20px] py-[20px] bg-white"
          >
            <div class="flex justify-between">
              <p class="text-grey-40 text-base">Баланс</p>
              <nuxt-link class="text-blue text-[14px] underline" to="/"
                >История транзакций</nuxt-link
              >
            </div>
            <h4 class="text-black text-[24px] font-semibold mt-2">560,000 сум</h4>
            <button
              class="rounded-[8px] h-[44px] w-full bg-apple-grey flex items-center justify-center text-blue text-[14px] font-semibold mt-4"
            >
              Пополнить
            </button>
          </div>
        </div>
        <button
          class="pro-btn overflow-hidden relative h-[75px] rounded-[16px] flex items-center justify-center"
        >
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/profile-btn.png"
            alt=""
          />
          <p class="absolute z-10 text-white text-[18px] font-semibold">
            Получить про аккаунт
          </p>
        </button> -->
      </div>
      <!-- <div class="mt-[34px] flex flex-col gap-8">
        <div class="flex flex-col gap-3">
          <h6 class="text-[12px] font-semibold text-grey-40">Достижения</h6>
          <div
            class="body bg-white rounded-[12px] border border-solid border-grey-8 pt-4 pb-4 flex flex-col gap-6 max-h-[336px] overflow-y-scroll mr-2"
          >
            <div
              class="pb-4 border-[0] border-b border-solid border-grey-8 flex flex-col gap-2 px-4"
              v-for="item in data"
              :key="item"
            >
              <div class="flex gap-2 items-center">
                <img src="@/assets/images/Achir.png" alt="" />
                <h6 class="text-grey-80 text-base font-semibold">Лучший дизайнер</h6>
              </div>
              <p class="text-base text-grey-64">
                Эффективный и яркий дизайн сайтов. 967+ успешных проектов. 16 лет опыта.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between mb-2 items-center">
            <h1 class="text-[12px] font-semibold text-grey-40">Участие в мероприятиях</h1>
            <div class="flex gap-2 items-center">
              <div
                class="swiper-button-prev prev-btn min-w-[28px] max-h-[28px] rounded-full flex justify-center items-center border border-solid border-grey-8"
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
                class="swiper-button-next next-btn min-w-[28px] max-h-[28px] rounded-full flex justify-center items-center border border-solid border-grey-8"
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
          <div class="" v-if="profile">
            <div class="events-swiper-small swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <EventsSmallCard />
                </div>
                <div class="swiper-slide">
                  <EventsSmallCard />
                </div>
                <div class="swiper-slide">
                  <EventsSmallCard />
                </div>
                <div class="swiper-slide">
                  <EventsSmallCard />
                </div>
                <div class="swiper-slide">
                  <EventsSmallCard />
                </div>
                <div class="swiper-slide">
                  <EventsSmallCard />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3" v-if="profile">
          <h1 class="text-[12px] font-semibold text-grey-40">О ФРИЛАНСЕРЕ</h1>
          <p class="text-base text-grey-64">
            pАгентство UI/UX-дизайна и брендинга, специализирующееся на фирменном стиле,
            мобильных приложениях и веб-дизайне для стартапов и компаний из списка
            Fortu...
          </p>

          <nuxt-link
            to="/"
            class="flex gap-1 text-[12px] font-semibold text-grey-64 uppercase items-center"
            >Читать далее
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M11.6667 13.333L15 9.99967M15 9.99967L11.6667 6.66634M15 9.99967L5 9.99967"
                stroke="#5D5D5F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></nuxt-link>
        </div>
      </div> -->

      <div class="flex flex-col gap-4 items-center mt-[100px]">
        <p class="text-grey-40 text-[12px] font-semibold uppercase">
          УЧАСТНИК С: 21 МАЯ 2010 ГОДА
        </p>
        <span class="h-[1px] w-full bg-grey-8"></span>
        <button
          @click="$store.dispatch('logout')"
          class="underline text-base text-pantone-2023 flex items-center gap-[10px]"
        >
          выйти<svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.35355 7.5606C3.64645 7.26771 3.64645 6.79284 3.35355 6.49994C3.06066 6.20705 2.58579 6.20705 2.29289 6.49994L1 7.79284C0.316582 8.47625 0.316584 9.58429 1 10.2677L2.29289 11.5606C2.58579 11.8535 3.06066 11.8535 3.35355 11.5606C3.64645 11.2677 3.64645 10.7928 3.35355 10.4999L2.63388 9.78027L8.75 9.78027C9.16421 9.78027 9.5 9.44449 9.5 9.03027C9.5 8.61606 9.16421 8.28027 8.75 8.28027L2.63388 8.28027L3.35355 7.5606Z"
              fill="#F2154A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.75 0.25L8.5 0.249999C5.87665 0.249999 3.75 2.37665 3.75 5C3.75 5.41421 4.08579 5.75 4.5 5.75C4.91421 5.75 5.25 5.41421 5.25 5C5.25 3.20507 6.70507 1.75 8.5 1.75L12.2859 1.75C13.1524 0.826731 14.3839 0.25 15.75 0.25ZM12.2859 16.25L8.5 16.25C6.70507 16.25 5.25 14.7949 5.25 13C5.25 12.5858 4.91421 12.25 4.5 12.25C4.08579 12.25 3.75 12.5858 3.75 13C3.75 15.6234 5.87665 17.75 8.5 17.75L15.75 17.75C14.3839 17.75 13.1524 17.1733 12.2859 16.25Z"
              fill="#F2154A"
            />
            <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.5 13C20.5 15.6234 18.3734 17.75 15.75 17.75C13.1266 17.75 11 15.6234 11 13L11 5C11 2.37665 13.1266 0.249999 15.75 0.25C18.3734 0.25 20.5 2.37665 20.5 5L20.5 13Z"
              fill="#F2154A"
            />
          </svg>
        </button>
        <!-- <p class="underline text-base text-pantone-2023 flex items-center gap-[10px]">
          Сообщить модератору о нарушении
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M8.46798 1.16592C9.35365 -0.388639 11.6464 -0.388642 12.532 1.16592L20.2041 14.6324C21.0649 16.1433 19.9445 18 18.1721 18H2.82789C1.05546 18 -0.0648959 16.1433 0.79587 14.6324L8.46798 1.16592Z"
              fill="#BB2649"
            />
            <path
              d="M11.5 14C11.5 14.5523 11.0523 15 10.5 15C9.94772 15 9.5 14.5523 9.5 14C9.5 13.4477 9.94772 13 10.5 13C11.0523 13 11.5 13.4477 11.5 14Z"
              fill="#BB2649"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.5 5.25C10.9142 5.25 11.25 5.58579 11.25 6V11C11.25 11.4142 10.9142 11.75 10.5 11.75C10.0858 11.75 9.75 11.4142 9.75 11V6C9.75 5.58579 10.0858 5.25 10.5 5.25Z"
              fill="#BB2649"
            />
          </svg>
        </p> -->
      </div>
    </div>
  </div>
</template>
<script>
import PersonalMessengers from "./PersonalMessengers.vue";
import { Swiper, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import EventsSmallCard from "./EventsSmallCard.vue";
export default {
  props: ["profile", "userInfo"],
  data() {
    return {
      data: [1, 2, 3, 4, 5, 6],
      isFreelancer: false,
    };
  },
  mounted() {
    const swiper = new Swiper(".events-swiper-small", {
      slidesPerView: 1,
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
  components: { PersonalMessengers, EventsSmallCard },
};
</script>
<style lang="css" scoped>
.buttons {
  display: grid;
  grid-template-columns: 1fr 48px;
  grid-gap: 16px;
}
.body::-webkit-scrollbar {
  display: none;
}
.prev-btn,
.next-btn {
  position: static;
}
.prev-btn::after,
.next-btn::after {
  display: none;
}
.client-types .activeF {
  border-color: var(--blue);
  background-color: var(--blue);
  color: #fff;
}
.client-types .activeC {
  border-color: var(--light-red);
  background-color: var(--light-red);
  color: #fff;
}
.client-types .activeC svg path,
.client-types .activeC svg circle,
.client-types .activeF svg path,
.client-types .activeF svg circle {
  stroke: #fff;
  /* fill: #fff; */
}
.pro-btn:hover img {
  transform: scale(1.06);
}
.pro-btn img {
  transition: 0.3s linear;
}
</style>
