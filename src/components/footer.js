import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithubSquare,
  faTwitterSquare,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const icons = [faGithubSquare, faMedium, faTwitterSquare, faLinkedin]

const Footer = () => (
  <footer>
    <div>
      {icons.map((icon, i) => (
        <FontAwesomeIcon icon={icon} />
      ))}
    </div>
    © {new Date().getFullYear()}, Spike Burton
  </footer>
)

export default Footer
