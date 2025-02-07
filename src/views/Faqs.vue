<template>
  <div class="faqsPage">
    <a-row justify="center">
      <a-col :md="12">
        <a-card>
          <div v-html="markdownContent"></div>
          <img
            rel="no-referrer"
            src="https://cdn.nlark.com/yuque/0/2024/png/35349136/1730689181205-e753c261-ad2d-4641-8020-10541fda8298.png"
          />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { markedHighlight } from "marked-highlight";
const markdownContent = ref();
onMounted(async () => {
  //@ts-ignore
  const rawMarkdown = await import("@/assets/md/faqs.md?raw");
  const marked = new Marked(
    markedHighlight({
      emptyLangClass: "hljs",
      langPrefix: "hljs language-",
      highlight(code, lang, info) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    })
  );

  markdownContent.value = marked.parse(rawMarkdown.default);
});
</script>

<style lang="scss" scoped></style>
