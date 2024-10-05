class TerminalExample {
  getInfo() {
    return {
      id: 'terminalexample',
      name: '终止积木示例',
      blocks: [
        {
          opcode: 'terminalBlock',
          blockType: Scratch.BlockType.COMMAND,
          // highlight-next-line
          isTerminal: true,
          text: '下面可就接不了积木了！'
        }
      ]
    };
  }
  terminalBlock() {

  }
}

Scratch.extensions.register(new TerminalExample());
