const remark = require("remark")
const remarkParse = require("remark-parse")
const remarkRehype = require("remark-rehype")
const rehypeStringify = require("rehype-stringify")
const axios = require("axios")
var breaks = require("remark-breaks")
const fs = require("fs")
var sizeOf = require("image-size")
import { removeRelativePath } from "../src/utils/index.js"
import {
  isNullOrWhitespace,
  markdownToHtml,
  htmlToSeoDescription,
} from "../src/utils/markdown"
const { createRemoteFileNode } = require("gatsby-source-filesystem")

const emptyProject = {
  imageVideoObject: {
    imageVideo: "../static/cms-default/default.png",
    thumbnail: "../static/cms-default/default.png",
  },
  projectLinkedTo: "",
}

const emptyBitNPiece = {
  additionalInfo: [{ info: "" }],
  backgroundColor: "",
  imageVideoObject: {
    imageVideo: "../static/cms-default/default.png",
    thumbnail: "../static/cms-default/default.png",
  },
  textColor: "",
  title: "",
}

export default async ({ actions, getNodes, store, cache, createNodeId }) => {
  const { createNodeField, createNode } = actions

  createWorkFields(createNodeField, getNodes)
  await createProjectFields({
    createNodeField,
    getNodes,
    store,
    cache,
    createNodeId,
    createNode,
  })
  createInfoFields(createNodeField, getNodes)
  createSiteContentFields(createNodeField, getNodes)
  createHeaderFields(createNodeField, getNodes)
  createFooterFields(createNodeField, getNodes)

  const vimeoVideoThing = await axios
    .get(`https://vimeo.com/api/v2/video/294524187.json`)
    .then(result => {
      if (result) {
        const { data } = result
        if (data) {
          const thumbnailLarge = data[0].thumbnail_large
        }
      }
    })
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

async function createWorkFields(createNodeField, getNodes) {
  const workNode = getNodeOfType(getNodes, "templateKey", "work")[0]
  const thumbnails = workNode.frontmatter.thumbnails
  const updatedThumbnails = thumbnails.map(thumbnail => {
    let projectLinkedToFields = null
    const projectLinkedTo =
      thumbnail.project && thumbnail.project.projectLinkedTo
    if (projectLinkedTo) {
      getNodeOfType(getNodes, "templateKey", "project").forEach(projectPost => {
        if (projectLinkedTo === projectPost.frontmatter.title) {
          const { backgroundColor, textColor, title } = projectPost.frontmatter
          const { slug } = projectPost.fields
          projectLinkedToFields = { backgroundColor, textColor, title, slug }
        }
      })
    }
    const project = thumbnail.project || emptyProject
    const bitNPiece = thumbnail.bitNPiece || emptyBitNPiece
    return { ...thumbnail, projectLinkedToFields, project, bitNPiece }
  })
  createNodeField({
    node: workNode,
    name: "thumbnails",
    value: updatedThumbnails,
  })
}

async function createProjectFields({
  createNodeField,
  getNodes,
  store,
  cache,
  createNodeId,
  createNode,
}) {
  getNodeOfType(getNodes, "templateKey", "project").forEach(
    async projectPost => {
      const vimeoVideoThing = await axios
        .get(`https://vimeo.com/api/v2/video/294524187.json`)
        .then(result => {
          if (result) {
            const { data } = result
            if (data) {
              const thumbnailLarge = data[0].thumbnail_large
              return thumbnailLarge
            }
          }
        })

      let fileNode
      // Ensures we are only processing Media Files
      // `wordpress__wp_media` is the media file type name for Wordpress
      try {
        fileNode = await createRemoteFileNode({
          url: vimeoVideoThing,
          // parentNodeId: projectPost.id,
          store,
          cache,
          createNode,
          createNodeId,
          auth: _auth,
        })
      } catch (e) {
        // Ignore
      }

      // Adds a field `localFile` to the node
      // ___NODE appendix tells Gatsby that this field will link to another node
      if (fileNode) {
        // projectPost.localFile___NODE = fileNode.id
        createNodeField({
          node: projectPost,
          name: "vimeoImage",
          value: fileNode.id,
        })
      }
      // })

      const contentList = projectPost.frontmatter.content
      let updatedContentList = await contentList.map(async content => {
        content.text = markdownToHtml(content.text)
        content.isPlaceholderImage =
          content.imageVideoObject && content.imageVideoObject.imageVideo
            ? false
            : true

        // Setting imageVideoObject
        if (!content.imageVideoObject) {
          content.imageVideoObject = {}
        }
        content.imageVideoObject.imageVideo =
          content.imageVideoObject.imageVideo ||
          "../../static/cms-default/default.png"
        content.imageVideoObject.thumbnail =
          content.imageVideoObject.thumbnail ||
          "../../static/cms-default/default.png"

        // Setting titleInfo
        if (content.titleInfo) {
          if (
            content.titleInfo.projectInfo &&
            content.titleInfo.projectInfo.length
          ) {
            content.titleInfo.projectInfo = content.titleInfo.projectInfo.map(
              info => {
                const newInfoValue = markdownToHtml(info.infoValue)
                return { ...info, infoValue: newInfoValue }
              }
            )
          }
        }
        return content
      })

      updatedContentList = await Promise.all(updatedContentList)

      let seoDescription = updatedContentList.filter(content => content.text)
      seoDescription = seoDescription.length
        ? htmlToSeoDescription(seoDescription[0].text)
        : null

      let seoImage = updatedContentList.filter(
        content => !content.isPlaceholderImage
      )
      seoImage = seoImage.length
        ? {
            isPlaceholder: false,
            seoImage: seoImage[0].imageVideoObject.imageVideo,
          }
        : {
            isPlaceholder: true,
            seoImage: "../../static/cms-default/default.png",
          }

      createNodeField({
        node: projectPost,
        name: "content",
        value: updatedContentList,
      })
      createNodeField({
        node: projectPost,
        name: "seoDescription",
        value: seoDescription,
      })
      createNodeField({
        node: projectPost,
        name: "seoImage",
        value: seoImage,
      })
    }
  )
}

function createSiteContentFields(createNodeField, getNodes) {
  getNodeOfType(getNodes, "fileKey", "siteContent").forEach(siteContent => {
    let animationJsonUrl = siteContent.frontmatter.loadingAnimation
    if (animationJsonUrl) {
      animationJsonUrl = removeRelativePath(animationJsonUrl)
      const animationJsonLoaded = fs.readFileSync(animationJsonUrl, "utf8")
      createNodeField({
        node: siteContent,
        name: "animationData",
        value: animationJsonLoaded,
      })
    }
  })
}

function createHeaderFields(createNodeField, getNodes) {
  getNodeOfType(getNodes, "fileKey", "header").forEach(header => {
    const workPageNode = getNodeOfType(getNodes, "templateKey", "work")[0]
    const workPage = {
      backgroundColor: workPageNode.frontmatter.backgroundColor,
      textColor: workPageNode.frontmatter.textColor,
    }

    const infoPageNode = getNodeOfType(getNodes, "templateKey", "info")[0]
    const infoPage = {
      backgroundColor: infoPageNode.frontmatter.backgroundColor,
      textColor: infoPageNode.frontmatter.textColor,
    }
    createNodeField({
      node: header,
      name: "pageLinkData",
      value: {
        workPage,
        infoPage,
      },
    })
  })
}

function createFooterFields(createNodeField, getNodes) {
  getNodeOfType(getNodes, "fileKey", "footer").forEach(footer => {
    let footerLeft = footer.frontmatter.footerLeft
    footerLeft = markdownToHtml(footerLeft)

    let footerCenter = footer.frontmatter.footerCenter
    footerCenter = markdownToHtml(footerCenter)

    let footerRight = footer.frontmatter.footerRight
    footerRight = footerRight.map(({ link, svgIcon }) => {
      return { link, svgIcon }
    })

    createNodeField({
      node: footer,
      name: "footerFields",
      value: {
        footerLeft,
        footerCenter,
        footerRight,
      },
    })
  })
}

function createInfoFields(createNodeField, getNodes) {
  getNodeOfType(getNodes, "templateKey", "info").forEach(infoPage => {
    const {
      additionalInfo: additionalInfoList,
      mainContent: mainContentList,
      floatingIcons,
    } = infoPage.frontmatter

    const updatedFloatingIcons = !floatingIcons
      ? []
      : floatingIcons.map(({ icon }) => {
          icon = removeRelativePath(icon)
          let iconBase64 = fs.readFileSync(icon, "base64")
          const img = Buffer.from(iconBase64, "base64")
          const { width, height } = sizeOf(img)
          // Iconbase is originally without this prefix, but its needed in matterjs
          iconBase64 = "data:image/png;base64," + iconBase64
          return { iconBase64, width, height }
        })

    const updatedMainContentList = !mainContentList
      ? []
      : mainContentList.map(mainContent => {
          mainContent.content = markdownToHtml(mainContent.content)
          return mainContent
        })

    const updatedAdditionalInfoList = !additionalInfoList
      ? []
      : additionalInfoList.map(additionalInfo => {
          if (isNullOrWhitespace(additionalInfo.infoValue)) {
            additionalInfo.infoValue = ""
          }
          if (additionalInfo.infoValue) {
            additionalInfo.infoValue = remark()
              .use(remarkParse)
              .use(breaks)
              .use(remarkRehype)
              .use(rehypeStringify)
              .processSync(additionalInfo.infoValue)
              .toString()
          }
          return additionalInfo
        })
    createNodeField({
      node: infoPage,
      name: "contentList",
      value: {
        mainContent: updatedMainContentList,
        additionalInfo: updatedAdditionalInfoList,
      },
    })
    createNodeField({
      node: infoPage,
      name: "floatingIcons",
      value: updatedFloatingIcons,
    })
  })
}
