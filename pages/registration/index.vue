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
        <NumberCheck @checkNumber="__POST_SEND_CODE" />
      </div>
    </div>
  </div>
</template>
<script>
import NumberCheck from "@/components/registration/NumberCheck.vue";
export default {
  layout: "empty",
  data() {
    return {};
  },
  methods: {
    async __POST_SEND_CODE(form) {
      try {
        const data = await this.$store.dispatch("fetchAuth/postSendCode", form);
        console.log(data);
        if (data.success) {
          this.$router.push("/registration/user-type");
        }
      } catch (e) {}
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
