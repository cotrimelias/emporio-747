import * as React from "react"
import { Link } from "gatsby"
import AccountIcon from "../icons/account"
import { accountButton } from "./account-button.module.css"

export function AccountButton({ props, children }) {
  return (
    <Link
      aria-label={"Botão minha conta"}
      to="/account"
      className={accountButton}
    >
      <AccountIcon />
      {children}
    </Link>
  )
}

export default AccountButton
