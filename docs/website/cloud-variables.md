---
slug: /cloud-variables
hide_table_of_contents: true
---

# 云变量

TurboWarp 拥有独立于 Scratch 的云变量服务器。

需要注意的一些事项：

 - 任何人都可以通过“编辑 > 更改用户名”菜单更改他们的用户名。看起来名为“griffpatch”的用户很可能不是真正的 griffpatch。
 - 为了减少滥用，云变量服务器拒绝任何不属于现有 Scratch 账户的用户名。
 - 由于潜在的滥用，Scratch 团队成员的名字不能使用。这包括 ScratchCat。
 - 变量长度限制已增加到 100000 个字符。
 - 云变量仍然只能保存数字。
 - 每当服务器重启或在项目中没有人时，云变量会被重置，因此像排行榜这样的内容不会保存很长时间。
 - 打开编辑器时，云变量会被禁用。
 - 不要滥用云变量来创建未经过审查的聊天室。
 - 没有公共的云变量历史日志。
 - 当使用云变量或自定义扩展时，视频传感扩展的颜色感应功能被禁用。这修复了与 Scratch 的“出于隐私原因，云变量在此项目中被禁用，因为它包含视频传感块”警告相同的问题。

---

## 对于机器人开发者和高级用户 {#advanced}

我们允许并鼓励开发机器人和自定义客户端。然而，由于持续的滥用，我们要求你遵循一些规则。请记住，**这是一个由志愿者运营的免费服务。** 解析消息的 CPU 和将消息发送给其他用户的带宽并不是免费的。以下信息适用于云变量库的用户和作者。

### 协议 {#protocol}

该协议与 [Scratch 的云变量](https://github.com/TurboWarp/cloud-server/blob/master/doc/protocol.md) 相同。我们提供了一个 [Node.js 的简易参考库](https://www.npmjs.com/package/@turbowarp/mist)。由于协议是完全开放的，如果你不想使用我们的库，不使用也没关系。

### 需要 User-Agent {#user-agent}

机器人必须在其连接中提供有效的 [User-Agent](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/User-Agent) 头。这包括联系信息（例如 Scratch 个人资料链接、电子邮件地址、GitHub 问题页面等）以及所使用的云变量库的名称和版本（如适用）。确切的语法并不重要；只需确保可读即可，**但需要使用英语书写**。一些良好的 User-Agent 示例：

 - `multiplayer leaderboard bot by https://scratch.mit.edu/users/TestMuffin`
 - `cloud-variable-library/1.0.1 contact@example.com`

唯一的例外是，你的机器人在无法控制 User-Agent 的浏览器中运行。在这种情况下，你的浏览器将自动包含其他头信息，如 Origin，带有你网站的名称。假装机器人是浏览器不被允许，并且很容易被检测到。

请向你的云变量库的作者询问或参考你的 WebSocket 库的文档以了解如何添加 User-Agent。

<details>
<summary>如果你正在开发云变量库...</summary>

你应该提供一个 API 来设置 User-Agent，并且你应该强制使用此 API。例如，对于某个云变量 API，你可能会有这样的选项：

```js
const CloudConnection = require('...');

const connection = new CloudConnection({
    username: '...',
    projectId: '...',
    // highlight-start
    // 更改这个字段！
    contactInformation: 'contact@example.com'
    // highlight-end
});

connection.on('connected', () => { /* ... */ });
connection.on('set', (name, value) => { /* ... */ });
```

你的库将得到 `contactInformation` 选项，并将其与库的名称和版本连接起来，从而生成 User-Agent。最终生成的 User-Agent 可能是 `CloudConnectionLib/0.3.3 contact@example.com`。

如果有人没有指定 `contactInformation`，你不应该让他们继续进行连接。缺少信息的 User-Agent 将被阻止，你将收到用户说“云变量无法连接”的无意义错误报告，而不给你提供具体错误截图。这个时候你可就调试吧，一调试一个不吱声。相反，给他们一个友好的错误消息，这样他们就可以在不打扰你的情况下解决问题。

要实际设置 User-Agent，请查看你使用的 WebSocket 库的文档。他们可能不会特别提到 User-Agent，但应该提到如何设置 HTTP 头信息。例如，使用 Node.js 的 [ws](https://www.npmjs.com/package/ws) 客户端，你可以这样做：

```js
const ws = new WebSocket("wss://clouddata.turbowarp.org", {
  headers: {
    "user-agent": userAgentGoesHere
  }
});
```

</details>

### 项目 ID {#project-id}

项目 ID 不仅限于数字——它们可以是你想要的任何文本。如果你使用自定义 ID 的项目不在 Scratch 网站上，请使用类似 `example.com/my-project` 的文本，这样我们可以验证你的项目合法。如果我们看到大量使用不合理项目 ID 的云变量活动，我们将禁用该项目 ID。

<details>
<summary>如果你正在开发云变量库...</summary>

因此，你的项目 ID 选项应该是字符串，而不是整数或其他数字类型。

</details>

### 用户名 {#username}

云变量协议要求你提供一个用户名。服务器会尝试确保所有用户名在允许连接之前都是安全的。我们建议将用户名设置为 `player`，后面跟着 2 到 7 个随机数字，这样你的连接会更快启动（我们不会请求 Scratch API 来验证它）。如果你的机器人需要特定的用户名，请将其存储在单独的变量中。

<details>
<summary>如果你正在开发云变量库...</summary>

只要你强制用户拥有有效的 User-Agent，用户名就是多余的，因此你可以省略用户名选项，并自动生成一个随机的用户名。

</details>

### 不要频繁打开和关闭连接 {#one-connection}

我们发现了一种模式，即机器人打开连接、关闭连接，然后立即打开一个新的连接，形成无尽的循环。最终结果是一个缓慢的机器人，使用的网络和 CPU 资源远远超过其实际需要，这种行为不被允许。我们认为这是因为一些设计糟糕的库具有一些允许人们编写形如以下代码的 API：

```py
while True:
    value = cloudlibrary.get_var(project_id, username, user_agent, variable_name)
    print(f"{variable_name} is {value}")
```

其中，`cloudlibrary.get_var` 是通过打开连接然后立即断开它来实现的。这样做完全错误，相反，库应该提供 [基于事件驱动](https://zh.wikipedia.org/wiki/%E4%BA%8B%E4%BB%B6%E9%A9%85%E5%8B%95%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88) 的 API。不要不断向服务器请求最新值，而是打开一个 WebSocket，让服务器在发生变化时向你发送更新。WebSocket 非常高效：如果没有变量变化，连接将保持空闲。如果有很多变量变化，你将尽快收到更新。等效的代码可能是：

```py
def on_set(name, value):
    print(f"{name} is {value}")
connection = cloudlibrary.connect(project_id, username, user_agent, on_set)
```

可以提供像 `get_var` 这样的 API，只要实现是事件驱动的，并在内部使用一个连接（然后 `get_var` 只返回最近接收到的值）。这只需要一点小小的改动而已。

### 更新会被缓存 {#buffering}

为了提高性能，服务器会缓存多个云变量更新，以便作为一组发送。更新不保证以接收的相同顺序发送，并且某些更新可能会完全被跳过。由于这种缓存，每秒发送更新变量超过 10 次是完全多余的。

### 对于 ping 的应答 {#pings}

服务器会定期发送 [WebSocket ping 帧](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#pings_and_pongs_the_heartbeat_of_websockets)，你必须以 pong 响应，否则连接将会断开。如果你的 WebSocket 库默认未启用 ping/pong 支持，请参考其文档以了解如何启用。

### 重要的调试信息 {#debug}

为了方便我们、你和任何使用你库的人，请在某处（例如在错误消息中）记录以下信息，而不是默默忽略它们：

 - WebSocket 关闭代码。所有 4XXX 代码都在 [此表中列出](https://github.com/TurboWarp/cloud-server/blob/master/doc/protocol.md#server---client)。你更愿意看到“连接关闭”还是“连接关闭，代码 4002”？在表中查找后者的代码可以清楚地表明用户名是问题所在。
 - 从服务器接收到的无效 JSON。如果服务器有其他信息要告诉你，而不仅仅是关闭代码表所说的内容，它可能会发送一条普通的英语句子，而不是 JSON 对象。当你的 JSON 解析器抛出错误时，你应该记录从服务器接收到的实际原始文本，以便你获得像“从服务器接收到无效 JSON：你使用的云数据库因无故发送登录令牌而使你的 Scratch 账户处于风险中”这样的错误消息，而不是“JSON.parse：JSON 数据的第 1 行第 1 列出现意外字符”。你更愿意看到哪一个？
