class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'strictequalityexample',
      name: '严格相等示例',
      blocks: [
        // highlight-start
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] 严格等于 [TWO]?',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '第二个值'
            }
          }
        }
        // highlight-end
      ]
    };
  }

  // highlight-start
  strictlyEquals(args) {
    return args.ONE === args.TWO;
  }
  // highlight-end
}
Scratch.extensions.register(new StrictEqualityExtension());
