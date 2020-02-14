import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"

export default () => {
  return (
    <Layout social={false}>
      <SEO title="Contact" />
      <section
        css={css`
          // text-align: center;
          @media (min-width: 768px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
        `}
      >
        <div
          css={css`
            text-align: center;
            @media (min-width: 768px) {
              padding: 10% 0;
            }
          `}
        >
          <h1
            css={css`
              color: hsla(180, 100%, 25%, 0.8);
              display: inline-block;
            `}
          >
            Reach Out
          </h1>
        </div>
        <div
          css={css`
            // display: inline-block;
          `}
        >
          <form
            name="contact-form"
            // action="/"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <table
              css={css`
                margin: 0 auto;
                border: 1px solid #ddd;
                // border-radius: 7px;
                box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.12);
                padding: 1rem;
                input {
                  margin-bottom: 5px;
                }
              `}
            >
              <tbody>
                <tr>
                  <td>
                    {/* <label htmlFor="name">Your Name </label> */}
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      css={css`
                        // border: 1px solid #ddd;
                        // border-radius: 3px;
                        padding: 5px;
                        width: 100%;
                      `}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {/* <label htmlFor="email">Your Email </label> */}
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      css={css`
                        // border: 1px solid #ddd;
                        // border-radius: 3px;
                        padding: 5px;
                        width: 100%;
                      `}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <textarea
                      name="message"
                      id="message"
                      cols="40"
                      rows="10"
                      placeholder="Say Something!"
                      css={css`
                        // border: 1px solid #ddd;
                        // border-radius: 3px;
                      `}
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    css={css`
                      @media (min-width: 768px) {
                        text-align: center;
                      }
                    `}
                  >
                    <input
                      css={css`
                        // width: 100%;
                        border: none;
                        // border-radius: 3px;
                        color: #fff;
                        background-color: hsla(0, 0%, 0%, 0.8);
                        padding: 0.65rem;
                        font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                          Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
                          Droid Sans, Helvetica Neue, sans-serif;
                        font-size: 0.75em;
                        font-weight: bold;
                        transition: all ease 0.2s;
                        -webkit-transition: all ease 0.2s;
                        &:hover {
                          // color: hsla(0, 0%, 0%, 0.8);
                          // background-color: #ddd;
                          background-color: hsla(0, 0%, 0%, 1);
                          cursor: pointer;
                        }
                      `}
                      type="submit"
                      value="Submit"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </section>
    </Layout>
  )
}
