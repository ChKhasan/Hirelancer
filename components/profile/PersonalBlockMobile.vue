<template lang="html">
  <div class="m-personal-block px-4 mx-auto flex flex-col">
    <div class="flex flex-col gap-4">
      <div
        class="user-info px-4 py-4 border border-solid border-grey-light rounded-2xl bg-bg-grey"
      >
        <div class="user-info-card">
          <div
            class="h-[72px] overflow-hidden rounded-full border border-solid border-grey-light"
          >
            <img class="w-full h-full" src="../../assets/images/Avatar 5.png" alt="" />
          </div>
          <div class="flex justify-center flex-col gap-2">
            <h4 class="text-black text-[14px] font-semibold leading-[19px]">
              Muhammadullo Egamberdiyev Abbos O’gli
            </h4>
            <p class="text-grey-40 text-[12px]">Зарегистрирован: более 5 лет назад</p>
          </div>
          <div>
            <button class="w-full h-6 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="13"
                viewBox="0 0 3 13"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 1.25C2.5 1.94036 1.94036 2.5 1.25 2.5C0.559644 2.5 0 1.94036 0 1.25C0 0.559644 0.559644 0 1.25 0C1.94036 0 2.5 0.559644 2.5 1.25ZM2.5 6.25C2.5 6.94036 1.94036 7.5 1.25 7.5C0.559644 7.5 0 6.94036 0 6.25C0 5.55964 0.559644 5 1.25 5C1.94036 5 2.5 5.55964 2.5 6.25ZM1.25 12.5C1.94036 12.5 2.5 11.9404 2.5 11.25C2.5 10.5596 1.94036 10 1.25 10C0.559644 10 0 10.5596 0 11.25C0 11.9404 0.559644 12.5 1.25 12.5Z"
                  fill="#020105"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="status flex gap-2 w-full mt-6"
          v-if="$store.state.userInfo['name'] || $store.state.userInfo['surname']"
        >
          <p class="text-grey-80 text-[12px]">ID: {{ $store.state.userInfo["id"] }}</p>
          <span class="w-[1px] h-[14px] bg-grey-8"> </span>
          <p class="text-grey-80 text-[12px] flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.68846 2.18098C7.22492 1.05084 8.77492 1.05084 9.31138 2.18098L10.2385 4.13416C10.4515 4.58294 10.8633 4.894 11.3397 4.96596L13.4128 5.27917C14.6124 5.4604 15.0913 6.99307 14.2233 7.87276L12.7232 9.3931C12.3785 9.74243 12.2212 10.2457 12.3026 10.739L12.6567 12.8857C12.8616 14.1279 11.6077 15.0751 10.5347 14.4887L8.68047 13.4751C8.25442 13.2422 7.74542 13.2422 7.31937 13.4751L5.46509 14.4887C4.39218 15.0751 3.1382 14.1279 3.34311 12.8857L3.69724 10.739C3.77861 10.2457 3.62133 9.74243 3.27664 9.3931L1.7765 7.87276C0.908496 6.99307 1.38747 5.4604 2.58703 5.27917L4.66017 4.96596C5.13651 4.894 5.5483 4.58294 5.76132 4.13416L6.68846 2.18098Z"
                fill="#F2C94C"
              /></svg
            >{{ $store.state.userInfo["rating"] }}
          </p>
          <span class="w-[1px] h-[14px] bg-grey-8"> </span>
          <p class="text-grey-80 text-[12px] flex gap-2 items-center">
            <svg
              v-if="$store.state.userInfo['online']"
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
            >{{ $store.state.userInfo["online"] ? "Online" : "Offline" }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2 client-types">
        <button
          @click="$router.push(`/profile/freelancer`)"
          :class="{ activeF: $route.params.user == 'freelancer' }"
          class="border-[2px] text-[14px] border-solid border-grey-light h-[44px] flex justify-center items-center gap-2 rounded-l-[12px]"
        >
          Я - Фрилансер

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M12.4824 12.2276C11.8716 12.9076 10.9857 13.3359 9.99991 13.3359C9.01325 13.3359 8.12658 12.9076 7.51575 12.2259M7.77741 7.39172V8.04839M12.2224 7.32339V7.98006M17.7774 10.0009C17.7774 14.2963 14.2953 17.7784 9.99991 17.7784C5.70452 17.7784 2.22241 14.2963 2.22241 10.0009C2.22241 5.70549 5.70452 2.22339 9.99991 2.22339C14.2953 2.22339 17.7774 5.70549 17.7774 10.0009Z"
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
          class="border-[2px] text-[14px] border-solid border-grey-light h-[44px] flex justify-center items-center gap-2 rounded-r-[12px]"
        >
          Я - заказчик
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
          >
            <path
              d="M2 6.66663H4L10.2616 8.94949C11.1843 9.28592 11.6029 10.3554 11.1537 11.2288V11.2288C10.7796 11.9564 9.92437 12.2944 9.15385 12.0192L7 11.25"
              stroke="#28303F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.28846 13.4743C1.90611 13.315 1.46701 13.4958 1.30769 13.8782C1.14838 14.2605 1.32919 14.6996 1.71154 14.8589L2.28846 13.4743ZM11.2885 10.9743L10.5962 10.6859L10.0192 12.0705L10.7115 12.3589L11.2885 10.9743ZM6.52308 16.0512L6.23462 16.7435L6.52308 16.0512ZM13.8923 12.8718L13.6038 13.5641L13.8923 12.8718ZM16.2 14.0833H18.3333V12.5833H16.2V14.0833ZM18.3333 15.9166H9.6V17.4166H18.3333V15.9166ZM6.81154 15.3589L2.28846 13.4743L1.71154 14.8589L6.23462 16.7435L6.81154 15.3589ZM14.1808 12.1794L11.2885 10.9743L10.7115 12.3589L13.6038 13.5641L14.1808 12.1794ZM9.6 15.9166C8.64281 15.9166 7.6951 15.7271 6.81154 15.3589L6.23462 16.7435C7.30098 17.1879 8.44477 17.4166 9.6 17.4166V15.9166ZM19.25 15C19.25 15.5062 18.8396 15.9166 18.3333 15.9166V17.4166C19.668 17.4166 20.75 16.3346 20.75 15H19.25ZM18.3333 14.0833C18.8396 14.0833 19.25 14.4937 19.25 15H20.75C20.75 13.6653 19.668 12.5833 18.3333 12.5833V14.0833ZM16.2 12.5833C15.5069 12.5833 14.8206 12.446 14.1808 12.1794L13.6038 13.5641C14.4265 13.9068 15.3088 14.0833 16.2 14.0833V12.5833Z"
              fill="#28303F"
            />
            <ellipse
              cx="18"
              cy="6.66671"
              rx="4"
              ry="3.33333"
              stroke="#28303F"
              stroke-width="1.5"
            />
          </svg>
        </button>
      </div>
      <div class="list">
        <ul class="rounded-[16px] border border-solid border-grey-light">
          <li class="border-[0] border-b border-solid border-grey-light">
            <nuxt-link
              :to="`/profile/${$route.params.user}/info`"
              class="flex w-full gap-3 items-center text-[14px] font-medium text-black relative p-4"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M22 12C22 15.0134 20.6672 17.7154 18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488C3.33285 17.7154 2 15.0134 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  fill="#009A10"
                />
                <path
                  d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99637 15 6.43459 16.8918 5.44116 19.5488C7.19693 21.0756 9.49052 22 12 22C14.5095 22 16.8031 21.0756 18.5588 19.5488Z"
                  fill="#009A10"
                />
                <circle
                  cx="3"
                  cy="3"
                  r="3"
                  transform="matrix(1 0 0 -1 9 13)"
                  fill="#009A10"
                />
              </svg>
              Профиль
              <span class="absolute right-4"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 17L14 12L10 7"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg></span
            ></nuxt-link>
          </li>

          <li class="border-[0] border-b border-solid border-grey-light">
            <nuxt-link
              to=""
              class="flex w-full gap-3 items-center text-[14px] font-medium text-black relative p-4"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M0 16V2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V16C16 17.6481 14.1185 18.5889 12.8 17.6L9.2 14.9C8.48889 14.3667 7.51111 14.3667 6.8 14.9L3.2 17.6C1.88153 18.5889 0 17.6481 0 16Z"
                  fill="#1878F3"
                />
                <path
                  d="M16 5H0V2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.89543 16 2V5Z"
                  fill="#1878F3"
                /></svg
              >Проект
              <span class="absolute right-4"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 17L14 12L10 7"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg></span
            ></nuxt-link>
          </li>
          <li class="border-[0] border-b border-solid border-grey-light">
            <nuxt-link
              :to="`/profile/${$route.params.user}/portfolio`"
              class="flex w-full gap-3 items-center text-[14px] font-medium text-black relative p-4"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 1.75C7.75736 1.75 6.75 2.75736 6.75 4V5C6.75 5.41421 6.41421 5.75 6 5.75C5.58579 5.75 5.25 5.41421 5.25 5V4C5.25 1.92893 6.92893 0.25 9 0.25H11C13.0711 0.25 14.75 1.92893 14.75 4V5C14.75 5.41421 14.4142 5.75 14 5.75C13.5858 5.75 13.25 5.41421 13.25 5V4C13.25 2.75736 12.2426 1.75 11 1.75H9Z"
                  fill="#5C46E6"
                />
                <path
                  opacity="0.4"
                  d="M0 9C0 6.79086 1.79086 5 4 5H16C18.2091 5 20 6.79086 20 9V17C20 19.2091 18.2091 21 16 21H4C1.79086 21 0 19.2091 0 17V9Z"
                  fill="#5C46E6"
                />
                <path
                  d="M4 5H16C18.2091 5 20 6.79086 20 9C20 9 17.7216 11.2296 11.9643 11.5367C11.7005 11.5508 11.4816 11.346 11.3762 11.1037C11.1452 10.5727 10.616 10.2015 10 10.2015C9.40529 10.2015 8.89141 10.5476 8.6488 11.0493C8.53419 11.2864 8.30838 11.4815 8.04607 11.4588C2.27549 10.9596 0 9 0 9C0 6.79086 1.79086 5 4 5Z"
                  fill="#5C46E6"
                />
                <rect
                  x="9.25"
                  y="11"
                  width="1.5"
                  height="2.79403"
                  rx="0.75"
                  fill="#5C46E6"
                /></svg
              >Портфолио
              <span class="absolute right-4"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 17L14 12L10 7"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg></span
            ></nuxt-link>
          </li>
          <li class="border-[0] border-b border-solid border-grey-light">
            <nuxt-link
              to=""
              class="flex w-full gap-3 items-center text-[14px] font-medium text-black relative p-4"
              ><svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M9.95455 0H8.04545C6.99109 0 6.13635 0.805888 6.13635 1.8C6.13635 2.93761 4.91917 3.66087 3.92 3.11697L3.81852 3.06172C2.90541 2.56467 1.73782 2.85964 1.21064 3.72057L0.256091 5.27942C-0.271092 6.14034 0.0417618 7.24121 0.954869 7.73826C1.95451 8.28242 1.95451 9.71758 0.954868 10.2617C0.0417603 10.7588 -0.271093 11.8597 0.256089 12.7206L1.21064 14.2794C1.73782 15.1404 2.90541 15.4353 3.81851 14.9383L3.92 14.883C4.91917 14.3391 6.13635 15.0624 6.13635 16.2C6.13635 17.1941 6.99109 18 8.04545 18H9.95455C11.0089 18 11.8636 17.1941 11.8636 16.2C11.8636 15.0624 13.0808 14.3391 14.08 14.883L14.1815 14.9383C15.0946 15.4353 16.2622 15.1403 16.7894 14.2794L17.7439 12.7206C18.2711 11.8596 17.9582 10.7588 17.0451 10.2617C16.0455 9.71757 16.0455 8.28243 17.0451 7.73828C17.9582 7.24122 18.2711 6.14036 17.7439 5.27943L16.7894 3.72058C16.2622 2.85966 15.0946 2.56468 14.1815 3.06174L14.08 3.11698C13.0808 3.66088 11.8636 2.93762 11.8636 1.8C11.8636 0.805887 11.0089 0 9.95455 0Z"
                  fill="#781ECD"
                />
                <circle cx="9" cy="9" r="3" fill="#781ECD" />
              </svg>
              Настройки
              <span class="absolute right-4"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 17L14 12L10 7"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg></span
            ></nuxt-link>
          </li>
          <li class="border-[0] border-b border-solid border-grey-light">
            <nuxt-link
              to=""
              class="flex w-full gap-3 items-center text-[14px] font-medium text-black relative p-4"
              ><svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M11 0H9C4.02944 0 0 4.02944 0 9V14C0 16.2091 1.79086 18 4 18H11C15.9706 18 20 13.9706 20 9C20 4.02944 15.9706 0 11 0Z"
                  fill="#1878F3"
                />
                <circle cx="10" cy="9" r="1" fill="#1878F3" />
                <circle cx="14" cy="9" r="1" fill="#1878F3" />
                <circle cx="6" cy="9" r="1" fill="#1878F3" />
              </svg>
              Отзывы
              <span class="absolute right-4"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 17L14 12L10 7"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg></span
            ></nuxt-link>
          </li>
          <li class="border-[0] border-b border-solid border-grey-light">
            <nuxt-link
              to=""
              class="flex w-full gap-3 items-center text-[14px] font-medium text-black relative p-4"
              ><svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M10.0859 5L5.91411 5L4.51303 3.39296C3.13959 1.81763 4.74185 -0.537024 6.74707 0.109848L7.67484 0.409141C7.88607 0.477283 8.11393 0.477283 8.32516 0.409141L9.25293 0.109848C11.2582 -0.537023 12.8604 1.81763 11.487 3.39296L10.0859 5Z"
                  fill="#C2C2C3"
                />
                <path
                  opacity="0.4"
                  d="M1.68429 8.21035C2.46705 5.7055 4.78686 4 7.41117 4H8.58888C11.2132 4 13.533 5.7055 14.3158 8.21035L15.5658 12.2104C16.7731 16.0739 13.8867 20 9.83888 20H6.16117C2.11332 20 -0.773084 16.0739 0.434286 12.2104L1.68429 8.21035Z"
                  fill="#C2C2C3"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 6.75C8.41421 6.75 8.75 7.08579 8.75 7.5V8.34618C9.85602 8.6338 10.75 9.54274 10.75 10.75C10.75 11.1642 10.4142 11.5 10 11.5C9.58579 11.5 9.25 11.1642 9.25 10.75C9.25 10.2887 8.78756 9.75 8 9.75C7.21244 9.75 6.75 10.2887 6.75 10.75C6.75 11.2113 7.21244 11.75 8 11.75C9.42158 11.75 10.75 12.7783 10.75 14.25C10.75 15.4573 9.85602 16.3662 8.75 16.6538V17.5C8.75 17.9142 8.41421 18.25 8 18.25C7.58579 18.25 7.25 17.9142 7.25 17.5V16.6538C6.14398 16.3662 5.25 15.4573 5.25 14.25C5.25 13.8358 5.58579 13.5 6 13.5C6.41421 13.5 6.75 13.8358 6.75 14.25C6.75 14.7113 7.21244 15.25 8 15.25C8.78756 15.25 9.25 14.7113 9.25 14.25C9.25 13.7887 8.78756 13.25 8 13.25C6.57842 13.25 5.25 12.2217 5.25 10.75C5.25 9.54274 6.14398 8.6338 7.25 8.34618V7.5C7.25 7.08579 7.58579 6.75 8 6.75Z"
                  fill="#C2C2C3"
                />
              </svg>
              Бизнесы
              <span class="absolute right-4"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 17L14 12L10 7"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg></span
            ></nuxt-link>
          </li>
          <li class="border-[0] border-b border-solid border-grey-light">
            <nuxt-link
              to=""
              class="flex w-full gap-3 items-center text-[14px] font-medium text-black relative p-4"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M3 6L3 18C3 20.2091 4.79086 22 7 22H13L21 14V6C21 3.79086 19.2091 2 17 2L7 2C4.79086 2 3 3.79086 3 6Z"
                  fill="#C2C2C3"
                />
                <path
                  d="M13 18L13 22L21 14L17 14C14.7909 14 13 15.7909 13 18Z"
                  fill="#C2C2C3"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.25 7C7.25 6.58579 7.58579 6.25 8 6.25L16 6.25C16.4142 6.25 16.75 6.58579 16.75 7C16.75 7.41421 16.4142 7.75 16 7.75L8 7.75C7.58579 7.75 7.25 7.41421 7.25 7Z"
                  fill="#C2C2C3"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H12C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12Z"
                  fill="#C2C2C3"
                />
              </svg>
              Резюме
              <span class="absolute right-4"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 17L14 12L10 7"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg></span
            ></nuxt-link>
          </li>
          <li class="border-[0] border-b border-solid border-grey-light">
            <nuxt-link
              to=""
              class="flex w-full gap-3 items-center text-[14px] font-medium text-black relative p-4"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 13.1707C19.6872 13.0602 19.3506 13 19 13H18C17.3705 13 16.7777 13.2964 16.4 13.8L15.2 15.4C14.4446 16.4072 13.259 17 12 17C10.741 17 9.55542 16.4072 8.8 15.4L7.6 13.8C7.22229 13.2964 6.62951 13 6 13H5C4.64936 13 4.31278 13.0602 4 13.1707V6C4 3.79086 5.79086 2 8 2H16C18.2091 2 20 3.79086 20 6V13.1707ZM9 9.25C8.58579 9.25 8.25 9.58579 8.25 10C8.25 10.4142 8.58579 10.75 9 10.75H12C12.4142 10.75 12.75 10.4142 12.75 10C12.75 9.58579 12.4142 9.25 12 9.25H9ZM8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H9C8.58579 6.75 8.25 6.41421 8.25 6Z"
                  fill="#C2C2C3"
                />
                <path
                  opacity="0.4"
                  d="M22 19V16C22 14.3431 20.6569 13 19 13H18C17.3705 13 16.7777 13.2964 16.4 13.8L15.2 15.4C14.4446 16.4072 13.259 17 12 17C10.741 17 9.55542 16.4072 8.8 15.4L7.6 13.8C7.22229 13.2964 6.62951 13 6 13H5C3.34315 13 2 14.3431 2 16V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19Z"
                  fill="#C2C2C3"
                />
              </svg>
              Блоги
              <span class="absolute right-4"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 17L14 12L10 7"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg></span
            ></nuxt-link>
          </li>
          <li class="border-[0] border-b border-solid border-grey-light">
            <button @click="$store.dispatch('logout')"
              class="flex w-full gap-3 items-center text-[14px] font-medium text-black relative p-4"
            >
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.1464 10.4394C16.8536 10.7323 16.8536 11.2072 17.1464 11.5001C17.4393 11.7929 17.9142 11.7929 18.2071 11.5001L19.5 10.2072C20.1834 9.52375 20.1834 8.41571 19.5 7.73229L18.2071 6.4394C17.9142 6.1465 17.4393 6.1465 17.1464 6.4394C16.8536 6.73229 16.8536 7.20716 17.1464 7.50006L17.8661 8.21973H11.75C11.3358 8.21973 11 8.55551 11 8.96973C11 9.38394 11.3358 9.71973 11.75 9.71973H17.8661L17.1464 10.4394Z"
                  fill="#F2154A"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.75 17.75H12C14.6234 17.75 16.75 15.6234 16.75 13C16.75 12.5858 16.4142 12.25 16 12.25C15.5858 12.25 15.25 12.5858 15.25 13C15.25 14.7949 13.7949 16.25 12 16.25H8.21412C7.34758 17.1733 6.11614 17.75 4.75 17.75ZM8.21412 1.75H12C13.7949 1.75 15.25 3.20507 15.25 5C15.25 5.41421 15.5858 5.75 16 5.75C16.4142 5.75 16.75 5.41421 16.75 5C16.75 2.37665 14.6234 0.25 12 0.25H4.75C6.11614 0.25 7.34758 0.82673 8.21412 1.75Z"
                  fill="#F2154A"
                />
                <path
                  opacity="0.4"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 5C0 2.37665 2.12665 0.25 4.75 0.25C7.37335 0.25 9.5 2.37665 9.5 5V13C9.5 15.6234 7.37335 17.75 4.75 17.75C2.12665 17.75 0 15.6234 0 13V5Z"
                  fill="#F2154A"
                />
              </svg>
              Выйти из профиля
              <span class="absolute right-4"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 17L14 12L10 7"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center flex-col items-center gap-11 mt-6">
      <p class="text-[12px] text-grey-40">УЧАСТНИК С: 21 МАЯ 2010 ГОДА</p>
      <button
        class="pro-btn overflow-hidden relative h-[52px] w-full rounded-[12px] flex items-center justify-center"
      >
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/profile-btn.png"
          alt=""
        />
        <p class="absolute z-10 text-white text-base font-semibold">
          Получить про аккаунт
        </p>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isFreelancer: false,
    };
  },
};
</script>
<style lang="css" scoped>
.user-info-card {
  display: grid;
  grid-template-columns: 72px 1fr 24px;
  grid-gap: 16px;
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
.client-types .activeC svg ellipse,
.client-types .activeF svg path,
.client-types .activeF svg ellipse {
  stroke: #fff;
  /* fill: #fff; */
}
</style>
