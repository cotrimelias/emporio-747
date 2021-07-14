import * as React from "react"
import { useState } from "react"
import Lottie from "react-lottie"
import animationData from "../icons/menuAnimated.json"

export const MenuButton = () => {
  const [isOpen, setOpenState] = useState(false)
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
      onClick={() => {
        setAnimationState({
          ...animationState,
          isStopped: false,
          direction: animationState.direction === 1 ? -1 : 1,
        })
        setOpenState(!isOpen)
        console.log(isOpen, animationState)
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

export default MenuButton
