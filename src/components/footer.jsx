import * as React from "react"
import Logo from "../icons/logo"
import {
  footerStyle,
  copyright,
  links,
  blurb,
  logos,
  footerNavList,
  footerNavListItem,
} from "./footer.module.css"

export function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={blurb}>
        <div className={logos}>
          <Logo />
        </div>
        <strong>Empório 747</strong>
      </div>
      <nav className={links} aria-label="footer">
        <ul className={footerNavList}>
          <li className={footerNavListItem}>
            <a href="/termosdeservico">Termos de Serviço</a>
          </li>
          <li className={footerNavListItem}>
            <a href="/politicadegarantia">Política de Garantia</a>
          </li>
        </ul>
      </nav>
      <div className={copyright}>
        Copyright &copy; {new Date().getFullYear()} · Todos os direitos
        reservados
      </div>
    </footer>
  )
}
