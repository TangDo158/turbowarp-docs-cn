---
slug: /packager/embedding
hide_table_of_contents: true
sidebar_label: 嵌入
---

# 将打包后的作品嵌入到网站中

:::info
这篇文章是关于 [TurboWarp 打包器](https://turbowarp.org/) 的。如果你只是想把 Scratch 项目嵌入网站中，请转到 [另一个关于内嵌的页面](/embedding)。
:::

你可以将 TurboWarp 打包器的生成产物嵌入到另一个网站中：

```html
<iframe src="项目的路径.html" width="480" height="360" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>
```

`src` 属性的内容取决于你使用的环境、你存放项目的位置、以及它的命名。

 - 如果你使用了 "纯 HTML"，直接将 src 的内容换成 HTML 文件的路径即可。
 - 如果你使用了 "ZIP 压缩文件"，src 的内容就是压缩文件里 `index.html` 的路径。

如果你启用了控制栏，请在 `height` 对应的值上加上 48，来避免舞台被缩小。
