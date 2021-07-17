import * as React from "react"
import { Link } from "gatsby"
import CartIcon from "../icons/cart"
import { cartButton, badge } from "./cart-button.module.css"

export function CartButton({ quantity, children }) {
  return (
    <Link
      aria-label={`Carrinho com ${quantity} itens`}
      to={"/cart"}
      className={cartButton}
    >
      <CartIcon />
      {quantity > 0 && <div className={badge}>{quantity}</div>}
      {children}
    </Link>
  )
}
