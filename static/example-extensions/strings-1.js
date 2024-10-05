class Strings1 {
  getInfo() {
    return {
      id: 'strings1example',
      name: '大小写转换',
      blocks: [
        {
          opcode: 'convert',
          blockType: Scratch.BlockType.REPORTER,
          text: '[TEXT] 转换到 [FORMAT] 的结果',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '苹果'
            },
            // highlight-start
            FORMAT: {
              type: Scratch.ArgumentType.STRING,
              menu: 'FORMAT_MENU'
            }
            // highlight-end
          }
        }
      ],
      // highlight-start
      menus: {
        FORMAT_MENU: {
          acceptReporters: true,
          items: ['大写', '小写']
        }
      }
      // highlight-end
    };
  }

  convert (args) {
    if (args.FORMAT === '大写') {
      // 注意到 toString() 调用：TEXT 还可能是一个数字或者布尔值，
      // 因此我们必须先将其转换为字符串，这样我们才能获得一个 toUpperCase() 成员函数，
      // 否则就只会报错！
      // 记住：getInfo() 中 argument 的类型只是用于编辑器的一个建议；
      // 它从来不是强制的。
      return args.TEXT.toString().toUpperCase();
    } else {
      return args.TEXT.toString().toLowerCase();
    }
  }
}
Scratch.extensions.register(new Strings1());
