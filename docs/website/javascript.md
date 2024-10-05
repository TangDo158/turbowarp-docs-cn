---
slug: /javascript
hide_table_of_contents: true
---

# 如何下载编译后的 JavaScript

## 长话短说 {#short}

 * 如果你希望打包/HTML 化一个项目，请用 https://packager.turbowarp.org/ 。
 * 如果你希望将 Scratch 项目转换为人类可读且可编辑的 Javascript，请用 https://leopardjs.com/ 而不是 TurboWarp。

## 完整答案 {#long}

TurboWarp 生成的代码并不是用于给人类阅读或编辑的。这么做会影响到你对 Javascript 的学习，因为它用了很多不常见的奇技淫巧来提高兼容性或者性能。

举个例子，在正常的 Javascript 中访问列表的内容只需要用 `myList[myIndex]` 这样的简单语法，而 TurboWarp 用 `(b1.value[(b0.value | 0) - 1] ?? "")` 或者 `listGet(b0, b1.value)`，基于它可以假设入参为什么样的。`b0` 和 `b1` 是 TurboWarp 会使用的编译后的变量名称，而 `listGet` 是一个属于 TurboWarp 运行时的工具函数。生成的代码还没有被格式化过。更多相关的例子在 [另一个页面中](how)。

如果你想要将 Scratch 项目转换为人类可读且可编辑的 Javascript，请用 https://leopardjs.com/ 。

<details>
<summary>呃，如果你真的知道自己在做什么...</summary>

在项目开始前于 JavaScript 控制台运行这段代码：

```js
vm.enableDebug();
```

然后当代码被编译时，它对应的 JavaScript 代码就会被输出到控制台中。

:::note
译者注：你可以用以下代码来直接取得代码而无需运行项目。

```js
vm.runtime.precompile();
```
:::

如果你不知道什么是“JavaScript 控制台”或者不知道怎么打开它，那你还是别看什么生成的 JavaScript 代码了，赶紧关掉这个页面吧。
</details>
