(function(Scratch) {
  'use strict';

  // highlight-start
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('这个加速模式示例必须不使用沙箱运行');
  }
  const vm = Scratch.vm;
  // highlight-end

  class TurboMode {
    getInfo() {
      return {
        id: 'turbomodeunsandboxed',
        name: '加速模式',
        blocks: [
          {
            opcode: 'set',
            blockType: Scratch.BlockType.COMMAND,
            text: '[ENABLED] 加速模式',
            arguments: {
              ENABLED: {
                type: Scratch.ArgumentType.STRING,
                menu: 'ENABLED_MENU'
              }
            }
          }
        ],
        menus: {
          ENABLED_MENU: {
            acceptReporters: true,
            items: ['启用', '禁用']
          }
        }
      };
    }
    // highlight-start
    set(args) {
      vm.setTurboMode(args.ENABLED === '启用');
    }
    // highlight-end
  }
  Scratch.extensions.register(new TurboMode());
})(Scratch);
