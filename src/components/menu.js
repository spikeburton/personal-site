import React from "react"

import { NavLink } from "./navlink"
import { css } from "@emotion/core"

export const Menu = () => {
  return (
    <ul
      css={css`
        list-style: none;
        margin: 0;
        @media (max-width: 768px) {
          display: none;
        }
      `}
    >
      <NavLink to="/">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </ul>
  )
}
