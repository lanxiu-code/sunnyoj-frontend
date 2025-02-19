<template>
  <div class="notice">
    <a-form ref="formRef" :model="searchParams" @finish="onFinish">
      <a-row :gutter="24">
        <a-col :lg="4">
          <a-form-item label="标题">
            <a-input
              v-model:value="searchParams.title"
              placeholder="搜索标题"
            ></a-input>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :lg="24" style="text-align: right">
          <a-space>
            <a-button type="primary" html-type="submit">搜索</a-button>
            <a-button @click="onReset">重置</a-button>
          </a-space>
        </a-col>
      </a-row>
    </a-form>
    <a-divider></a-divider>
    <NoticeList />
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance } from "ant-design-vue";
import NoticeList from "./NoticeList.vue";
const formRef = ref<FormInstance>();
const searchParams = reactive({
  title: "",
});
const onFinish = (values: any) => {
  console.log("Received values of form: ", values);
  console.log("formState: ", searchParams);
};
const onReset = () => {
  Object.assign(searchParams, { title: "" });
};
</script>
<style lang="scss" scoped>
.notice {
}
</style>
