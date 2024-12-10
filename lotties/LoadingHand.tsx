"use client"
import loading from "../lottie-json/loading-hand.json";
import Lottie from "lottie-react"
const LoadingHand = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
        <div className="w-[60%] overflow-hidden">
        <Lottie animationData={loading}/>
        </div>
    </div>
  )
}

export default LoadingHand
