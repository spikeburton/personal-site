import React, { useEffect, useState } from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default () => {
  const [posts, setPosts] = useState()

  useEffect(() => {
    fetch(
      `https://3omgwutekj.execute-api.us-east-2.amazonaws.com/default/MediumJSONParser?username=spikeburton`,
      {
        method: "POST",
      }
    )
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <Layout>
      <ul
        css={css`
          list-style: none;
          margin: 0;
        `}
      >
        {posts &&
          posts.map(post => (
            <li
              css={css`
                margin-bottom: 2.15rem;
                &:last-child {
                  margin-bottom: 0;
                }
                &:last-child div {
                  border-bottom: none;
                  padding-bottom: 0;
                  margin-bottom: 2.45rem;
                }
              `}
              key={post.id}
            >
              <a
                href={post.url}
                title={post.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  css={css`
                    margin-bottom: 0;
                  `}
                  src={post.image}
                  alt={post.title}
                />
              </a>
              <h5
                css={css`
                  margin-bottom: 0.45rem;
                `}
              >
                {post.title}
              </h5>
              <p
                css={css`
                  font-size: 0.8975em;
                  opacity: 0.7;
                  margin-bottom: 0.85rem;
                `}
              >
                {post.subtitle}
              </p>
              <div
                css={css`
                  text-align: center;
                  padding-bottom: 1.2rem;
                  margin: 0 25px;
                  border-bottom: 1px solid #bbb;
                `}
              >
                <a
                  css={css`
                    color: #fff;
                    background-color: hsla(0, 0%, 0%, 0.8);
                    padding: 0.65rem;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                      Helvetica Neue, sans-serif;
                    font-size: 0.75em;
                    font-weight: bold;
                    transition: all ease 0.2s;
                    -webkit-transition: all ease 0.2s;
                    &:hover {
                      color: hsla(0, 0%, 0%, 0.8);
                      background-color: #ddd;
                    }
                    &:active {
                      color: hsla(0, 0%, 0%, 1);
                    }
                  `}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More ...
                </a>
              </div>
            </li>
          ))}
      </ul>
    </Layout>
  )
}
