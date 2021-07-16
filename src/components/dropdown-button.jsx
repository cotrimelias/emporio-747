import * as React from "react"
import { useState } from "react"
import Lottie from "react-lottie"
import { dropdownbuttonStyle } from "./dropdown-menu.module.css"
import animationData from "../icons/dropdownIcon.json"

export const DropdownButton = () => {
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPause: false,
    direction: -1,
  })
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <div
      className={dropdownbuttonStyle}
      onClick={() => {
        setAnimationState({
          ...animationState,
          isStopped: false,
          direction: animationState.direction === 1 ? -1 : 1,
        })
      }}
    >
      <Lottie
        options={defaultOptions}
        height={40}
        width={40}
        speed={3}
        direction={animationState.direction}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
    </div>
  )
}

export default DropdownButton
