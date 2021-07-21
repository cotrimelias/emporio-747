import * as React from "react"
// import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import {
  carouselContainer,
  desktopImage,
  mobileImage,
} from "../components/carousel.module.css"

// Swiper stuff
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/scrollbar/scrollbar.min.css"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
// Swiper stuff

export function Carousel() {
  return (
    <div className={carouselContainer}>
      <Swiper
        spaceBetween={150}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        effect={"cube"}
        centeredSlides={true}
      >
        <SwiperSlide
          key={`carousel-image-2`}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            alignContent: "center",
            flexWrap: "nowrap",
          }}
        >
          <StaticImage
            src="../images/carousel2.png"
            alt="Frete Grátis em toda a loja para o Brasil inteiro"
            placeholder="blurred"
            quality={100}
            className={desktopImage}
          />
          <StaticImage src="../images/mcarousel2.png" className={mobileImage} />
        </SwiperSlide>
        <SwiperSlide
          key={`carousel-image-3`}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            alignContent: "center",
            flexWrap: "nowrap",
          }}
        >
          <StaticImage
            loading={"eager"}
            src="../images/carousel3.png"
            alt="Frete Grátis em toda a loja para o Brasil inteiro"
            placeholder="blurred"
            quality={100}
            className={desktopImage}
          />
          <StaticImage src="../images/mcarousel3.png" className={mobileImage} />
        </SwiperSlide>
        <SwiperSlide
          key={`carousel-image-4`}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            alignContent: "center",
            flexWrap: "nowrap",
          }}
        >
          <StaticImage
            loading={"eager"}
            src="../images/carousel4.png"
            alt="Frete Grátis em toda a loja para o Brasil inteiro"
            placeholder="blurred"
            quality={100}
            className={desktopImage}
          />
          <StaticImage src="../images/mcarousel4.png" className={mobileImage} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
