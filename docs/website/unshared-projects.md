---
slug: /unshared-projects
hide_table_of_contents: true
---

# 未分享的作品不再可见

由于 Scratch API 变更，未分享的作品现在无法再在 Turbowarp、forkphorus 或者其它第三方网站上被打开。

这个页面回答了大部分人们有的问题，并且列出了一些替代解决方案。请完整读完这篇文章再去跟别人谈论这些修改，以免误传。

:::warning
除了 scratch.mit.edu 以外的 **任何** 询问你 Scratch 账户密码的网站都是 **骗子**，即使它允许你和他人分享你的未分享作品。你的账户会被偷并且作品也会被删掉。这条规则**没有例外**。
:::

## 发生了什么 {#what-happened}

摆明了说：这些修改当然是 Scratch Team 改的。Turbowarp 只是一个和 Scratch Team 无关的第三方网站，我们啥都没做。

从 Scratch API 下载作品现在要求一个 “作品 token”，对于未分享的作品，只有它的作者可以访问。即使你在同一个浏览器中登录了 Scratch 账户，Turbowarp 也没有办法访问它。这些 token 都是临时的，不过几分钟就会过期，所以即使作者也不能通过提供一个永久 token 来让作品永远可见。

查看未分享的项目这种事情只是恰好可以用，并不是 Turbowarp 的主要用途。对于已分享的、从文件加载的和从桌面版打开的项目，编译器和插件总是可以用，并且以后也可以用。

## 替代解决方案 {#workarounds}

**如果你想测试自己的项目：** 你可以用文件 > 保存到电脑来临时保存项目并在 Turbowarp 加载，完事了再用文件 > 从你的电脑加载将 Turbowarp 编辑完成的项目上传到 Scratch。另外，很多人可以主要用 Turbowarp 网页版或者[桌面版](https://desktop.turbowarp.org/)来完成自己的项目，然后等项目完成了再上传到 Scratch (这样做时请记得定期备份)。

**如果你想要合作完成项目：** 和他人分享作品最好的方法就是单纯地在 Scratch 网站上分享它。Scratch 社区很不错，并且这也是 Scratch 想让你做的事情。即使发布没有完成的项目也无所谓。Scratch 已经 15 年了，而 Turbowarp 刚出 2 年不到。在没有 Turbowarp 的 13 年间，合作项目即使没有 Turbowarp 也好好的，并且未来也是这样。

**如果你想要嵌入作品到网站中：** 要将未分享的项目嵌入到其它网站中，要么你就分享项目，要么就用 文件 > 保存到电脑 来将文件下到电脑上，然后使用 [TurboWarp 打包器](https://packager.turbowarp.org/) 来将这个项目转换为一个独立文件从而使其 [可以被嵌入](/packager/embedding)。

## 这是好事还是坏事？ {#good-thing}

保护未分享的项目这件事情迟来了十年。

不要假装没有人因为不知道未共享项目实际上并不私密而被盗取项目，尽管 Scratch 网站上说“只有你可以看到它”。许多未共享的项目包含儿童、他们的朋友、家人以及其他个人信息的图片和视频，因为他们假设未共享项目是私密的。

在大多数其他大型网站上，如果“未共享”或“私密”的内容实际上是公开的，这将被视为一个严重的安全漏洞，并且发现者通常会有资格获得丰厚的漏洞奖励。例如，[YouTube 向一位安全研究人员支付了 5000 美元](https://bugs.xdavidhu.me/google/2021/01/11/stealing-your-private-videos-one-frame-at-a-time/)，因为他报告了一个能让攻击者查看任何私有视频的低分辨率图像的漏洞。

我们一直认为，如果人们希望未共享项目实际上是私密的，他们应该与 Scratch Team 沟通。也许有足够多的人这样做，以至于 Scratch Team 愿意倾听。

<!-- 令人印象深刻的是，Scratch 并没有因为这无数的隐私侵犯而被起诉到破产 -->

## 对于开发者 {#developers}

这一章是为了正开发第三方 Scratch 相关的工具的开发者而准备的。

新的下载项目的过程是先从 `https://api.scratch.mit.edu/projects/ID` 获取 "project_token" 字段，然后用这个字段去生成 URL `https://projects.scratch.mit.edu/ID?token=TOKEN`。

如果你正使用 JavaScript，这里有一段代码可以让你起步，这段代码可以在浏览器中运行。如果你的代码是运行在服务端 (比如 Node.js) 的，那么你应将 `https://trampoline.turbowarp.org/api/projects/` 替换为 `https://api.scratch.mit.edu/projects/`。因为服务器不需要担心 [CORS](https://zh.wikipedia.org/wiki/%E8%B7%A8%E4%BE%86%E6%BA%90%E8%B3%87%E6%BA%90%E5%85%B1%E4%BA%AB) 问题。我们不保证 trampoline.turbowarp.org 会不会炸掉或者掉线；使用者后果自负。你可能还会对用于完整项目下载器的 [sb-downloader](https://github.com/forkphorus/sb-downloader) (包括简易 API) 感兴趣。

```js
const getProjectMetadata = async (projectId) => {
    // 如果你在为网页浏览器编写代码，你得使用一个代理服务，比如 trampoline.turbowarp.org 来访问 Scratch API。
    // 如果你在为 Node.js 编写代码，直接用 https://api.scratch.mit.edu/projects/${projectId} 即可。
    const response = await fetch(`https://trampoline.turbowarp.org/api/projects/${projectId}`);
    if (response.status === 404) {
        throw new Error('项目未被分享或不存在');
    }
    if (!response.ok) {
        throw new Error(`获取项目元数据时发生 HTTP 错误 ${response.status}`);
    }
    const json = await response.json();
    return json;
};

const getProjectData = async (projectId) => {
    const metadata = await getProjectMetadata(projectId);
    const token = metadata.project_token;
    const response = await fetch(`https://projects.scratch.mit.edu/${projectId}?token=${token}`);
    if (!response.ok) {
        throw new Error(`获取项目元数据时发生 HTTP 错误 ${response.status}`);
    }
    const data = await response.arrayBuffer();
    return data;
};

getProjectData('60917032').then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});
```

我们以 [Unlicense](https://unlicense.org/) 开源这段代码片段。
