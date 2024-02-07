<template lang="html">
  <div>
    <a-modal
      v-model="visible"
      :body-style="{ padding: '32px 40px', borderRadius: '30px' }"
      :dialog-style="{ padding: '32px', borderRadius: '24px' }"
      centered
      class="modal"
      :closable="false"
      width="1198px"
      @ok="$emit('handleOk')"
    >
      <div class="flex flex-col gap-8">
        <div class="flex justify-between items-center">
          <h6 class="text-black text-[24px] font-semibold">Sohangizni tanlang</h6>
          <p class="text-[18px] text-grey-80 flex gap-2 items-center">
            <span class="text-main-color font-medium">{{ checkedList.length }}</span
            >: yonalish tanlandi
            <span>(max 3 ta)</span>
          </p>
        </div>
        <div class="modal-body">
          <div
            class="flex flex-col gap-4 max-h-[620px] overflow-y-scroll modal-list pr-[9px]"
          >
            <div
              class="cursor-pointer flex gap-3 items-center h-[67px] px-6 rounded-xl bg-bg-f9 text-black text-base font-medium border-[2px] border-solid border-bg-f9"
              v-for="item in specialities"
              @click="onSelect(item?.id)"
              :class="{
                active: (modalList ? modalList : specialities[0]?.id) == item?.id,
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="57"
                viewBox="0 0 56 57"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.9997 47.1665C19.7523 47.1665 13.0664 40.3609 13.0664 31.9657C13.0664 23.6363 17.8326 13.9167 25.2689 10.4409C26.1357 10.0357 27.0677 9.83317 27.9997 9.83317V47.1665Z"
                  fill="#009A10"
                />
                <path
                  opacity="0.3"
                  d="M30.7308 10.4412C29.864 10.0361 28.932 9.8335 28 9.8335V22.9003L36.2724 14.6279C34.662 12.8586 32.7997 11.4082 30.7308 10.4412Z"
                  fill="#009A10"
                />
                <path
                  opacity="0.4"
                  d="M28 22.9003V33.167L40.3466 20.8203C39.2787 18.5427 37.9049 16.4214 36.2724 14.6279L28 22.9003Z"
                  fill="#009A10"
                />
                <path
                  opacity="0.6"
                  d="M28 42.4998L42.5805 27.9193C42.17 25.5104 41.4098 23.0876 40.3466 20.8198L28 33.1665V42.4998Z"
                  fill="#009A10"
                />
                <path
                  opacity="0.7"
                  d="M42.5805 27.9194L28 42.5V47.1665C36.2475 47.1665 42.9333 40.3609 42.9333 31.9657C42.9333 30.6419 42.8129 29.2829 42.5805 27.9194Z"
                  fill="#009A10"
                />
              </svg>
              {{ item?.name_ru }}
            </div>
          </div>
          <div class="modal-board flex flex-col justify-between">
            <div class="flex gap-3 flex-wrap">
              <button
                :disabled="
                  !Boolean(checkedList.find((elemChild) => elemChild.id == child.id)) &&
                  checkedList.length == 3
                "
                class="px-4 py-2 bg-bg-grey rounded-[22px] flex items-center gap-2"
                v-for="child in specialities?.find(
                  (elem) =>
                    elem.id == (modalList != null ? modalList : specialities[0]?.id)
                )?.children"
                @click="onchecked(child)"
              >
                <a-checkbox
                  :disabled="
                    !Boolean(checkedList.find((elemChild) => elemChild.id == child.id)) &&
                    checkedList.length == 3
                  "
                  :checked="
                    Boolean(checkedList.find((elemChild) => elemChild.id == child.id))
                  "
                />
                <p class="text-grey-80 text-[14px] font-medium">
                  {{ child?.name_ru }}
                </p>
              </button>
            </div>
            <div class="flex gap-4 justify-end">
              <button
                @click="closeChecked"
                class="h-[60px] border border-solid w-[227px] border-border-darik rounded-[12px] flex justify-center items-center text-[18px] text-black font-medium"
              >
                Bekor qilish
              </button>
              <button
                @click="$emit('saveChecked', checkedList)"
                class="h-[60px] border border-solid w-[227px] border-blue bg-blue rounded-[12px] flex justify-center items-center text-[18px] text-white font-medium"
              >
                Tasdiqlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </a-modal>
    <vue-bottom-sheet-vue2
      ref="openSpecials"
      class="bottom-drawer spicial-drawer h-full"
      :init-sheet-height="700"
    >
      <div class="px-4 pb-4 flex flex-col justify-between h-full">
        <div class="flex flex-col">
          <div
            class="flex justify-between items-center flex-col gap-3 pb-6 border-[0] border-b border-solid border-grey-light"
          >
            <h6 class="text-black text-[18px] font-semibold">Sohangizni tanlang</h6>
            <p class="text-[14px] text-grey-80 flex gap-2 items-center">
              <span class="text-main-color font-medium">{{ checkedList.length }}</span
              >: yonalish tanlandi
              <span>(max 3 ta)</span>
            </p>
          </div>
          <div class="drop-list flex flex-col gap-2 xl:gap-8 mt-8">
            <div
              class="dropdown overflow-hidden"
              :class="{ active: dropdownOpens.includes(item?.id) }"
              v-for="item in specialities"
              @click="onSelect(item?.id)"
            >
              <button
                class="drop-head xl:px-0 xl:py-0 bg-white relative z-20 w-full flex justify-between items-center px-[10px] py-[10px]"
                @click="handleDropdown(item?.id)"
              >
                <h2
                  class="text-[14px] font-medium text-grey-80 flex gap-2 items-center"
                  :class="{ 'text-blue': dropdownOpens.includes(item?.id) }"
                >
                  <span class="flex items-center gap-2"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.9996 20C8.46499 20 5.59961 17.0833 5.59961 13.4854C5.59961 9.91563 7.64227 5.75007 10.8293 4.26044C11.2007 4.08681 11.6002 4 11.9996 4V20Z"
                        fill="#009A10"
                      />
                      <path
                        opacity="0.3"
                        d="M13.1703 4.26044C12.7989 4.08681 12.3994 4 12 4V9.60005L15.5453 6.05473C14.8551 5.29647 14.057 4.67489 13.1703 4.26044Z"
                        fill="#009A10"
                      />
                      <path
                        opacity="0.4"
                        d="M12 9.60001V14L17.2914 8.70857C16.8337 7.73243 16.245 6.82334 15.5453 6.05469L12 9.60001Z"
                        fill="#009A10"
                      />
                      <path
                        opacity="0.6"
                        d="M12 17.9999L18.2488 11.7511C18.0728 10.7187 17.7471 9.68039 17.2914 8.7085L12 13.9999V17.9999Z"
                        fill="#009A10"
                      />
                      <path
                        opacity="0.7"
                        d="M18.2488 11.751L12 17.9998V19.9997C15.5346 19.9997 18.4 17.083 18.4 13.4851C18.4 12.9177 18.3484 12.3353 18.2488 11.751Z"
                        fill="#009A10"
                      />
                    </svg>
                    {{ item?.name_ru }}</span
                  >
                  <span class="text-[12px] text-grey-40"
                    >({{ item?.children.length }})</span
                  >
                </h2>
                <span
                  :class="{ 'rotate-180': dropdownOpens.includes(item?.id) }"
                  class="drop-icon"
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
              </button>

              <div class="drop-body relative z-10">
                <div class="py-4 flex flex-col gap-4 xl:gap-8">
                  <div class="flex gap-3 flex-wrap">
                    <button
                      class="px-4 py-2 bg-bg-grey rounded-[22px] flex items-center gap-2"
                      v-for="child in item?.children"
                      @click="onchecked(child)"
                      :disabled="
                        !Boolean(
                          checkedList.find((elemChild) => elemChild.id == child.id)
                        ) && checkedList.length == 3
                      "
                    >
                      <a-checkbox
                        :disabled="
                          !Boolean(
                            checkedList.find((elemChild) => elemChild.id == child.id)
                          ) && checkedList.length == 3
                        "
                        :checked="
                          Boolean(
                            checkedList.find((elemChild) => elemChild.id == child.id)
                          )
                        "
                      />
                      <p class="text-grey-80 text-[14px] font-medium">
                        {{ child?.name_ru }}
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <!-- </Transition> -->
            </div>
          </div>
        </div>
        <div class="flex gap-2 flex-col w-full mt-20">
          <button
            @click="$emit('saveChecked', checkedList)"
            class="h-[52px] border border-solid border-blue bg-blue rounded-[12px] flex justify-center items-center text-[14px] text-white font-medium"
          >
            Tasdiqlash
          </button>
          <button
            @click="closeChecked"
            class="h-[52px] border border-solid border-border-darik rounded-[12px] flex justify-center items-center text-[14px] text-black font-medium"
          >
            Bekor qilish
          </button>
        </div>
      </div>
    </vue-bottom-sheet-vue2>
  </div>
</template>
<script>
export default {
  props: ["visible", "openBottom", "specialities", "activeCheckedList"],
  data() {
    return {
      checkedList: [],
      errorSelect: false,
      modalList: null,
      dropdownOpens: [],
      loading: true,
    };
  },
  mounted() {},
  methods: {
    closeChecked() {
      this.checkedList = [];
      this.$emit("handleOk");
    },

    onchecked(obj) {
      if (this.checkedList.find((item) => item.id == obj.id)) {
        this.checkedList = this.checkedList.filter((item) => item.id != obj.id);
      } else {
        if (this.checkedList.length == 3) {
          this.checkedList.shift();
        }
        this.checkedList.push(obj);
      }
    },
    async deleteChecked(id) {
      this.onSubmit(id);
    },
    onSelect(id) {
      this.modalList = id;
    },
    handleDropdown(id) {
      this.dropdownOpens.includes(id)
        ? (this.dropdownOpens = this.dropdownOpens.filter((item) => item != id))
        : this.dropdownOpens.push(id);
    },
  },
  watch: {
    visible(val) {
      if (val) {
        if (this.activeCheckedList.length > 0)
          this.checkedList = [...this.activeCheckedList];
      }
    },
    openBottom(val) {
      if (val) {
        if (this.activeCheckedList.length > 0) {
          this.checkedList = [...this.activeCheckedList];
        }
        this.$refs.openSpecials.open();
      } else {
        this.$refs.openSpecials.close();
      }
    },
  },
};
</script>
<style lang="css" scoped>
.buttons .active {
  border-color: var(--blue);
  color: var(--blue);
  background-color: #fff;
}
.specialities-list :deep(.ant-skeleton-title) {
  height: 38px;
  margin-top: 0;
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
