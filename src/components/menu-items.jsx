import * as React from "react"
import { CartButton } from "./cart-button"
import { StoreContext } from "../context/store-context"
import { AccountButton } from "./account-button"
import SearchIcon from "../icons/search"
import { Link } from "gatsby"
import { searchButton } from "./header.module.css"

export function MenuItems() {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)
  return (
    <div style={{ display: "flex" }}>
      <Link to="/search" className={searchButton}>
        <SearchIcon />
      </Link>

      <CartButton quantity={quantity} />
      <AccountButton />
    </div>
  )
}

export default MenuItems()
