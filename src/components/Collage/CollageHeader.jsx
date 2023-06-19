import React, { useEffect } from "react"
import "./index.css"
import { gsap } from "gsap"

function CollageHeader() {
  useEffect(() => {
    gsap.fromTo(
      "#hero-text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
      },
    )
  }, [])
  return (
    <div className="hero-text-section">
      <p id="hero-text">
        Our Fitness Club’s offers spaces fully integrated in the club’s architecture, characterised
        by their ample size, comfort and state-of-the-art equipment. Located in Ukraine.
      </p>
    </div>
  )
}

export default CollageHeader
