<template lang="html">
  <div
    class="number-check flex flex-col px-[120px] gap-8 xl:gap-10 py-[80px] border border-solid border-grey-light rounded-3xl number-card xl:px-0 xl:border-0 xl:py-0"
  >
    <div class="flex flex-col items-center">
      <nuxt-link to="/">
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="27"
            viewBox="0 0 145 27"
            fill="none"
          >
            <path
              d="M24.969 26.9204H8.08407C5.85398 26.9204 3.94248 26.1372 2.34956 24.5708C0.783186 22.9779 0 21.0664 0 18.8363V0H7.52655V18.1593C7.52655 18.5044 7.64602 18.7965 7.88496 19.0354C8.12389 19.2743 8.40265 19.3938 8.72124 19.3938H24.3319C24.677 19.3938 24.969 19.2743 25.208 19.0354C25.4469 18.7965 25.5664 18.5044 25.5664 18.1593V0H33.0531V18.8363C33.0531 21.0664 32.2566 22.9779 30.6637 24.5708C29.0973 26.1372 27.1991 26.9204 24.969 26.9204Z"
              fill="#5C46E6"
            />
            <path
              d="M61.992 26.9204H37.023V0H61.992C64.2221 0 66.1203 0.79646 67.6867 2.38938C69.2796 3.95575 70.076 5.85398 70.076 8.08407V18.8363C70.076 21.0664 69.2796 22.9779 67.6867 24.5708C66.1203 26.1372 64.2221 26.9204 61.992 26.9204ZM44.5495 19.3938H61.3548C61.6999 19.3938 61.992 19.2743 62.2309 19.0354C62.4699 18.7965 62.5893 18.5177 62.5893 18.1991V8.72124C62.5893 8.40265 62.4699 8.12389 62.2309 7.88496C61.992 7.64602 61.6999 7.52655 61.3548 7.52655H44.5495V19.3938Z"
              fill="#5C46E6"
            />
            <path
              d="M99.0149 27H82.13C79.8999 27 77.9884 26.2168 76.3955 24.6504C74.8291 23.0575 74.0459 21.1593 74.0459 18.9558V8.08407C74.0459 5.85398 74.8291 3.95575 76.3955 2.38938C77.9884 0.79646 79.8999 0 82.13 0H99.0149C101.245 0 103.143 0.79646 104.71 2.38938C106.303 3.95575 107.099 5.85398 107.099 8.08407V18.9558C107.099 21.1593 106.303 23.0575 104.71 24.6504C103.143 26.2168 101.245 27 99.0149 27Z"
              fill="#5C46E6"
            />
            <path
              d="M136.038 27H119.153C116.923 27 115.011 26.2168 113.418 24.6504C111.852 23.0575 111.069 21.1593 111.069 18.9558V8.08407C111.069 5.85398 111.852 3.95575 113.418 2.38938C115.011 0.79646 116.923 0 119.153 0H136.038C138.268 0 140.166 0.79646 141.733 2.38938C143.326 3.95575 144.122 8.08407 144.122 8.08407V18.9558C144.122 21.1593 143.326 23.0575 141.733 24.6504C140.166 26.2168 138.268 27 136.038 27Z"
              fill="#5C46E6"
            />
            <circle cx="81.8028" cy="7.87821" r="4.14823" fill="white" />
            <circle cx="119.966" cy="7.87821" r="4.14823" fill="white" /></svg></span
      ></nuxt-link>
      <h4 class="flex text-black text-[24px] font-semibold mt-[31px] xl:text-[20px]">
        Foydalanuvchi turini tanlang
      </h4>
      <div
        class="user-type h-12 xl:h-11 flex client-types mt-6 xl:mt-4 xl:w-full xl:grid xl:grid-cols-2"
      >
        <button
          @click="userType = true"
          :class="{ 'activeF bg-blue': userType }"
          class="border-[2px] border-solid border-grey-light rounded-l-[12px] h-full w-[235px] xl:w-auto flex gap-2 text-base xl:text-[14px] text-black font-medium items-center justify-center"
        >
          Я - Фрилансер<svg
            class="xl:w-5 xl:h-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.979 14.673C14.246 15.489 13.183 16.003 12 16.003C10.816 16.003 9.75199 15.489 9.01899 14.671M9.33299 8.86997V9.65797M14.667 8.78797V9.57597M21.333 12.001C21.333 17.1554 17.1545 21.334 12 21.334C6.84552 21.334 2.66699 17.1554 2.66699 12.001C2.66699 6.8465 6.84552 2.66797 12 2.66797C17.1545 2.66797 21.333 6.8465 21.333 12.001Z"
              stroke="#020105"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg></button
        ><button
          @click="userType = false"
          :class="{ 'activeC bg-light-red': !userType }"
          class="border-[2px] border-solid border-grey-light rounded-r-[12px] h-full w-[235px] xl:w-auto flex gap-2 text-base xl:text-[14px] text-black font-medium items-center justify-center"
        >
          Я - заказчик<svg
            class="xl:w-5 xl:h-5"
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
      <p
        class="text-base text-grey-64 mt-4 text-center max-w-[90%] xl:text-[14px] xl:leading-5"
      >
        ищу работу ищу работу ищу работу ищу работу ищу работу ищу работу
      </p>
    </div>
    <div>
      <a-form-model ref="ruleForm" :model="form" :rules="rules">
        <div class="flex flex-col gap-8 pb-12 xl:gap-6 xl:pb-0">
          <a-form-model-item ref="name" class="form-item" label="Ismingizni" prop="name">
            <a-input v-model="form.name" placeholder="Ismingizni kiriting" />
          </a-form-model-item>
          <a-form-model-item
            ref="name"
            class="form-item"
            label="Familyangini"
            prop="surname"
          >
            <a-input v-model="form.surname" placeholder="Faimilyangini kiriting" />
          </a-form-model-item>
          <a-form-model-item ref="name" class="form-item" label="Jinsingiz" prop="gender">
            <a-radio-group v-model="form.gender">
              <div class="grid grid-cols-2 gap-4 gender-btns">
                <button
                  @click="form.gender = 'male'"
                  class="border border-solid border-border-darik px-4 py-4 rounded-lg flex flex-col gap-6 xl:flex-row-reverse xl:px-3 xl:py-[14px]"
                  :class="{ active: form.gender == 'male' }"
                >
                  <div
                    class="flex justify-between items-center w-full xl:justify-end xl:pr-1"
                  >
                    <svg
                      class="xl:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14.558 3.24951C14.1438 3.24951 13.808 3.5853 13.808 3.99951C13.808 4.41373 14.1438 4.74951 14.558 4.74951V3.24951ZM20.0013 3.99951H20.7513C20.7513 3.5853 20.4155 3.24951 20.0013 3.24951V3.99951ZM19.2513 9.44276C19.2513 9.85697 19.5871 10.1928 20.0013 10.1928C20.4155 10.1928 20.7513 9.85697 20.7513 9.44276H19.2513ZM13.1277 9.81545C12.8347 10.1083 12.8347 10.5832 13.1276 10.8761C13.4204 11.169 13.8953 11.1691 14.1882 10.8762L13.1277 9.81545ZM20.5236 4.54201C20.8165 4.24914 20.8166 3.77427 20.5237 3.48135C20.2309 3.18843 19.756 3.18838 19.4631 3.48125L20.5236 4.54201ZM13.1253 17.8111C11.2084 19.7279 8.10059 19.7279 6.18374 17.8111L5.12308 18.8717C7.62572 21.3744 11.6833 21.3744 14.1859 18.8717L13.1253 17.8111ZM6.18374 17.8111C4.26688 15.8942 4.26688 12.7864 6.18374 10.8695L5.12308 9.80887C2.62043 12.3115 2.62043 16.3691 5.12308 18.8717L6.18374 17.8111ZM6.18374 10.8695C8.10059 8.95267 11.2084 8.95267 13.1253 10.8695L14.1859 9.80887C11.6833 7.30622 7.62572 7.30622 5.12308 9.80887L6.18374 10.8695ZM13.1253 10.8695C15.0421 12.7864 15.0421 15.8942 13.1253 17.8111L14.1859 18.8717C16.6886 16.3691 16.6886 12.3115 14.1859 9.80887L13.1253 10.8695ZM14.558 4.74951L20.0013 4.74951V3.24951L14.558 3.24951V4.74951ZM19.2513 3.99951V9.44276H20.7513V3.99951H19.2513ZM14.1882 10.8762L20.5236 4.54201L19.4631 3.48125L13.1277 9.81545L14.1882 10.8762Z"
                        fill="#5C46E6"
                      />
                    </svg>
                    <a-radio class="type-radio" value="male" />
                  </div>
                  <h5
                    class="text-[18px] text-grey-64 font-semibold xl:text-base xl:flex xl:gap-2 xl:items-center"
                  >
                    <svg
                      class="xl:w-5 xl:h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14.558 3.24951C14.1438 3.24951 13.808 3.5853 13.808 3.99951C13.808 4.41373 14.1438 4.74951 14.558 4.74951V3.24951ZM20.0013 3.99951H20.7513C20.7513 3.5853 20.4155 3.24951 20.0013 3.24951V3.99951ZM19.2513 9.44276C19.2513 9.85697 19.5871 10.1928 20.0013 10.1928C20.4155 10.1928 20.7513 9.85697 20.7513 9.44276H19.2513ZM13.1277 9.81545C12.8347 10.1083 12.8347 10.5832 13.1276 10.8761C13.4204 11.169 13.8953 11.1691 14.1882 10.8762L13.1277 9.81545ZM20.5236 4.54201C20.8165 4.24914 20.8166 3.77427 20.5237 3.48135C20.2309 3.18843 19.756 3.18838 19.4631 3.48125L20.5236 4.54201ZM13.1253 17.8111C11.2084 19.7279 8.10059 19.7279 6.18374 17.8111L5.12308 18.8717C7.62572 21.3744 11.6833 21.3744 14.1859 18.8717L13.1253 17.8111ZM6.18374 17.8111C4.26688 15.8942 4.26688 12.7864 6.18374 10.8695L5.12308 9.80887C2.62043 12.3115 2.62043 16.3691 5.12308 18.8717L6.18374 17.8111ZM6.18374 10.8695C8.10059 8.95267 11.2084 8.95267 13.1253 10.8695L14.1859 9.80887C11.6833 7.30622 7.62572 7.30622 5.12308 9.80887L6.18374 10.8695ZM13.1253 10.8695C15.0421 12.7864 15.0421 15.8942 13.1253 17.8111L14.1859 18.8717C16.6886 16.3691 16.6886 12.3115 14.1859 9.80887L13.1253 10.8695ZM14.558 4.74951L20.0013 4.74951V3.24951L14.558 3.24951V4.74951ZM19.2513 3.99951V9.44276H20.7513V3.99951H19.2513ZM14.1882 10.8762L20.5236 4.54201L19.4631 3.48125L13.1277 9.81545L14.1882 10.8762Z"
                        fill="#5C46E6"
                      />
                    </svg>
                    Erkaklar
                  </h5>
                </button>
                <button
                  @click="form.gender = 'female'"
                  class="border border-solid border-border-darik px-4 py-4 rounded-lg flex flex-col gap-6 xl:flex-row-reverse xl:px-3 xl:py-[14px]"
                  :class="{ active: form.gender == 'female' }"
                >
                  <div
                    class="flex justify-between items-center w-full xl:justify-end xl:pr-1"
                  >
                    <svg
                      class="xl:hidden"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M13.6579 13.6507L17.4887 17.4807M17.4887 17.4807L19.9933 19.9849M17.4887 17.4807L19.9933 14.9761M17.4887 17.4807L14.9845 19.9849M13.6556 5.65536C11.4459 3.44561 7.86316 3.44561 5.65341 5.65536C3.44366 7.86511 3.44366 11.4478 5.65341 13.6576C7.86316 15.8673 11.4459 15.8673 13.6556 13.6576C15.8654 11.4478 15.8654 7.86511 13.6556 5.65536Z"
                        stroke="#BB2649"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                    </svg>
                    <a-radio class="type-radio" value="female" />
                  </div>
                  <h5
                    class="text-[18px] text-grey-64 font-semibold xl:text-base xl:flex xl:gap-2 xl:items-center"
                  >
                    <svg
                      class="xl:w-5 xl:h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M13.6579 13.6507L17.4887 17.4807M17.4887 17.4807L19.9933 19.9849M17.4887 17.4807L19.9933 14.9761M17.4887 17.4807L14.9845 19.9849M13.6556 5.65536C11.4459 3.44561 7.86316 3.44561 5.65341 5.65536C3.44366 7.86511 3.44366 11.4478 5.65341 13.6576C7.86316 15.8673 11.4459 15.8673 13.6556 13.6576C15.8654 11.4478 15.8654 7.86511 13.6556 5.65536Z"
                        stroke="#BB2649"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                    </svg>
                    Ayollar
                  </h5>
                </button>
              </div>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item
            v-if="userType"
            ref="name"
            class="form-item"
            label="Sohangizni tanlang"
          >
            <div
              class="min-h-[58px] xl:min-h-[50px] items-center border border-solid flex justify-between border-grey-8 rounded-lg px-4 py-3"
            >
              <p
                class="text-grey-40 text-base xl:text-[14px]"
                v-if="activeCheckedList == 0"
              >
                Специальности
              </p>
              <div v-else class="w-full flex flex-wrap gap-[4px]">
                <div
                  v-for="listItem in activeCheckedList"
                  :key="listItem?.id"
                  class="px-4 h-[34px] rounded-[4px] bg-apple-grey flex gap-1 items-center text-blue text-[14px] font-medium"
                >
                  {{ listItem?.name_ru }}
                  <button @click="deleteChecked(listItem?.id)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.2426 7.75738L7.75732 16.2427M16.2426 16.2426L7.75732 7.75732"
                        stroke="#020105"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <button
                class="w-6 xl:hidden"
                @click="(visible = true), (checkedList = [...activeCheckedList])"
              >
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
              <button class="w-6 hidden xl:block" @click="open">
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
          </a-form-model-item>
          <div class="py-4 w-full flex justify-center items-center relative xl:py-[18px]">
            <span class="h-[1px] w-full absolute z-0 bg-border-darik"></span>
            <p class="relative text-base font-medium text-grey-80 z-10 bg-white px-2">
              Qoshimcha malumotlar
            </p>
          </div>
          <a-form-model-item
            v-if="userType"
            ref="name"
            class="form-item"
            label="Tugilgan sanangiz"
            prop="date_of_birth"
          >
            <!-- <a-date-picker
              @change="onChange"
              v-model="form.date_of_birth"
              class="w-full"
              placeholder="Tugilgan sanangiz"
            /> -->

            <a-input
              type="text"
              ref="date"
              v-model="form.date_of_birth"
              placeholder="Tugilgan sanangiz"
              @input="formatDate"
              @blur="blurHandler"
            />
          </a-form-model-item>
          <a-form-model-item ref="name" class="form-item" label="Viloyat tanlang">
            <a-select v-model="form.region_id" placeholder="Viloyat tanlang">
              <a-select-option
                :value="region?.id"
                v-for="region in regions"
                :key="region?.id"
              >
                {{ region?.name_ru }}</a-select-option
              >
            </a-select>
          </a-form-model-item>
        </div>
      </a-form-model>
    </div>
    <div
      class="buttons grid grid-cols-2 gap-4 xl:flex xl:flex-col-reverse xl:gap-2 xl:pt-6"
    >
      <button
        @click="$router.go(-1)"
        class="h-[60px] xl:h-[52px] border border-solid border-border-darik rounded-[12px] flex justify-center items-center text-[18px] xl:text-[14px] text-black font-medium"
      >
        Bekor qilish
      </button>
      <button
        @click="onSubmit"
        class="h-[60px] xl:h-[52px] border border-solid border-blue bg-blue rounded-[12px] flex justify-center items-center text-[18px] xl:text-[14px] text-white font-medium"
      >
        Saqlash
      </button>
    </div>

    <SpicialsticsCheck
      @saveChecked="saveChecked"
      :visible="visible"
      @handleOk="handleOk"
      :specialities="specialities"
      :activeCheckedList="activeCheckedList"
      :openBottom="openBottom"
    />
  </div>
</template>
<script>
import moment from "moment";
import SpicialsticsCheck from "../modals/SpicialsticsCheck.vue";

export default {
  props: ["regions", "specialities"],
  data() {
    return {
      openBottom: false,
      inputDate: "",
      formattedDate: "",
      dropdown: false,
      dropdownOpens: [],
      checkedList: [],
      activeCheckedList: [],
      modalList: null,
      visible: false,
      userType: true,
      userGender: true,
      form: {
        name: "",
        surname: "",
        gender: "",
        date_of_birth: "",
        specialities: [],
        region_id: undefined,
      },
      rules: {
        name: [{ required: true, message: "This field is required", trigger: "blur" }],
        surname: [{ required: true, message: "This field is required", trigger: "blur" }],
        gender: [{ required: true, message: "This field is required", trigger: "blur" }],
        specialities: [
          { required: true, message: "This field is required", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    checkValue(str, max) {
      if (str.charAt(0) !== "0" || str == "00") {
        var num = parseInt(str);
        if (isNaN(num) || num <= 0 || num > max) num = 1;
        str =
          num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
            ? "0" + num
            : num.toString();
      }
      return str;
    },
    formatDate() {
      this.$refs.date.type = "text";
      var input = this.form.date_of_birth;
      if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
      var values = input.split("/").map(function (v) {
        return v.replace(/\D/g, "");
      });
      if (values[0]) values[0] = this.checkValue(values[0], 31);
      if (values[1]) values[1] = this.checkValue(values[1], 12);
      var output = values.map(function (v, i) {
        return v.length == 2 && i < 2 ? v + " / " : v;
      });
      this.form.date_of_birth = output.join("").substr(0, 14);
    },
    blurHandler() {
      this.$refs.date.type = "text";
      var input = this.form.date_of_birth;
      var values = input.split("/").map(function (v, i) {
        return v.replace(/\D/g, "");
      });
      var output = "";
      if (values.length == 3) {
        var year =
          values[2].length !== 4 ? parseInt(values[2]) + 2000 : parseInt(values[2]);
        var month = parseInt(values[1]) - 1;
        var day = parseInt(values[0]);
        var d = new Date(year, month, day);
        if (!isNaN(d)) {
          this.formattedDate = d.toString();
          var dates = [d.getDate(), d.getMonth() + 1, d.getFullYear()];
          output = dates
            .map(function (v) {
              v = v.toString();
              return v.length == 1 ? "0" + v : v;
            })
            .join(" / ");
        }
      }
      this.form.date_of_birth = output;
      // this.form.date_of_birth = output;
    },

    saveChecked(checkedList) {
      this.activeCheckedList = [...checkedList];
      this.checkedList = [];
      this.visible = false;
      this.close();
    },
    open() {
      this.openBottom = true;
      setTimeout(() => {
        if (this.openBottom) this.openBottom = false;
      }, 10);
    },
    close() {
      this.openBottom = false;
    },
    onchecked(obj) {
      if (this.checkedList.includes(obj)) {
        this.checkedList = this.checkedList.filter((item) => item.id != obj.id);
      } else {
        if (this.checkedList.length == 3) {
          this.checkedList.shift();
        }
        this.checkedList.push(obj);
      }
    },
    deleteChecked(id) {
      this.activeCheckedList = this.activeCheckedList.filter((item) => item.id != id);
    },

    handleOk() {
      this.visible = false;
    },
    onChange(date, dateString) {},
    onSubmit() {
      // name: "",
      //   surname: "",
      //   gender: "",
      //   date_of_birth: "",
      //   specialities: [1],
      //   region_id: undefined,
      // let formData = new FormData();
      // formData.append("name", this.form.name);
      // formData.append("surname", this.form.surname);
      // formData.append("surname", this.form.surname);
      // formData.append("date_of_birth", this.form.date_of_birth);
      // formData.append("region_id", this.form.region_id);
      // formData.append("specialities[]", JSON.stringify(this.form.specialities));
      const data = {
        ...this.form,
        date_of_birth: this.form.date_of_birth.replaceAll(" ", "").replaceAll("/", "-"),
        // [`specialities[]`]: this.form.specialities,
      };
      delete data["specialities"];
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("sendRegister", data);
        } else {
          return false;
        }
      });
    },
  },
  components: { SpicialsticsCheck },
};
</script>
<style lang="css" scoped>
.spicial-drawer :deep(.bottom-sheet__main) {
  height: 100%;
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
}
.form-item :deep(.ant-input) {
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-darik);
  height: 50px;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.form-item :deep(.ant-input:focus) {
  border: 1px solid var(--blue);
  box-shadow: 0px 0px 0px 3px rgba(70, 105, 229, 0.2);
}
.form-item :deep(.ant-select-selection) {
  border-radius: 8px;
  background: #fff;
  height: 50px;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
:deep(.ant-select-selection:hover) {
  border-color: var(--blue);
}
:deep(.ant-select-open .ant-select-selection) {
  border: 1px solid var(--blue);
  box-shadow: 0px 0px 0px 3px rgba(70, 105, 229, 0.2);
}
.form-item :deep(.ant-select-selection__rendered) {
  height: 100%;
  display: flex;
  align-items: center;
}
.form-item :deep(.ant-select-selection__rendered .ant-select-selection-selected-value) {
  color: var(--grey-80, #353437);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.form-item :deep(.ant-form-item-label label) {
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  position: relative;
  padding-right: 12px;
}
.form-item :deep(label::before) {
  position: absolute;
  right: -3px;
  top: 0;
}
.form-item :deep(label::after) {
  display: none;
}
.form-item :deep(.ant-radio-group) {
  width: 100%;
}
.type-radio {
  margin-right: 0 !important;
}
:deep(.ant-radio-inner::after) {
  width: 12px;
  height: 12px;
  background-color: var(--main-color);
}
:deep(.ant-radio-inner) {
  width: 20px;
  height: 20px;
  border-color: var(--main-color) !important;
  box-shadow: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gender-btns .active {
  border-color: var(--blue);
}
.gender-btns .active h5 {
  color: var(--blue);
}
.modal :deep(.ant-modal-content) {
  border-radius: 30px;
}
.modal-body {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
}
.modal-list::-webkit-scrollbar {
  width: 4px;
}

/* Track */
.modal-list::-webkit-scrollbar-track {
  border-radius: 50px;
  background: var(--bg-grey);
  width: 4px;
}

/* Handle */
.modal-list::-webkit-scrollbar-thumb {
  width: 6px;
  border-radius: 50px;
  background: var(--border-darik);
}
.modal-list .active {
  border-color: var(--blue);
  color: var(--blue);
}
:deep(.ant-select-focused
    .ant-select-selection, .ant-select-selection:focus, .ant-select-selection:active) {
  border: 1px solid var(--blue);
  box-shadow: 0px 0px 0px 3px rgba(70, 105, 229, 0.2);
}
.drop-body {
  max-height: 0;
  /* height: 0; */
  overflow: hidden;
  transition: max-height 0.2s linear;
}
.drop-icon {
  transition: 0.2s linear;
}
.drop-list .active .drop-body {
  max-height: 200px;
  /* height: auto; */
}
.drop-list .active .drop-head h2 {
  color: var(--main-color);
}
.drop-head {
  transition: 0.2s linear;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
@media (max-width: 1200px) {
  .form-item :deep(.ant-form-item-label label) {
    font-size: 14px;
  }
  .form-item :deep(.ant-select-selection) {
    height: 44px;
    font-size: 14px;
  }
  .form-item :deep(.ant-input) {
    height: 44px;
    font-size: 14px;
  }
}
</style>
