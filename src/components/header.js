import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const NavLink = ({ to, children }) => (
  <li
    css={css`
      display: inline-block;
      vertical-align: middle;
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }
    `}
  >
    <h4>
      <Link
        to={to}
        css={css`
          color: hsla(0, 0%, 0%, 0.8);
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

const Header = ({ siteTitle }) => (
  <header>
    <div
      css={css`
        margin: 0 auto;
        padding: 1.45rem 1.0875rem;
        max-width: 960px;
        border-bottom: 1px solid #eee;
        @media (max-width: 420px) {
          padding: 0.85rem 1.0875rem;
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
        <ul
          css={css`
            list-style: none;
            margin: 0;
          `}
        >
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Blog</NavLink>
        </ul>
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
