import React from "react"
import { Link } from "gatsby"
import { logo as logoCss } from "./logo-main.module.css"
import { MainLogo } from "../icons/mainlogo"

export function LogoMain() {
  return (
    <Link to="/" className={logoCss} alt={"Página inicial da Nave Pop"}>
      <MainLogo />
      {/* <div className={textlogo}>nave pop</div> */}
    </Link>
  )
}

export default LogoMain
