export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8cbabe3253104c2bc89756',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-starter-i18n-studio',
                  apiId: 'db35384a-f80e-4a00-92d9-3d8f6e73d1d8'
                },
                {
                  buildHookId: '5e8cbabe3253105f54c89642',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-starter-i18n',
                  apiId: '8adb288e-aebf-4dfd-a703-6e01aa8cb427'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cristinallamas/sanity-gatsby-starter-i18n',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-starter-i18n.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
