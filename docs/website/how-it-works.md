---
slug: /how
hide_table_of_contents: true
---

# Turbowarp 是如何让 Scratch 作品加速 10-100 倍的

TurboWarp 使用了 *编译器* 而 Scratch 使用了 *解释器*。这样允许 Turbowarp 因项目而异而加速项目 10-100 倍，但这样做会使得动态脚本编辑 [无法使用](#live-script-editing)。

export const Test = ({name, id, scratch, tw}) => (
  <tr>
    <td><a href={`https://scratch.mit.edu/projects/${id}/`}>{name}</a></td>
    <td>{scratch}</td>
    <td>{tw}</td>
  </tr>
);

<table style={{textAlign: "center"}}>
  <thead>
    <tr>
      <th>测试</th>
      <th>Scratch</th>
      <th>Turbowarp</th>
    </tr>
  </thead>
  <tbody>
    <Test name="快速排序 200000 个元素" id="310372816" scratch="10.746s" tw="0.0528s" />
    <Test name="光线追踪 分辨率=1 采样=10 景深=.08" id="412737809" scratch="832s" tw="16s" />
  </tbody>
</table>

(在 Linux 上的 Chromium 103 测试)

考虑以下脚本：

![当绿旗被按下时，永远移动 我的变量 步](./assets/forever-move-my-variable-steps.svg)

Scratch 的解释器将在运行时遍历一个 [抽象语法树](https://zh.wikipedia.org/wiki/%E6%8A%BD%E8%B1%A1%E8%AA%9E%E6%B3%95%E6%A8%B9)。在内部它看起来像这样：

```json
{
  "va[U{Cbi_NZpSOSx_kVA": {
    "opcode": "event_whenflagclicked",
    "inputs": {},
    "fields": {},
    "next": "tzXnZ{8G!xK|t^WAWF{m",
    "topLevel": true
  },
  "tzXnZ{8G!xK|t^WAWF{m": {
    "opcode": "control_forever",
    "inputs": {
      "SUBSTACK": {
        "name": "SUBSTACK",
        "block": "$xf$bq|xl(}RhT-K,taS"
      }
    },
    "fields": {},
    "next": null,
    "topLevel": false
  },
  "$xf$bq|xl(}RhT-K,taS": {
    "opcode": "motion_movesteps",
    "inputs": {
      "STEPS": {
        "name": "STEPS",
        "block": "cw__.I:g}Y~`:5KmO00q"
      }
    },
    "fields": {},
    "next": null,
    "topLevel": false
  },
  "cw__.I:g}Y~`:5KmO00q": {
    "opcode": "data_variable",
    "inputs": {},
    "fields": {
      "VARIABLE": {
        "name": "VARIABLE",
        "id": "`jEk@4|i[#Fk?(8x)AV.-my variable"
      }
    },
    "next": null,
    "topLevel": false
  }
}
```

无论 Scratch 执行什么积木，它都要做一堆事情：

 - 它需要根据 ID 来寻找积木，然后再寻找积木的 opcode 对应的函数实现。
 - 如果积木含有输入，输入也是积木，也要走一遍积木的流程，更不用说更深层的输入了。
 - 它手动维护一个用于积木、循环、条件语句、过程之类的栈。
 - Scratch 的脚本可以让出执行权，所以上述流程必须可以被暂停并在一会后原地恢复。
 - Scratch 的脚本可以在运行时被改变，所以提前缓存任何东西都是很困难的。
 - 等等。Scratch 在执行一个积木时真的发生了 *很多* 事情。

解释器带来的额外性能消耗会加载 Javascript 带来的额外的消耗上面。由于代码使用了很多动态类型，JavaScript JIT 很难优化它。

Turbowarp 的编译器通过将脚本直接编译为 JavaScript 函数，移除了上述所有额外性能消耗。比如，上述的脚本会被编译成：

```js
const myVariable = stage.variables["`jEk@4|i[#Fk?(8x)AV.-my variable"];
return function* () {
  while (true) {
    runtime.ext_scratch3_motion._moveSteps((+myVariable.value || 0), target);
    yield;
  }
};
```

可以注意到：

 - 不用再去找积木 ID 和 opcode：它就是 JavaScript。
 - 不用再去手动找输入：它们就是 JavaScript 参数。
 - 不需要手动管理状态：它就是 JavaScript。
 - 因为这是一个 JavaScript 函数，我们没办法简单地实现 [动态脚本编辑](#live-script-editing)。
 - 如果 JavaScript JIT 注意到一个变量总是一个数字，它可以基于这点对变量操作进行优化。
 - 编译出来的 JavaScript 相比人类编写的 JavaScript 来说非常奇怪，并且可能跑得更慢，因为我们需要保持与 Scratch 大小写不敏感的兼容性。
 - 我们手动格式化了 JavaScript 并且重命名了一些变量来让它更加刻度。实际的代码使用 `b0` 来代替变量名，并且没有格式化。

当然，这样的脚本太过简单，以至于解释器的额外性能消耗体现不出来，通常大部分项目都这样。仅当你每帧执行上百积木时，额外性能消耗才初见端倪。

这里有一个更加复杂的示例：一个原始的排序算法 (冒泡排序)。

```js
const length = stage.variables["O;aH~(njYNn}Bl@}!%pS-length-"];
const list = stage.variables["O;aH~(njYNn}Bl@}!%pS-list-list"];
const newLength = stage.variables["O;aH~(njYNn}Bl@}!%pS-new-"];
const i = stage.variables["O;aH~(njYNn}Bl@}!%pS-i-"];
const temp = stage.variables["O;aH~(njYNn}Bl@}!%pS-tmp-"];
return function fun1_sort () {
  length.value = list.value.length;
  // 等待直到 length = 0
  while (!compareEqual(length.value, 0)) {
    newLength.value = 0;
    i.value = 1;
    // 重复 length - 1 次
    for (var counter = ((+length.value || 0) - 1) || 0; counter >= 0.5; counter--) {
      // change i by 1
      i.value = ((+i.value || 0) + 1);
      // 如果列表的第 i - 1 个元素大于列表的第 i 个元素
      if (
        compareGreaterThan(
          list.value[((((i.value || 0) - 1) || 0) | 0) - 1] ?? "",
          list.value[((i.value || 0) | 0) - 1] ?? ""
        )
      ) {
        // 交换列表的第 i 和 i - 1 个元素
        temp.value = listGet(list.value, i.value);
        listReplace(
          list,
          i.value,
          list.value[((((+i.value || 0) - 1) || 0) | 0) - 1] ?? ""
        );
        listReplace(
          list,
          (+i.value || 0) - 1,
          temp.value
        );
        newLength.value = i.value;
      }
    }
    length.value = newLength.value;
  }
};
```

### 动态脚本编辑 {#live-script-editing}

如果你启动了一个使用编译器的脚本，你将无法移动、删除、添加积木并让这些修改和 Scratch 一样实时反映效果。你必须重启脚本才能应用修改。我们认为有办法能让动态脚本编辑在编译器上实现，不过那样会严重降低性能或者让代码过于复杂。最终我们要实现它的，但现在我们选择摆烂。
