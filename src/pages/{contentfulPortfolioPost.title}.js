import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostTemplate = ({ data }) => {
  // destructure the gql

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
  return (
    <main>
      <div>
        <p>TITLE: {title}</p>
        <p>POSTDATE: {postDate} </p>
        <p>MAIN CATEGORY: {mainCategory} </p>
        <p>SUB CATEGORY: {subCategory} </p>
        <p>TAGS: {tags} </p>
        <p>MAIN PAGE FEATURED: {mainPageFeatured} </p>
        <p>ID: {id} </p>
        <p>BODY TEXT: {bodyText}</p>
        <p>
          FEATURED IMAGE:
          <GatsbyImage image={pathToFeatImage} alt="featured image" />
        </p>

        {/* map the additional images */}
        <div>
          {pathToAddImage.map((AllAddImages) => {
            const { gatsbyImageData, id } = AllAddImages
            return (
              <div key={id}>
                <GatsbyImage image={gatsbyImageData} alt="additional images" />
              </div>
            )
          })}
        </div>

        <p></p>
        <p></p>
        <p></p>
      </div>
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
      }
    }
  }
`

export default PostTemplate
