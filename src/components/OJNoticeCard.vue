<template>
  <a-card class="card" :bordered="false">
    <template #title>
      <icon-font class="iconFont" type="icon-luntangonggao" />
      <span>公告</span>
    </template>
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <template #extra> {{ item.createTime }} </template>
          <a-list-item-meta>
            <template #title>
              <a-typography-text>{{ item.title }}</a-typography-text>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </a-card>
</template>

<script setup lang="ts">
interface Props {
  IconFont: any;
}
const { IconFont } = defineProps<Props>();

const data: any[] = [
  {
    title: "Ant Design Title 1",
    createTime: "2020-1-1",
  },
  {
    title: "Ant Design Title 1",
    createTime: "2020-1-1",
  },
  {
    title: "Ant Design Title 1",
    createTime: "2020-1-1",
  },
  {
    title: "Ant Design Title 1",
    createTime: "2020-1-1",
  },
  {
    title: "Ant Design Title 1",
    createTime: "2020-1-1",
  },
  {
    title: "Ant Design Title 1",
    createTime: "2020-1-1",
  },
];
</script>

<style lang="scss" scoped>
@import url("@/assets/style/card.scss");
</style>
