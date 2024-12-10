'use client'
import logo from "../lottie-json/pencilanime-light.json";
import Lottie from "lottie-react"
const PencilAnimationLight = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[60%]">
        <Lottie animationData={logo} />
      </div>
    </div>

  )
}

export default PencilAnimationLight
