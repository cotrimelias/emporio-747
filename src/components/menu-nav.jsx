import * as React from "react"
import { StoreContext } from "../context/store-context"
import { SearchButton } from "./search-button"
import { CartButton } from "./cart-button"
import { AccountButton } from "./account-button"
import { FavoriteButton } from "./favorite-button"
import { menunavStyle } from "./menu-nav.module.css"

export function MenuNav() {
  const { checkout } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <div className={menunavStyle}>
      <SearchButton />
      <CartButton quantity={quantity} />
      <FavoriteButton quantity={13} />
      <AccountButton />
    </div>
  )
}

export default MenuNav
