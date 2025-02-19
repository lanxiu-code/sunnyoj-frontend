<template>
  <a-form labelAlign="left" :model="props.data" :wrapper-col="{ span: 14 }">
    <a-form-item label="公告标题">
      <a-input v-model:value="props.data.title" placeholder="请输入公告标题" />
    </a-form-item>
    <a-form-item label="公告内容">
      <a-textarea
        :rows="3"
        showCount
        allowClear
        :maxlength="100"
        v-model:value="props.data.content"
        placeholder="请输入公告内容"
      />
    </a-form-item>
  </a-form>
</template>
<script setup lang="ts">
interface Props {
  data: any;
}
const props = defineProps<Props>();
</script>
<style lang="scss" scoped>
.NoticeEdit {
}
</style>
