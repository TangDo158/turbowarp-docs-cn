(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('此示例必须无沙箱运行');
  }

  class WhenSpaceKeyPressed {
    getInfo() {
      return {
        id: 'eventexampleunsandboxed',
        name: '事件积木示例',
        blocks: [
          // highlight-start
          {
            blockType: Scratch.BlockType.EVENT,
            opcode: 'whenSpacePressed',
            text: '当空格键被按下',
            isEdgeActivated: false // 一定需要指定这个选项
          }
          // highlight-end
        ]
      };
    }
    // Notice: whenSpacePressed 没有函数定义！
  }

  // highlight-start
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
      Scratch.vm.runtime.startHats('eventexampleunsandboxed_whenSpacePressed');
    }
  });
  // highlight-end

  Scratch.extensions.register(new WhenSpaceKeyPressed());
})(Scratch);
