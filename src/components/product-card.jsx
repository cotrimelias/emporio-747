import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"
import FavoriteButton from "../icons/favorite"
import { formatPrice } from "../utils/format-price"
import {
  productCardStyle,
  productHeadingStyle,
  productImageStyle,
  productDetailsStyle,
  productVendorStyle,
  productPrice,
  productCardContainer,
} from "./product-card.module.css"

export function ProductCard({ product, eager }) {
  const {
    title,
    priceRangeV2,
    slug,
    images: [firstImage],
    vendor,
    storefrontImages,
  } = product

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    priceRangeV2.minVariantPrice.amount
  )

  let storefrontImageData = {}
  if (storefrontImages) {
    const storefrontImage = storefrontImages.edges[0].node
    try {
      storefrontImageData = getShopifyImage({
        image: storefrontImage,
        layout: "fixed",
        width: 200,
        height: 200,
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className={productCardContainer}>
      <FavoriteButton />
      <Link
        className={productCardStyle}
        to={slug}
        aria-label={`View ${title} product page`}
      >
        <div className={productImageStyle} data-name="product-image-box">
          <GatsbyImage
            alt={firstImage?.altText ?? title}
            image={firstImage?.gatsbyImageData ?? storefrontImageData}
            loading={eager ? "eager" : "lazy"}
            placeholder={"blurred"}
            width={330}
            height={330}
          />
        </div>
        <div className={productDetailsStyle}>
          <div className={productVendorStyle}>{vendor}</div>
          <h2 as="h2" className={productHeadingStyle}>
            {title}
          </h2>
          <div className={productPrice}>{price}</div>
        </div>
      </Link>
    </div>
  )
}

export const query = graphql`
  fragment ProductCard on ShopifyProduct {
    id
    title
    slug: gatsbyPath(
      filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
    )
    images {
      id
      altText
      gatsbyImageData(aspectRatio: 1, width: 330)
    }
    priceRangeV2 {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    vendor
  }
`
