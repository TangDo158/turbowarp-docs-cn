/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Turbowarp 文档',
  url: 'https://furryr.github.io/',
  baseUrl: '/turbowarp-docs-cn/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'Turbowarp',
  projectName: 'docs',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Turbowarp 文档',
      items: [
        {
          href: '/packager/',
          label: '打包器',
          position: 'left'
        },
        {
          href: '/development/',
          label: '开发',
          position: 'left'
        },
        {
          href: 'https://turbowarp.org/',
          label: 'Turbowarp',
          position: 'right'
        },
        {
          href: 'https://github.com/TurboWarp',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      // This is all supposed to be public
      appId: 'HORQ9E5CCA',
      apiKey: 'c3873ce4208edb896a31bb3e7c2cbdad',
      indexName: 'turbowarp'
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require('./code-themes/light'),
      darkTheme: require('./code-themes/dark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/FurryR/turbowarp-docs-cn/edit/master/',
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
