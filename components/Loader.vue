<template lang="html">
  <div
    class="loader-container fixed top-0 left-0 h-full w-full flex items-center justify-center bg-white z-50"
  >
    <span class="loader"></span>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.loader {
  position: relative;
  width: 48px;
  height: 48px;
  background: rgba(92, 71, 230, 0.6);
  transform: rotateX(65deg) rotate(45deg);
  color: #fff;
  animation: layers1 1s linear infinite alternate;
}
.loader:after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(92, 71, 230, 0.1);
  animation: layerTr 1s linear infinite alternate;
}

@keyframes layers1 {
  0% {
    box-shadow: 0px 0px 0 0px var(--blue);
  }
  90%,
  100% {
    box-shadow: 20px 20px 0 -4px var(--blue);
  }
}
@keyframes layerTr {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(-25px, -25px) scale(1);
  }
}
</style>
