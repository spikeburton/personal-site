import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default () => {
  const { about } = useStaticQuery(graphql`
    query {
      about: markdownRemark(fileAbsolutePath: { regex: "/data/about.md/" }) {
        html
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      {/* Avatar */}
      <div
        css={css`
          max-width: 200px;
          margin: 0 auto 1.45rem;
          @media (max-width: 768px) {
            max-width: 150px;
          }
          @media (min-width: 1024px) {
            max-width: 250px;
          }
          @media (min-width: 1440px) {
            max-width: 300px;
            margin: 0 0.95rem 3.85rem;
          }
        `}
      >
        <Image />
      </div>
      {/* About Me Section */}
      <section dangerouslySetInnerHTML={{ __html: about.html }} />
    </Layout>
  )
}
