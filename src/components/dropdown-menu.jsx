import * as React from "react"
import { StoreContext } from "../context/store-context"
import { SearchButton } from "./search-button"
import { CartButton } from "./cart-button"
import { AccountButton } from "./account-button"
import { FavoriteButton } from "./favorite-button"
import { useState } from "react"
import { DropdownButton } from "./dropdown-button"
import { DropdownMenuStyle, DropdownLinks } from "./dropdown-menu.module.css"

export function DropdownMenu() {
  // Cart Logic
  const { checkout } = React.useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)
  // Cart Logic

  //Menu logic
  const [isOpen, setOpenState] = useState(true)
  //Menu logic
  return (
    <div>
      <div
        aria-label={"Abrir menu"}
        tabindex={0}
        role={"button"}
        onClick={() => {
          setOpenState(!isOpen)
          console.log(isOpen)
        }}
      >
        <DropdownButton quantity={quantity} />
      </div>
      {!isOpen && (
        <div className={DropdownMenuStyle}>
          <div className={DropdownLinks}>
            <SearchButton>
              <h2>Pesquisar</h2>
            </SearchButton>
            <FavoriteButton quantity={13}>
              <h2>Lista de Desejos</h2>
            </FavoriteButton>
            <CartButton quantity={quantity}>
              <h2>Carrinho</h2>
            </CartButton>
            <AccountButton>
              <h2>Minha conta</h2>
            </AccountButton>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
