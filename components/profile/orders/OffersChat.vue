<template lang="html">
  <div
    class="offers-chat rounded-[16px] border border-solid border-grey-8 bg-white relative"
  >
    <button class="absolute top-4 right-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6.66699 6.64648L17.333 17.3105M6.66699 17.3105L17.333 6.64648"
          stroke="#020105"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div class="head px-6 py-6 border-[0] border-b border-solid border-grey-8">
      <div
        class="image w-[60px] h-[60px] border-[2px] border-solid border-agro-green rounded-full overflow-hidden"
      >
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/user-avatar.jpg"
          alt=""
        />
      </div>
      <div>
        <h5 class="text-base text-black font-medium">Muhammadullo Egamberdiyev</h5>
        <p class="text-grey-40 text-[14px]">14:30</p>
      </div>
    </div>
    <div
      class="board px-6 py-6 flex flex-col gap-4 border-[0] border-b border-solid border-grey-8"
    >
      <div class="flex justify-start">
        <div
          class="client-content px-[10px] max-w-[295px] py-[10px] bg-bg-grey rounded-[10px] rounded-bl-none flex gap-2 items-end"
        >
          <p class="text-base text-black">5 дней</p>
          <span class="text-[12px] text-grey-40">14:30</span>
        </div>
      </div>
      <div class="flex justify-end">
        <div
          class="content px-[10px] py-[10px] max-w-[295px] bg-blue rounded-[10px] rounded-br-none flex gap-2 items-end"
        >
          <p class="text-base text-white">
            Меня заинтересовал ваш проект. Моя цель – создавать интересные и интуитивно по
          </p>
          <span class="text-[12px] text-grey-40">14:30</span>
        </div>
      </div>
      <div class="flex justify-start">
        <div
          class="client-content px-[10px] max-w-[295px] py-[10px] bg-bg-grey rounded-[10px] rounded-bl-none flex gap-2 items-end"
        >
          <p class="text-base text-black">5 дней</p>
          <span class="text-[12px] text-grey-40">14:30</span>
        </div>
      </div>
      <div class="flex justify-end">
        <div
          class="content px-[10px] py-[10px] max-w-[295px] bg-blue rounded-[10px] rounded-br-none flex gap-2 items-end"
        >
          <p class="text-base text-white">
            Меня заинтересовал ваш проект. Моя цель – создавать интересные и интуитивно по
          </p>
          <span class="text-[12px] text-grey-40">14:30</span>
        </div>
      </div>
    </div>
    <div class="footer px-4 py-4">
      <input type="text" placeholder="Напишите сообщение ..." />
      <button class="h-12 w-12 flex justify-center items-center rounded-full bg-blue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.35254 15.9993V18.3803C5.35254 19.1233 6.13454 19.6073 6.79954 19.2743L21.3525 11.9993L6.79954 4.72428C6.13454 4.39128 5.35254 4.87528 5.35254 5.61828V11.9993H12.0195"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.head {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 16px;
}
.footer {
  display: grid;
  grid-template-columns: 1fr 48px;
  gap: 16px;
}
.footer input::placeholder {
  color: var(--grey-40);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 150%;
}
.footer input {
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
}
</style>
