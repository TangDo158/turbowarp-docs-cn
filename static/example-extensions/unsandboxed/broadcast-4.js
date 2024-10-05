(function(Scratch) {
  'use strict';
  class Broadcast4 {
    getInfo() {
      return {
        id: 'broadcast4example',
        name: '广播示例 4',
        blocks: [
          {
            opcode: 'whenReceived',
            blockType: Scratch.BlockType.HAT,
            text: '当我收到了 [EVENT_OPTION]',
            isEdgeActivated: false,
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
            text: '于 [TARGET] 中广播 [EVENT]',
            arguments: {
              EVENT: {
                type: Scratch.ArgumentType.STRING,
                menu: 'EVENT_FIELD'
              },
              TARGET: {
                type: Scratch.ArgumentType.STRING,
                menu: 'TARGET_MENU'
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
          },
          TARGET_MENU: {
            acceptReporters: true,
            items: [
              '全部角色',
              '仅当前角色',
              '舞台'
            ]
          }
        }
      };
    }
    // highlight-start
    broadcast({EVENT, TARGET}, util) {
      const argumentFilter = {
        EVENT_OPTION: EVENT
      };

      let targetFilter = null;
      if (TARGET === '仅当前角色') targetFilter = util.target;
      if (TARGET === '舞台') targetFilter = util.runtime.getTargetForStage();

      util.startHats('broadcast4example_whenReceived', argumentFilter, targetFilter);
    }
    // highlight-end
  }
  Scratch.extensions.register(new Broadcast4());
}(Scratch));
