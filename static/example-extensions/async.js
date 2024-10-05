class AsyncExtension {
  getInfo() {
    return {
      id: 'asyncexample',
      name: '异步积木',
      blocks: [
        {
          opcode: 'wait',
          text: '等待 [TIME] 秒',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
        {
          opcode: 'fetch',
          text: '请求 [URL]',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://extensions.turbowarp.org/hello.txt'
            }
          }
        }
      ]
    };
  }

  // highlight-start
  wait (args) {
    return new Promise((resolve, reject) => {
      const timeInMilliseconds = args.TIME * 1000;
      setTimeout(() => {
        resolve();
      }, timeInMilliseconds);
    });
  }
  // highlight-end

  // highlight-start
  fetch (args) {
    return fetch(args.URL)
      .then((response) => {
        return response.text();
      })
      .catch((error) => {
        console.error(error);
        return '呃，请求失败了。';
      });
  }
  // highlight-end
}
Scratch.extensions.register(new AsyncExtension());