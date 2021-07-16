import React from "react"
import FavoriteIcon from "../icons/favoriteIcon"
import { Link } from "gatsby"
import { favoriteButton, badge } from "./favorite-button.module.css"

export function FavoriteButton({ quantity }) {
  return (
    <Link
      aria-label={`Botão para Lista de desejos com ${quantity} itens`}
      to={"/wishlist"}
      className={favoriteButton}
    >
      <FavoriteIcon />
      {quantity > 0 && <div className={badge}>{quantity}</div>}
    </Link>
  )
}

export default FavoriteButton
