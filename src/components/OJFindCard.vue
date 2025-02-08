<template>
  <a-card class="card" :bordered="false">
    <template #title>
      <icon-font class="iconFont" type="icon-chazhao" />
      <span>查找</span>
    </template>
    <a-input-search
      v-model:value="searchValue"
      placeholder="题目编号..."
      enter-button
      @search="onSearch"
    />
  </a-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface Props {
  IconFont: any;
}
const searchValue = ref("");
const { IconFont } = defineProps<Props>();
const onSearch = () => {
  console.log(searchValue.value);
};
</script>

<style lang="scss" scoped>
@import url("@/assets/style/card.scss");
</style>
