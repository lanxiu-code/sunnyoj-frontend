<template>
  <a-form labelAlign="left" :model="props.data" :wrapper-col="{ span: 14 }">
    <a-form-item label="昵称">
      <a-input
        v-model:value="props.data.userName"
        placeholder="请输入公告标题"
      />
    </a-form-item>
    <a-form-item label="密码">
      <a-input
        v-model:value="props.data.userPassword"
        placeholder="请输入公告标题"
      />
    </a-form-item>
    <a-form-item label="邮箱">
      <a-input v-model:value="props.data.emial" placeholder="请输入公告标题" />
    </a-form-item>
    <a-form-item label="学校">
      <a-input v-model:value="props.data.school" placeholder="请输入公告标题" />
    </a-form-item>
    <a-form-item label="角色">
      <a-select
        ref="select"
        v-model:value="props.data.userRole"
        placeholder="请选择角色"
        style="width: 120px"
      >
        <a-select-option
          :value="role[0]"
          v-for="role in RoleMap"
          :key="role[0]"
          >{{ role[1] }}</a-select-option
        >
      </a-select>
    </a-form-item>
  </a-form>
</template>
<script setup lang="ts">
import { RoleMap } from "@/enum/RoleEnum";
interface Props {
  data: any;
}
const props = defineProps<Props>();
</script>
<style lang="scss" scoped></style>
