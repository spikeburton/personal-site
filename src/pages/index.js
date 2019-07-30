import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Home" />
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
    <h1>About Me</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
      magnam nobis fuga quos sunt libero nostrum laboriosam numquam commodi
      dicta voluptate cupiditate placeat repellendus vero quidem odio possimus
      quisquam eveniet.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea incidunt ad
      fugit enim atque voluptatem nisi ex nesciunt, quis iste deserunt in
      facilis saepe labore quos ab aliquid repudiandae nam!
    </p>
  </Layout>
)
