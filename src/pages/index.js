import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <>
      <div className="container">
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
          &amp; <br />
          Online courses about webdevelopment
        </p>
      </div>
    </>
  )
}

export default IndexPage
