import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const NavLink = ({ to, children }) => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `1rem`,
      fontFamily: `Helvetica Neue, Helvetica, sans-serif`,
      fontWeight: `bold`,
    }}
  >
    <Link to={to} style={{ color: `hsla(0, 0%, 0%, 0.8)` }}>
      {children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h2 style={{ margin: 0, display: `inline-block` }}>
        <Link
          to="/"
          style={{
            color: `hsla(0, 0%, 0%, 0.8)`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      <nav style={{ float: "right" }}>
        <ul style={{ listStyle: "none" }}>
          <NavLink to="/">Link 1</NavLink>
          <NavLink to="/">Link 2</NavLink>
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
