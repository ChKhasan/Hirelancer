<template lang="html">
  <div class="profile xl:px-4">
    <ProfileLayout :profile="true" :freelancer="$store.state.userInfo">
      <div class="mt-8 xl:mt-0">
        <Alerts />
      </div>
      <div class="personal-information mt-8" v-if="$route.params.user == 'freelancer'">
        <PersonalInfo :isEdit="true" :profile="true"  />
        <Achievements :profile="true" />
      </div>
      <div
        class="personal-information mt-[45px] xl:mt-6 xl:pb-6 xl:border-[0] xl:border-b xl:border-solid xl:border-grey-light"
        v-if="$route.params.user == 'freelancer'"
      >
        <Statistics />
      </div>
      <div class="mt-[45px] xl:mt-6">
        <Events />
      </div>
      <div class="mt-[40px] xl:mt-6" v-if="$route.params.user == 'freelancer'">
        <Comments />
      </div>
    </ProfileLayout>
  </div>
</template>
<script>
import PersonalInfo from "@/components/profile/portfolio/PersonalInfo.vue";
import Achievements from "@/components/profile/portfolio/Achievements.vue";
import Portfolios from "@/components/profile/portfolio/Portfolios.vue";
import Events from "@/components/profile/Events.vue";
import Alerts from "@/components/profile/Alerts.vue";
import ProfileLayout from "@/components/profile/ProfileLayout.vue";
import Statistics from "@/components/profile/Statistics.vue";
import Comments from "@/components/profile/Comments.vue";

export default {
  data() {
    return {
      userInfo: {},
    };
  },

  components: {
    PersonalInfo,
    Achievements,
    Portfolios,
    Events,
    ProfileLayout,
    Statistics,
    Alerts,
    Comments,
  },
};
</script>
<style lang="css" scoped>
.personal-information {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 16px;
}
@media (max-width: 1200px) {
  .personal-information {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
</style>
