---
hide_table_of_contents: true
---

# 其它 API

import {ExtensionCode} from './utils.js';

现在你已经熟悉了怎么编写自定义扩展，我们将会分享一些更多的 API。 这些 API 在沙箱和非沙箱扩展中**都**有效。它们都可以一起使用。

## color1, color2, color3

这三个属性分别决定了积木的颜色、积木输入的颜色、以及每个扩展积木下拉菜单的颜色。一般来讲，`color1` 应当最明亮，`color2` 要稍微深一些，`color3` 应当颜色最深。它们应当被设置为十六进制颜色代码 (如 `#808080`)。

<ExtensionCode title="color">{require("!raw-loader!@site/static/example-extensions/color.js")}</ExtensionCode>

不同的积木颜色模式 (比如 **高对比度**, **深色模式** 以及任何 "插件" 预设) 是基于这些值自动生成的。

## docsURI

docsURI 在积木列表的开头添加了一个按钮，允许打开一个页面让人们进一步了解你的扩展怎么用。

<ExtensionCode title="hello-docs">{require("!raw-loader!@site/static/example-extensions/hello-docs.js")}</ExtensionCode>

## disableMonitor

Scratch 将会自动地在每个没有输入的返回值及目前添加一个复选框用于显示变量监视器。注意在 TurboWarp 中，这对布尔值积木也有效。若需要禁用此功能，请将积木的 disableMonitor 设置为 true。

请注意，即使设置了 disableMonitor，这个积木仍然能被别有用心的人用于监视器。

<ExtensionCode title="unmonitorable">{require("!raw-loader!@site/static/example-extensions/unmonitorable.js")}</ExtensionCode>

## Scratch.Cast

Scratch 用于处理诸如类型转换或比较的方式有一些特殊的地方。比起手动实现这些行为，你可以使用 Scratch.Cast.* API。

<ExtensionCode title="cast">{require("!raw-loader!@site/static/example-extensions/cast.js")}</ExtensionCode>

## hideFromPalette

有时候你可能想要从积木区隐藏一个积木，但你又不想移除它，这个时候 hideFromPalette 会很有用。它有助于让你的扩展 [向前兼容](./compatibility)。有着这个属性的积木会从积木区隐去，但已经存在于项目中的积木将保持原样。

比如，加载这里的第一个扩展，然后用它的积木保存一个项目：

<ExtensionCode title="hidden-1">{require("!raw-loader!@site/static/example-extensions/hidden-1.js")}</ExtensionCode>

然后再换掉之前那个扩展而加载这个扩展，然后加载之前的项目：

<ExtensionCode title="hidden-2">{require("!raw-loader!@site/static/example-extensions/hidden-2.js")}</ExtensionCode>

注意到积木的副本仍然有用，但它不在积木区中显示了。

## filter

一些积木可能只能在角色或者只能在舞台中运行。对于这些积木，你可以将 filter 属性设置为一个仅包含 `Scratch.TargetType.STAGE` 或 `Scratch.TargetType.SPRITE` 的数组，来让它只在那种类型的角色中可见。

请注意，仍然有办法无视过滤器限制而获取积木，比如使用背包或者积木剪贴板。你的积木还应当使用 `util.target.isStage` 确认当前角色是否为舞台。

<ExtensionCode title="filter">{require("!raw-loader!@site/static/example-extensions/filter.js")}</ExtensionCode>

## 图标

对于向你的扩展添加图标，有三种不同的方式：

 - 扩展的 menuIconURI。这会设置在积木区分类中显示的图像。如果没有设置则会回落到 blockIconURI。如果 blockIconURI 也没有被设置，那么会回落到以扩展积木颜色填充的圆圈。
 - 扩展的 blockIconURI。这会成为没有覆盖这个选项的积木的默认图像。
 - 积木的 blockIconURI。这会覆盖扩展设置的 blockIconURI。

上述三个字段应当为内联的 [Data URL](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)。SVG 是最好的选择，不过大小至少为 64x64 的 PNG 和 JPG 图片也不错。图标应当是方形的。

<ExtensionCode title="icons">{require("!raw-loader!@site/static/example-extensions/icons.js")}</ExtensionCode>

## 内联图像

你还可以通过一个类型为 `IMAGE` 的参数在积木内的任何位置添加一个图像。和其它图像一样，这应当为一个内联的 [Data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)。SVG 是最好的选择，不过大小至少为 64x64 的 PNG 和 JPG 图片也不错。图标应当是方形的。

另外，如果你将 `flipRTL` 设置为 `true`，那么当编辑器使用从右往左书写的语言时，图像就会被水平翻转。

<ExtensionCode title="inline-images">{require("!raw-loader!@site/static/example-extensions/inline-images.js")}</ExtensionCode>

## 分割线

如果你的扩展有一大堆积木，你可能想要在两组积木间留出一些空隙。要这样做，请在积木列表中添加 `"---"`：

<ExtensionCode title="separators">{require("!raw-loader!@site/static/example-extensions/separators.js")}</ExtensionCode>

:::note
译者注：有些 Gandi IDE 扩展使用了非标准的 `"---类别名"` 用于实现和 `Scratch.BlockType.LABEL` 等同的功能。这样做只能在 Gandi IDE 使用，并且 Scratch 从来没有定义过这样的用法。

在扩展开发中，请避免这种写法，而换用通用的 `Scratch.BlockType.LABEL`。
:::

## 终止积木

若你不想在某个积木下面再让用户添加积木，请在积木上添加 `isTerminal: true`。

虽然积木的样子很像 "停止这个脚本" 和 "停止全部脚本"，但行为却和它们两者却大相径庭。举个例子，如果这个积木被放置在循环的末尾，循环会继续运行，除非有什么额外的代码能够停止当前线程。添加 `isTerminal` 只能避免用户在积木后面再连接积木。

<ExtensionCode title="terminal">{require("!raw-loader!@site/static/example-extensions/terminal.js")}</ExtensionCode>

## 下一步

然后，让我们来看看 [怎么制作类似于 "当接收到" 或者 "当计时器大于" 的积木](./hats)。
