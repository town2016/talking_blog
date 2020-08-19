module.exports = {
  title: 'Talking One',
  dest: 'vuepress',
  base: '/talking_blog/',
  head: [
    ['link', { rel: 'icon', href: `../hero.png` }],
    ['link', { rel: 'apple-touch-icon', href: `../hero.png` }],
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
        'webpackChunkName',
        'Vue最佳实战-组件更新',
        'Vue最佳实战-路由参数解耦',
        'Vue最佳实战-watch高阶应用',
        'Vue最佳实战-hook',
        'Vue最佳实战-路由自动化',
        'Vue最佳实战-observable'
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
        'standard',
        'dllplugin',
        'themDark'
      ]
    }
  ]
}

