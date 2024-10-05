class SeparatorExample {
  getInfo() {
    return {
      id: 'separatorexample',
      name: '分割线示例',
      blocks: [
        {
          opcode: 'block1',
          blockType: Scratch.BlockType.COMMAND,
          text: '第一组'
        },
        {
          opcode: 'block2',
          blockType: Scratch.BlockType.COMMAND,
          text: '也是第一组的',
        },
        // highlight-next-line
        '---',
        {
          opcode: 'block3',
          blockType: Scratch.BlockType.COMMAND,
          text: '第二组'
        },
        // highlight-next-line
        '---',
        {
          opcode: 'block4',
          blockType: Scratch.BlockType.COMMAND,
          text: '第三组',
        },
      ]
    };
  }
  block1() {}
  block2() {}
  block3() {}
  block4() {}
}

Scratch.extensions.register(new SeparatorExample());
