import React from "react"
import { css } from "@emotion/core"

export const Burger = () => {
  return (
    <div
      css={css`
        // position: absolute;
        // right: 1.45rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 1.65rem;
        height: 1.65rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 1;

        div {
          width: 1.65rem;
          height: 0.2rem;
          background: hsla(0, 0%, 0%, 0.12);
          border-radius: 10px;
          transition: all 0.3s linear;
          -webkit-transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;
        }

        &:focus {
          outline: none;
        }

        &:hover {
          div {
            background: hsla(0, 0%, 0%, 0.6);
          }
        }

        @media (min-width: 768px) {
          display: none;
        }
      `}
    >
      <div />
      <div />
      <div />
    </div>
  )
}
