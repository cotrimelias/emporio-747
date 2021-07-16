import * as React from "react"
import { headerStrip } from "./header-strip.module.css"

export function HeaderStrip() {
  return (
    <div className={headerStrip}>
      <h3>{"Frete grátis para todo o Brasil"}</h3>
    </div>
  )
}

export default HeaderStrip
