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
import MdViewer from "@/components/MdViewer.vue";
const markdownContent = ref("");
onMounted(async () => {
  const rawMarkdown = await import("@/assets/md/faqs.md?raw");
  markdownContent.value = rawMarkdown.default;
});
</script>

<style lang="scss" scoped></style>
