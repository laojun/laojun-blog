module.exports = {
  title: 'laojun前端博客',
  description: '前端知识点、面试题、感悟',
  markdown: {
    lineNumbers: true,
  },
  lang: 'zh-CN',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: '博客',
        link: '/blog/',
      },
      {
        text: '面试',
        link: '/interview/',
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/laojun/laojun-blog',
            icon: 'reco-github',
          },
        ],
      },
    ],
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: 'Category',
      },
      tag: {
        location: 3,
        text: 'Tag',
      },
    },
    subSidebar: 'auto',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '本文源码地址',
  },
  base: '/laojun-blog/',
};
