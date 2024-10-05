(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('此示例必须无沙箱运行');
  }

  class WhenKeyPressed {
    getInfo() {
      return {
        id: 'restartexampleunsandboxed',
        name: '重启线程示例',
        blocks: [
          {
            blockType: Scratch.BlockType.EVENT,
            opcode: 'whenPressed',
            text: '当 [KEY] 键被按下',
            isEdgeActivated: false,
            // highlight-next-line
            shouldRestartExistingThreads: true,
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
    Scratch.vm.runtime.startHats('restartexampleunsandboxed_whenPressed', {
      KEY: e.key
    });
  });

  Scratch.extensions.register(new WhenKeyPressed());
})(Scratch);
