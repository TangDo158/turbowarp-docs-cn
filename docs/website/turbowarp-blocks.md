---
slug: /blocks
hide_table_of_contents: true
---

# TurboWarp 积木

Turbowarp 有一些积木，允许你使用一些在 Scratch 中无法使用的特性。

当然，这是一个历史遗留问题，现在可以访问 https://extensions.turbowarp.org/ 来加载扩展从而取得更多积木。

## is compiled? 以及 is TurboWarp? {#is-compiled}

![is compiled?](./assets/is-compiled.svg)

请参见 https://scratch.mit.edu/projects/414716080/

这些积木和 Scratch “兼容”，因为它们就是修改了一下的参数积木而已。

:::warning
从这个积木以后的所有积木都**不兼容** Scratch。使用了它们的积木无法与 Scratch 兼容。使用它们的项目无法被上传到 Scratch 网站。如果你不使用任何仅限 Turbowarp 的积木，那么将编辑完成的作品上传到 Scratch 应当没有问题。
:::

## 最后一个按下的按键 {#last-key-pressed}

![last key pressed](./assets/last-key-pressed.svg)

它将返回最后一个按下的按键。它应当被这样使用：

![当任意按键按下时，处理最后一个按下的按键](./assets/how-to-use-last-key-pressed.svg)

## 按下鼠标？ {#mouse-button-down}

![按下左键了吗？](./assets/mouse-button-down.svg)

这个积木有点像 “按下鼠标？” 但它允许你检测到底哪个按钮被按下了。考虑到 Scratch 处理鼠标的方式，即使 Turbowarp 的 “按下鼠标？”为真，Scratch 的 “按下鼠标？” 也不一定为真。

 * (0) 左键
 * (1) 中键，就是按下滚轮
 * (2) 右键 (注意一旦使用这个积木就会导致对舞台右键被禁用)
