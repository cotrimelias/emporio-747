import * as React from "react"
import { Link } from "gatsby"
import AccountIcon from "../icons/account"
import { accountButton, badge } from "./account-button.module.css"

export function AccountButton(props) {
  return (
    <Link
      aria-label={"Botão minha conta"}
      to="https://emporio-747.myshopify.com/account/login"
      className={accountButton}
    >
      <AccountIcon />
    </Link>
  )
}

export default AccountButton
