---
slug: /desktop/rich-presence
sidebar_position: 2
hide_table_of_contents: true
---

# Discord 游戏状态显示

TurboWarp 桌面版支持 Discord 的 Rich Presense (游戏状态显示) 功能，允许你在 Discord 即时通讯软件的个人档案中显示你正打开项目的名称和自打开经过的时间。

import example from './rich-presence-example.png';
import settingsMenu from './rich-presence-settings-menu.png';

<p><img src={example} height={97} width={295} /></p>

我们不太确定 Scratch 社区规则是否允许我们在这里提到这个聊天软件的名字，所以英文版中下述对 Discord 的指代均为 "Chat App"。然而为了方便原生中文用户阅读，这里仍然会保留 "Discord" 的名称。

同时，Discord 的中国版，KOOK 可能也支持游戏状态显示功能，但译者不确定 Turbowarp 是否可以正常连接到 KOOK，请自行尝试。

## 启用 Discord 状态 {#enable}

默认情况下，由于隐私保护，游戏状态显示功能是被禁用的。若想要启用它，请于主界面左上角的设置选项中打开桌面版设置：

<p><img src={settingsMenu} height={596/2} width={632/2} /></p>

如果桌面版设置按钮不存在，那么你正使用旧版；请升级到 1.12.0 或之后的版本。在它打开的窗口中，勾选 启用 Discord 游戏状态显示。如果选项不可用，请看本文末尾的 [已支持的操作系统](#supported-platforms)。

你可能仍然需要在 Discord 中更改以下设置来让该功能生效：

 - 启用 User Settings > Activity Privacy > Share your detected activities with others。
 - 对于每个你想要共享状态的服务器，右键服务器图标，然后启用 Privacy Settings > Activity Status。

在状态出现、更新或者消失前可能需要等待 15 秒。如果它仍然没有初现，请看下述的 [已支持的操作系统](#supported-platforms)。

## 已支持的操作系统 {#supported-platforms}

### Windows {#windows}

不管你怎么安装 Turbowarp 桌面版和 Discord，游戏状态显示功能都能用。

### macOS {#mac}

:::warning
从 Mac App Store 下载的 Turbowarp 桌面版无法使用游戏状态显示功能。
:::

### Linux {#linux}

若期望获得最好体验，则请将 Turbowarp 桌面版从 `.deb` 软件包、Debian 仓库、AUR、AppImage 或者 tarball 以原生应用程序安装。以 Flatpak 形式安装的 Turbowarp 桌面版可能需要手动覆盖权限，而以 Snap 形式安装的 Turbowarp 桌面版则完全没戏。关于兼容性，请查看以下表格：

| | 作为原生应用程序安装的 Discord | 从 Flatpak 安装的 Discord | 从 Snap 安装的 Discord |
| :-: | :-: | :-: | :-: |
| **作为原生应用程序安装的 Turbowarp 桌面版** | ✅ | ✅ | ✅ |
| **从 Flatpak 安装的 Turbowarp 桌面版** | 见下 | ✅ | 见下 |
| **从 Snap 安装的 Turbowarp 桌面版** | ❌ | ❌ | ❌ |

对于从 Flatpak 安装的 Turbowarp 桌面版，你需要在终端中运行下列命令然后重启 Turbowarp 桌面版来让游戏状态显示功能正常运行。

```bash
# 用于作为原生应用程序安装的 Discord
flatpak override org.turbowarp.TurboWarp --user --filesystem=xdg-run/$(printf "\x64\x69\x73\x63\x6f\x72\x64")-ipc-{0..9}
# 用于从 Snap 安装的 Discord
flatpak override org.turbowarp.TurboWarp --user --filesystem=xdg-run/snap.$(printf "\x64\x69\x73\x63\x6f\x72\x64"):create
```

可惜，仍然有一个小缺陷：如果 Turbowarp 桌面版先于 Discord 启动，则游戏状态显示无法正常运行。

上述赋予的权限可以使用以下命令撤回：

```bash
flatpak override org.turbowarp.TurboWarp --user --reset
```

### 修改版 Discord {#mods}

如果你正使用一个被修改或者第三方版本的 Discord，请参照那个修改版的文档来获得启用 RPC (远程过程调用) 的方式。
