import * as React from "react"
import { Link } from "gatsby"
import AccountIcon from "../icons/account"
import { accountButton, badge } from "./account-button.module.css"

export function AccountButton(props) {
  return (
    <a
      aria-label={"Botão minha conta"}
      href="https://emporio-747.myshopify.com/account/login"
      className={accountButton}
    >
      <AccountIcon />
    </a>
  )
}

export default AccountButton
