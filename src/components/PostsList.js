import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AllPostsList from "./AllPostsList"
import slugify from "slugify"

const PostsList = ({ sendPosts = [] }) => {
  return (
    <main>
      <div>this is the posts list component showing up</div>
      <div>
        {sendPosts.map((allNodes) => {
          const { id, title, postDate, featuredImage } = allNodes
          const postText = allNodes.mainText.mainText
          const pathToImage = getImage(featuredImage)
          return (
            <div>
              <p>ID: {id}</p>
              <p>TITLE: {title}</p>
              <p>POST_DATE: {postDate}</p>
              <p>POST_TEXT: {postText}</p>
              <p>
                FEATURED_IMAGE: <GatsbyImage image={pathToImage} alt="thing" />
              </p>
            </div>
          )
        })}
      </div>
      <div></div>
    </main>
  )
}

export default PostsList
