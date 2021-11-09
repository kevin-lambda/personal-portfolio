import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const PostsList = ({ sendPosts = [] }) => {
  return (
    <main>
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
          const pathToImage = getImage(featuredImage)
          const slugTitle = slugify(title, { lower: true })
          return (
            <main key={id}>
              <Link to={`/${slugTitle}`} className="default-link">
                {title}
              </Link>
              <Link to={`/${slugTitle}`}>
                <GatsbyImage
                  image={pathToImage}
                  alt="thing"
                  layout="constrained"
                  placeholder="blurred"
                />{" "}
              </Link>
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
  <p>ID: {id}</p>
  <p>TITLE: {title}</p>
  <p>POST_DATE: {postDate}</p>
  <p>MAIN CATEGORY: {mainCategory} </p>
  <p>SUB CATEGORY: {subCategory} </p>
  <p>TAGS: {tags} </p>
  <p>MAIN PAGE FEATURED: {mainPageFeatured} </p>
*/
