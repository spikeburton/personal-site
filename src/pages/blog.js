import React, { useEffect, useState } from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Spinner from "../components/spinner"
import Post from "../components/post"

export default () => {
  const [posts, setPosts] = useState()

  useEffect(() => {
    fetch(process.env.GATSBY_MEDIUM_API, {
      method: "POST",
    })
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <Layout>
      <SEO title="Blog" />
      <ul
        css={css`
          list-style: none;
          margin: 0 auto;
          max-width: 800px;
        `}
      >
        {posts ? posts.map(post => <Post post={post} />) : <Spinner />}
      </ul>
    </Layout>
  )
}
