import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `150px`, margin: `0 auto 1.45rem` }}>
      <Image />
    </div>
    <h1>About Me</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
      magnam nobis fuga quos sunt libero nostrum laboriosam numquam commodi
      dicta voluptate cupiditate placeat repellendus vero quidem odio possimus
      quisquam eveniet.
    </p>
  </Layout>
)
