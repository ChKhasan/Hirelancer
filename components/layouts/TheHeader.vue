<template lang="html">
  <div class="header bg-white py-6">
    <div class="max-w-[1776px] mx-auto flex justify-between">
      <div class="left flex gap-[80px] items-center">
        <div class="logo">
          <nuxt-link to="/">
            <svg
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
              <circle cx="81.8028" cy="7.8784" r="4.14823" fill="white" />
              <circle cx="119.966" cy="7.8784" r="4.14823" fill="white" /></svg
          ></nuxt-link>
        </div>
        <div class="menu flex gap-[40px]">
          <nuxt-link class="text-[18px] text-black font-tt font-normal" to="/"
            >Buyurtmalar</nuxt-link
          >
          <nuxt-link class="text-[18px] text-black font-tt font-normal" to="/"
            >Frilanserlar</nuxt-link
          >
          <nuxt-link class="text-[18px] text-black font-tt font-normal" to="/"
            >Ishlar</nuxt-link
          >
          <nuxt-link class="text-[18px] text-black font-tt font-normal" to="/"
            >Forum</nuxt-link
          >
        </div>
      </div>
      <div class="right flex gap-12">
        <div class="buttons flex gap-4">
          <button
            class="w-[52px] h-[52px] rounded-full border-[2px] border-grey-8 border-solid flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M23.2544 24.7983L15 20.0564L6.74561 24.7983V8.91603C6.74561 6.8645 8.40837 5.20174 10.4599 5.20174H19.5388C21.5904 5.20174 23.2531 6.8645 23.2531 8.91603V24.7983H23.2544Z"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            class="relative w-[52px] h-[52px] rounded-full border-[2px] border-grey-8 border-solid flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M17.8253 25.2032C17.2657 26.1837 16.2096 26.8449 15 26.8449C13.7891 26.8449 12.733 26.1837 12.1734 25.2019M3.44482 21.5842H26.5563L23.8821 17.5876C23.4735 16.976 23.2543 16.2579 23.2543 15.5225V11.7005C23.2543 7.14184 19.5586 3.44612 15 3.44612C10.4413 3.44612 6.74559 7.14184 6.74559 11.7005V15.5237C6.74559 16.2592 6.52768 16.9785 6.11787 17.5889L3.44482 21.5842Z"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="absolute bottom-0 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#F2154A" />
              </svg>
            </span>
          </button>
          <button
            class="w-[52px] h-[52px] rounded-full border-[2px] border-grey-8 border-solid flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M3.94501 8.61269L15 18.0866L26.0549 8.61269M22.8408 23.2519H7.15911C5.10759 23.2519 3.44482 21.5892 3.44482 19.5376V10.4624C3.44482 8.41089 5.10759 6.74812 7.15911 6.74812H22.8421C24.8936 6.74812 26.5563 8.41089 26.5563 10.4624V19.5389C26.5551 21.5892 24.8923 23.2519 22.8408 23.2519Z"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div class="login flex gap-6">
          <button @click="visible = true" class="text-black text-[18px] font-normal">
            Kirish
          </button>
          <button
            @click="$router.push('/registration')"
            class="rounded-xl text-4 py-3 px-6 font-medium font-tt bg-blue text-white"
          >
            Ro’yxatdan o’ting
          </button>
        </div>
      </div>
    </div>
    <LoginAuth :visibleProp="visible" @handleOkProp="handleOk" />
  </div>
</template>
<script>
import LoginAuth from "../modals/LoginAuth.vue";

export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleOk() {
      this.visible = false;
    },
  },
  components: { LoginAuth },
};
</script>
<style lang="css" scoped>
.header {
  box-shadow: 0px 4px 8px 0px rgba(92, 70, 229, 0.08);
}
</style>
