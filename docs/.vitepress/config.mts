import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🍦 Ice Cream Machine",
  description: "Learn how to operate our range of machines.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Machine v2', link: '/v2/', activeMatch: '/v2/' },
      { text: 'Machine v1', link: '/v1/', activeMatch: '/v1/'},
    ],

    sidebar: {
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/v1/': [
        {
          text: 'Guide',
          items: [
            { text: 'Loading flavours', link: '/v1/guide/flavours' },
            { text: 'Stacking cones'}, //, link: '/v1/guide/two' },
            {
              text: 'Installation',
              // link: '/v1/guide/installation/',
              items: [
                { text: 'Step One'}, //, link: '/v1/guide/installation/one' },
                { text: 'Step Two'}, //, link: '/v1/guide/installation/two' },
              ]
            }
          ]
        },
        {
          text: 'Troubleshooting',
          // link: '/v1/help/',
          items: [
            { text: 'Runny ice cream'}, //, link: '/v1/help/one' },
            { text: 'Cones not filling up'}, //, link: '/v1/help/two' }
          ]
        },
      ],
      '/v2/': [
        {
          text: 'Guide',
          items: [
            { text: 'Flavours management', link: '/v2/guide/flavours' },
            { text: 'Pricing and billing', link: '/v2/guide/pricing' },
            {
              text: 'Installation',
              // link: '/v1/guide/installation/',
              items: [
                { text: 'Step One'}, //, link: '/v2/guide/installation/one' },
                { text: 'Step Two'}, //, link: '/v2/guide/installation/two' },
                { text: 'Step Three'}, //, link: '/v2/guide/installation/three' },
              ]
            }
          ]
        },
        {
          text: 'Troubleshooting',
          // link: '/v2/help/',
          items: [
            { text: 'Double cones'}, //, link: '/v2/help/one' },
            { text: 'Broken 99 flakes'}, //, link: '/v2/help/two' }
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'youtube', link: 'https://youtu.be/dQw4w9WgXcQ' }
    ]
  }
})
