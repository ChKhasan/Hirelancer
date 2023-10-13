<template lang="html">
  <div class="registration pt-[70px] h-[100vh] w-full overflow-hidden">
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
        <UserType @sendCode="sendCode" />
      </div>
    </div>
  </div>
</template>
<script>
import UserType from "../../components/registration/UserType.vue";
export default {
  layout: "empty",
  data() {
    return {};
  },
  methods: {
    sendCode(form) {
      console.log(form);
      // this.$router.push("/registration/user-info");
      this.__POST_SEND_CODE(form);
    },
    async __POST_SEND_CODE(form) {
      try {
        const data = await this.$store.dispatch("fetchAuth/postLogin", form);
        if (data.success) {
          await localStorage.setItem("auth-token", data.content.accessToken);
          this.__GET_USER();
        }
      } catch (e) {}
    },
    async __GET_USER() {
      try {
        const userInfoData = this.$store.dispatch("fetchAuth/getUserInfo");
        this.userInfo = userInfoData;
        if (this.userInfo?.name) {
          this.$router.push("/profile/freelancer");
        } else {
          this.$router.push("/registration/user-info");
        }
      } catch (e) {}
    },
  },
  components: { UserType },
};
</script>
<style lang="css" scoped>
.number-card {
  width: 100%;
  max-width: 712px;
}
</style>
