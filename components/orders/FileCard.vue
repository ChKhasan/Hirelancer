<template lang="html">
  <div class="card file-card flex flex-col gap-[8px]">
    <div class="image h-[104px] w-[104px] xl:w-full xl:h-[90px] xl:rounded-lg overflow-hidden">
      <img
        v-if="file?.file"
        loading="lazy"
        class="object-cover w-full h-full"
        :src="`${baseUrl}/storage/${file?.file}`"
        alt=""
      />
      <img
        v-else
        loading="lazy"
        class="object-cover w-full h-full"
        src="../../assets/images/file.png"
        alt=""
      />
    </div>
    <!-- <p class="text-[12px] text-grey-80">photo_202...-12.jpg</p> -->
  </div>
</template>
<script>
export default {
  props: ["file"],
  computed: {
    baseUrl() {
      return process.env.BASE_URL;
    },
  },
};
</script>
<style lang="css" scoped></style>
