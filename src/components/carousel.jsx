import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import {
  carouselContainer,
  desktopImage,
  mobileImage,
} from "../components/carousel.module.css"

export function Carousel({}) {
  return (
    <div className={carouselContainer}>
      <StaticImage
        src="../images/carousel2.png"
        alt="Frete Grátis em toda a loja para o Brasil inteiro"
        placeholder="blurred"
        quality={100}
        className={desktopImage}
      />
      <StaticImage src="../images/mcarousel2.png" className={mobileImage} />
    </div>
  )
}
