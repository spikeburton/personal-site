import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      <span role="img" aria-label="robot">
        🤖
      </span>{" "}
      Beep, Boop. Whatcha doin over here?
    </p>
  </Layout>
)

export default NotFoundPage
