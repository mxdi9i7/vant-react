import pkgJson from '../../package.json';
import DocLoadable from '../src/desktop/components/loadable';

export const { version } = pkgJson;

export const versions = [version];

export const github = 'https://github.com/youzan/vant';

export default {
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
            url: github
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
            path: 'guides/install',
            source:
              DocLoadable({ loader: () => import('../../README.md') }),
          },
          {
            title: '更新日志',
            path: 'guides/changelog',
            source:
              DocLoadable({ loader: () => import('../../changelog.md') }),
          },
          {
            title: 'Github 日志',
            path: 'guides/github_changelog',
            hidden: true,
            source:
              DocLoadable({ loader: () => import('../../README.md') }),
          },
          {
            title: '如何参与',
            path: 'guides/contribute',
            source:
              DocLoadable({ loader: () => import('../../docs/CONTRIBUTING_zh-CN.md') }),
          },
          {
            title: '文档规范',
            path: 'guides/markdown',
            source:
              DocLoadable({ loader: () => import('../../docs/MARKDOWN_zh-CN.md') }),
          },
        ],
      },
      {
        name: '基础组件',
        list: [
          {
            title: 'Button 按钮',
            path: 'api/button',
            source:
              DocLoadable({ loader: () => import('../../src/components/Button/README.zh-CN.md') }),
          },
          {
            title: 'Cell 单元格',
            path: 'api/cell',
            source:
              DocLoadable({ loader: () => import('../../src/components/Cell/README.zh-CN.md') }),
          },
          {
            title: 'Field 输入框',
            path: 'api/field',
            source:
              DocLoadable({ loader: () => import('../../src/components/Field/README.zh-CN.md') }),
          },
          {
            title: 'Icon 图标',
            path: 'api/icons',
            source:
              DocLoadable({ loader: () => import('../../src/components/Icons/README.zh-CN.md') }),
          },
          {
            title: 'Navbar 导航栏',
            path: 'api/navbar',
            source:
              DocLoadable({ loader: () => import('../../src/components/Navbar/README.zh-CN.md') }),
          },
          {
            title: 'Popup 弹出层',
            path: 'api/popup',
            source:
              DocLoadable({ loader: () => import('../../src/components/Popup/README.zh-CN.md') }),
          },
          {
            title: 'Rate 评分',
            path: 'api/rate',
            source:
              DocLoadable({ loader: () => import('../../src/components/Rate/README.zh-CN.md') }),
          },
          {
            title: 'Search 搜索',
            path: 'api/search',
            source:
              DocLoadable({ loader: () => import('../../src/components/Search/README.zh-CN.md') }),
          },
          {
            title: 'Tag 标记',
            path: 'api/tag',
            source:
              DocLoadable({ loader: () => import('../../src/components/Tag/README.zh-CN.md') }),
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
            url: github
          }
        ]
      }
    },
  }
};
