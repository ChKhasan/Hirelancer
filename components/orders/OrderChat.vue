<template lang="html">
    <div>
        <div class="chat rounded-[16px] border border-solid border-grey-light ">
            <div
              class="flex justify-between px-6 py-[18px] border-[0] border-b border-solid border-grey-light"
            >
              <h3 class="text-[24px] text-black font-semibold">Онлайн чат</h3>
              <p class="text-[14px] text-grey-64">В сети / Был(а) 3 минут назад</p>
            </div>
            <div class="chat-body px-6 py-6 flex flex-col gap-[30px]">
              <div
                class="chat-card px-4 py-4 rounded-[12px] max-w-[70%] border border-dashed border-grey-light bg-bg-grey flex flex-col gap-3"
              >
                <p class="text-base text-black">
                  Приветствую! Меня заинтересовал ваш проект. Моя цель – создавать
                  интересные и интуитивно понятные пользовательские интерфейсы, которые
                  вдохновляют и привлекают
                </p>
                <span class="flex w-full h-[1px] bg-grey-light"></span>
                <div class="flex flex-col gap-1">
                  <h5 class="text-[14px] text-black font-semibold">600 000 so’m</h5>
                  <div class="flex justify-between">
                    <h6 class="text-[14px] text-grey-64 font-regular flex gap-1">
                      Muddat:<span class="text-[14px] text-black font-semibold"
                        >5 kun</span
                      >
                    </h6>
                    <p class="text-[12px] text-black">14:30</p>
                  </div>
                </div>
              </div>
            <div class="flex justify-center">  <div class="chat-date w-[123px] h-[32px] rounded-[50px] flex justify-center items-center bg-bg-grey text-black text-[14px]">
              <span>20.09.2023</span>
              </div></div>
             <div class="flex justify-end">
              <div class="chat-client-card max-w-[40%] flex gap-2 px-3 py-3 rounded-t-[10px] rounded-l-[10px] bg-meta-grey items-end">
              <p class="text-white text-[14px]">Меня заинтересовал ваш проект. Моя цель – создавать интересные и интуитивно по</p>
              <span class="text-white text-[12px]">14:30</span>
              </div>
             </div>
             <div class="flex justify-start">
              <div class="chat-client-card max-w-[40%] flex gap-2 px-3 py-3 rounded-t-[10px] rounded-l-[10px] bg-bg-grey items-end">
              <p class="text-black text-[14px]">Bu men yozganim</p>
              <span class="text-black text-[12px]">14:30</span>
              </div>
             </div>
            </div>
            <div
              class="chat-footer flex justify-between items-center px-6 py-4 border-[0] border-t border-solid border-grey-light"
            >
              <a-input placeholder="Напишите сообщение ..." class="text-input" />
              <button
                class="w-[48px] min-w-[48px] h-[48px] rounded-full flex justify-center items-center bg-main-color"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5.35254 16.0003V18.3813C5.35254 19.1243 6.13454 19.6083 6.79954 19.2753L21.3525 12.0003L6.79954 4.72526C6.13454 4.39226 5.35254 4.87626 5.35254 5.61926V12.0003H12.0195"
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
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
    .text-input {
  border: none;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
}
.text-input:focus {
  outline: none;
  box-shadow: none;
}
.text-input::placeholder {
  color: var(--grey-40);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 150%;
}
</style>