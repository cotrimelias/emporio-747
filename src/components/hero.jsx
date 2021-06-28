import * as React from "react"
import { heroText, heroContainer } from "../components/hero.module.css"

export function HeroText({ children }) {
  return (
    <div className={heroContainer}>
      <h1 className={heroText}>{children}</h1>
    </div>
  )
}
