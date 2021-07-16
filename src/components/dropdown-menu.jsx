import * as React from "react"
import { useState } from "react"
import { DropdownButton } from "./dropdown-button"
import { DropdownMenuStyle } from "./dropdown-menu.module.css"

export function DropdownMenu() {
  const [isOpen, setOpenState] = useState(true)
  return (
    <div
      aria-label={"Abrir menu"}
      tabindex={0}
      role={"button"}
      onClick={() => {
        setOpenState(!isOpen)
        console.log(isOpen)
      }}
    >
      <DropdownButton />
    </div>
  )
}

export default DropdownMenu
