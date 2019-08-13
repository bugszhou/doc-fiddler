module.exports = {
  host: 'localhost',
  base: '/fiddler/',
  port: 8666,
  title: 'Fiddler简单使用',
  description: '使用Fiddler排错，抓包',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        collapsable: false,
        children: [
          'chapter1/',
        ],
      },
      {
        collapsable: false,
        children: [
          'simulator/',
        ],
      }
    ],
  },
};
