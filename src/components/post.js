import React from "react"
import { css } from "@emotion/core"

export default ({ post }) => (
  <li
    css={css`
      margin-bottom: 2.15rem;
      &:last-child {
        margin-bottom: 0;
      }
      &:last-child .read-more-box {
        border-bottom: none;
        padding-bottom: 0;
        margin-bottom: 2.45rem;
      }
    `}
  >
    <div
      css={css`
        font-size: 0.875em;
        opacity: 0.5;
        float: right;
      `}
    >
      {new Date(post.createdAt).toLocaleDateString()}
    </div>
    <a
      href={post.url}
      title={post.title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        css={css`
          opacity: 1;
          transition: all ease 0.5s;
          -webkit-transition: all ease 0.5s;
          &:hover {
            opacity: 0.6;
          }
        `}
        src={post.image}
        alt={post.title}
        // If the image fails to fetch (e.g. CDN is down)
        // Just grab a random image
        // ¯\_(ツ)_/¯
        onError={e => {
          e.target.src = `https://lorempixel.com/800/400/`
          e.target.onerror = null
        }}
      />
    </a>
    <h4
      css={css`
        margin-top: 0.15rem;
        margin-bottom: 0.45rem;
      `}
    >
      {post.title}
    </h4>
    <p
      css={css`
        font-size: 0.8975em;
        opacity: 0.7;
        margin-bottom: 1.45rem;
      `}
    >
      {post.subtitle}
    </p>
    <div
      className="read-more-box"
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
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
)
