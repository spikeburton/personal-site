import React from "react"
import PropTypes from "prop-types"

import { NavLink } from "./navlink"
import { css } from "@emotion/core"

export const Menu = ({ show }) => {
  const display = show ? "block" : "none"

  return (
    <ul
      css={css`
        list-style: none;
        margin: 0;
        @media (max-width: 600px) {
          display: ${display};
          position: absolute;
          top: 2.15rem;
          right: 0;
          z-index: 1;
          background: #fff;
        }
      `}
    >
      <NavLink to="/">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </ul>
  )
}

Menu.propTypes = {
  show: PropTypes.bool,
}
