import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"

export function Carousel({}) {
  return (
    <div
      style={{
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "padding-bottom": "32px",
      }}
    >
      <StaticImage
        src="../images/carousel1.png"
        alt="Frete Grátis"
        placeholder="blurred"
        style={{ width: "80%" }}
      />
    </div>
  )
}
