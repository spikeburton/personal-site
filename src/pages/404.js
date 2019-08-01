import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section
    // css={css`
    //   text-align: center;
    // `}
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
      <h4>
        {/* <span role="img" aria-label="robot">
          🤖
        </span>{" "} */}
        Oops. Whatcha doin' over here?
      </h4>
    </section>
  </Layout>
)

export default NotFoundPage
