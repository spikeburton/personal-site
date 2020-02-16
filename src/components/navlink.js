import React from "react"
import { Link } from "gatsby"

import { css } from "@emotion/core"

export const NavLink = ({ to, children }) => (
  <li
    css={css`
      display: inline-block;
      vertical-align: middle;
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }
      @media (max-width: 600px) {
        display: block;
        margin-bottom: 0.07rem;
        margin-right: 0;
      }
    `}
  >
    <h4>
      <Link
        to={to}
        css={css`
          color: hsla(0, 0%, 0%, 0.8);
          transition: 0.3s ease;
          -webkit-transition: 0.3s ease;
          &:hover {
            color: hsla(180, 100%, 25%, 0.8);
          }
          &:active {
            color: hsla(180, 100%, 25%, 1);
          }
        `}
      >
        {children}
      </Link>
    </h4>
  </li>
)
