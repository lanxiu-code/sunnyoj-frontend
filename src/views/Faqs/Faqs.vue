<template>
  <div class="faqsPage">
    <a-row justify="center">
      <a-col :md="12">
        <MdViewer card :modelValue="markdownContent" previewTheme="mk-cute" />
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
//@ts-ignore
import MdViewer from "@/components/MdViewer.vue";
const markdownContent = ref("");
onMounted(async () => {
  //@ts-ignore
  const rawMarkdown = await import("@/assets/md/faqs.md?raw");
  markdownContent.value = rawMarkdown.default;
});
</script>

<style lang="scss" scoped></style>
