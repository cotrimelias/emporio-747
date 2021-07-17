import React from "react"
import FavoriteIcon from "../icons/favoriteIcon"
import { Link } from "gatsby"
import { favoriteButton, badge } from "./favorite-button.module.css"

export function FavoriteButton({ quantity, children }) {
  return (
    <Link
      aria-label={`Botão para Lista de desejos com ${quantity} itens`}
      to={"/wishlist"}
      className={favoriteButton}
    >
      <div>
        <FavoriteIcon />
        {quantity > 0 && <div className={badge}>{quantity}</div>}
      </div>
      {children}
    </Link>
  )
}

export default FavoriteButton
