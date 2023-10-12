<template lang="html">
  <div class="registration pt-[70px] pb-[100px] w-full overflow-hidden">
    <div class="2xl:container mx-auto h-full flex flex-col gap-4">
      <div class="flex justify-end">
        <button
          @click="$router.push('/')"
          class="flex h-[60px] w-[222px] border border-solid rounded-[12px] justify-center items-center text-[18px] text-grey-64"
        >
          Bekor qilish
        </button>
      </div>
      <div class="flex justify-center">
        <UserInfo @sendCode="sendCode" />
      </div>
    </div>
  </div>
</template>
<script>
import UserInfo from "../../components/registration/UserInfo.vue";
export default {
  layout: "empty",
  data() {
    return {};
  },
  methods: {
    sendCode(ad) {
      this.$router.push("/registration/user-info");
    },
  },
  components: { UserInfo },
};
</script>
<style lang="css" scoped>
.number-card {
  width: 100%;
  max-width: 712px;
}
</style>
