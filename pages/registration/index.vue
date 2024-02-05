<template lang="html">
  <div
    class="registration pt-[130px] xl:h-full h-[100vh] w-full overflow-hidden xl:pt-20 xl:px-4 relative"
  >
    <div class="2xl:container mx-auto h-full flex flex-col gap-4">
      <div class="flex justify-center">
        <NumberCheck @checkNumber="__POST_SEND_CODE" :loading="loading"/>
      </div>
    </div>
  </div>
</template>
<script>
import NumberCheck from "@/components/registration/NumberCheck.vue";
export default {
  layout: "empty",
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async __POST_SEND_CODE(form) {
      try {
        this.loading = true;
        const data = await this.$store.dispatch("fetchAuth/postSendCode", form);
        if (data.success) {
          this.$router.push("/registration/user-type");
        }
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },
  },
  components: { NumberCheck },
};
</script>
<style lang="css" scoped>
.number-card {
  width: 100%;
  max-width: 712px;
}
</style>
