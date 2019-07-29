import React from "react"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faTwitterSquare,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const icons = [faGithubSquare, faMedium, faTwitterSquare, faLinkedin]

const Social = () => (
  <div
    css={css`
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-top: 2.65rem;
      margin-bottom: 1rem;
    `}
  >
    {icons.map((icon, i) => (
      <FontAwesomeIcon key={i} size="2x" icon={icon} />
    ))}
  </div>
)

export default Social
