<template>
  <div class="faqsPage">
    <a-row justify="center">
      <a-col :md="12">
        <a-card class="card">
          <MdPreview previewTheme="mk-cute" :modelValue="markdownContent" />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { MdPreview, MdCatalog, config, XSSPlugin } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";
const markdownContent = ref("");
onMounted(async () => {
  config({
    markdownItPlugins(plugins) {
      return [
        ...plugins,
        {
          type: "xss",
          plugin: XSSPlugin,
          options: {},
        },
      ];
    },
  });
  //@ts-ignore
  const rawMarkdown = await import("@/assets/md/faqs.md?raw");
  markdownContent.value = rawMarkdown.default;
});
</script>

<style lang="scss" scoped>
// @import url("@/assets/style/card.scss");
.card {
  -webkit-box-shadow: 0rem 0.9375rem 1.3125rem -0.4375rem rgb(227, 227, 231);
  -moz-box-shadow: 0rem 0.9375rem 1.3125rem -0.4375rem rgb(227, 227, 231);
  box-shadow: 0rem 0.9375rem 1.3125rem -0.4375rem rgb(227, 227, 231);
}
</style>
