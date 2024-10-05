import React, {useState} from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import CodeBlock from '@theme/CodeBlock';

export const ExtensionCode = ({title, children}) => {
  const isBrowser = useIsBrowser();
  const origin = isBrowser ? location.origin : `https://furryr.github.io/turbowarp-docs-cn`;
  return (
    <div>
      <CodeBlock
        language="js"
        showLineNumbers
        title={(
          <div>
            {`${title}.js`}
            {' - '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                title.startsWith('unsandboxed/') ? (
                  `https://turbowarp.org/editor?extension=https://extensions.turbowarp.org/docs-examples/${title}.js`
                ) : (
                  `https://turbowarp.org/editor?extension=${origin}/example-extensions/${title}.js`
                )
              }
            >
              {'在 Turbowarp 中尝试这个扩展'}
            </a>
          </div>
        )}
      >
        {children.default}
      </CodeBlock>
    </div>
  );
};

export const Spoiler = ({children}) => {
  const [opened, setOpened] = useState(false);
  return (
    <span
      style={{
        transition: '.2s background-color',
        borderRadius: '2px',
        ...(opened ? {
        } : {
          cursor: 'pointer',
          backgroundColor: 'currentcolor'
        })
      }}
      onClick={() => setOpened(true)}
    >
      <span style={opened ? {} : {
        opacity: '0'
      }}>
        {children}
      </span>
    </span>
  );
}
