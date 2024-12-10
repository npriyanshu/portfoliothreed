'use client'
import logo from "../lottie-json/lappyguy.json";
import Lottie from "lottie-react"


const LappyGuy = () => {


  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[60%]">
        <Lottie animationData={logo} />
      </div>
    </div>
  )
}

export default LappyGuy
