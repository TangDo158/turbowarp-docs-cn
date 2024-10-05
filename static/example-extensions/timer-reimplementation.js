let startTime = Date.now();

class TimerReimplementationExample {
  getInfo() {
    return {
      id: 'timerreimplementationexample',
      name: '计时器示例',
      blocks: [
        // highlight-start
        {
          opcode: 'whenTimerGreaterThan',
          blockType: Scratch.BlockType.HAT,
          text: '当计时器 > [TIME]',
          isEdgeActivated: true,
          arguments: {
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '3'
            }
          }
        },
        // highlight-end
        {
          opcode: 'timer',
          blockType: Scratch.BlockType.REPORTER,
          text: '计时器'
        },
        {
          opcode: 'resetTimer',
          blockType: Scratch.BlockType.COMMAND,
          text: '重置计时器'
        }
      ]
    };
  }
  // highlight-start
  whenTimerGreaterThan({TIME}) {
    console.log(this.timer(), this.timer() > Scratch.Cast.toNumber(TIME));
    return this.timer() > Scratch.Cast.toNumber(TIME);
  }
  // highlight-end
  timer() {
    return (Date.now() - startTime) / 1000;
  }
  resetTimer() {
    startTime = Date.now();
  }
}

Scratch.extensions.register(new TimerReimplementationExample());
