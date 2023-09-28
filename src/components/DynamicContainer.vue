<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import { loadMicroApp, MicroApp } from "qiankun";
import { dynamicApps } from "../microApps";

const currentApp = ref<MicroApp>();
onMounted(() => {
  routerListener();
});

onBeforeUnmount(() => {
  window.removeEventListener("pushState", handleEvent);
  window.removeEventListener("popstate", handleEvent);
  currentApp.value?.unmount();
});

const handleEvent = () => {
  const path = window.location.pathname;
  const app = dynamicApps.find(function (app) {
    return app.activeRule === path;
  });
  currentApp.value?.unmount();
  if (app) {
    currentApp.value = loadMicroApp(app, {
      sandbox: {
        experimentalStyleIsolation: true
      }
    });
  }
};

const routerListener = () => {
  const _pushState = function (type: "pushState") {
    const origin = history[type];
    return function () {
      const ret = origin.apply(this, arguments);
      const e = new Event(type);
      e.arguments = arguments;
      window.dispatchEvent(e);
      return ret;
    };
  };
  history.pushState = _pushState("pushState");
  window.addEventListener("pushState", handleEvent);
  window.addEventListener("popstate", handleEvent);
};
</script>
<template>
  <div id="container2"></div>
</template>
