<template lang="html">
  <div
    class="comments-card border border-solid border-grey-8 rounded-[12px] px-4 py-4 flex flex-col gap-[19px] xl:gap-4 xl:min-w-[90%]"
  >
    <div class="price-info rounded-[4px] text-grey-80  text-base px-4 py-1 xl:px-2 xl:py-2 xl:text-[12px] xl:leading-4">
      За выполнение заказа
      <span class="text-black font-medium">Настройка Google Merchant Center</span> фид на
      сумму 200 000 so’m
    </div>
    <div class="body">
      <p class="text-base text-grey-64 xl:text-[14px] xl:leading-5">
        В течение последнего десятилетия мы стремились помочь нашим партнерам, от малого и
        среднего бизнеса до таких предприятий, как Corel и Oppo, расширить свое цифровое
        присутствие и повысить качество своих продуктов. Мы всегда стараемся делать это с
        большой отдачей и страстью, потому что это Путь!
      </p>
    </div>
    <div class="flex justify-between xl:flex-col xl:gap-4">
      <div class="flex gap-4">
        <div class="image w-[56px] h-[56px] rounded-full overflow-hidden xl:w-10 xl:h-10">
          <img
            class="w-full h-full object-cover"
            src="../../assets/images/user-avatar.jpg"
            alt=""
          />
        </div>
        <div class="flex flex-col gap-2">
          <h6 class="text-base text-black font-medium xl:text-[12px] xl:leading-4">Muhammadullo Egamberdiyev</h6>
          <p class="text-[12px] text-yellow flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M5.85243 1.90767C6.32183 0.918798 7.67808 0.918796 8.14748 1.90767L8.95873 3.6167C9.14513 4.00939 9.50544 4.28156 9.92224 4.34453L11.7362 4.61859C12.7858 4.77716 13.205 6.11825 12.4454 6.88798L11.1328 8.21828C10.8312 8.52394 10.6936 8.96433 10.7648 9.39593L11.0747 11.2743C11.254 12.3612 10.1567 13.1901 9.21793 12.6769L7.59544 11.79C7.22264 11.5863 6.77727 11.5863 6.40448 11.79L4.78199 12.6769C3.84319 13.1901 2.74596 12.3612 2.92525 11.2743L3.23512 9.39593C3.30632 8.96433 3.16869 8.52394 2.86709 8.21828L1.55447 6.88798C0.794965 6.11825 1.21407 4.77716 2.26368 4.61859L4.07768 4.34453C4.49448 4.28156 4.85479 4.00939 5.04119 3.6167L5.85243 1.90767Z"
                fill="#F2C94C"
              /></svg
            >4.4 (56)
          </p>
        </div>
      </div>
      <div class="flex flex-col justify-between gap-2 items-end xl:flex-row xl:items-center">
        <span
          class="flex gap-1 items-center bg-grey-light text-main-color text-[14px] px-[10px] h-[36px] rounded-[500px] border border-solid border-main-color xl:text-[12px] xl:font-semibold"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M14.9379 11.7044C14.9379 14.4319 12.7269 16.6429 9.99948 16.6429C7.27205 16.6429 5.06104 14.4319 5.06104 11.7044C5.06104 10.7956 5.23385 9.87681 5.528 8.98814C5.76726 9.98386 6.66355 10.7238 7.73268 10.7238C8.9849 10.7238 10 9.70871 10 8.45649C10 7.20426 9.14622 6.35205 9.14622 5.13471C9.14622 3.55024 10.2939 2.33594 11.61 2.33594C11.61 4.23535 12.3057 4.95405 13.0609 6.17342C13.9575 7.62093 14.9379 9.20384 14.9379 11.7044Z"
              stroke="#5C46E6"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          >Положительный</span
        >
        <p class="flex gap-2 text-[14px] text-grey-40 font-medium xl:text-[12px] ">
          <svg
          class="xl:w-4 xl:h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M2.25 6.75V13.5C2.25 15.1569 3.59315 16.5 5.25 16.5H12.75C14.4069 16.5 15.75 15.1569 15.75 13.5V6.75M2.25 6.75V5.625C2.25 3.96815 3.59315 2.625 5.25 2.625H12.75C14.4069 2.625 15.75 3.96815 15.75 5.625V6.75M2.25 6.75H15.75M12 1.5V3.75M6 1.5V3.75"
              stroke="#9A999B"
              stroke-linecap="round"
            /></svg
          >16.10.2023
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.price-info {
  background: rgba(255, 169, 39, 0.12);
}
</style>
