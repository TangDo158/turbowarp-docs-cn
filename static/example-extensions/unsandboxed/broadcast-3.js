(function(Scratch) {
  'use strict';
  class Broadcast3 {
    getInfo() {
      return {
        id: 'broadcast3example',
        name: '广播示例 3',
        blocks: [
          {
            opcode: 'whenReceived',
            blockType: Scratch.BlockType.HAT,
            text: '当收到了 [EVENT_OPTION]',
            isEdgeActivated: false,
            // highlight-next-line
            shouldRestartExistingThreads: true,
            arguments: {
              EVENT_OPTION: {
                type: Scratch.ArgumentType.STRING,
                menu: 'EVENT_FIELD'
              }
            }
          },
          {
            opcode: 'broadcast',
            blockType: Scratch.BlockType.COMMAND,
            text: '广播 [EVENT]',
            arguments: {
              EVENT: {
                type: Scratch.ArgumentType.STRING,
                menu: 'EVENT_FIELD'
              }
            }
          }
        ],
        menus: {
          EVENT_FIELD: {
            acceptReporters: false,
            items: [
              '事件 1',
              '事件 2',
              '事件 3'
            ]
          }
        }
      };
    }
    broadcast({EVENT}, util) {
      util.startHats('broadcast3example_whenReceived', {
        EVENT_OPTION: EVENT
      });
    }
  }
  Scratch.extensions.register(new Broadcast3());
}(Scratch));
