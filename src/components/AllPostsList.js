import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PostsList from "./PostsList"

//grabbing all the posts from contentful
const AllPostsList = () => {
  const postData = useStaticQuery(queryVariable) //useStaticQuery can read the graphql
  const post = postData.allContentfulTestPostType1.nodes //destructure down to nodes. also post is an object. but it is still an array, which still needs array type parsing (map) to render
  // console.log(post)

  return (
    <main>
      <div>this is the all post lists component showing up</div>
      <PostsList sendPosts={post} />
      {/* this calls the PostsList component, but also sends it information */}
      {/* for the PostsList component, which we imported, send a variable called sendPosts, that is the object {post}, which is the destructed information from the variable postData, which parsed the graphql query */}
      {/* now go work on the PostLists component to use this object */}
    </main>
  )
}

// since this is not a page, do not use the graphql page query code
// just take it from the main query section.
// graphql `{ allcontentECT(){allStuff}  } `
// queryVariable is just a variable representing the graphql
const queryVariable = graphql`
  {
    allContentfulTestPostType1(sort: { order: DESC, fields: postDate }) {
      totalCount
      nodes {
        title
        id
        postDate
      }
    }
  }
`

export default AllPostsList
