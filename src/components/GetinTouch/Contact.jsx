import React, { useEffect } from "react"
import "./Contact.css"
import Aos from "aos"
import "aos/dist/aos.css"

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    })
  }, [])

  return (
    <div className="contact__container" name="contact">
      <div className="contact__wrapper">
        <div className="contact__left" data-aos="fade-down">
          <div className="contact-line"></div>
          <p>
            You Ask. <br />
            We Answer. <br />
            Let Crunch Do Some Heavy Lifting!
          </p>
        </div>
        <div className="contact__right" data-aos="fade-down" data-aos-delay="300">
          <h2>Contact us</h2>
        </div>
      </div>
    </div>
  )
}

export default Contact
