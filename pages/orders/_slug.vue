<template lang="html">
  <div class="pt-12 order xl:pt-6">
    <div class="max-w-[1286px] mx-auto pb-[55px]">
      <nuxt-link
        to="/"
        class="flex xl:hidden gap-4 w-[162px] py-3 border border-grey-24 border-solid rounded-lg justify-center items-center text-base font-medium text-blue hover:text-blue"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.46849 0.414483C5.79194 0.67324 5.84438 1.14521 5.58562 1.46866L1.96044 6.00013L5.58562 10.5316C5.84438 10.8551 5.79194 11.327 5.46849 11.5858C5.14505 11.8445 4.67308 11.7921 4.41432 11.4687L0.414321 6.46866C0.195189 6.19474 0.195189 5.80553 0.414321 5.53161L4.41432 0.531613C4.67308 0.208167 5.14505 0.155726 5.46849 0.414483Z"
            fill="#5C46E6"
          />
        </svg>
        Отмена
      </nuxt-link>
      <div class="content-box mt-6 xl:mt-0 xl:px-4">
        <div>
          <div
            class="info rounded-3xl xl:rounded-2xl border-solid border-grey-8 px-8 py-8 xl:px-4 xl:py-4 border"
          >
            <div class="head flex justify-between xl:flex-col xl:gap-4">
              <div class="flex gap-4 items-center">
                <span
                  class="flex xl:text-xs gap-[4px] status-red items-center rounded-[8px] px-[8px] py-[4px] text-light-red text-[14px] font-medium"
                  ><svg
                    class="xl:w-4 xl:h-4"
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

              <div class="flex gap-6 xl:justify-between">
                <p class="text-base text-grey-64 xl:text-[14px]">07 мая 2023, 15:24</p>
                <p class="text-base text-grey-64 xl:text-[14px] flex gap-[6px]">
                  Заказ:<span class="font-medium text-black">#14511</span>
                </p>
              </div>
            </div>
            <div class="body mt-6 pb-4 border-[0] border-b border-solid border-grey-8">
              <h1 class="title text-[24px] font-semibold text-black mb-4 xl:text-[18px]">
                Нужен разработчик в теме форекс/крипто/трейдинг, знаком с патернами
                графического анализа на графиках
              </h1>
              <p class="text-base text-grey-80 xl:text-[14px]">
                Join our world-class innovation team, revolutionizing education at ASU
                Prep Digital. Our mission is to enhance student performance and provide
                access to transformative educational pathways. We're seeking Graphic
                Designers to create visually engaging digital lessons for grades
                8-12.Contract Expectations:During the first month, you'll familiarize
                yourself with our media and curriculum teams, learn to build lessons using
                our proprietary tool, and adhere to the style guide(s) for your assigned
                course. After the initial month, we'll assess the contract's progress and
                decide on an extension. If it's a mutually beneficial fit, the contract
                will be extended in 3-month increments.
              </p>
              <p class="text-base text-grey-80 mt-8 xl:mt-5 xl:text-[14px]">
                As we're developing curriculum for the next 4 years, there's potential for
                a long-term contract.This is a project-based contract and not a retainer
                arrangement. It does not involve a continuous or ongoing engagement where
                ASU Prep retains the contractor's services even when there is no
                project-based work. Instead, the contract centers around completing
                specific assigned tasks and billing hours to ASU Prep.
              </p>
            </div>
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
                <span
                  class="rounded-[22px] py-2 px-4 bg-bg-grey text-grey-64 text-[14px] font-medium"
                  >Программирование </span
                ><span class="text-[20px] text-grey-64 xl:hidden">/</span>
                <span
                  class="rounded-[22px] py-2 px-4 bg-bg-grey text-grey-64 text-[14px] font-medium"
                >
                  Мобильные приложения
                </span>
              </div>
            </div>
            <div
              class="content-bottom border-[0] border-t border-solid border-grey-8 pt-4 flex justify-between xl:flex-col xl:gap-6 xl:max-w-[80%] xl:mx-auto"
            >
              <div class="flex items-center gap-[28px] xl:justify-between">
                <p class="text-base xl:text-[14px] text-grey-64 flex gap-2 items-center">
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
                  >300
                </p>
                <p class="text-base xl:text-[14px] text-grey-64 flex gap-2 items-center">
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
                  >42 запросов
                </p>
              </div>
              <p
                class="underline text-base text-pantone-2023 flex items-center gap-[10px] xl:text-center mx-auto"
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
            </div>
          </div>
          <div class="flex-col gap-4 hidden xl:flex xl:mt-6 xl:gap-6">
            <ClientCard />
            <PriceCard @open="openModal" />
          </div>
          <div class="flex flex-col gap-4 mt-8 xl:mt-6">
            <InfoCard
              title="Войдите чтобы отправить заявку"
              subtitle=" Условия обсуждаются индивидуально.Наши ожидания от исполнителей:1. Наличие
                опыта и портфолио2. Оперативность выполнения заказов"
              btn="Войти"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <ellipse
                  cx="9.99984"
                  cy="14.5833"
                  rx="5.83333"
                  ry="2.91667"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <ellipse
                  cx="9.99984"
                  cy="5.83333"
                  rx="3.33333"
                  ry="3.33333"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                /></svg
            ></InfoCard>
            <InfoCard
              title="Отправьте заявке для получение заказа"
              subtitle="Условия обсуждаются индивидуально.Наши ожидания от исполнителей:1. Наличие
                опыта и портфолио2. Оперативность выполнения заказов"
              btn="Отправить заявку"
              @submit="open"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.46094 13.3333V15.3175C4.46094 15.9367 5.1126 16.34 5.66677 16.0625L17.7943 10L5.66677 3.93751C5.1126 3.66001 4.46094 4.06334 4.46094 4.68251V10H10.0168"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></InfoCard>
          </div>
        </div>
        <div class="flex flex-col gap-4 xl:hidden">
          <ClientCard />
          <PriceCard @open="openModal" />
        </div>
      </div>
    </div>
    <SimilarOrders />
    <div>
      <Transition name="opacity">
        <div
          v-if="bottomModal"
          @click="closeModal"
          class="modal-bg fixed w-full h-full bottom-0 left-0"
        ></div>
      </Transition>
      <Transition name="nested">
        <div v-if="bottomModal" class="fixed w-full bottom-0 left-0">
          <BottomModal @close="closeModal" @submit="submit" />
        </div>
      </Transition>
      <div class="xl:hidden flex">
        <OrderSuccess :visibleProp="visible" @handleOkProp="handleOk" />
      </div>
      <vue-bottom-sheet-vue2 ref="myBottomSheet" class="bottom-drawer">
        <BottomModal @close="closeModal" @submit="submit" />
      </vue-bottom-sheet-vue2>
      <div class="hidden xl:flex">
        <vue-bottom-sheet-vue2 ref="orderSucccess" class="bottom-drawer">
          <BottomSuccess class="hidden xl:flex" @close="closeSuccess" />
        </vue-bottom-sheet-vue2>
      </div>
    </div>
  </div>
</template>
<script>
import ClientCard from "../../components/orders/ClientCard.vue";
import FileCard from "../../components/orders/FileCard.vue";
import InfoCard from "../../components/orders/InfoCard.vue";
import SimilarOrders from "../../components/orders/SimilarOrders.vue";
import PriceCard from "../../components/orders/PriceCard.vue";
import BottomModal from "../../components/orders/BottomModal.vue";
import OrderSuccess from "../../components/modals/OrderSuccess.vue";
import BottomSuccess from "../../components/orders/BottomSuccess.vue";

export default {
  data() {
    return {
      bottomModal: false,
      visible: false,
    };
  },
  mounted() {
    console.log(window.innerWidth);
  },
  methods: {
    open() {
      this.$refs.myBottomSheet.open();
    },
    close() {
      this.$refs.myBottomSheet.close();
    },
    openSuccess() {
      this.$refs.orderSucccess.open();
    },
    closeSuccess() {
      this.$refs.orderSucccess.close();
    },
    openModal() {
      this.bottomModal = true;
    },
    submit(form) {
      this.__POST_ORDER(form);
    },
    async __POST_ORDER(data) {
      this.close();
      this.openSuccess();

      if (window.innerWidth > 1200) this.visible = true;
      try {
        await this.$store.dispatch("fetchOrders/postSendRequest", {
          ...data,
          order_id: this.$route.params.slug,
        });
        this.bottomModal = false;
        this.visible = true;
        this.openSuccess();
        // this.$router.go(-1);
      } catch (e) {
        console.log(e.response);
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      }
    },
    handleOk() {
      this.visible = false;
    },
    closeModal() {
      this.bottomModal = false;
    },
  },
  components: {
    FileCard,
    InfoCard,
    SimilarOrders,
    ClientCard,
    PriceCard,
    BottomModal,
    OrderSuccess,
    BottomSuccess,
  },
};
</script>
<style lang="css" scoped>
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
@keyframes opacityAnim {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
@media (max-width: 1200px) {
  .content-box {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
