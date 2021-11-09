import * as React from "react"
import AllPostsList from "../components/AllPostsList"
import "normalize.css"
import "../assets/css/main.css"
import Layout from "../components/Layout"

const index = () => {
  return (
    <main>
      <header>
        <p>FRONT PAGE HERE/HERO</p>
      </header>
      <Layout>
        <AllPostsList />
      </Layout>
      <footer>FOOTER HERE?</footer>
    </main>
  )
}

export default index
