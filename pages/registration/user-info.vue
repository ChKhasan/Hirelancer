<template lang="html">
  <div class="registration pt-[130px] pb-[100px] w-full overflow-hidden">
    <div class="2xl:container mx-auto h-full flex flex-col gap-4">
      <div class="flex justify-center">
        <UserInfo
          @sendRegister="sendRegister"
          :regions="regions"
          :specialities="specialities"
        />
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
  async asyncData({ store }) {
    const [regionsData, freeLancersData] = await Promise.all([
      store.dispatch("fetchRegions/getRegions"),
      store.dispatch("fetchSpecialities/getSpecialities"),
    ]);
    const regions = regionsData.content;
    const specialities = freeLancersData.content;

    return {
      regions,
      specialities,
    };
  },
  methods: {
    sendRegister(form) {
      this.__POST_REGISTER(form);
    },
    async __POST_REGISTER(form) {
      try {
        const data = await this.$store.dispatch("fetchAuth/postRegister", form);
        if (data.success) {
          // localStorage.setItem("auth-token", data.content.accessToken);
          this.$router.push("/profile/freelancer");
        }
      } catch (e) {}
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
