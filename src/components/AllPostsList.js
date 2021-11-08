import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PostsList from "./PostsList"

/*
- USE: this component to render a list of all the posts
- HOW: component takes in the gql query and interprets (parses) the data
- DEPENDENT: component calls another component which does the detail destructuring

- TODO: combine the two components?
*/

//grabbing all the posts from contentful
const AllPostsList = () => {
  const postData = useStaticQuery(queryVariable) //useStaticQuery can read the graphql
  const post = postData.allContentfulPortfolioPost.nodes //destructure down to nodes. also post is an object. but it is still an array, which still needs array type parsing (map) to render
  // console.log(post)

  return (
    <main>
      <div>this is the all post lists component showing up</div>
      <PostsList sendPosts={post} />

      {/* this calls the PostsList component, but also sends it information */}
      {/* for the PostsList component, which we imported, send a variable called sendPosts, that is the object {post}, which is the destructed information from the variable postData, which parsed the graphql query */}
      {/* now go work on the PostLists component to use this object a */}
    </main>
  )
}

// since this is not a page, do not use the graphql page query code
// just take it from the main query section.
// graphql `{ allcontentECT(){allStuff}  } `
// queryVariable is just a variable representing the graphql
const queryVariable = graphql`
  {
    allContentfulPortfolioPost(sort: { fields: postDate, order: DESC }) {
      nodes {
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
      }
    }
  }
`

export default AllPostsList
