class HideFromPaletteExample {
  getInfo() {
    return {
      id: 'hidefrompaletteexample',
      name: 'hideFromPalette 示例',
      blocks: [
        {
          opcode: 'hidden',
          blockType: Scratch.BlockType.REPORTER,
          text: '示例积木 (已隐藏)',
          hideFromPalette: true
        },
      ]
    };
  }

  hidden() {
    return '这个积木被从积木区隐藏了，但还能用';
  }
}

Scratch.extensions.register(new HideFromPaletteExample());
