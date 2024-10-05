---
slug: /packager/special-cloud-behaviors
hide_table_of_contents: true
---

# 特殊云变量行为

:::info
此页面是关于 [Turbowarp 打包器](https://turbowarp.org/) 的。
:::

默认禁用的 "特殊的云变量行为" 选项会修改一些特定命名的云变量的行为，来为你的项目解锁一些新功能。此功能来源于一个 [HTML 化工具中的相似功能](https://github.com/SheepTester/htmlifier/wiki/Special-cloud-behaviours)。此功能可以在 "云变量" 中启用。

需要使用的情况下，只需像往常一样创建一个云变量，不过你必须使用下面的指定名字之一。比如，如果要使用 `☁ url` 变量，请创建一个名为 `url` 的变量并将其设置为云变量。

启用特殊云变量行为将会覆盖其它所有对于这些变量的设置，故一个类似于 `☁ username` 的变量永远不会被保存在本地或者与其它用户同步。

## ☁ url {#url}

`☁ url` 的值将会被设为当前页面的 URL。`☁ url` 是只读的。

## ☁ redirect {#redirect}

当 `☁ redirect` 被设置为一个 URL，当前页面将会自动转到那个 URL。

## ☁ open link {#open-link}

当 `☁ open link` 被设置为一个 URL，当前项目将会尝试以指定 URL 打开一个新页面。注意这样不总是可靠的，因为大部分浏览器都含有弹窗拦截器。

## ☁ username {#username}

当 `☁ username` 的值被修改，位于“侦测”一栏的 `用户名` 积木返回的值也会改变。

## ☁ pasted {#pasted}

当用户使用类似于 Ctrl+V 的快捷方式将某些文本粘贴在页面上，其内容就会被存储在 `☁ pasted` 中。

## ☁ set clipboard {#set-clipboard}

当 `☁ set clipboard` 的值被修改，页面将尝试将值存储在用户的剪贴板中。这个功能不一定有效。

## ☁ room id {#room-id}

当 `☁ room id` 的值被修改，用于同步云变量的项目 ID 也会被修改。举个例子，如果原来项目的 ID 是 1234 并且 `☁ room id` 被设置为了 `xyz`，那么新的项目 ID 会为 `1234-xyz`。若要将项目 ID 重置为原来的 ID，只需设置 `☁ room id` 为一个空字符串。

这样对于服务器选择器大有帮助，你不再需要添加一堆多余的云变量了。只有拥有相同的房间 ID 的用户才会互相同步云变量。这一过程可能需要数秒，因为重连到云变量服务器需要一定时间。

房间 ID 不会影响到本地变量。

## ☁ eval {#eval}

:::warning
若要使用此功能，你需要打开 "额外的不安全的特殊云变量行为"。

不安全的云变量行为会允许项目绕过沙箱而执行任意代码。根据打包的目标不同，这可能可以给项目控制整个操作系统的能力，包括安装病毒的能力。

如果你不信任你在打包中的项目或者你没有使用这个功能，请关闭它。
:::

当 `☁ eval` 的值被修改时，它的值会被当作 Javascript 代码进行评估。

如果 Javascript 被成功评估，它的返回值将会保存于 `☁ eval output`。

如果在评估 Javascript 时发生异常，其内容将会保存于 `☁ eval error`。

如果 Javascript 代码返回了一个 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当 Promise 被解决时，系统将会将解决值置于 `☁ eval output`，否则会将拒绝值置于 `☁ eval error`。注意设置 `☁ eval` 不会等待返回的 Promise，所以返回值可能不会立即被更新。

## 更多信息和相关讨论 {#further-information}

请见 https://github.com/TurboWarp/packager/issues/48。
