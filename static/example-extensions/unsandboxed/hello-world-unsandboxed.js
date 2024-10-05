(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('这个“你好，世界”扩展必须不使用沙箱运行');
  }

  class HelloWorld {
    getInfo() {
      return {
        id: 'helloworldunsandboxed',
        name: '无沙箱的你好世界',
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
      return '世界';
    }
  }
  Scratch.extensions.register(new HelloWorld());
})(Scratch);
