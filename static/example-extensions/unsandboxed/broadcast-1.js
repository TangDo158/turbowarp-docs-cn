(function(Scratch) {
  'use strict';
  class Broadcast1 {
    getInfo() {
      return {
        id: 'broadcast1example',
        name: '广播示例 1',
        blocks: [
          {
            opcode: 'whenReceived',
            // highlight-start
            blockType: Scratch.BlockType.HAT,
            text: '当我收到事件',
            isEdgeActivated: false
            // highlight-end
          },
          {
            opcode: 'broadcast',
            blockType: Scratch.BlockType.COMMAND,
            text: '广播事件'
          }
        ]
      };
    }
    // highlight-start
    broadcast(args, util) {
      util.startHats('broadcast1example_whenReceived');
    }
    // highlight-end
  }
  Scratch.extensions.register(new Broadcast1());
}(Scratch));
