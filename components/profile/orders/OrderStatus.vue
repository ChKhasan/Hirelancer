<template lang="html">
  <div class="flex justify-center gap-[120px] items-center relative">
    <span class="absolute w-full top-[40px] h-[1px] bg-grey-8"></span>
    <div class="flex flex-col gap-3 items-center relative z-10" :class="{'active-blue': step == 1}">
      <span class="w-[79px] h-[79px] flex justify-center items-center relative">
        <div class="absolute h-full w-[160px] right-[-16px] bg-white z-0"></div>

        <span
          class="icon w-full h-full z-10 flex relative justify-center items-center rounded-full bg-bg-grey"
        >
          <svg
            v-if="step == 1"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M22.5 19V16C22.5 14.3431 21.1569 13 19.5 13H18.5C17.8705 13 17.2777 13.2964 16.9 13.8L15.7 15.4C14.9446 16.4072 13.759 17 12.5 17C11.241 17 10.0554 16.4072 9.3 15.4L8.1 13.8C7.72229 13.2964 7.12951 13 6.5 13H5.5C3.84315 13 2.5 14.3431 2.5 16V19C2.5 20.6569 3.84315 22 5.5 22H19.5C21.1569 22 22.5 20.6569 22.5 19Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.5 13H6.5C7.12951 13 7.72229 13.2964 8.1 13.8L9.3 15.4C10.0554 16.4072 11.241 17 12.5 17C13.759 17 14.9446 16.4072 15.7 15.4L16.9 13.8C17.2777 13.2964 17.8705 13 18.5 13H19.5C19.8506 13 20.1872 13.0602 20.5 13.1707V6C20.5 3.79086 18.7091 2 16.5 2H8.5C6.29086 2 4.5 3.79086 4.5 6V13.1707C4.81278 13.0602 5.14936 13 5.5 13ZM11.25 8.5C11.25 7.5335 12.0335 6.75 13 6.75C13.9665 6.75 14.75 7.5335 14.75 8.5C14.75 9.4665 13.9665 10.25 13 10.25C12.0335 10.25 11.25 9.4665 11.25 8.5ZM13 5.25C11.2051 5.25 9.75 6.70507 9.75 8.5C9.75 9.12574 9.92684 9.71018 10.2333 10.2061L8.96967 11.4697C8.67678 11.7626 8.67678 12.2374 8.96967 12.5303C9.26256 12.8232 9.73744 12.8232 10.0303 12.5303L11.2939 11.2667C11.7898 11.5732 12.3743 11.75 13 11.75C14.7949 11.75 16.25 10.2949 16.25 8.5C16.25 6.70507 14.7949 5.25 13 5.25Z"
              fill="white"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M22.5 19V16C22.5 14.3431 21.1569 13 19.5 13H18.5C17.8705 13 17.2777 13.2964 16.9 13.8L15.7 15.4C14.9446 16.4072 13.759 17 12.5 17C11.241 17 10.0554 16.4072 9.3 15.4L8.1 13.8C7.72229 13.2964 7.12951 13 6.5 13H5.5C3.84315 13 2.5 14.3431 2.5 16V19C2.5 20.6569 3.84315 22 5.5 22H19.5C21.1569 22 22.5 20.6569 22.5 19Z"
              fill="#ACA5DA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.5 13H6.5C7.12951 13 7.72229 13.2964 8.1 13.8L9.3 15.4C10.0554 16.4072 11.241 17 12.5 17C13.759 17 14.9446 16.4072 15.7 15.4L16.9 13.8C17.2777 13.2964 17.8705 13 18.5 13H19.5C19.8506 13 20.1872 13.0602 20.5 13.1707V6C20.5 3.79086 18.7091 2 16.5 2H8.5C6.29086 2 4.5 3.79086 4.5 6V13.1707C4.81278 13.0602 5.14936 13 5.5 13ZM11.25 8.5C11.25 7.5335 12.0335 6.75 13 6.75C13.9665 6.75 14.75 7.5335 14.75 8.5C14.75 9.4665 13.9665 10.25 13 10.25C12.0335 10.25 11.25 9.4665 11.25 8.5ZM13 5.25C11.2051 5.25 9.75 6.70507 9.75 8.5C9.75 9.12574 9.92684 9.71018 10.2333 10.2061L8.96967 11.4697C8.67678 11.7626 8.67678 12.2374 8.96967 12.5303C9.26256 12.8232 9.73744 12.8232 10.0303 12.5303L11.2939 11.2667C11.7898 11.5732 12.3743 11.75 13 11.75C14.7949 11.75 16.25 10.2949 16.25 8.5C16.25 6.70507 14.7949 5.25 13 5.25Z"
              fill="#ACA5DA"
            />
          </svg>
        </span>
      </span>
      <p class="text-[18px] font-medium text-grey-40 relative z-10">Идет прием заявок</p>
    </div>
    <div class="flex flex-col gap-3 items-center relative z-10" :class="{'active-blue': step == 2}">
      <span class="w-[79px] h-[79px] flex justify-center items-center relative">
        <div class="absolute h-full w-[122px] bg-white z-0"></div>
        <span
          class="icon w-full h-full z-10 flex relative justify-center items-center rounded-full bg-bg-grey"
        >
          <svg
            v-if="step == 2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M7 22C8.86748 22 10.4361 20.7202 10.8766 18.9899C11.0128 18.4547 11.4477 18 12 18H19V5C19 3.34315 17.6569 2 16 2H6C4.34315 2 3 3.34315 3 5V18C3 20.2091 4.79086 22 7 22Z"
              fill="white"
            />
            <path
              d="M19 22C20.8675 22 22.4361 20.7202 22.8766 18.9899C23.0128 18.4547 22.5523 18 22 18H19H12C11.4477 18 11.0128 18.4547 10.8766 18.9899C10.4361 20.7202 8.86748 22 7 22H19Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.25 7C6.25 6.58579 6.58579 6.25 7 6.25H15C15.4142 6.25 15.75 6.58579 15.75 7C15.75 7.41421 15.4142 7.75 15 7.75H7C6.58579 7.75 6.25 7.41421 6.25 7Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.25 12C6.25 11.5858 6.58579 11.25 7 11.25L11 11.25C11.4142 11.25 11.75 11.5858 11.75 12C11.75 12.4142 11.4142 12.75 11 12.75L7 12.75C6.58579 12.75 6.25 12.4142 6.25 12Z"
              fill="white"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M7 22C8.86748 22 10.4361 20.7202 10.8766 18.9899C11.0128 18.4547 11.4477 18 12 18H19V5C19 3.34315 17.6569 2 16 2H6C4.34315 2 3 3.34315 3 5V18C3 20.2091 4.79086 22 7 22Z"
              fill="#ACA5DA"
            />
            <path
              d="M19 22C20.8675 22 22.4361 20.7202 22.8766 18.9899C23.0128 18.4547 22.5523 18 22 18H19H12C11.4477 18 11.0128 18.4547 10.8766 18.9899C10.4361 20.7202 8.86748 22 7 22H19Z"
              fill="#ACA5DA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.25 7C6.25 6.58579 6.58579 6.25 7 6.25H15C15.4142 6.25 15.75 6.58579 15.75 7C15.75 7.41421 15.4142 7.75 15 7.75H7C6.58579 7.75 6.25 7.41421 6.25 7Z"
              fill="#ACA5DA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.25 12C6.25 11.5858 6.58579 11.25 7 11.25L11 11.25C11.4142 11.25 11.75 11.5858 11.75 12C11.75 12.4142 11.4142 12.75 11 12.75L7 12.75C6.58579 12.75 6.25 12.4142 6.25 12Z"
              fill="#ACA5DA"
            /></svg
        ></span>
      </span>
      <p class="text-[18px] font-medium text-grey-40">Идет прием заявок</p>
    </div>
    <div class="flex flex-col gap-3 items-center relative z-10" :class="{'active-green': step == 3}">
      <span class="w-[79px] h-[79px] flex justify-center items-center relative">
        <div class="absolute h-full w-[160px] left-[-16px] bg-white z-0"></div>
        <span
          class="icon w-full h-full z-10 flex relative justify-center items-center rounded-full bg-bg-grey"
        >
          <svg
            v-if="step == 3"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M6.5 22C8.36748 22 9.93606 20.7202 10.3766 18.9899C10.5128 18.4547 10.9477 18 11.5 18H18.5V5C18.5 3.34315 17.1569 2 15.5 2H5.5C3.84315 2 2.5 3.34315 2.5 5V18C2.5 20.2091 4.29086 22 6.5 22Z"
              fill="white"
            />
            <path
              d="M18.5 22C20.3675 22 21.9361 20.7202 22.3766 18.9899C22.5128 18.4547 22.0523 18 21.5 18H18.5H11.5C10.9477 18 10.5128 18.4547 10.3766 18.9899C9.93606 20.7202 8.36748 22 6.5 22H18.5Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.9939 7.43558C14.3056 7.70834 14.3372 8.18216 14.0645 8.49389L11.1946 11.7738C10.5779 12.4786 9.51561 12.5729 8.78433 11.9879L7.03151 10.5857C6.70806 10.3269 6.65562 9.85494 6.91438 9.53149C7.17313 9.20804 7.6451 9.1556 7.96855 9.41436L9.72137 10.8166C9.82584 10.9002 9.97759 10.8867 10.0657 10.786L12.9356 7.50613C13.2084 7.1944 13.6822 7.16282 13.9939 7.43558Z"
              fill="white"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M6.5 22C8.36748 22 9.93606 20.7202 10.3766 18.9899C10.5128 18.4547 10.9477 18 11.5 18H18.5V5C18.5 3.34315 17.1569 2 15.5 2H5.5C3.84315 2 2.5 3.34315 2.5 5V18C2.5 20.2091 4.29086 22 6.5 22Z"
              fill="#ACA5DA"
            />
            <path
              d="M18.5 22C20.3675 22 21.9361 20.7202 22.3766 18.9899C22.5128 18.4547 22.0523 18 21.5 18H18.5H11.5C10.9477 18 10.5128 18.4547 10.3766 18.9899C9.93606 20.7202 8.36748 22 6.5 22H18.5Z"
              fill="#ACA5DA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.9939 7.43558C14.3056 7.70834 14.3372 8.18216 14.0645 8.49389L11.1946 11.7738C10.5779 12.4786 9.51561 12.5729 8.78433 11.9879L7.03151 10.5857C6.70806 10.3269 6.65562 9.85494 6.91438 9.53149C7.17313 9.20804 7.6451 9.1556 7.96855 9.41436L9.72137 10.8166C9.82584 10.9002 9.97759 10.8867 10.0657 10.786L12.9356 7.50613C13.2084 7.1944 13.6822 7.16282 13.9939 7.43558Z"
              fill="#ACA5DA"
            /></svg
        ></span>
      </span>
      <p class="text-[18px] font-medium text-grey-40">Идет прием заявок</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step: 3,
    };
  },
};
</script>
<style lang="css" scoped>
.active-blue .icon {
  background-color: var(--blue) ;
}
.active-blue p {
  color: var(--blue);
}
.active-green .icon {
  background-color: var(--argo-green) ;
}
.active-green p {
  color: var(--argo-green);
}
</style>
