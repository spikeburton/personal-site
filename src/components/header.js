import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const NavLink = ({ to, children }) => (
  <li
    style={{
      display: `inline-block`,
      marginRight: `1rem`,
    }}
  >
    <h4>
      <Link to={to} style={{ color: `hsla(0, 0%, 0%, 0.8)` }}>
        {children}
      </Link>
    </h4>
  </li>
)

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        borderBottom: `1px solid #eee`,
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
      <nav style={{ display: `inline-block`, float: `right` }}>
        <ul style={{ listStyle: `none` }}>
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
