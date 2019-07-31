import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faTwitterSquare,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const icons = {
  github: faGithubSquare,
  medium: faMedium,
  twitter: faTwitterSquare,
  linkedin: faLinkedin,
}

const Social = () => {
  const data = useStaticQuery(graphql`
    query {
      social: markdownRemark(fileAbsolutePath: { regex: "/data/social.md/" }) {
        frontmatter {
          links {
            name
            url
          }
        }
      }
    }
  `)

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        margin-top: 2.65rem;
        margin-bottom: 1.85rem;
        @media (min-width: 1024px) {
          max-width: 300px;
          justify-content: space-evenly;
        }
      `}
    >
      {data.social.frontmatter.links.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target="_blank"
          title={link.name}
          rel="noopener noreferrer"
          css={css`
            display: inline-block;
            color: hsla(0, 0%, 0%, 0.8);
            -webkit-transition: all 1s ease;
            transition: all 1s ease;
            &:hover {
              color: #ddd;
              -webkit-transform: scale(1.2);
              transform: scale(1.2);
            }
          `}
        >
          <FontAwesomeIcon size="2x" icon={icons[link.name.toLowerCase()]} />
        </a>
      ))}
    </div>
  )
}
export default Social
