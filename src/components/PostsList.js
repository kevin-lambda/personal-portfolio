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
          const { id, title, postDate } = allNodes
          return (
            <p>
              <p>{id}</p>
              <p>{title}</p>
              <p>{postDate}</p>
            </p>
          )
        })}
      </div>
    </main>
  )
}

export default PostsList
