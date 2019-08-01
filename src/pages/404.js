import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      robot: file(relativePath: { eq: "robot.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout social={false}>
      <SEO title="404: Not found" />
      <section
        css={css`
          text-align: center;
          @media (min-width: 768px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        `}
      >
        <div
          css={css`
            display: inline-block;
            @media (min-width: 768px) {
              padding: 10% 0;
            }
          `}
        >
          <h1
            css={css`
              color: hsla(180, 100%, 25%, 0.8);
              display: inline-block;
            `}
          >
            404
          </h1>{" "}
          <h6
            css={css`
              color: hsla(16, 100%, 47%, 1);
              display: inline-block;
            `}
          >{`Not Found ¯\\_(ツ)_/¯`}</h6>
          <h4>Oops. Whatcha doin' over here?</h4>
        </div>
        <div
          css={css`
            // background-color: hsla(0, 0%, 0%, 1);
            display: inline-block;
            // margin: 0 auto;
            max-width: 300px;
          `}
        >
          <Img fixed={data.robot.childImageSharp.fixed} />
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
