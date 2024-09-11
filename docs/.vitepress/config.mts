import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PreBilt",
  description: "Placeholder",

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/The Config Team C.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      {
        text: 'Version',
        items: [
          { text: 'PreBilt v4', link: '/v4/', activeMatch: '/v4/' },
          { text: 'PreBilt v3', link: '/v3/', activeMatch: '/v3/' },
          { text: 'PreBilt v2', link: '/v2/', activeMatch: '/v2/' },
          { text: 'PreBilt v1', link: '/v1/', activeMatch: '/v1/' },
        ]
      }
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
        // { text: 'Release Notes', link: '/v1/release-notes' }
      ],
      '/v2/': [
        // { text: 'Release Notes', link: '/v2/release-notes' }
      ],
      '/v3/': [
        // { text: 'Release Notes', link: '/v3/release-notes' }
      ],
      '/v4/': [
        {
          text: 'Installation Guide', link: '/v4/guide/installation',
          collapsed: true,
          items: [
            { text: 'Step One' }, //, link: '/v2/guide/installation/one' },
            { text: 'Step Two' }, //, link: '/v2/guide/installation/two' },
            { text: 'Step Three' }, //, link: '/v2/guide/installation/three' },
          ]
        },
        { text: 'Configuration Guide', link: '/v4/guide/config',
          collapsed: true,
          items: [
            { text: 'Step One' }, //, link: '/v4/guide/config/one' },
            { text: 'Step Two' }, //, link: '/v4/guide/config/two' },
            { text: 'Step Three' }, //, link: '/v4/guide/config/three' },
          ]
         },
        { text: 'User Guide', link: '/v4/guide/user',
          collapsed: true,
          items: [
            { text: 'Step One' }, //, link: '/v4/guide/user/one' },
            { text: 'Step Two' }, //, link: '/v4/guide/user/two' },
            { text: 'Step Three' }, //, link: '/v4/guide/user/three' },
          ]
         },
        { text: 'Technical Architecture', link: '/v4/technical-architecture' },
        { text: 'Release Notes', link: '/v4/release-notes' }
      ]
    },

    // socialLinks: [
    //   { icon: 'linkedin', link: 'https://www.linkedin.com/company/the-config-team-ltd/' }
    // ]
  }
})
