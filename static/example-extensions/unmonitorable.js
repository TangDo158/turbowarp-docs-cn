class DisableMonitorExample {
  getInfo() {
    return {
      id: 'disablemonitorexample',
      name: '禁止监视变量示例',
      blocks: [
        {
          opcode: 'monitorable',
          blockType: Scratch.BlockType.REPORTER,
          text: '这个积木可以被监视'
        },
        {
          opcode: 'unmonitorable',
          blockType: Scratch.BlockType.REPORTER,
          text: '但这个就不行了捏',
          // highlight-next-line
          disableMonitor: true
        },
      ]
    };
  }

  monitorable() {
    return Math.random();
  }

  unmonitorable() {
    return Math.random();
  }
}

Scratch.extensions.register(new DisableMonitorExample());
