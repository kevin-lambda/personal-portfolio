import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const PostsList = ({ sendPosts = [] }) => {
  return (
    <main>
      <div>this is the posts list component showing up</div>
      <div>
        {sendPosts.map((allNodes) => {
          const {
            id,
            title,
            postDate,
            featuredImage,
            mainCategory,
            subCategory,
            tags,
            mainPageFeatured,
          } = allNodes
          // const postText = allNodes.mainText.mainText
          const pathToImage = getImage(featuredImage)
          const slugTitle = slugify(title, { lower: true })
          return (
            <main key={id}>
              <p>ID: {id}</p>
              <p>TITLE: {title}</p>
              <p>POST_DATE: {postDate}</p>
              <p>MAIN CATEGORY: {mainCategory} </p>
              <p>SUB CATEGORY: {subCategory} </p>
              <p>TAGS: {tags} </p>
              <p>MAIN PAGE FEATURED: {mainPageFeatured} </p>
              {/* <p>
                FEATURED_IMAGE: <GatsbyImage image={pathToImage} alt="thing" />
              </p> */}
              <Link to={`/${slugTitle}`}> LINK TO POST: {title} </Link>
              <Link to={`/${slugTitle}`}>
                <GatsbyImage image={pathToImage} alt="thing" />{" "}
              </Link>
              <p>
                ===============================================================
              </p>
            </main>
          )
        })}
      </div>
      <div></div>
    </main>
  )
}

export default PostsList
