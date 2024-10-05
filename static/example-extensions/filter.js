class FilterExample {
  getInfo() {
    return {
      id: 'filterexample',
      name: '过滤器示例',
      blocks: [
        {
          opcode: 'all',
          blockType: Scratch.BlockType.COMMAND,
          text: '角色和背景都能用',
        },
        {
          opcode: 'sprites',
          blockType: Scratch.BlockType.COMMAND,
          text: '只在角色能用',
          // highlight-next-line
          filter: [Scratch.TargetType.SPRITE]
        },
        {
          opcode: 'stage',
          blockType: Scratch.BlockType.COMMAND,
          text: '只在背景能用',
          // highlight-next-line
          filter: [Scratch.TargetType.STAGE]
        },
        {
          opcode: 'none',
          blockType: Scratch.BlockType.COMMAND,
          text: '都不能用（那拿来干嘛？）',
          // highlight-start
          // NOTE: 如果你只是想要表示这个积木已经被废弃，那就使用 hideFromPalette: true 而不是 filter: []
          filter: []
          // highlight-end
        }
      ]
    };
  }

  all() {
    return 0;
  }
  sprites() {
    return 0;
  }
  stage() {
    return 0;
  }
  none() {
    return 0;
  }
}

Scratch.extensions.register(new FilterExample());
