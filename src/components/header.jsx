import * as React from "react"
import { StoreContext } from "../context/store-context"
import { CheckmarkIcon } from "../icons/checkmark"
import { HeaderStrip } from "./header-strip"
import LogoMain from "./logo-main"
import { Navigation } from "./navigation"
import { MenuNav } from "./menu-nav"
import { DropdownMenu } from "./dropdown-menu"
import { Toast } from "./toast"
import { header, container, nav } from "./header.module.css"

export function Header() {
  const { loading, didJustAddToCart } = React.useContext(StoreContext)

  return (
    <div className={container} style={{ "flex-direction": "column" }}>
      <HeaderStrip />
      <header className={header}>
        <LogoMain />
        <Navigation className={nav} />
        <MenuNav />
        <DropdownMenu />
      </header>
      <Toast show={loading || didJustAddToCart}>
        {!didJustAddToCart ? (
          "Atualizando…"
        ) : (
          <>
            Adicionado ao carrinho <CheckmarkIcon />
          </>
        )}
      </Toast>
    </div>
  )
}
