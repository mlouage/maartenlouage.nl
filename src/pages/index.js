import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Seo } from "../components/seo"

const IndexPage = () => {
  return (
    <>
      <div className="container">
      <a rel="me" href="https://mastodon.social/@maartenlouage" style={{display: "none"}}>Mastodon</a>
        <div>
        <div className="logo">
          <StaticImage
            src="../images/logo.png"
            alt="Maarten Louage"
            placeholder="blurred"
            layout="fixed"
            width={250}
            height={250}
          />
        </div>
        <p>
          Webdevelopment <br />
          <span className="handwritten">&amp;</span> <br />
          Online courses about webdevelopment
        </p>
        </div>
      </div>
    </>
  )
}

export const Head = () => (
  <Seo />
)

export default IndexPage
