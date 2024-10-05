class HelloWorld {
  getInfo() {
    return {
      id: 'helloworld',
      name: '跑起来咯！',
      blocks: [
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.REPORTER,
          text: '你好！'
        }
      ]
    };
  }

  hello() {
    return '世界！';
  }
}

Scratch.extensions.register(new HelloWorld());
