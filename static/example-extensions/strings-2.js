class Strings2 {
  getInfo() {
    return {
      id: 'strings2example',
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
            FORMAT: {
              type: Scratch.ArgumentType.STRING,
              menu: 'FORMAT_MENU'
            }
          }
        }
      ],
      menus: {
        FORMAT_MENU: {
          acceptReporters: true,
          // highlight-start
          items: [
            {
              text: '大写',
              value: 'up'
            },
            {
              text: '小写',
              value: 'low'
            }
          ]
          // highlight-end
        }
      }
    };
  }

  convert (args) {
    // highlight-next-line
    if (args.FORMAT === 'up') {
      return args.TEXT.toString().toUpperCase();
    } else {
      return args.TEXT.toString().toLowerCase();
    }
  }
}
Scratch.extensions.register(new Strings2());
