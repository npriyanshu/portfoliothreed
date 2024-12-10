'use client'
import logo from "../lottie-json/pencilanime-dark.json";
import Lottie from "lottie-react"
const PencilAnimationDark = () => {
  return (
    <div className="w-full flex justify-center items-center">
    <div className="w-[80%] p-5">
    <Lottie animationData={logo} className="bg-black w-full h-full rounded-[30px]"/>
    </div>
  </div>

  )
}

export default PencilAnimationDark
