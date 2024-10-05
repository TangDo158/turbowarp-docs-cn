(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('此示例必须无沙箱运行');
  }

  class When {
    getInfo() {
      return {
        id: 'whenunsandboxed',
        name: 'When',
        blocks: [
          {
            // highlight-start
            blockType: Scratch.BlockType.HAT,
            opcode: 'when',
            text: '当 [CONDITION] 为真',
            isEdgeActivated: false, // 一定需要指定这个选项
            arguments: {
              CONDITION: {
                type: Scratch.BlockType.BOOLEAN
              }
            }
            // highlight-end
          }
        ]
      };
    }
    // highlight-start
    when(args) {
      return Scratch.Cast.toBoolean(args.CONDITION);
    }
    // highlight-end
  }

  // highlight-start
  Scratch.vm.runtime.on('BEFORE_EXECUTE', () => {
    // startHats 和之前一样！
    Scratch.vm.runtime.startHats('whenunsandboxed_when');
  });
  // highlight-end

  Scratch.extensions.register(new When());
})(Scratch);
