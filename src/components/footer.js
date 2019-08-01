import React from "react"
import { css } from "@emotion/core"
import Social from "./social"

const Footer = ({ social }) => (
  <footer>
    {social && <Social />}
    <h6
      css={css`
        @media (max-width: 425px) {
          text-align: center;
        }
      `}
    >
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
