<template>
  <div class="viewnewws">
    <a-row justify="center">
      <a-col :md="12">
        <a-typography-title :level="2"
          >对于部分违规用户的处理</a-typography-title
        >
        <a-space style="margin-bottom: 15px">
          <a-typography-text strong>作者：admin</a-typography-text>
          <a-typography-text strong>2024-03-18 22:31:29</a-typography-text>
        </a-space>
        <MdViewer previewTheme="mk-cute" :modelValue="markdownContent" />
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import MdViewer from "@/components/MdViewer.vue";
const route = useRoute();
const markdownContent = ref("# hello");
onMounted(() => {
  console.log(route.params);
});
</script>

<style lang="scss" scoped>
@import url("@/assets/style/markdownCard.scss");

.viewnewws {
}
</style>
