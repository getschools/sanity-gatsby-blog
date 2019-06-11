export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d00128a82a10e772b6f4e42',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yuehif1u',
                  apiId: '10efe222-771f-49f4-a717-f6dabe265ba4'
                },
                {
                  buildHookId: '5d00128a57213a69be2f70ca',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-owe1ncfq',
                  apiId: 'e510659a-add1-4db8-ad8d-a944a68f3deb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/getschools/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-owe1ncfq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
