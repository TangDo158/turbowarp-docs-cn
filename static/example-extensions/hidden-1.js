class HideFromPaletteExample {
  getInfo() {
    return {
      id: 'hidefrompaletteexample',
      name: 'hideFromPalette 示例',
      blocks: [
        {
          opcode: 'hidden',
          blockType: Scratch.BlockType.REPORTER,
          text: '示例积木 (visible)'
        },
      ]
    };
  }

  hidden() {
    return '积木还是可见的捏';
  }
}

Scratch.extensions.register(new HideFromPaletteExample());
