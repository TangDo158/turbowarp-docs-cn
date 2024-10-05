---
slug: /url-parameters
hide_table_of_contents: true
---

# URL 参数


:::note
## 只有那些 "隐藏的" URL 参数会在此处列出。 {#only-hidden-url-parameters-are-listed-here}
Turbowarp 会自动将形如加速模式、自定义帧率、高清画笔之类的一般设定保存在 URL 中，但一些高级选项需要手动应用。此文档只包含这些高级选项。
:::


## 用户名 {#username}

`username` 选项控制“用户名”积木的值。

https://turbowarp.org/443603478?username=测试用户名

## 云变量服务器 {#cloud_host}

`cloud_host` 选项允许你修改 Turbowarp 将要连接到的云变量服务器，比如：

https://turbowarp.org/12785898?cloud_host=wss://clouddata.turbowarp.org

在参数中包含 `ws://` 或者 `wss://` 是可选的，但我们推荐这样做。`wss://clouddata.turbowarp.org` 是 Turbowarp 使用的默认云变量服务器，所以实际上这个示例没有改变任何选项。由于新浏览器拥有额外的安全措施，不安全的 ws:// 未加密云变量服务器可能无法在 Turbowarp 上使用，因为 Turbowarp 使用 HTTPS (https://developer.mozilla.org/zh-TW/docs/Web/Security/Mixed_content)。

:::note
译者注：实际上不安全的云变量服务器是可以使用的，因为 MDN 关于“混合内容”的一节中没有包含不安全的 WebSocket。
:::

不能使用这个选项连接 Scratch 的云变量服务器，因为 Scratch 云变量服务器要求账户认证，而 Turbowarp 不支持进行认证。

## 自定义扩展 {#extension}

`extension` 选项可以允许你从 URL 加载一个自定义扩展。请见 [自定义扩展](/development/custom-extensions)。

## 缩放 {#scale}

:::warning
这个选项已经被废弃。它在未来可能会被移除，并且已经在 Turbowarp 英语文档中被删除。中文版文档恢复了这一节，但你不应再使用这个选项。
:::

`scale` 选项控制玩家全屏时的最大相对缩放比率。

https://turbowarp.org/fullscreen?scale=2

## 禁用编译器 {#nocompile}

`nocompile` 选项会禁用编译器。一般来讲你不应该打开这个。

https://turbowarp.org/?nocompile

## 项目 URL {#project_url}

`project_url` 选项指定 Turbowarp 应当从哪个 URL 下载作品。请不要同一般的 Scratch 项目 ID 一同使用。

https://turbowarp.org/?project_url=packager.turbowarp.org/example.sb3

如果你不在 URL 中包含协议头，那么 https:// 会作为默认协议头。http:// URL 因为安全原因而无法使用 (https://developer.mozilla.org/zh-TW/docs/Web/Security/Mixed_content)。请注意目标 URL 必须支持 CORS 请求 (`Access-Control-Allow-Origin: *`)。[GitHub Pages](https://pages.github.com/) 可以自动处理 CORS 请求，并且被证明可以正常使用。
