import React from "react"
import Social from "./social"

const Footer = () => (
  <footer>
    <Social />© {new Date().getFullYear()}, Spike Burton
  </footer>
)

export default Footer
