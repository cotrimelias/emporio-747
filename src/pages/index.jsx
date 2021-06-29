import * as React from "react"
import "../components/fonts.module.css"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { Carousel } from "../components/carousel"
import { HeroText } from "../components/hero"
import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(title: { eq: "Página Principal" }) {
      products {
        ...ProductCard
      }
    }
  }
`

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Carousel />
      <HeroText>Nossos produtos</HeroText>
      <ProductListing products={data.shopifyCollection.products} />
    </Layout>
  )
}
