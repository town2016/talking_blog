module.exports = {
  title: 'Talking One',
  dest: 'vuepress',
  base: '/talking_blog/',
  head: [
    ['link', { rel: 'icon', href: `/hero.png` }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  // theme: 'vue',
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
    sidebar: {
      '/vue/': getVueSideBar(),
      '/other/': getOtherSideBar()
    },
    activeHeaderLinks: true,
    // repo: 'vuejs/vuepress',
    // editLinks: true,
    // docsDir: 'docs',
    nav: [
      {
        text: 'Vue',
        link: '/vue/',
      },
      {
        text: 'React',
        link: '/react/'
      },
      {
        text: 'Node',
        link: '/node/'
      },
      {
        text: 'Other',
        link: '/other/'
      }
    ]
  }
}

function getVueSideBar () {
  return [
    {
      collapsable: false,
      children: [
        '',
        'webpackChunkName'
      ]
    }
  ]
}
function getOtherSideBar () {
  return [
    {
      collapsable: false,
      children: [
        '',
        'standard'
      ]
    }
  ]
}

