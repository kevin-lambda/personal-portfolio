import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

const PostTemplate = ({ data }) => {
  const {
    title,
    postDate,
    mainCategory,
    subCategory,
    tags,
    mainPageFeatured,
    id,
    featuredImage,
    bodyText: { bodyText },
  } = data.contentfulPortfolioPost
  const pathToFeatImage = getImage(featuredImage)
  const pathToAddImage = data.contentfulPortfolioPost.additionalImages
  const pathToTextMarkdown = data.contentfulPortfolioPost.bodyText.childMdx.body

  return (
    <main>
      <Layout>
        <div>
          <h1>{title}</h1>
          <p>{postDate}</p>
          <div>
            <GatsbyImage
              image={pathToFeatImage}
              alt="featured image"
              loading="eager"
              layout="constrained"
              className="post-feat-img"
            />
          </div>
          <MDXProvider>
            <MDXRenderer>{pathToTextMarkdown}</MDXRenderer>
          </MDXProvider>
          {/* map the additional images */}
          <div>
            {pathToAddImage.map((AllAddImages) => {
              const { gatsbyImageData, id } = AllAddImages
              return (
                <div key={id} className="centering-css">
                  <GatsbyImage
                    image={gatsbyImageData}
                    alt="additional images"
                    className="post-add-img"
                    layout="constrained"
                  />
                </div>
              )
            })}
          </div>

          <p></p>
          <p></p>
          <p></p>
        </div>
      </Layout>
    </main>
  )
}

// data = export const query = graphql
export const query = graphql`
  query getSinglePost($title: String) {
    contentfulPortfolioPost(title: { eq: $title }) {
      title
      postDate
      mainCategory
      subCategory
      tags
      mainPageFeatured
      id
      featuredImage {
        gatsbyImageData
      }
      additionalImages {
        gatsbyImageData
        id
      }
      bodyText {
        bodyText
        id
        childMdx {
          body
          id
        }
      }
    }
  }
`

export default PostTemplate
