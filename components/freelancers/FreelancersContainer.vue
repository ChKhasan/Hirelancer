<template lang="html">
  <div class="freelancer-container">
    <div class="filter-items flex gap-4">
      <div
        class="h-[40px] px-[24px] rounded-[8px] border border-solid border-grey-light bg-bg-grey flex gap-2 items-center text-black text-[14px]"
      >
        HTML-верстка
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732"
              stroke="#BB2649"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        class="h-[40px] px-[24px] rounded-[8px] border border-solid border-grey-light bg-bg-grey flex gap-2 items-center text-black text-[14px]"
      >
        Онлайн
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732"
              stroke="#BB2649"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="body flex flex-col gap-8 mt-[26px]">
      <div class="list grid grid-cols-3 gap-4">
        <FreelancerCard :freelancer="{name: 'Khasan'}"/>
        <FreelancerCard :freelancer="{name: 'Khasan'}"/>
        <FreelancerCard :freelancer="{name: 'Khasan'}"/>
        <FreelancerCard :freelancer="{name: 'Khasan'}"/>
        <FreelancerCard :freelancer="{name: 'Khasan'}"/>
        <FreelancerCard :freelancer="{name: 'Khasan'}"/>
        <FreelancerCard :freelancer="{name: 'Khasan'}"/>
        <FreelancerCard :freelancer="{name: 'Khasan'}"/>
        <FreelancerCard :freelancer="{name: 'Khasan'}"/>
        <FreelancerCard :freelancer="{name: 'Khasan'}"/>
        <FreelancerCard :freelancer="{name: 'Khasan'}"/>
        <FreelancerCard :freelancer="{name: 'Khasan'}"/>
        <FreelancerCard :freelancer="{name: 'Khasan'}"/>
        <FreelancerCard :freelancer="{name: 'Khasan'}"/>
      </div>
      <VPagination :load="true"/>
    </div>
  </div>
</template>
<script>
import VPagination from "../VPagination.vue";
import FreelancerCard from "../home/FreelancerCard.vue";

export default { components: { FreelancerCard, VPagination } };
</script>
<style lang=""></style>
