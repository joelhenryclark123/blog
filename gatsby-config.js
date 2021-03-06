module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `Joel's Blog`,
    description: `I post here every Friday. Stop by to read about my latest work.`,
    author: `Joel Clark`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    }, 
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/posts`,
      },
    },

    `gatsby-transformer-remark`,
    
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:100,300,400,500, 900` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}
