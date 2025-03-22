<script lang="ts" setup>
const showDialog = ref(false);
</script>

<template>
  <div class="container">
    <TheMainMenu />
    <TheMainView/>
    <TheSidePanel/>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 70px);
}
</style>
