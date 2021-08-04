import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
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
  )
}

export default IndexPage
