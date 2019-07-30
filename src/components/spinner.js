import React from "react"
import spinner from "../images/spinner.gif"
import { css } from "@emotion/core"

const Spinner = () => {
  return (
    <img
      css={css`
        display: block;
        margin: auto;
      `}
      src={spinner}
      alt=""
    />
  )
}

export default Spinner
