import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <>
      <div class="container">
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
            Online courses about web development
          </p>
        </div>
      </div>
    </>
  )
}

export default IndexPage
