---
slug: /cors
hide_table_of_contents: true
---

# CORS: 为什么你的 fetch 运行不了

任何使用过 Fetch、HTTP、网络和类似扩展的人都注意到，当你尝试获取某些网站时，即使在按下“允许”后，积木仍然无法正常运行：

![](./assets/fetch-google.png)

造成这种情况的原因称为 **CORS** (跨域限制)，这是一种限制网站如何交互的安全功能。

## CORS 是什么？ {#cors}

CORS 代表跨源资源共享，但我们不会深入探讨 [内部细节](https://developer.mozilla.org/zh-CN/docs/Glossary/CORS) — 其他地方已经做过了。CORS 解决的核心问题很简单：

 - 一些网站想要 **阻止** 来自其他网站的访问
 - 其他网站想要 **允许** 来自其他网站的访问

想象一下，如果你访问的任何网站都可以像你一样访问你的私密网站，那将十分不得了！但有时这种访问并不是什么问题，实际上是有意的。Scratch 的 API 的某些部分启用了 CORS，这就是 TurboWarp 从 Scratch 加载项目的方式。

CORS 是网站声明是否希望其他网站能够访问它们的方式。默认情况下，网站不允许其它网站访问。网站必须 **选择添加 CORS 头**，以允许其他网站访问它们。如果一个网站没有选择添加这个报文头，你的浏览器将向 Turbowarp 返回一个非常通用的“网络错误”。

## 如何修复你的积木 {#workarounds}

这取决于 URL 的用途。

 - **切换到不同的 URL：** 如果 URL 仅用于托管静态文件，请找到另一个支持直接下载和 CORS 的远端宿主。如果一个 API 不支持 CORS，请检查那个 API 的竞争对手的 API 是否支持。
 - **使用 CORS 代理：** 你可以请求另一个服务器（称为 CORS 代理）代替你访问该网站，然后发送回响应，但允许 CORS，而不是直接请求你的浏览器访问网站。网上有许多公共 CORS 代理，但它们往往短寿，因为运营成本高且被大量滥用。Turbowarp 目前没有在运行自己的 CORS 代理。
 - **切换到 TurboWarp 桌面版：** 桌面版应用有一个选项可以绕过 CORS。详见下文。

## 桌面版应用 {#desktop}

在 [Turbowarp 桌面版](https://desktop.turbowarp.org/) 中，有一个选项可以绕过 CORS，以允许访问任何网站。出于安全原因，默认情况下此选项是禁用的，和正常的网页浏览器行为一致。在左上角的设置按钮下打开桌面设置（在旧版本中，桌面设置在右上角的 ? 按钮下）：

import settingsMenu from './assets/desktop-settings.png';

<p><img src={settingsMenu} height={596/2} width={632/2} /></p>

当桌面设置窗口打开时，勾选“允许扩展访问任何网站”。

## 打包器项目 {#packaged-projects}

在浏览器中运行的打包项目受到与任何其他网站相同的限制。

打包为 Electron 应用的项目默认绕过 CORS，类似于桌面版应用中的选项。

## 如果你正运行一个服务器 {#servers}

如果你希望别的网站能够访问你的网站，请在每个你希望公开的响应中将 `Access-Control-Allow-Origin` 头设置为 `*`。如果你搜索你正在使用的 Web 服务器或框架的名称后添加“cors”关键字，你应该能找到很多示例。
