<template lang="html">
  <div>
    <div class="flex gap-4">
      <button
        v-if="load"
        class="h-[52px] rounded-[8px] bg-bg-grey text-grey-40 text-base border border-solid border-grey-8 w-[228px] flex justify-center items-center xl:hidden"
      >
        Load more
      </button>
      <a-pagination
        class="order-pagination"
        v-model.number="current"
        @change="pageChange"
        :total="totalPage"
        :page-size.sync="params.pageSize"
        :hideOnSinglePage="true"
      />
    </div>
  </div>
</template>
<script>
import global from "@/mixins/global";
export default {
  props: ["totalPage", "load"],
  mixins: [global],
  mounted() {
    this.getFirstData();
  },
  methods: {
    async pageChange(e) {
      await this.changePagination(e);
      this.$emit("getData");
    },
  },
  watch: {
    "$route.query.page"(val) {
      if (val != this.current) {
        this.current = val;
      }
    },
  },
};
</script>
<style lang="css" scoped>
.order-pagination :deep(.ant-pagination-item),
.order-pagination :deep(.ant-pagination-prev),
.order-pagination :deep(.ant-pagination-next),
.order-pagination :deep(.ant-pagination-jump-prev),
.order-pagination :deep(.ant-pagination-jump-next) {
  min-width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid var(--grey-8);
  background: var(--bg-grey);
}
.order-pagination :deep(.ant-pagination-prev) a,
.order-pagination :deep(.ant-pagination-next) a {
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
}
.order-pagination :deep(.ant-pagination-jump-next) .ant-pagination-item-container,
.order-pagination :deep(.ant-pagination-jump-prev) .ant-pagination-item-container {
  display: flex;
  /* align-items: center; */
  justify-content: center;
}
.order-pagination :deep(.ant-pagination-jump-next) .ant-pagination-item-container span,
.order-pagination :deep(.ant-pagination-jump-prev) .ant-pagination-item-container span {
  left: auto;
  top: auto;
  bottom: auto;
  right: auto;
}
.order-pagination {
  display: flex;
}
.order-pagination :deep(.ant-pagination-item) a {
  color: var(--grey-40);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.order-pagination :deep(.ant-pagination-item-active) {
  border-color: var(--blue);
}
.order-pagination :deep(.ant-pagination-item-active) a {
  color: var(--blue);
}
@media (max-width: 1200px) {
  .order-pagination :deep(.ant-pagination-item),
  .order-pagination :deep(.ant-pagination-prev),
  .order-pagination :deep(.ant-pagination-next),
  .order-pagination :deep(.ant-pagination-jump-prev),
  .order-pagination :deep(.ant-pagination-jump-next) {
    min-width: 48px;
    height: 48px;
  }
  .order-pagination :deep(.ant-pagination-item) a {
    font-size: 14px;
  }
  
}
@media (max-width: 576px) {
  .order-pagination :deep(.ant-pagination-item),
  .order-pagination :deep(.ant-pagination-prev),
  .order-pagination :deep(.ant-pagination-next),
  .order-pagination :deep(.ant-pagination-jump-prev),
  .order-pagination :deep(.ant-pagination-jump-next) {
    min-width: 32px;
    height: 32px;
    border-radius: 4px;
  }
  .order-pagination :deep(.ant-pagination-item) a {
    font-size: 14px;
  }
  
}
</style>
