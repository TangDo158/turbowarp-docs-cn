(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('此示例必须无沙箱运行');
  }

  class WhenKeyPressedInStage {
    getInfo() {
      return {
        id: 'eventexample3unsandboxed',
        name: '事件积木示例 3',
        blocks: [
          {
            blockType: Scratch.BlockType.EVENT,
            opcode: 'whenPressed',
            text: '当 [KEY] 键被按下',
            isEdgeActivated: false,
            arguments: {
              KEY: {
                type: Scratch.ArgumentType.STRING,
                menu: 'key'
              }
            }
          }
        ],
        menus: {
          key: {
            acceptReporters: false,
            items: [
              {
                text: '空格',
                value: ' '
              },
              'a',
              'b',
              'c',
              // ...
            ]
          }
        }
      };
    }
  }

  document.addEventListener('keydown', (e) => {
    Scratch.vm.runtime.startHats('eventexample3unsandboxed_whenPressed', {
      KEY: e.key
      // highlight-next-line
    }, Scratch.vm.runtime.getTargetForStage());
  });

  Scratch.extensions.register(new WhenKeyPressedInStage());
})(Scratch);
