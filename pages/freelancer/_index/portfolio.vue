<template>
  <div class="portfolio xl:px-4">
    <ProfileLayout :profile="false" :freelancer="freelancer" :show="false">
      <div class="head flex flex-col gap-4 mt-8 xl:mt-6">
        <h3 class="text-[24px] text-black font-semibold xl:hidden">
          Портфолио
        </h3>
        <div class="flex justify-between items-center xl:mx-[-16px]">
          <div
            class="buttons flex gap-6 md:overflow-x-scroll w-full scroll-none xl:gap-2"
          >
            <button
              class="xl:ml-4 px-6 whitespace-nowrap py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium xl:py-0 xl:flex xl:items-center xl:leading-[20px] xl:text-[14px] xl:h-[36px] xl:rounded-lg xl:border xl:px-6 xl:min-w-[156px] xl:justify-center"
            >
              All works
            </button>
            <button
              class="active px-6 whitespace-nowrap py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium xl:py-0 xl:flex xl:items-center xl:leading-[20px] xl:text-[14px] xl:h-[36px] xl:rounded-lg xl:border xl:px-6 xl:min-w-[156px] xl:justify-center"
            >
              Веб-дизайн
            </button>
            <button
              class="px-6 whitespace-nowrap py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium xl:py-0 xl:flex xl:items-center xl:leading-[20px] xl:text-[14px] xl:h-[36px] xl:rounded-lg xl:border xl:px-6 xl:min-w-[156px] xl:justify-center"
            >
              Логотипы
            </button>
            <button
              class="xl:mr-4 px-6 whitespace-nowrap py-3 rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey text-base text-grey-64 font-medium xl:py-0 xl:flex xl:items-center xl:leading-[20px] xl:text-[14px] xl:h-[36px] xl:rounded-lg xl:border xl:px-6 xl:min-w-[156px] xl:justify-center"
            >
              Фото
            </button>
          </div>
          <div class="flex gap-[27px] md:hidden">
            <button
              class="border border-solid border-grey-8 rounded-[12px] h-12 w-12 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.875 8.58366C15.875 12.6107 12.6104 15.8753 8.58329 15.8753C4.55622 15.8753 1.29163 12.6107 1.29163 8.58366C1.29163 4.55658 4.55622 1.29199 8.58329 1.29199C12.6104 1.29199 15.875 4.55658 15.875 8.58366ZM8.58329 17.1253C13.3007 17.1253 17.125 13.3011 17.125 8.58366C17.125 3.86623 13.3007 0.0419922 8.58329 0.0419922C3.86586 0.0419922 0.041626 3.86623 0.041626 8.58366C0.041626 13.3011 3.86586 17.1253 8.58329 17.1253ZM16.1086 15.2251C15.8645 14.981 15.4688 14.981 15.2247 15.2251C14.9806 15.4691 14.9806 15.8649 15.2247 16.1089L16.8913 17.7756C17.1354 18.0197 17.5311 18.0197 17.7752 17.7756C18.0193 17.5315 18.0193 17.1358 17.7752 16.8917L16.1086 15.2251Z"
                  fill="#020105"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        class="list grid grid-cols-3 gap-4 mt-6 mb-[40px] md:grid-cols-2 xl:hidden"
      >
        <PortfolioViewCard
          @handleOk="handleOk"
          v-for="portfolio in portfolios"
          :portfolio="portfolio"
          :key="portfolio?.id"
        />
      </div>
      <div
        class="list grid-cols-3 gap-4 xl:grid-cols-2 xl:gap-1 hidden xl:grid mt-4"
      >
        <PortfolioCard
          @handleOk="handleOk"
          v-for="portfolio in portfolios"
          :portfolio="portfolio"
          :key="portfolio?.id"
        />

        <PortfolioMoreCard class="xl:hidden" v-if="portfolios.length > 5" />
      </div>
      <div>
        <VPagination />
      </div>

      <a-modal
        class="close-modal mt-[100px]"
        v-model="visible"
        :body-style="{
          padding: '0',
          borderRadius: '24px',
          margin: '120px 0 120px 0',
        }"
        :closable="false"
        width="1440px"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div class="modal__header px-[120px] pt-[46px] pb-[24px]">
          <button @click="handleCancel" class="x">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M27.0718 12.929L12.9297 27.0711M27.0718 27.071L12.9297 12.9289"
                stroke="#353437"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div>
            <h4 class="modal__title">
              Веб-дизайн для интернет-магазина Home24
            </h4>
            <div class="komarovo">
              <p class="modal__category">Веб-дизайн</p>
              <div class="dot"></div>
              <p class="modal__date">16:23 16.09.2023</p>
            </div>
          </div>
          <div class="modal__header-right">
            <div class="modal__views">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M15.8477 7.88982C16.7174 8.80488 16.7174 10.1951 15.8477 11.1102C14.3809 12.6535 11.8616 14.75 9 14.75C6.13836 14.75 3.61912 12.6535 2.15228 11.1102C1.28257 10.1951 1.28257 8.80488 2.15228 7.88982C3.61912 6.3465 6.13836 4.25 9 4.25C11.8616 4.25 14.3809 6.3465 15.8477 7.88982Z"
                    stroke="#353437"
                  />
                  <path
                    d="M11.25 9.5C11.25 10.7426 10.2426 11.75 9 11.75C7.75736 11.75 6.75 10.7426 6.75 9.5C6.75 8.25736 7.75736 7.25 9 7.25C10.2426 7.25 11.25 8.25736 11.25 9.5Z"
                    stroke="#353437"
                  />
                </svg>
              </span>
              <p>300</p>
            </div>
            <div class="modal__likes">
              <p>Понравилось</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.53334 14.25H10.9077C12.2843 14.25 13.4842 13.3131 13.8181 11.9776L15.0341 7.1138C15.2707 6.16708 14.5547 5.25 13.5789 5.25H9.87502L10.8552 3.56976C11.5843 2.31978 10.6827 0.75 9.23557 0.75H8.37502L5.47383 5.82707C5.40908 5.94039 5.37502 6.06865 5.37502 6.19917V12.3486C5.37502 12.5994 5.50034 12.8336 5.70899 12.9727L6.86924 13.7462C7.36204 14.0747 7.94107 14.25 8.53334 14.25ZM2 5.25H2.75C3.57843 5.25 4.25 5.92157 4.25 6.75V12C4.25 12.8284 3.57843 13.5 2.75 13.5H2C1.17157 13.5 0.5 12.8284 0.5 12V6.75C0.5 5.92157 1.17157 5.25 2 5.25Z"
                    fill="#5C46E6"
                  />
                </svg>
              </span>
              <article>15</article>
            </div>
          </div>
        </div>
        <div class="modal__images px-[120px] grid gap-[16px] grid-cols-3">
          <div>
            <img src="@/assets/images/modal-1.jpg" alt="" />
          </div>
          <div>
            <img src="@/assets/images/modal-2.jpg" alt="" />
          </div>
          <div>
            <img src="@/assets/images/modal-3.jpg" alt="" />
          </div>
          <div>
            <img src="@/assets/images/modal-4.jpg" alt="" />
          </div>
        </div>
        <div class="modal__desc py-[72px]">
          <p>
            В течение последнего десятилетия мы стремились помочь нашим
            партнерам, от малого и среднего бизнеса до таких предприятий, как
            Corel и Oppo, расширить свое цифровое присутствие и повысить
            качество своих продуктов. Мы всегда стараемся делать это с большой
            отдачей и страстью, потому что это Путь!
          </p>
          <p>
            Наша приверженность принесла нам звездную оценку 4,9 ★★★★★ на основе
            более чем 60 отзывов на Clutch. Наша страсть привела к получению
            более 70 наград, в том числе Top-1 Dribbble
          </p>
          <p>
            Так что, если наша команда находит отклик у вас, просто напишите
            нам. Давайте обсудим, чего мы можем достичь вместе!
          </p>
        </div>
        <div class="modal__owner">
          <div class="modal__cardo">
            <div class="modal__cardo-person">
              <img src="@/assets/images/person.png" alt="" />
            </div>
            <h4 class="modal__cardo-name">Muhammadullo Egamberdiyev</h4>
            <p class="modal__cardo-status">
              Зарегистрирован: более 5 лет назад
            </p>
            <div class="modal__cardo-footer">
              <div class="modal__cardo-item">
                <p>ID: 545</p>
              </div>
              <div class="modal__cardo-item">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M8.36198 2.72614C9.03255 1.31346 10.9701 1.31346 11.6406 2.72613L12.7995 5.16761C13.0658 5.72858 13.5806 6.11741 14.176 6.20736L16.7674 6.59887C18.2669 6.8254 18.8656 8.74125 17.7806 9.84086L15.9054 11.7413C15.4745 12.1779 15.2779 12.8071 15.3796 13.4236L15.8223 16.1071C16.0784 17.6598 14.511 18.8438 13.1698 18.1107L10.852 16.8438C10.3194 16.5527 9.68318 16.5527 9.15061 16.8438L6.83277 18.1107C5.49163 18.8438 3.92415 17.6598 4.18029 16.1071L4.62296 13.4236C4.72467 12.8071 4.52806 12.1779 4.0972 11.7413L2.22203 9.84086C1.13702 8.74125 1.73574 6.82541 3.23519 6.59887L5.82661 6.20736C6.42204 6.11741 6.93677 5.72858 7.20306 5.16761L8.36198 2.72614Z"
                      fill="#F2C94C"
                    />
                  </svg>
                </span>
                <p>849</p>
              </div>
              <div class="modal__cardo-item">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle cx="8" cy="8" r="4" fill="#19E045" />
                    <circle
                      opacity="0.3"
                      cx="8"
                      cy="8"
                      r="5.75"
                      stroke="#19E045"
                      stroke-width="0.5"
                    />
                    <circle
                      opacity="0.2"
                      cx="8"
                      cy="8"
                      r="7.75"
                      stroke="#19E045"
                      stroke-width="0.5"
                    />
                  </svg>
                </span>
                <p>Online</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal__others pl-[120px] pb-[40px]">
          <a-carousel
            :slidesToShow="3.2"
            :infinite="false"
            :after-change="onChange"
            draggable
            :responsive="[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
            ]"
          >
            <ModalCard
              v-for="portfolio in portfolios"
              :portfolio="portfolio"
              :key="portfolio?.id"
            />
            <ModalCard
              v-for="portfolio in portfolios"
              :portfolio="portfolio"
              :key="portfolio?.id"
            />
            <ModalCard
              v-for="portfolio in portfolios"
              :portfolio="portfolio"
              :key="portfolio?.id"
            />
          </a-carousel>
        </div>
      </a-modal>
    </ProfileLayout>
  </div>
</template>
<script>
import ProfileLayout from "@/components/profile/ProfileLayout.vue";
import PortfolioCard from "@/components/profile/portfolio/PortfolioCard.vue";
import VPagination from "@/components/VPagination.vue";
import PortfolioViewCard from "@/components/profile/portfolio/PortfolioViewCard.vue";

import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";

import ModalCard from "@/components/profile/portfolio/ModalCard.vue";

export default {
  data() {
    return {
      visible: false,
    };
  },

  async asyncData({ store, query, params }) {
    try {
      const [freeLancerData, portfoliosData] = await Promise.all([
        store.dispatch("fetchFreelancers/getFreelancerById", {
          params: {
            params: {},
          },
          id: params.index,
        }),
        store.dispatch("fetchPortfolio/getWorks", {
          params: {
            freelancer: params.index,
          },
        }),
      ]);
      const portfolios = portfoliosData.data;
      const freelancer = freeLancerData.content;
      return {
        freelancer,
        portfolios,
      };
    } catch (e) {}
  },

  components: {
    ProfileLayout,
    PortfolioCard,
    PortfolioViewCard,
    ModalCard,
  },

  mounted() {
    new Swiper(".othersSwiper", {
      slidesPerView: 3.2,
      spaceBetween: 16,
      autoplay: {
        delay: 40000,
      },
    });
  },

  methods: {
    handleOk() {
      this.visible = true;
    },
    handleCancel(e) {
      this.visible = false;
    },
    onChange(a, b, c) {
      console.log(a, b, c);
    },
  },

  watch: {
    visible(val) {
      if (!val) {
        this.$emit("handleOkProp");
      }
    },
    visibleProp(val) {
      this.visible = val;
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
.count {
  box-shadow: 0px 4px 16px 0px rgba(11, 11, 21, 0.16);
}
.wrapper >>> ant-modal-content {
  border-radius: 16px;
}
.ant-carousel >>> .slick-slide {
  padding-right: 16px;
}
.modal__images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
}
.modal__images div {
  height: 310px;
}
.modal__images div:first-child {
  grid-column: 1 / 4;
  height: 717px;
}
.modal__title {
  color: var(--Black, #020105);
  font-family: "TT Interfaces";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  margin-bottom: 8px;
}
.komarovo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #5c46e5;
}
.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.x {
  position: absolute;
  top: 24px;
  right: 24px;
}
.modal__header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}
.modal__views {
  border-radius: 6px;
  background: var(--BG-grey, #f8f9ff);
  gap: 8px;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  color: var(--grey-80, #353437);
  font-family: "TT Interfaces";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 21px */
}
.modal__likes {
  border-radius: 6px;
  background: var(--BG-grey, #f8f9ff);
  gap: 8px;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  color: var(--Blue, #5c46e5);
  font-family: "TT Interfaces";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.modal__desc {
  max-width: 794px;
  margin: 0 auto;
}
.modal__desc p {
  color: var(--grey-64, #5d5d5f);
  font-family: "TT Interfaces";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}
.modal__owner,
.modal__others {
  background: var(--BG-grey, #f8f9ff);
}
.modal__cardo {
  border-radius: 16px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--White, #fff);
  margin: 0 auto;
  width: 100%;
  max-width: 328px;
  padding: 16px;
}
.modal__owner {
  padding: 32px 0;
}
.modal__cardo-person {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}
.modal__cardo-person img {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
}
.modal__cardo-name {
  color: var(--Black, #020105);
  text-align: center;
  font-family: "TT Interfaces";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  margin-bottom: 8px;
}
.modal__cardo-status {
  color: var(--grey-40, #9a999b);
  text-align: center;
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-bottom: 24px;
}
.modal__cardo-footer {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
}
.modal__cardo-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #e7edfb;
}
.modal__cardo-item:last-child {
  border-right: 0;
}
@media (max-width: 1200px) {
  .scroll-none::-webkit-scrollbar {
    display: none;
  }
  .modal__header,
  .modal__images,
  .modal__desc,
  .modal__others {
    padding: 0;
  }
  .modal__header {
    flex-direction: column;
    align-items: flex-start;
    grid-area: 12px;
    margin-bottom: 32px;
  }
  .x {
    top: -40px;
    right: 0;
  }
  .modal__title {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
  .komarovo {
    margin-bottom: 16px;
  }
  .modal__images div:first-child {
    height: 217px;
    border-radius: 12px;
    overflow: hidden;
    grid-column: 1/3;
  }
  .modal__images div {
    height: 140px;
  }
  .modal__images {
    gap: 8px;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 16px;
  }
  .modal__desc p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 16px;
  }
  .modal__owner {
    padding: 56px 16px 32px 16px;
    margin: 0 -16px;
  }
  .modal__cardo-person {
    margin-bottom: 8px;
  }
  .modal__cardo img {
    width: 66px;
    height: 66px;
  }
  .modal__cardo-name {
    margin-bottom: 4px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .modal__cardo-status {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 16px;
  }
  .modal__cardo {
    width: 100%;
    max-width: 100%;
  }
  .modal__others {
    margin: 0 -16px -56px -16px;
    padding: 0 16px 56px 16px;
  }
  .ant-carousel >>> .slick-slide {
    padding-right: 4px;
  }
}
</style>
