import React, { useState, useEffect } from "react"
import { BsTwitter, BsInstagram, BsPinterest, BsLinkedin, BsTelegram } from "react-icons/bs"
import { FaTiktok } from "react-icons/fa"
import "./Footer.css"

function Footer() {
  const [dateState, setDateState] = useState(new Date())

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000)
  }, [])

  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-logo">
            <h2>Social Media</h2>
            <div className="footer-socials">
              <a href="https://twitter.com/moskvin23" target="blank">
                <BsTwitter className="footer-socials-icon" />
              </a>
              <a href="https://www.linkedin.com/in/moskvin23/" target="blank">
                <BsLinkedin className="footer-socials-icon" />
              </a>
              <a href="https://t.me/pavlo2323" target="blank">
                <BsTelegram className="footer-socials-icon" />
              </a>
            </div>
            <a>
              <p>My resume</p>
            </a>
          </div>
          <div className="footer-location">
            <h2>Location</h2>
            <h3>Ukraine</h3>
            <p>
              Lviv <br />
            </p>
          </div>
        </div>
        <div className="footer-end">
          <div className="footer--bottom__right">
            <p>
              Developed by{" "}
              <a href="https://www.linkedin.com/in/moskvin23/" target="_blank" rel="noreferrer">
                {""}Pavlo Moskvin
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
