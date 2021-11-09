import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const PostsList = ({ sendPosts = [] }) => {
  return (
    <main>
      <div className="all-posts-container">
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
          const pathToImage = getImage(featuredImage)
          const slugTitle = slugify(title, { lower: true })
          return (
            <main key={id}>
              <div className="all-posts-sub-container">
                <Link to={`/${slugTitle}`}>
                  <GatsbyImage
                    image={pathToImage}
                    alt="thing"
                    layout="constrained"
                    placeholder="blurred"
                  />
                </Link>
                <Link to={`/${slugTitle}`} className="default-link">
                  {title}
                </Link>
              </div>
            </main>
          )
        })}
      </div>
      <div></div>
    </main>
  )
}

export default PostsList

/* 
FOR DEBUGGING. place in the return
  <p>ID: {id}</p>
  <p>TITLE: {title}</p>
  <p>POST_DATE: {postDate}</p>
  <p>MAIN CATEGORY: {mainCategory} </p>
  <p>SUB CATEGORY: {subCategory} </p>
  <p>TAGS: {tags} </p>
  <p>MAIN PAGE FEATURED: {mainPageFeatured} </p>
*/
