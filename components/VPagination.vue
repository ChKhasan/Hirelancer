<template lang="html">
  <div>
    <div>
      <a-pagination class="order-pagination" :default-current="6" :total="500" />
    </div>
  </div>
</template>
<script>
export default {};
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
</style>
