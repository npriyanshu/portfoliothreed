'use client'
import logo from "../lottie-json/error.json";
import Lottie from "lottie-react"


const ErrorLottie = () => {

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[60%]">
        <Lottie animationData={logo} />
      </div>
    </div>
  )
}

export default ErrorLottie
