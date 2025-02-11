<template>
  <div id="code-editor" ref="codeEditorRef" style="height: 60vh" />
</template>

<script setup lang="ts">
import * as monaco from "monaco-editor";
import { onMounted, ref, toRaw, withDefaults, defineProps, watch } from "vue";
/**
 * 定义组件属性类型
 */
interface Props {
  value: string;
  language?: string;
  handleChange: (v: string) => void;
}

const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  language: () => "python",
  handleChange: (v: string) => {
    console.log(v);
  },
});

const codeEditorRef = ref();
const codeEditor = ref();
watch(
  () => props.language,
  () => {
    if (codeEditor.value) {
      monaco.editor.setModelLanguage(
        toRaw(codeEditor.value).getModel(),
        props.language
      );
    }
  }
);

onMounted(() => {
  if (!codeEditorRef.value) {
    return;
  }
  setEditor();
  //编辑 监听内容变化
  codeEditor.value.onDidChangeModelContent(() => {
    props.handleChange(toRaw(codeEditor.value).getValue());
  });
});

const setEditor = () => {
  //Hover on each property to see its docs!
  codeEditor.value = monaco.editor.create(codeEditorRef.value, {
    value: props.value,
    language: props.language,
    theme: "vs", // 主题
    readOnly: false, // 是否只读
    minimap: { enabled: true }, // 是否启用小地图
    fontSize: 14, // 字体大小
    tabSize: 2, // tab缩进长度
    automaticLayout: true, // 自动布局
    lineNumbers: "on", // 是否启用行号
    contextmenu: true, // 是否启用上下文菜单
    folding: true, // 是否启用代码折叠
    foldingStrategy: "auto", // 代码折叠策略
    wordWrap: "on", // 自动换行设置
    wrappingIndent: "indent", // 换行缩进
    formatOnPaste: true, // 粘贴时是否自动格式化
    formatOnType: true, // 输入时是否自动格式化
    dragAndDrop: true, // 是否允许拖放
    cursorStyle: "line", // 光标样式
    cursorBlinking: "blink", // 光标闪烁方式
    scrollbar: {
      vertical: "auto", // 垂直滚动条的显示方式
      horizontal: "auto", // 水平滚动条的显示方式
      verticalScrollbarSize: 2, // 垂直滚动条的宽
      horizontalScrollbarSize: 2, // 水平滚动条的高度
    },
  });
  codeEditor.value.addAction({
    id: "changeLanguage", // 唯一id，不能重复
    label: "切换语言", // 菜单项名单
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS], // 触发组合键
    contextMenuOrder: 1, // 菜单项的排序权重 越小，越靠前
    contextMenuGroupId: "customCommand", // 菜单项的分组
    // precondition： 先决条件
    // 菜单项执行函数
    run() {},
  });
};
</script>

<style scoped>
#code-editor {
  /*border: 1px solid #e0e0e0;*/
}
</style>
