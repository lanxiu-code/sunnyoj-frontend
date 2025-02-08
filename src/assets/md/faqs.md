# 项目介绍

基于 Vue3+SpringBoot+MySql+Mybatis-plus+Web Speech API 实现的盲人社交平台网站，用户可以发布文章，评论文章，点赞文章，收藏文章，浏览文章，并通过 Web Speech API 自动读出内容帮助用户导航，浏览内容。管理员可以快速管理和检索文章、话题、用户。

# 架构设计图

![](https://cdn.nlark.com/yuque/0/2024/png/35349136/1730688435252-d58e8a89-21aa-40a4-8a13-64ce34e03224.png)

# 技术选型

后端

- SpringBoot 开发框架
- MySQL 数据库
- 腾讯云 COS 存储
- MyBatis-Plus 及

前端

- Vue3+Vite 脚手架
- Vue-Router
- Pinia 状态存储
- Web Speech API
- 富文本编辑器
- Arco Design 组件库
- Axios 请求库
- PubSub 发布订阅库
- OpenAPI 前端代码生成

# 项目三大阶段

## 阶段一

开发前端和后端功能，让用户能够在线发布文章，评论文章，点赞文章，收藏文章，浏览文章。该阶段涉及 Vue3+SpringBoot 技术

![](https://cdn.nlark.com/yuque/0/2024/png/35349136/1730688751824-e6e66bb0-d4cf-4853-b93f-ca06548441bb.png)

```javascript
const rawMarkdown = await import("../assets/faqs.md?raw");
console.log(rawMarkdown);
const renderer = new marked.Renderer();
renderer.code = (opts) => {
  const validLanguage = hljs.getLanguage(opts.lang) ? opts.lang : "plaintext";
  return hljs.highlight(opts.text, { language: validLanguage }).value;
};
markdownContent.value = marked(rawMarkdown.default, { renderer });
console.log(markdownContent.value);
```

## 阶段二

为前端加上 Web Speech API 的功能，使用户鼠标悬停在导航或文章上能够读出内容。该阶段涉及到 Vue 自定义指令+speechSynthesis 对象

> 自定义 v-read 指令，通过为标签加上 data-text 属性，自动获取出内容并朗读出来

![](https://cdn.nlark.com/yuque/0/2024/png/35349136/1730688904143-83d45451-cf68-4e07-b3e5-78280e7cfd50.png)

> 使用示例

![](https://cdn.nlark.com/yuque/0/2024/png/35349136/1730689021700-2164aa01-57d7-47a3-a525-41234e66e4e3.png)

![](https://cdn.nlark.com/yuque/0/2024/png/35349136/1730689067921-c48a257a-de0d-4075-a31f-4ad6c491bba2.png)

## 阶段三

进行系统的测试与优化，特别是用户体验和语音识别的精度。
