import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import axios from "axios"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Spinner from "../components/spinner"
import Post from "../components/post"

export default () => {
  const [posts, setPosts] = useState()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.post(process.env.GATSBY_MEDIUM_API)
        setPosts(res.data)
      } catch (error) {
        window.alert(error)
        navigate("/")
      }
    }
    fetchPosts()
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
        {posts ? (
          posts.map(post => <Post key={post.id} post={post} />)
        ) : (
          <Spinner />
        )}
      </ul>
    </Layout>
  )
}
