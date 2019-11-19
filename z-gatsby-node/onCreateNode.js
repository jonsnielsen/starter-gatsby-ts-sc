const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const {
  createFilePath,
  createRemoteFileNode,
} = require("gatsby-source-filesystem")
import axios from "axios"
import matchAll from "match-all"

export default async ({
  node,
  actions,
  getNode,
  getNodes,
  store,
  cache,
  createNodeId,
}) => {
  const { createNodeField, createNode } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    if (node.frontmatter && node.frontmatter.templateKey === "project") {
      const content = node.frontmatter.content
      if (content) {
        for (let i = 0; i < content.length; i++) {
          const contentPiece = content[i]
          const orgVimeoIFrame = contentPiece.vimeoLink
          if (orgVimeoIFrame) {
            const videoIdRegex = /(?<=\/video\/)(.*?)(?=\?)/
            const matched = videoIdRegex.exec(orgVimeoIFrame)
            const videoId = matched[0]

            const vimeoVideoThing = await axios
              .get(`https://vimeo.com/api/v2/video/${videoId}.json`)
              .then(result => {
                if (result) {
                  const { data } = result
                  if (data) {
                    const thumbnailLarge = data[0].thumbnail_large
                    return thumbnailLarge
                  }
                }
              })

            let fileNode = await createRemoteFileNode({
              url: vimeoVideoThing,
              // parentNodeId: projectPost.id,
              store,
              cache,
              createNode,
              createNodeId,
            })

            //parse the vimeoIFrame info
            const htmlRegex = /(\<.*\>)/g

            const htmlTags = orgVimeoIFrame.split(htmlRegex)

            contentPiece.vimeoObject = {
              vimeoIFrame: orgVimeoIFrame,
              vimeoImage___NODE: fileNode.id,
            }
          }
        }
      }
    }
  }
}

function getNodeOfType(getNodes, key, lookFor) {
  const nodes = getNodes().filter(node => {
    if (!node || !node.frontmatter) {
      return false
    }
    return node.frontmatter[key] === lookFor
  })
  return nodes
}
