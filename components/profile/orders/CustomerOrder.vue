<template lang="html">
  <div class="pt-12 xl:pt-6 order xl:px-4" :class="{ 'pb-10': !order?.status }">
    <div class="max-w-[1200px] mx-auto">
      <nuxt-link
        to="/profile/customer/orders/active/status"
        class="flex gap-2 w-[126px] py-3 border border-main-color border-solid rounded-lg justify-center items-center text-base font-medium text-grey-80 hover:text-blue xl:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10 8L6 12M6 12L10 16M6 12L18 12"
            stroke="#353437"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Отмена
      </nuxt-link>
      <div class="flex justify-between items-end">
        <div class="flex flex-col gap-2 mt-6 xl:hidden">
          <h3 class="text-[24px] text-black font-semibold">Заказ: #{{ order?.id }}</h3>
          <p class="text-base text-grey-64">Заказы / Активные заказы</p>
        </div>
        <p
          v-if="!order?.status && !order?.end_of_execution"
          class="text-base text-[#F2994A] font-medium flex fap-2 items-center xl:hidden "
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.92154 2.57125C11.2077 1.80958 12.7923 1.80958 14.0785 2.57125L18.9215 5.43932C20.2077 6.20099 21 7.6086 21 9.13192V14.8681C21 16.3914 20.2077 17.799 18.9215 18.5607L18.301 18.9281L14.0785 21.4288C12.7923 22.1904 11.2077 22.1904 9.92154 21.4288L5.69896 18.9281L5.07846 18.5607C3.7923 17.799 3 16.3914 3 14.8681V9.13192C3 7.6086 3.7923 6.20099 5.07846 5.43932L9.92154 2.57125ZM16.0952 15.2041C15.023 14.4572 13.5831 14 12 14C10.4169 14 8.97703 14.4572 7.90484 15.2041C7.39026 15.5626 7.49802 16.2988 8.03578 16.6215L11.4855 18.6913C11.8022 18.8813 12.1978 18.8813 12.5145 18.6913L15.9642 16.6215C16.502 16.2988 16.6097 15.5626 16.0952 15.2041ZM12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6Z"
              fill="#F2994A"
            />
          </svg>
          Ваш заказ ожидание модерации. Скоро ваш заказ опубликуется
        </p>
      </div>
      <div class="content-box mt-6 xl:mt-0">
        <div class="flex flex-col gap-6">
          <div
            class="info-box rounded-3xl border-solid border-grey-8 border relative overflow-hidden max-h-[430px] xl:rounded-2xl"
            :class="{ active: openBlock == true }"
          >
            <div class="info px-8 py-8 xl:px-4 xl:py-4">
              <div class="head flex justify-between xl:flex-col xl:gap-4">
                <div class="flex gap-4 items-center xl:flex-wrap">
                  <!-- <span
                    class="flex gap-[4px] status-red items-center rounded-[8px] px-[8px] py-[4px] text-light-red text-[14px] font-medium xl:hidden"
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
                  <span
                    class="hidden xl:flex gap-[4px] xl:gap-4 status-red items-center px-[8px] py-[4px] text-dark-yellow text-[12px] font-medium border border-solid border-dark-yellow rounded-[500px]"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9503 9.36369C11.9503 11.5456 10.1815 13.3145 7.99958 13.3145C5.81764 13.3145 4.04883 11.5456 4.04883 9.36369C4.04883 8.63663 4.18708 7.9016 4.4224 7.19066C4.6138 7.98724 5.33084 8.57922 6.18614 8.57922C7.18792 8.57922 8.00002 7.76711 8.00002 6.76534C8.00002 5.76356 7.31698 5.08179 7.31698 4.10792C7.31698 2.84034 8.23509 1.8689 9.28796 1.8689C9.28796 3.38843 9.84455 3.96339 10.4488 4.93889C11.166 6.09689 11.9503 7.36322 11.9503 9.36369Z"
                        stroke="#F2994A"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Срочный заказ</span
                  >
                  <span class="h-[19px] w-[1px] bg-grey-8"></span> -->
                  <span
                    v-if="order?.selected_request?.id"
                    class="flex gap-[7px] items-center rounded-[8px] px-[8px] py-[4px] text-main-color text-[14px] font-medium"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                        stroke="#5C46E6"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Испольнитель выбран</span
                  >
                  <span
                    v-if="!order?.status && !order?.end_of_execution"
                    class="flex gap-[7px] items-center rounded-[8px] px-[8px] py-[4px] text-grey-40 text-[14px] font-medium"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M10.3741 2.72171L5.37624 4.94296C3.93062 5.58546 2.97663 7.0243 3.06862 8.6036C3.42825 14.7778 5.23629 17.496 9.93442 20.6766C11.179 21.5192 12.8196 21.5213 14.0633 20.6773C18.7758 17.4793 20.5192 14.7228 20.9104 8.62498C21.0124 7.03525 20.0569 5.58113 18.6012 4.93415L13.6232 2.72171C12.5889 2.26203 11.4083 2.26204 10.3741 2.72171Z"
                        fill="#9A999B"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.4939 8.43558C15.8056 8.70834 15.8372 9.18216 15.5645 9.49389L12.6946 12.7738C12.0779 13.4786 11.0156 13.5729 10.2843 12.9879L8.53151 11.5857C8.20806 11.3269 8.15562 10.8549 8.41438 10.5315C8.67313 10.208 9.1451 10.1556 9.46855 10.4144L11.2214 11.8166C11.3258 11.9002 11.4776 11.8867 11.5657 11.786L14.4356 8.50613C14.7084 8.1944 15.1822 8.16282 15.4939 8.43558Z"
                        fill="#9A999B"
                      />
                    </svg>
                    На модерации</span
                  >
                  <span
                    v-else
                    class="flex gap-[7px] items-center rounded-[8px] px-[8px] py-[4px] text-green text-[14px] font-medium"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M7.37552 0.722073L2.3777 2.94333C0.932081 3.58583 -0.0219094 5.02467 0.0700804 6.60396C0.429713 12.7782 2.23776 15.4963 6.93588 18.677C8.18048 19.5196 9.82104 19.5217 11.0647 18.6777C15.7773 15.4797 17.5206 12.7231 17.9119 6.62535C18.0139 5.03561 17.0583 3.5815 15.6026 2.93452L10.6246 0.722073C9.59037 0.262401 8.40979 0.262402 7.37552 0.722073Z"
                        fill="#009A10"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.4939 6.43558C12.8056 6.70834 12.8372 7.18216 12.5645 7.49389L9.69455 10.7738C9.07786 11.4786 8.01561 11.5729 7.28433 10.9879L5.53151 9.58566C5.20806 9.3269 5.15562 8.85494 5.41438 8.53149C5.67313 8.20804 6.1451 8.1556 6.46855 8.41436L8.22137 9.81662C8.32584 9.90019 8.47759 9.88671 8.56569 9.78603L11.4356 6.50613C11.7084 6.1944 12.1822 6.16282 12.4939 6.43558Z"
                        fill="#009A10"
                      /></svg
                    >Идет прием заявок</span
                  >
                </div>

                <div class="flex gap-6 items-center xl:hidden">
                  <div class="flex gap-6">
                    <p class="text-base text-grey-64 flex gap-[6px]">
                      Заказ:<span class="font-medium text-black">#{{ order?.id }}</span>
                    </p>
                    <p class="text-base text-grey-40">{{ orderHours }}</p>
                  </div>
                  <span class="h-[19px] w-[1px] bg-grey-8"></span>
                  <p class="text-base text-grey-40">{{ orderDate }}</p>
                </div>
                <div class="justify-between items-center xl:flex hidden">
                  <div class="flex gap-4">
                    <p class="text-base text-grey-40 xl:text-[14px]">{{ orderHours }}</p>
                    <p class="text-base text-grey-40 xl:text-[14px]">{{ orderDate }}</p>
                  </div>

                  <div class="flex gap-6">
                    <p class="text-base text-grey-64 flex gap-[6px]">
                      Заказ:<span class="font-medium text-black">#{{ order?.id }}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="body mt-6 pb-4 border-[0] border-b border-solid border-grey-8 xl:mt-4"
              >
                <h1 class="title text-[24px] font-semibold text-black mb-4 xl:text-base">
                  {{ order?.name }}
                </h1>

                <span
                  class="text-base text-grey-80 xl:text-base"
                  v-html="order?.description"
                >
                </span>
              </div>
              <div class="files flex flex-col gap-4 mt-4">
                <h6 class="text-black text-[20px] font-semibold xl:text-[18px]">
                  Файлы к задаче
                </h6>
                <div class="file-list flex gap-4 justify-start xl:flex-wrap">
                  <FileCard v-for="file in order?.files" :file="file" :key="file?.id" />
                </div>
              </div>
              <div class="files flex flex-col gap-4 mt-4 xl:mt-6 mb-6">
                <h6 class="text-black text-[20px] xl:text-[18px] font-semibold">
                  Категории:
                </h6>
                <div class="flex gap-2 items-center xl:flex-col xl:items-start">
                  <div
                    class="flex gap-2 items-center"
                    v-for="(specialit, index) in order?.specialities"
                    :key="specialit?.id"
                  >
                    <span
                      class="rounded-[22px] py-2 px-4 bg-bg-grey text-grey-64 text-[14px] font-medium"
                      >{{ specialit?.name_ru }} </span
                    ><span
                      v-if="index + 1 != order?.specialities.length"
                      class="text-[20px] text-grey-64 xl:hidden"
                      >/</span
                    >
                  </div>
                </div>
              </div>
              <div
                class="content-bottom border-[0] border-t border-solid border-grey-8 pt-4 flex justify-between xl:flex-col xl:gap-6 xl:max-w-[90%] xl:mx-auto"
              >
                <div class="flex items-center gap-[28px] xl:justify-between">
                  <p
                    class="text-base xl:text-[14px] text-grey-64 flex gap-2 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17.6084 8.21087C18.5748 9.2276 18.5748 10.7723 17.6084 11.789C15.9786 13.5038 13.1794 15.8333 9.99984 15.8333C6.82024 15.8333 4.02108 13.5038 2.39126 11.789C1.42492 10.7723 1.42492 9.2276 2.39126 8.21087C4.02108 6.49607 6.82024 4.16663 9.99984 4.16663C13.1794 4.16663 15.9786 6.49607 17.6084 8.21087Z"
                        stroke="#5C46E6"
                        stroke-width="1.5"
                      />
                      <circle
                        cx="10"
                        cy="10"
                        r="2.5"
                        stroke="#5C46E6"
                        stroke-width="1.5"
                      /></svg
                    >{{ order?.view_count }}
                  </p>
                  <p
                    class="text-base xl:text-[14px] text-grey-64 flex gap-2 items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.8332 2.5H9.1665C5.02437 2.5 1.6665 5.85786 1.6665 10V14.1667C1.6665 16.0076 3.15889 17.5 4.99984 17.5H10.8332C14.9753 17.5 18.3332 14.1421 18.3332 10C18.3332 5.85786 14.9753 2.5 10.8332 2.5Z"
                        stroke="#5C46E6"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <circle cx="9.99984" cy="9.99996" r="0.833333" fill="#5C46E6" />
                      <ellipse
                        cx="13.3333"
                        cy="9.99996"
                        rx="0.833333"
                        ry="0.833333"
                        fill="#5C46E6"
                      />
                      <ellipse
                        cx="6.66683"
                        cy="9.99996"
                        rx="0.833333"
                        ry="0.833333"
                        fill="#5C46E6"
                      /></svg
                    >{{ order?.request_count }} запросов
                  </p>
                </div>
                <p
                  class="underline text-base text-pantone-2023 flex items-center gap-[10px] xl:text-center mx-auto xl:text-[14px] white-space-nowrap"
                >
                  Сообщить модератору о нарушении
                  <svg
                    class="min-w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                  >
                    <path
                      opacity="0.4"
                      d="M7.96798 1.16592C8.85365 -0.388639 11.1464 -0.388642 12.032 1.16592L19.7041 14.6324C20.5649 16.1433 19.4445 18 17.6721 18H2.32789C0.555459 18 -0.564896 16.1433 0.29587 14.6324L7.96798 1.16592Z"
                      fill="#BB2649"
                    />
                    <path
                      d="M11 14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14C9 13.4477 9.44772 13 10 13C10.5523 13 11 13.4477 11 14Z"
                      fill="#BB2649"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 5.25C10.4142 5.25 10.75 5.58579 10.75 6V11C10.75 11.4142 10.4142 11.75 10 11.75C9.58579 11.75 9.25 11.4142 9.25 11V6C9.25 5.58579 9.58579 5.25 10 5.25Z"
                      fill="#BB2649"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div
              class="flex items-end justify-center pb-6 xl:pb-2 h-[113px] w-full bg-bg-grey absolute bottom-0 show-all cursor-pointer xl:h-11 xl:justify-end xl:pr-4"
              v-if="!openBlock"
              @click="openBlock = true"
            >
              <button class="flex gap-2 text-purple text-base font-medium items-center">
                Раскрыть<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 10L12 14L17 10"
                    stroke="#7037EA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div
            class="card price-card px-[24px] py-[24px] xl:px-4 xl:py-4 rounded-2xl bg-bg-grey flex flex-col gap-6"
          >
            <div v-if="order?.selected_request?.id">
              <div class="flex flex-col gap-2 mb-4">
                <h4 class="text-[20px] font-semibold text-black">Tanlangan frilanser</h4>
                <p class="text-[14px] text-black">
                  Tanlangan vaqti:
                  {{ selectedDate }}
                </p>
              </div>
              <SelectedFreelancer
                class="mx-[-16px] xl:mx-0"
                v-if="order?.selected_request?.id"
                :freelancer="order?.selected_request?.freelancer"
              />
            </div>
            <div class="flex flex-col gap-[10px]">
              <div class="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                <p
                  class="text-grey-64 text-[14px] xl:text-base xl:text-grey-64 xl:font-semibold"
                >
                  Buyrtma narxi:
                </p>

                <h2
                  class="text-blue text-[24px] font-semibold xl:text-[14px]"
                  v-if="order?.price"
                >
                  {{ order?.price.toLocaleString() }} so'm
                </h2>
                <h4
                  v-else
                  class="text-black text-base font-semibold xl:text-[14px] xl:font-medium"
                >
                  По договоренности
                </h4>
                <!-- <p class="text-grey-40 text-[15px] line-through xl:hidden">750 000</p> -->
              </div>
              <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between">
                <p class="text-grey-64 text-[14px] xl:font-semibold">Срок:</p>
                <h2
                  class="text-blue text-[24px] font-semibold xl:text-[14px]"
                  v-if="order?.deadline"
                >
                  {{ order?.deadline }}
                </h2>
                <h4
                  v-else
                  class="text-black text-base font-semibold xl:text-[14px] xl:font-medium"
                >
                  По договоренности
                </h4>
              </div>
            </div>
            <div class="buttons flex flex-col gap-4" v-if="!order?.end_of_execution">
              <button
                v-if="status == 1"
                @click="$router.push(`/profile/customer/order/edit/${order?.id}`)"
                class="h-[52px] justify-center flex items-center gap-2 rounded-[8px] border border-solid bg-main-color border-main-color text-base xl:text-[14px] text-white font-medium"
              >
                Изменить данные
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9591 6.96428L15.4444 9.44963M4.48559 15.4369L15.9381 3.98438L20.5177 8.56393L9.06515 20.0165H4.48438L4.48559 15.4369Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                v-if="status == 2"
                @click="visibleComplite = true"
                class="h-[52px] justify-center flex items-center gap-2 rounded-[8px] border border-solid bg-main-color border-main-color text-base xl:text-[14px] text-white font-medium"
              >
                Завершить заказ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M9.56495 11.757L11.938 14.129L16.195 9.87098M20.498 11.999C20.498 16.4161 16.9171 19.997 12.5 19.997C8.08278 19.997 4.50195 16.4161 4.50195 11.999C4.50195 7.5818 8.08278 4.00098 12.5 4.00098C16.9171 4.00098 20.498 7.5818 20.498 11.999Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                @click="visibleCancel = true"
                class="h-[52px] justify-center flex items-center gap-2 rounded-[8px] border border-solid bg-white border-grey-24 text-base xl:text-[14px] text-light-red font-medium"
              >
                Отменить заказ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1266_24116)">
                    <path
                      d="M7.40918 12.0918L10.5912 8.90982"
                      stroke="#F2154A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.40918 8.9082L10.5912 12.0902"
                      stroke="#F2154A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.5 12.5V6.65312C16.5 5.74484 16.1909 4.8636 15.6235 4.15434L14.701 3.00122C13.9419 2.05236 12.7926 1.5 11.5775 1.5H6.4225C5.20736 1.5 4.05811 2.05236 3.29902 3.00122L2.37652 4.15434C1.80912 4.8636 1.5 5.74484 1.5 6.65312V12.5C1.5 14.7091 3.29086 16.5 5.5 16.5H12.5C14.7091 16.5 16.5 14.7091 16.5 12.5Z"
                      stroke="#F2154A"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.25 5.25H15.75"
                      stroke="#F2154A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1266_24116">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 pb-[120px]" v-if="order?.selected_request?.id">
        <CustomerChat :order="order" />
      </div>
    </div>
    <div class="mt-20 bg-bg-grey pt-20 pb-[120px] xl:mx-[-16px] xl:px-4 xl:pt-4 xl:mt-10">
      <div class="max-w-[1440px] mx-auto">
        <div class="order-left-chat mb-6">
          <h4 class="text-[24px] font-semibold text-black xl:text-[18px]">
            Предложений ({{ order?.requests?.length }})
          </h4>
        </div>
        <div class="order-left-chat" >
        
          <div class="list flex flex-col gap-4" v-if="!order?.selected_request?.id && order?.status">
            <OffersOrderCard
              v-for="request in order?.requests"
              :key="request?.id"
              :request="request"
              @selected="$emit('selected')"
            />
            <button
              class="flex py-4 rounded-lg bg-grey-light w-full items-center justify-center gap-6 text-base font-medium text-blue xl:text-[14px] xl:gap-4 xl:flex-row-reverse"
            >
              <svg
                class="xl:h-5"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M12.5 8.63695V12.5L15.167 13.74M20.498 12.5C20.498 16.9171 16.9171 20.498 12.5 20.498C8.08278 20.498 4.50195 16.9171 4.50195 12.5C4.50195 8.08278 8.08278 4.50195 12.5 4.50195C16.9171 4.50195 20.498 8.08278 20.498 12.5Z"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Предложений
            </button>
          </div>
          <div class="xl:hidden" v-if="!order?.selected_request?.id && order?.status">
            <OffersChat />
          </div>
          <div
          v-else
          class="flex gap-6 items-center justify-center py-4 xl:py-2 w-full border border-solid border-[#EDE5E0] bg-[#FFF5EC] rounded-[12px]"
        >
          <svg
          class="xl:hidden"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 2L18 2C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18L2 6C2 3.79086 3.79086 2 6 2Z"
              stroke="#F2994A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13 8H16M16 8V11M16 8L8 16M8 16L8 13M8 16H11"
              stroke="#F2994A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="text-[#F2994A] text-base font-medium xl:text-[12px] text-center">
            Вы можете получать заявка после успешной прохождение модерации
          </p>
        </div>
        </div>
       
      </div>
    </div>
    <div>
      <Transition name="opacity">
        <div
          v-if="bottomModal"
          @click="closeModal"
          class="modal-bg fixed w-full h-full bottom-0 left-0 z-20"
        ></div>
      </Transition>
      <Transition name="nested">
        <div v-if="bottomModal" class="fixed w-full bottom-0 left-0 z-30">
          <BottomModal @close="closeModal" />
        </div>
      </Transition>
      <CloseOrder @handleOkProp="handleOk" :visibleProp="visibleClose" />
      <CancellationOrder
        @handleOkProp="handleOkCancel"
        :visibleProp="visibleCancel"
        @submit="submitCancel"
        title="Loyihani yopish uchun mijozni tasdig’i kutilmoqda"
      />
      <CompliteOrder
        @handleOkProp="handleOkComplite"
        :visibleProp="visibleComplite"
        @submit="submitComplite"
      />
    </div>
    <div
      v-if="status == 1"
      class="fixed-btns fixed bottom-0 w-full z-[20000] py-4 px-4 bg-white left-0 hidden xl:grid gap-4"
    >
      <div class="flex flex-col gap-1">
        <p class="text-[12px] text-grey-64">Buyrtma narxi:</p>
        <h5
          class="text-base text-main-color font-semibold whitespace-nowrap"
          v-if="order?.price"
        >
          {{ order?.price.toLocaleString() }} so'm
        </h5>
        <h4
          v-else
          class="text-black text-[12px] font-semibold xl:font-medium whitespace-nowrap"
        >
          По договоренности
        </h4>
      </div>
      <button
        @click="$router.push(`/profile/customer/order/edit/${order?.id}`)"
        class="border border-solid border-blue bg-blue rounded-[12px] h-11 w-full flex justify-center items-center text-[12px] text-white font-medium gap-2"
      >
        Изменить данные
      </button>
    </div>
    <Loader v-if="loading" />
  </div>
</template>
<script>
import ClientCard from "@/components/orders/ClientCard.vue";
import FileCard from "@/components/orders/FileCard.vue";
import InfoCard from "@/components/orders/InfoCard.vue";
import SimilarOrders from "@/components/orders/SimilarOrders.vue";
import PriceCard from "@/components/orders/PriceCard.vue";
import BottomModal from "@/components/orders/BottomModal.vue";
import OrderStatus from "@/components/profile/orders/OrderStatus.vue";
import EndingProcess from "@/components/orders/EndingProcess.vue";
import CloseOrder from "@/components/modals/CloseOrder.vue";
import CancellationOrder from "@/components/modals/CancellationOrder.vue";
import ComplaintOrder from "@/components/modals/ComplaintOrder.vue";
import CustomerChat from "./CustomerChat.vue";
import Loader from "@/components/Loader.vue";
import OffersOrderCard from "./OffersOrderCard.vue";
import OffersChat from "./OffersChat.vue";
import moment from "moment";
import SelectedFreelancer from "./SelectedFreelancer.vue";
import CompliteOrder from "../../modals/CompliteOrder.vue";
export default {
  props: ["order", "loading"],
  data() {
    return {
      bottomModal: false,
      step: 1,
      openBlock: false,
      visibleClose: false,
      visibleCancel: false,
      visibleComplite: false,
    };
  },
  computed: {
    orderDate() {
      return moment(this.order?.created_at).format("DD.MM.YYYY");
    },
    orderHours() {
      return moment(this.order?.created_at).format("HH:mm");
    },
    status() {
      let status = this.order?.selected_request?.id ? 2 : 1;
      return status;
    },
    selectedDate() {
      return moment(this.order?.selected_request?.created_at).format("HH:mm DD.MM.YYYY");
    },
  },
  mounted() {
    if (!localStorage.getItem("auth-token")) {
      this.$router.push("/");
    }
  },
  methods: {
    moment,
    handleOk() {
      this.visibleClose = false;
    },
    handleOkCancel() {
      this.visibleCancel = false;
    },
    handleOkComplite() {
      this.visibleComplite = false;
    },
    openModal() {
      this.bottomModal = true;
    },
    closeModal() {
      this.bottomModal = false;
    },
    submitCancel() {
      this.__CANCEL_ORDER();
    },
    submitComplite(formData) {
      this.__COMPLITE_ORDER(formData);
    },
    async __CANCEL_ORDER() {
      try {
        const data = await this.$store.dispatch("fetchOrders/postCanceledOrder", {
          id: this.$route.params.id,
        });
        this.$router.go(-1);
      } catch (e) {
        if (e.response) {
          this.$notification["error"]({
            message: "Error",
            description: e.response.statusText,
          });
        }
      }
    },
    async __COMPLITE_ORDER(formData) {
      try {
        const data = await this.$store.dispatch(
          "fetchOrders/postCompliteCustomer",
          formData
        );
        this.handleOkComplite();
      } catch (e) {
        if (e.response) {
          this.$notification["error"]({
            message: "Error",
            description: e.response.statusText,
          });
        }
      }
    },
  },
  components: {
    FileCard,
    InfoCard,
    SimilarOrders,
    ClientCard,
    PriceCard,
    BottomModal,
    OrderStatus,
    EndingProcess,
    CloseOrder,
    CancellationOrder,
    ComplaintOrder,
    CustomerChat,
    Loader,
    OffersOrderCard,
    OffersChat,
    SelectedFreelancer,
    CompliteOrder,
  },
};
</script>
<style lang="css" scoped>
/* 1200px */
.content-box {
  display: grid;
  grid-template-columns: 1fr 348px;
  gap: 16px;
}
.status-red {
  background: rgba(237, 50, 55, 0.1);
}
.modal-bg {
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
}
.nested-enter-active {
  animation: to-top 0.3s;
}
.nested-leave-active {
  animation: to-top 0.3s reverse;
}
@keyframes to-top {
  0% {
    bottom: -60px;
    opacity: 0;
  }

  100% {
    bottom: 0;
    opacity: 1;
  }
}
.opacity-enter-active {
  animation: opacityAnim 0.25s;
}
.opacity-leave-active {
  animation: opacityAnim 0.25s reverse;
}
.info-box {
  transition: 0.3s;
}
.active {
  max-height: 2000px;
}
@keyframes opacityAnim {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.order-left-chat {
  display: grid;
  grid-template-columns: 1fr 470px;
  gap: 16px;
}
.show-all {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.86) 46.88%,
    #fff 100%
  );
}
@media (max-width: 1200px) {
  .content-box {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .order-left-chat {
    grid-template-columns: 1fr;
  }
  .file-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .fixed-btns {
    border-radius: 16px 16px 0px 0px;
    box-shadow: 0px 4px 36px 0px rgba(0, 25, 53, 0.16);
    grid-template-columns: 1fr 2fr;
  }
}
</style>
