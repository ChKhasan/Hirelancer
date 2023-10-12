<template lang="html">
  <div class="layout W-100">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
<script>
import TheFooter from "../components/layouts/TheFooter.vue";
import TheHeader from "../components/layouts/TheHeader.vue";

export default {
  components: { TheHeader, TheFooter },
};
</script>
<style lang=""></style>
