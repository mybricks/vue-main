<template>
  <h1>vue3 + qiankun主应用案例项目</h1>
  <h3>
    macro-app1, macro-app2子应用采用静态配置加载<a
      target="_blank"
      href="https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles"
    >
      registerMicroApps
    </a>
  </h3>
  <span>参考/src/components/StaticContainer.vue实现</span>
  <h3>
    dynamic-app1, dynamic-app2子应用采用动态加载
    <a
      target="_blank"
      href="https://qiankun.umijs.org/zh/api#loadmicroappapp-configuration"
    >
      loadMicroApp
    </a>
  </h3>
  <span>参考/src/components/DynamicContainer.vue实现</span>
</template>

<style scoped></style>
