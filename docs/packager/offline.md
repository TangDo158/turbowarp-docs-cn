---
slug: /packager/offline
hide_table_of_contents: true
sidebar_label: 离线打包器
---

# 离线打包器

你可以离线使用 [TurboWarp 打包器](https://packager.turbowarp.org/)。这在某些情况下会很有用（比如，你的学校屏蔽了 TurboWarp）。

我们旨在一个月更新一次离线打包器。

较大的组件，比如 Electron、NW.js、或者 WKWebView 的可执行文件将 *不会* 包含在离线打包器中，并且将会按需下载。打包器将会在你第一次下载这些文件后尝试离线缓存它们，这样你就只用下载一次了。一般来讲即使你的学校屏蔽了 turbowarp.org，这些下载连接也不会出问题。

## 桌面应用 {#desktop}

你可以下载 [TurboWarp 桌面版](https://desktop.turbowarp.org/)，它包含一个离线版本的打包器。你可以通过点按在主界面右上方的 "(?)" 按钮并选择打包器来访问它。

内置的打包器会自动加载你在编辑器中打开的项目。

## 独立 HTML {#html}

如果你不能或者不想下载桌面版应用，你可以从 GitHub 下载一个独立 HTML 版本的打包器。访问 https://github.com/TurboWarp/packager/releases，找到第一个 release，并于 "Assets" 下面下载 "turbowarp-packager-standalone-x.x.x.html"。你可以直接在浏览器中打开这个 HTML 文件。

这个 HTML 文件不包含更新检查。你需要手动检查并更新 HTML 版的打包器。

## Web 应用 {#pwa}

https://packager.turbowarp.org/ 是一个 Web 应用，在它加载一次以后就可以离线使用。这个功能仍然在实验中，并且我们不推荐你依赖这个功能。
