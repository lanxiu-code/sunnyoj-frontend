<template>
  <a-card class="card" :bordered="false">
    <template #title>
      <icon-font class="iconFont" type="icon-youqinglianjie" />
      <span>友情链接</span>
    </template>
    <a-list
      size="small"
      :split="false"
      item-layout="horizontal"
      :data-source="linkData"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <a-typography-link :href="item.link" target="_blank">
            {{ item.title }}
          </a-typography-link>
        </a-list-item>
      </template>
    </a-list>
  </a-card>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
interface Props {
  IconFont: any;
}
const { IconFont } = defineProps<Props>();
const linkData = ref([
  {
    url: "https://www.antdv.com/",
    title: "Ant Design Vue",
  },
  {
    url: "https://www.antdv.com/",
    title: "Ant Design Vue",
  },
  {
    url: "https://www.antdv.com/",
    title: "Ant Design Vue",
  },
  {
    url: "https://www.antdv.com/",
    title: "Ant Design Vue",
  },
  {
    url: "https://www.antdv.com/",
    title: "Ant Design Vue",
  },
  {
    url: "https://www.antdv.com/",
    title: "Ant Design Vue",
  },
  {
    url: "https://www.antdv.com/",
    title: "Ant Design Vue",
  },
  {
    url: "https://www.antdv.com/",
    title: "Ant Design Vue",
  },
]);
</script>

<style lang="scss" scoped>
@import url("@/assets/style/card.scss");
.card {
  height: 300px;
}
</style>
