exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const blogPostTemplate = require.resolve(`./src/pages/post.js`)
  
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
                date
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

    var numberOfPosts = result.data.allMarkdownRemark.edges.length
    var posts = result.data.allMarkdownRemark.edges
  
    posts.forEach(({ node }, i) => {
      createPage({
        path: i === 0 ? `/` : `/${i + 1}`,
        component: blogPostTemplate,
        context: {
          date: node.frontmatter.date,
          slug: node.frontmatter.slug,
          currentPage: `${i + 1}`,
          lastPage: (i + 1) === numberOfPosts
        },
      })
    })
  }