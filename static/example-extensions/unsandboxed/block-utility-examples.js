(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('这个“积木工具”示例必须不使用沙箱运行');
  }

  class BlockUtilityExamples {
    getInfo() {
      return {
        id: 'blockutilityexamples',
        name: '积木工具 (BlockUtility) 示例',
        blocks: [
          {
            opcode: 'getSpriteName',
            text: '角色的名字',
            blockType: Scratch.BlockType.REPORTER,
          },
          {
            opcode: 'doesVariableExist',
            text: '有一个类型为 [TYPE] 的 [NAME] 变量么?',
            blockType: Scratch.BlockType.BOOLEAN,
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '我的变量'
              },
              TYPE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'TYPE_MENU',
                defaultValue: 'list'
              }
            }
          }
        ],
        menus: {
          TYPE_MENU: {
            acceptReporters: true,
            items: [
              // value 代表的是 scratch-vm 内部变量的类型。
              // 并且是的，广播消息也是变量。
              // https://github.com/TurboWarp/scratch-vm/blob/20c60193c1c567a65cca87b16d22c51963565a43/src/engine/variable.js#L43-L67
              {
                text: '变量',
                value: ''
              },
              {
                text: '列表',
                value: 'list'
              },
              {
                text: '广播消息',
                value: 'broadcast_msg'
              }
            ]
          }
        }
      };
    }
    // highlight-start
    getSpriteName(args, util) {
      return util.target.getName();
    }
    doesVariableExist(args, util) {
      const variable = util.target.lookupVariableByNameAndType(args.NAME.toString(), args.TYPE);
      // 记住：布尔值积木必须返回一个 boolean 类型的值，它们需要自己完成类型转换。
      return !!variable;
    }
    // highlight-end
  }
  Scratch.extensions.register(new BlockUtilityExamples());
})(Scratch);
