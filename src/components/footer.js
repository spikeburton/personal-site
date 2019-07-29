import React from "react"
import Social from "./social"

const Footer = () => (
  <footer>
    <Social />
    <h6>© {new Date().getFullYear()}, Spike Burton</h6>
  </footer>
)

export default Footer
