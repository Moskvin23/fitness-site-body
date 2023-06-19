import React, { useEffect } from "react"
import "./TalentSlides.css"
import { talents } from "./talentData"
import Aos from "aos"
import "aos/dist/aos.css"

function TalentSlides() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    })
  }, [])
  return (
    <div className="slideshow" name="services">
      <div data-aos="fade-down" data-aos-easing="ease-in-sine">
        <h3>Energy is for Everyone</h3>
        <p>Our fitness plans are perfect for everyone looking to live a healthier lifestyle.</p>
      </div>

      <div className="slideshow__slider">
        {talents.map((item, index) => (
          <div
            key={item.name + index}
            className="slideshow__item"
            style={{ backgroundImage: `url('${item.image}')` }}>
            <p className="slideshow__item-label">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TalentSlides
