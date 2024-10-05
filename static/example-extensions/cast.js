class CastingExample {
  getInfo() {
    return {
      id: 'castexample',
      name: '类型转换示例',
      blocks: [
        {
          opcode: 'toNumber',
          blockType: Scratch.BlockType.REPORTER,
          text: '[INPUT] 作为数字',
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '3.0'
            }
          }
        },
        {
          // opcode "toString" 应该可以用，但是它在 JavaScript 中有特殊用途，
          // 所以用它可能比较危险，在前面加个前缀好了。
          opcode: 'castToString',
          blockType: Scratch.BlockType.REPORTER,
          text: '[INPUT] 作为字符串',
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello'
            }
          }
        },
        {
          opcode: 'toBoolean',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[INPUT] 作为布尔值',
          arguments: {
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '1'
            }
          }
        },
        {
          opcode: 'compare',
          blockType: Scratch.BlockType.REPORTER,
          text: '[A] 与 [B] 比较的结果',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '3'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5'
            }
          }
        }
      ]
    };
  }

  toNumber({INPUT}) {
    // highlight-next-line
    return Scratch.Cast.toNumber(INPUT);
  }

  castToString({INPUT}) {
    // highlight-next-line
    return Scratch.Cast.toString(INPUT);
  }

  toBoolean({INPUT}) {
    // highlight-next-line
    return Scratch.Cast.toBoolean(INPUT);
  }

  compare({A, B}) {
    // highlight-start
    const comparison = Scratch.Cast.compare(A, B);
    // You need to use < 0, > 0, or === 0 here.
    // Do not use === 1 or === -1! That will not work in some cases.
    if (comparison === 0) {
      return '相等';
    } else if (comparison > 0) {
      return 'A 更大';
    } else if (comparison < 0) {
      return 'B 更小';
    }
    // highlight-end
  }
}

Scratch.extensions.register(new CastingExample());
