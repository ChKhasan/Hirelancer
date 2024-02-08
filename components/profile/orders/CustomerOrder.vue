<template lang="html">
  <div class="pt-12 xl:pt-6 order xl:px-4">
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
      <div class="flex flex-col gap-2 mt-6 xl:hidden">
        <h3 class="text-[24px] text-black font-semibold">Заказ: #{{ order?.id }}</h3>
        <p class="text-base text-grey-64">Заказы / Активные заказы</p>
      </div>
      <div class="content-box mt-6 xl:mt-0">
        <div class="flex flex-col gap-6">
          <div
            class="info-box rounded-3xl border-solid border-grey-8 border relative overflow-hidden max-h-[430px] xl:rounded-2xl"
            :class="{ active: openBlock == true }"
          >
            <div class="info px-8 py-8 xl:px-4 xl:py-4">
              <div class="head flex justify-between xl:flex-col xl:gap-4">
                <div class="flex gap-4 items-center">
                  <span
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
                  <span class="h-[19px] w-[1px] bg-grey-8"></span>
                  <span
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

                <p class="text-base text-grey-80 xl:text-base">
                  {{ order?.description }}
                </p>
                <!-- <p class="text-base text-grey-80 mt-8">
                  As we're developing curriculum for the next 4 years, there's potential
                  for a long-term contract.This is a project-based contract and not a
                  retainer arrangement. It does not involve a continuous or ongoing
                  engagement where ASU Prep retains the contractor's services even when
                  there is no project-based work. Instead, the contract centers around
                  completing specific assigned tasks and billing hours to ASU Prep.
                </p> -->
              </div>
              <!-- <div class="files flex flex-col gap-4 mt-4">
                <h6 class="text-black text-[20px] font-semibold xl:text-[18px]">Файлы к задаче</h6>
                <div class="file-list flex gap-4 justify-start">
                  <FileCard />
                  <FileCard />
                  <FileCard />
                  <FileCard />
                </div>
              </div>
              <div class="files flex flex-col gap-4 mt-4 mb-6">
                <h6 class="text-black text-[20px] font-semibold">Категории:</h6>
                <div class="flex gap-[8px] items-center">
                  <span
                    class="rounded-[22px] py-2 px-4 bg-bg-grey text-grey-64 text-[14px] font-medium"
                    >Программирование </span
                  ><span class="text-[20px] text-grey-64">/</span>
                  <span
                    class="rounded-[22px] py-2 px-4 bg-bg-grey text-grey-64 text-[14px] font-medium"
                  >
                    Мобильные приложения
                  </span>
                </div>
              </div>
              <div
                class="content-bottom border-[0] border-t border-solid border-grey-8 pt-4 flex justify-between"
              >
                <div class="flex items-center gap-[28px]">
                  <p class="text-base text-grey-64 flex gap-[8px] items-center">
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
                  <p class="text-base text-grey-64 flex gap-[8px] items-center">
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
                  class="underline text-base text-pantone-2023 flex items-center gap-[10px]"
                >
                  Сообщить модератору о нарушении
                  <svg
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
              </div> -->
              <div class="files flex flex-col gap-4 mt-4">
                <h6 class="text-black text-[20px] font-semibold xl:text-[18px]">
                  Файлы к задаче
                </h6>
                <div class="file-list flex gap-4 justify-start xl:flex-wrap">
                  <FileCard />
                  <FileCard />
                  <FileCard />
                  <FileCard />
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
                class="content-bottom border-[0] border-t border-solid border-grey-8 pt-4 flex justify-between xl:flex-col xl:gap-6 xl:max-w-[80%] xl:mx-auto"
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
              class="flex items-center justify-center py-[19px] w-full bg-bg-grey absolute bottom-0"
              v-if="!openBlock"
            >
              <button
                class="flex gap-2 text-purple text-base font-medium items-center"
                @click="openBlock = true"
              >
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
            <div class="xl:hidden">
              <h4>Tanlangan frilanser</h4>
              <p>Tanlangan vaqti: 16:32 28.09.2023</p>
            </div>
            <div class="flex flex-col gap-[10px]">
              <div class="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                <p
                  class="text-grey-64 text-[14px] xl:text-base xl:text-grey-64 xl:font-semibold"
                >
                  Buyrtma narxi:
                </p>

                <h1 class="text-blue text-[24px] font-semibold">
                  {{ order?.price && order?.price.toLocaleString() }} so’m
                </h1>
                <p class="text-grey-40 text-[15px] line-through xl:hidden">750 000</p>
              </div>
              <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between">
                <p class="text-grey-64 text-[14px] xl:font-medium">Срок:</p>
                <h4 class="text-black text-base font-semibold xl:text-[14px] xl:font-medium">По договоренности</h4>
              </div>
            </div>
            <div class="buttons flex flex-col gap-4">
              <button
                @click="visibleClose = true"
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
      <!-- <div class="mt-6 pb-[120px]">
        <CustomerChat />
      </div> -->
    </div>
    <div class="mt-20 bg-bg-grey pt-20 pb-[120px] xl:mx-[-16px] xl:px-4 xl:pt-4 xl:mt-10">
      <div class="max-w-[1440px] mx-auto">
        <div class="order-left-chat mb-6">
          <h4 class="text-[24px] font-semibold text-black xl:text-[18px]">
            Предложений ({{ order?.requests?.length }})
          </h4>
        </div>
        <div class="order-left-chat">
          <div class="list flex flex-col gap-4">
            <OffersOrderCard
              v-for="request in order?.requests"
              :key="request?.id"
              :request="request"
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
          <div class="xl:hidden">
            <OffersChat />
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
      />
      <ComplaintOrder
        @handleOkProp="handleOkComplaint"
        :visibleProp="visibleComplaint"
        @submit="submitComplaint"
      />
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
export default {
  props: ["order", "loading"],
  data() {
    return {
      bottomModal: false,
      step: 1,
      openBlock: false,
      visibleClose: false,
      visibleCancel: false,
      visibleComplaint: false,
    };
  },
  computed: {
    orderDate() {
      return moment(this.order?.created_at).format("DD.MM.YYYY");
    },
    orderHours() {
      return moment(this.order?.created_at).format("HH:mm");
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
    handleOkComplaint() {
      this.visibleComplaint = false;
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
    submitComplaint() {},
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
}
</style>
