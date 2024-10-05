class ColorExample {
  getInfo() {
    return {
      id: 'colorexample',
      name: '积木颜色示例',
      // highlight-start
      // 故意选了点很糟糕的色，这样你才能看得更清楚
      color1: '#ff0000', // 纯红
      color2: '#00ff00', // 纯绿
      color3: '#0000ff', // 纯蓝
      // highlight-end
      blocks: [
        {
          opcode: 'reporter',
          blockType: Scratch.BlockType.REPORTER,
          text: '字符串 [STRING] 布尔值 [BOOLEAN] 可嵌入返回值菜单 [MENU] 不可嵌入返回值菜单 [FIELD]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '1'
            },
            BOOLEAN: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            MENU: {
              type: Scratch.ArgumentType.STRING,
              menu: 'MENU'
            },
            FIELD: {
              type: Scratch.ArgumentType.STRING,
              menu: 'FIELD'
            }
          }
        },
      ],
      menus: {
        MENU: {
          acceptReporters: true,
          items: ['item 1', 'item 2']
        },
        // 这里使用 acceptReporters: false 只是为了示例。
        // 在实际使用中，如果不想恶心用户或者只设置固定选择，建议不要这样设置。
        FIELD: {
          acceptReporters: false,
          items: ['item 1', 'item 2']
        }
      }
    };
  }

  reporter() {
    return '这个积木啥也不干';
  }
}

Scratch.extensions.register(new ColorExample());
