
const github = 'https://github.com/mxdi9i7/vant-react';

module.exports = {
  'zh-CN': {
    header: {
      logo: {
        image: 'https://img.yzcdn.cn/vant/logo.png',
        title: 'Vant React',
        href: '#/'
      },
      nav: {
        lang: {
          text: 'En',
          from: 'zh-CN',
          to: 'en-US'
        },
        logoLink: [
          {
            image: 'https://b.yzcdn.cn/vant/logo/github.svg',
            url: 'github'
          }
        ]
      }
    },

    nav: [
      {
        name: '开发指南',
        list: [
          {
            title: '快速上手',
            path: 'quickstart',
          },
          {
            title: '更新日志',
            path: 'changelog',
          },
          {
            title: '如何参与',
            path: 'contribute',
          },
          {
            title: '文档规范',
            path: 'markdown',
          },
          {
            title: '国际化',
            path: 'locale',
          }
        ],
      },
      {
        name: '基础组件',
        list: [
          {
            title: 'Button 按钮',
            path: 'button',
          },
          {
            title: 'Cell 单元格',
            path: 'cell',
          },
          {
            title: 'Field 输入框',
            path: 'field',
          },
          {
            title: 'Icon 图标',
            path: 'icons',
          },
          {
            title: 'Navbar 导航栏',
            path: 'navbar',
          },
          {
            title: 'Popup 弹出层',
            path: 'popup',
          },
          {
            title: 'Rate 评分',
            path: 'rate',
          },
          {
            title: 'Search 搜索',
            path: 'search',
          },
          {
            title: 'Tag 标记',
            path: 'tag',
          }
        ],
      },
    ]
  },
  'en-US': {
    header: {
      logo: {
        image:
          'https://img.yzcdn.cn/vant/logo.png',
        title: 'Vant React',
        href: '#/'
      },
      nav: {
        lang: {
          text: '中文',
          from: 'en-US',
          to: 'zh-CN'
        },
        logoLink: [
          {
            image: 'https://b.yzcdn.cn/vant/logo/github.svg',
            url: 'github'
          }
        ]
      }
    },
  }
};