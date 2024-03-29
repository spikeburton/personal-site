/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, social }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          min-height: 100vh;
          max-width: 650px;
          margin: 2.85rem auto 0.65rem;
          padding: 0px 1.0875rem 1.45rem;
          @media (min-width: 1024px) {
            max-width: 850px;
          }
          @media (min-width: 1440px) {
            max-width: 1040px;
          }
          @media (min-width: 2560px) {
            max-width: 1440px;
          }
        `}
      >
        <main>{children}</main>
        <Footer social={social} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  social: true,
}

export default Layout
