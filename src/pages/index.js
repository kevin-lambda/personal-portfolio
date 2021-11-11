import * as React from "react"
import AllPostsList from "../components/AllPostsList"
import "normalize.css"
import "../assets/css/main.css"
import Layout from "../components/Layout"
import HeroFormat from "../components/HeroFormat"

const index = () => {
  return (
    <main>
      <header>
        <HeroFormat />
      </header>
      {/* navbar here? */}
      <Layout>
        <AllPostsList />
      </Layout>
      {/* footer to go here?        <footer></footer> */}
    </main>
  )
}

export default index
