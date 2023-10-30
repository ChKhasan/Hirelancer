<template lang="html">
  <div class="filter-container flex flex-col gap-[20px]">
    <div
      class="list border border-solid border-grey-light px-[28px] py-[28px] rounded-xl flex flex-col gap-4"
    >
      <h2 class="text-[20px] text-black font-semibold">Тип работы</h2>

      <div class="drop-list flex flex-col gap-2">
        <div
          class="dropdown overflow-hidden"
          :class="{ active: dropdownOpens.includes(dropItem) }"
          v-for="dropItem in [1, 2, 3, 4, 5]"
          :key="dropItem"
        >
          <button
            class="drop-head bg-white relative z-20 w-full flex justify-between items-center px-[10px] py-[10px]"
            @click="handleDropdown(dropItem)"
          >
            <h2
              class="text-base text-blue-night flex gap-2 items-center"
              :class="{ 'text-blue': dropdownOpens.includes(dropItem) }"
            >
              Все специальности {{ dropItem }}
              <span class="text-[12px] text-grey-40">(24k)</span>
            </h2>
            <span
              :class="{ 'rotate-180': dropdownOpens.includes(dropItem) }"
              class="drop-icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.414376 0.531506C0.673133 0.20806 1.1451 0.155619 1.46855 0.414376L6.00003 4.03956L10.5315 0.414376C10.855 0.155619 11.3269 0.20806 11.5857 0.531506C11.8444 0.854953 11.792 1.32692 11.4685 1.58568L6.46855 5.58568C6.19464 5.80481 5.80542 5.80481 5.53151 5.58568L0.531506 1.58568C0.20806 1.32692 0.155619 0.854953 0.414376 0.531506Z"
                  fill="#5C46E6"
                /></svg
            ></span>
          </button>
          <span
            v-if="dropdownOpens.includes(dropItem)"
            class="w-auto flex h-[1px] mx-4 bg-border-darik"
          ></span>
          <!-- <Transition name="bounce"> -->
            <div class="drop-body relative z-10" >
              <div class="px-4 py-4 flex flex-col gap-4">
                <button
                  class="text-[14px] text-grey-80 flex gap-2 items-center"
                  v-for="dropIn in [1, 2, 3, 4, 5]"
                  :key="dropIn"
                >
                  HTML-верстка {{ dropIn }}
                  <span class="text-[12px] text-grey-40">(24k)</span>
                </button>
              </div>
            </div>
          <!-- </Transition> -->
        </div>
      </div>
    </div>
    <div
      class="filter border border-solid border-grey-light px-[28px] py-[28px] rounded-xl flex flex-col gap-4"
    >
      <div class="flex flex-col gap-4">
        <h4 class="text-[20px] font-semibold text-black">Тип работы</h4>
        <div class="flex flex-col gap-6">
          <span class="text-base text-blue-night flex items-center">
            <a-checkbox>Online</a-checkbox>
          </span>
          <span class="text-base text-blue-night flex items-center">
            <a-checkbox>Tekshirilgan </a-checkbox
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M9.51069 1.66159C10.3055 0.774783 11.6945 0.774783 12.4893 1.66159L13.8953 3.23019C14.248 3.62366 14.742 3.86157 15.2695 3.89198L17.3725 4.0132C18.5614 4.08174 19.4274 5.16763 19.2296 6.34198L18.8799 8.41923C18.7921 8.94028 18.9141 9.47487 19.2193 9.90625L20.4357 11.626C21.1234 12.5983 20.8143 13.9524 19.7729 14.53L17.9307 15.5516C17.4687 15.8079 17.1268 16.2366 16.9798 16.7441L16.3936 18.7674C16.0622 19.9113 14.8109 20.5139 13.71 20.0598L11.7626 19.2566C11.2742 19.0551 10.7258 19.0551 10.2374 19.2566L8.29004 20.0598C7.18913 20.5139 5.93776 19.9113 5.60639 18.7674L5.02025 16.7441C4.87322 16.2366 4.53133 15.8079 4.06926 15.5516L2.22712 14.53C1.18568 13.9524 0.87662 12.5983 1.56432 11.626L2.78074 9.90625C3.08586 9.47487 3.20788 8.94028 3.12014 8.41923L2.77036 6.34198C2.57262 5.16763 3.43859 4.08174 4.6275 4.0132L6.7305 3.89198C7.25801 3.86157 7.75205 3.62366 8.10472 3.23019L9.51069 1.66159Z"
                fill="#5C46E6"
              />
              <path
                d="M9 11.6527L10.0962 12.8303C10.4044 13.087 10.8833 13.0477 11.1379 12.7448L14 10"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span class="text-base text-blue-night flex items-center">
            <a-checkbox>Otzivlari bilan</a-checkbox
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8Z"
                fill="#5C46E6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4.4375C8.31066 4.4375 8.5625 4.68934 8.5625 5V5.75C8.5625 6.06066 8.31066 6.3125 8 6.3125C7.68934 6.3125 7.4375 6.06066 7.4375 5.75V5C7.4375 4.68934 7.68934 4.4375 8 4.4375ZM8 7.0625C8.31066 7.0625 8.5625 7.31434 8.5625 7.625V11C8.5625 11.3107 8.31066 11.5625 8 11.5625C7.68934 11.5625 7.4375 11.3107 7.4375 11V7.625C7.4375 7.31434 7.68934 7.0625 8 7.0625Z"
                fill="#5C46E6"
              />
            </svg>
          </span>
        </div>
      </div>
      <div>
        <a-select v-model="sort" placeholder="Положительный" class="w-full">
          <a-select-option :value="region" v-for="region in [1, 2, 3, 4]" :key="region">
            {{ region }}</a-select-option
          >
        </a-select>
      </div>
      <div class="flex gap-4">
        <button
          class="flex w-full justify-center py-[15px] rounded-lg border border-blue border-solid text-[14px] font-tt font-semibold text-white bg-blue"
        >
          Применить
        </button>
        <button
          class="flex w-full justify-center py-[15px] rounded-lg border border-blue border-solid text-[14px] font-tt font-semibold text-blue bg-white"
        >
          Сбросить
        </button>
      </div>
    </div>
    <TelegramCard />
  </div>
</template>
<script>
import TelegramCard from '../TelegramCard.vue';

export default {
    data() {
        return {
            dropdown: false,
            sort: undefined,
            dropdownOpens: [],
        };
    },
    methods: {
        handleDropdown(id) {
            this.dropdownOpens.includes(id)
                ? (this.dropdownOpens = this.dropdownOpens.filter((item) => item != id))
                : this.dropdownOpens.push(id);
            console.log(this.dropdownOpens);
        },
    },
    components: { TelegramCard }
};
</script>
<style lang="css" scoped>
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
.drop-head {
  transition: 0.2s linear;
}
.drop-list .active {
  border-radius: 10px;
  background-color: var(--bg-grey);
}
.drop-list .active .drop-head {
  padding: 16px;
  background-color: var(--bg-grey);
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
.filter-container :deep(.ant-checkbox + span) {
  padding-left: 16px;
  color: var(--blue-night);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.filter-container :deep(.ant-checkbox-checked .ant-checkbox-inner) {
  border-color: var(--blue);
  background-color: var(--blue);
}
.filter-container
  :deep(.ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover
    .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner) {
  border-color: var(--blue);
}
.filter-container :deep(.ant-checkbox-checked::after) {
  border-color: var(--blue);
}
:deep(.ant-select-selection--single) {
  height: 53px;
}
:deep(.ant-select-selection__rendered) {
  line-height: 53px;
}
:deep(.ant-select-selection) {
  border-radius: 8px;
  border: 1px solid var(--border-darik);

  background: var(--bg-grey);
}
:deep(.ant-select-selection__placeholder, .ant-select-search__field__placeholder, .ant-select-selection-selected-value) {
  color: var(--grey-80);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  display: flex;
  align-items: center;
}
:deep(.ant-select-focused
    .ant-select-selection, .ant-select-selection:focus, .ant-select-selection:active) {
  box-shadow: 0 0 0 2px rgba(92, 70, 229, 0.2);
}
</style>
