import * as React from "react"
import { createClient, Provider as UrlqProvider } from "urql"

const urqlClient = createClient({
  url: `https://emporio-747.myshopify.com/api/2021-01/graphql.json`,
  fetchOptions: {
    headers: {
      "X-Shopify-Storefront-Access-Token": "578c7382b0863fbfb7b976a974adcad6",
    },
  },
})

export function SearchProvider({ children }) {
  return <UrlqProvider value={urqlClient}>{children}</UrlqProvider>
}
