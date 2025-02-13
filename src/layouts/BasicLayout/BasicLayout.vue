<template>
  <div class="basicLayout">
    <a-layout class="layout">
      <a-layout-header class="headerStyle">
        <OJHeader />
      </a-layout-header>
    </a-layout>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import OJHeader from "../../components/OJHeader.vue";
</script>

<style lang="scss" scoped>
.basicLayout {
  .layout {
    position: sticky;
    top: 0;
    z-index: 100;
    .headerStyle {
      background-color: #fff;
      box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
      font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
    }
  }

  .content {
    padding: 15px;
    box-sizing: border-box;
  }
}
</style>
