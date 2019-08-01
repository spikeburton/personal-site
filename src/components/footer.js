import React from "react"
import Social from "./social"

const Footer = ({ social }) => (
  <footer>
    {social && <Social />}
    <h6>
      © {new Date().getFullYear()}, Spike Burton{" "}
      <a
        href="https://www.facebook.com/spikeburton"
        target="_blank"
        rel="noopener noreferrer"
        title="Whaaa?! Shameless plug ..."
      >
        <span role="img" aria-label="plug">
          🔌
        </span>
      </a>
    </h6>
  </footer>
)

export default Footer
