'use client'
import Lottie from "lottie-react"
import mob  from "../lottie-json/mobile-b.json"

const Heromobile = () => {
  return (
    <div>
      <Lottie  className="h-[25rem]" animationData={mob}/>
    </div>
  )
}

export default Heromobile
