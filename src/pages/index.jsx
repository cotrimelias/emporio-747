import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection {
      products {
        ...ProductCard
      }
    }
  }
`
export default function IndexPage({ data }) {
  return (
    <Layout>
      <div className={container}>
        <h1 className={intro}>Bem vindo ao Empório 737.</h1>
        <p className={callOut}>
          Esse é apenas um template de teste para mostrar as funcionalidades gerais
        </p>
        <p className={callToAction}>
          Versão 2.0.3.245
          
        </p>
      </div>
      <ProductListing products={data.shopifyCollection.products} />
    </Layout>
  )
}
