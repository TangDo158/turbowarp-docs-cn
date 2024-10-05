---
slug: /embedding
hide_table_of_contents: true
---

# 嵌入

TurboWarp 可以被嵌入到一个标准的 iframe 中：

```html
<iframe src="https://turbowarp.org/414716080/embed" width="482" height="412" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>
```

用你项目的 ID 替换 `414716080`。你可以修改 iframe 的宽度和高度，播放器会自动重新设置大小来填满 iframe。(482x412 通常会导致舞台运行在标准的 480x360 分辨率下)。

TurboWarp 的嵌入元素有一个透明的背景，如果 iframe 允许为透明。TurboWarp 的嵌入元素还可以有一个全屏按钮如果 iframe 允许全屏。上述示例代码会打开刚才说的两个功能。

## 未共享的项目无法被嵌入 {#unshared-projects}

未共享的项目 [无法在嵌入元素中显示](unshared-projects)。请确保你嵌入的项目已被分享，或使用 [TurboWarp 打包器](https://packager.turbowarp.org/)。

## URL 参数 {#url-parameters}

所有 [标准 URL 参数](url-parameters.md) 仍然可用，你可以用它们来控制用户名或者别的什么东西。

这里还有一些只在嵌入元素中可用的特殊的参数：

### 自动播放 {#autoplay}

嵌入元素支持 `autoplay` 参数，支持当作品加载完成时自动启动绿旗。举个例子：https://turbowarp.org/15832807/embed?autoplay

注意在用户与项目交互 (比如点击) 前声音积木没有效果。这是一个由浏览器施加的限制，TurboWarp 无法提供任何替代方案。

### 设置按钮 {#settings-button}

你还可以可选地在嵌入元素中使用 `settings-button` 参数启用一个设置按钮，允许用户打开一个和在网站和编辑器中的 “高级设置” 相差无几的选项菜单。举个例子： https://turbowarp.org/15832807/embed?autoplay&settings-button

### 全屏背景颜色 {#fullscreen-background}

全屏模式不启用时，嵌入元素的背景是透明的，所以你可以通过修改父元素的样式来修改背景颜色。

全屏模式时，嵌入元素将根据用户是否启用深色模式来使用白色或一个几乎纯黑的颜色。

若要覆盖这个行为，请设置 `fullscreen-background` 参数为一个 CSS 颜色值，比如 `black` 或者 `rgb(50,90,100)`。举个例子： https://turbowarp.org/15832807/embed?fullscreen-background=yellow

如果你对 `#` 进行 HTML 转义你，还可以使用十六进制颜色，比如 `%23abc123`。

### 插件 {#addons}

一般来讲，嵌入元素没有插件启用。这可以使用 `addons` 参数覆盖，它是一个用英文逗号分割的，要启用的插件的ID的列表。举个例子：https://turbowarp.org/15832807/embed?addons=pause,gamepad,mute-project

一些有用的插件和他们的 ID：

 - "暂停按钮" 的 ID 是 `pause`
 - "静音项目" 的 ID 是 `mute-project`
 - "移除弯曲的舞台边框" 的 ID 是 `remove-curved-stage-border`
 - "文件拖放" 的 ID 是 `drag-drop`
 - "游戏手柄支持" 的 ID 是 `gamepad`
 - "项目控件反向顺序" 的 ID 是 `editor-buttons-reverse-order`
 - "克隆体计数器" 的 ID 是 `clones`

其它插件对于嵌入元素没有效果。

## 安全考虑 {#security}

如果你使用用户提供的信息生成嵌入链接，你应该对任何参数进行清理，以确保用户无法提供任意的 URL 参数，因为某些参数可能会导致意外行为。

## 需要更多可配置性? {#packager}

请用 [TurboWarp 打包器](https://packager.turbowarp.org/) 来更好地控制加载屏幕、强调颜色、控制方式等更多设置。你还可以轻易地 [嵌入打包器的生成产物](/packager/embedding)。

## 捐赠 {#donations}

如果你在一个商业网站中使用了 TurboWarp 嵌入元素，那你或许可以 [给我们和我们依赖的项目捐献](/donate) 来让我们的嵌入元素能顺利运行。 ❤️

## 开源协议 {#license}

TurboWarp 以 [GPLv3.0](https://github.com/TurboWarp/scratch-gui/blob/develop/LICENSE) 开源协议分发。我们认为，GPLv3.0 作品的 `<iframe>` 不会在 GPLv3.0 下创建衍生作品，而是创建了一个“汇总作品”，该作品不受衍生作品相同要求的约束。然而，我们不是律师，这不是法律建议。如果这对你很重要，请咨询律师。
