<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { prefetchApps } from 'qiankun'
import router from './router/route'
import { staticApps, dynamicApps } from './microApps'
onBeforeMount(() => {
  prefetchApps([...staticApps, ...dynamicApps])
})

const menus = router[0].children
</script>

<template>
  <div class="app">
    <div class="side">
      <div class="logo">
        <img src="./assets/vue.svg" alt="" srcset="">
        <h3>vue-admin</h3>
      </div>
      <router-link class="menu" :to="menu.path" v-for="menu in menus">{{ menu.name }}</router-link>
    </div>
    <div class="main">
      <header class="header">
        <h2>header</h2>
      </header>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.side {
  width: 280px;
  padding: 18px;
  border-right: 1px solid #efefef;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px auto;
}

.menu {
  display: block;
  font-size: 14px;
  line-height: 1.8;
}

.main {
  flex: 1;
}

.header {
  height: 56px;
  line-height: 56px;
  font-size: 16px;
  padding: 0 24px;
  box-shadow: 0 2px 2px #efefef;
}

.content {
  height: calc(100vh - 56px);
  box-sizing: border-box;
  padding: 24px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
