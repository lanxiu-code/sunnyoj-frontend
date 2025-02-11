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
              <a-typography-link
                @click="jump(`/sunnyoj/viewnews/${item.id}`)"
                >{{ item.title }}</a-typography-link
              >
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </a-card>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

interface Props {
  IconFont: any;
}
const { IconFont } = defineProps<Props>();
const router = useRouter();
const data: any[] = [
  {
    id: 1,
    title: "Ant Design Title 1",
    createTime: "2020-1-1",
  },
  {
    id: 2,

    title: "Ant Design Title 1",
    createTime: "2020-1-1",
  },
  {
    id: 3,

    title: "Ant Design Title 1",
    createTime: "2020-1-1",
  },
  {
    id: 4,

    title: "Ant Design Title 1",
    createTime: "2020-1-1",
  },
  {
    id: 5,

    title: "Ant Design Title 1",
    createTime: "2020-1-1",
  },
  {
    id: 6,

    title: "Ant Design Title 1",
    createTime: "2020-1-1",
  },
];
const jump = (path: string) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
@import url("@/assets/style/card.scss");
</style>
