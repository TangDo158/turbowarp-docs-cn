(function(Scratch) {
  'use strict';
  class Broadcast2 {
    getInfo() {
      return {
        id: 'broadcast2example',
        name: '广播示例 2',
        blocks: [
          {
            opcode: 'whenReceived',
            blockType: Scratch.BlockType.HAT,
            text: '当收到了 [EVENT_OPTION]',
            isEdgeActivated: false,
            // highlight-start
            arguments: {
              EVENT_OPTION: {
                type: Scratch.ArgumentType.STRING,
                menu: 'EVENT_FIELD'
              }
            }
            // highlight-end
          },
          {
            opcode: 'broadcast',
            blockType: Scratch.BlockType.COMMAND,
            text: '广播 [EVENT]',
            // highlight-start
            arguments: {
              EVENT: {
                type: Scratch.ArgumentType.STRING,
                menu: 'EVENT_FIELD'
              }
            }
            // highlight-end
          },
          {
            opcode: 'broadcastAll',
            blockType: Scratch.BlockType.COMMAND,
            text: '广播全部',
          }
        ],
        menus: {
          EVENT_FIELD: {
            // highlight-next-line
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
    // highlight-start
    broadcast({EVENT}, util) {
      util.startHats('broadcast2example_whenReceived', {
        EVENT_OPTION: EVENT
      });
    }
    broadcastAll(args, util) {
      util.startHats('broadcast2example_whenReceived');
    }
    // highlight-end
  }
  Scratch.extensions.register(new Broadcast2());
}(Scratch));
