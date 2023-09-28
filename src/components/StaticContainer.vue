<template>
  <div id="container"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { registerMicroApps, start } from "qiankun";
import { staticApps } from "../microApps";
onMounted(() => {
  registerMicroApps(staticApps);
  start({
    sandbox: {
      experimentalStyleIsolation: true,
    },
  });
});
</script>
<style scoped></style>
