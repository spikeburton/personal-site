import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Menu } from "./menu"
import { css } from "@emotion/core"
import { Burger } from "./burger"

const Header = ({ siteTitle }) => (
  <header>
    <div
      css={css`
        margin: 0 auto;
        padding: 1.45rem 1.0875rem;
        border-bottom: 1px solid #eee;
        max-width: 960px;
        @media (max-width: 375px) {
          padding: 0.85rem 1.0875rem;
        }
        @media (min-width: 1440px) {
          max-width: 1250px;
          padding: 1.65rem 1.0875rem;
        }
        @media (min-width: 2560px) {
          max-width: 2200px;
          padding: 2.25rem 1.0875rem;
        }
      `}
    >
      <h2
        css={css`
          margin: 0;
          display: inline-block;
        `}
      >
        <Link
          to="/"
          css={css`
            color: hsla(0, 0%, 0%, 0.8);
            &:hover {
              color: hsla(0, 0%, 0%, 1);
            }
          `}
        >
          {siteTitle}
        </Link>
      </h2>
      <nav
        css={css`
          display: inline-block;
          float: right;
        `}
      >
        <Menu />
        <Burger />
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
