import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Vue-Ganttlet',
  description: 'Simple and customizable Gantt chart component for Vue 3.',
  base: '/vue-ganttlet/',
  head: [['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/106790619' }]],
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/106790619',
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      { text: 'Introduction', link: '/introduction'},
      { text: 'Getting Started',link: '/getting-started' },
      { text: 'Common use cases', link: '/common-use-cases' },
      { text: 'Examples', link: '/examples' },
      {
        text: 'API Reference',
        items: [
          { text: 'GGanttChart', link: '/GGanttChart' },
          { text: 'GGanttRow', link: '/GGanttRow' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kyto64/vue-ganttlet' }
    ]
  }
})
