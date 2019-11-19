const path = require("path")

export default ({ actions, graphql }) => {
  const { createPage, createNodeField } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pages = result.data.allMarkdownRemark.edges

    pages.forEach(({ node }) => {
      if (!node.frontmatter.templateKey) {
        return
      }
      const id = node.id

      createPage({
        path: node.fields.slug,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.tsx`
        ),
        context: {
          id,
        },
      })
    })
  })
}
