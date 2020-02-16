import { React, useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Menu } from "./menu"
import { css } from "@emotion/core"
import { Burger } from "./burger"

const Header = ({ siteTitle }) => {
  const node = useRef()
  const [show, setShow] = useState(false)
  useEffect(() => {
    const close = e => {
      if (
        e.type === "mousedown" &&
        (!node.current || node.current.contains(e.target))
      ) {
        return
      }
      setShow(false)
    }
    window.addEventListener("resize", close)
    window.addEventListener("mousedown", close)
    return () => {
      window.removeEventListener("resize", close)
      window.removeEventListener("mousedown", close)
    }
  })

  return (
    <header>
      <div
        css={css`
          margin: 0 auto;
          padding: 1.45rem 1.0875rem;
          max-width: 960px;
          @media (max-width: 375px) {
            padding: 0.85rem 1.0875rem;
          }
          @media (min-width: 600px) {
            border-bottom: 1px solid #eee;
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
          ref={node}
          css={css`
            display: inline-block;
            float: right;
            position: relative;
          `}
        >
          <Burger show={show} setShow={setShow} />
          <Menu show={show} setShow={setShow} />
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
