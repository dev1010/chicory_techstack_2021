export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6002290035816f25092f58c9',
                  title: 'Sanity Studio',
                  name: 'chicory-techstack-2021-studio',
                  apiId: 'a10ff8bb-226c-4389-9e87-cd489cc84af4'
                },
                {
                  buildHookId: '600229009b131e255deda607',
                  title: 'Blog Website',
                  name: 'chicory-techstack-2021',
                  apiId: '4fbbfcf3-01e5-424c-abe8-de29195fad95'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dev1010/chicory_techstack_2021',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://chicory-techstack-2021.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
