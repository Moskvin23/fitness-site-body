import React from "react"
import "./index.css"

function Banner() {
  return (
    <>
      <div className="banner__wrapper">
        <div className="banner__heading">
          <h1>MAKE YOUR WORKOUT EASIER AND GET FASTER RESULTS</h1>
        </div>

        <div className="banner__buttons hide-on-mobile">
          <div className="button__description">
            <p>BUILD YOUR BODY</p>
          </div>
        </div>

        {/* display on mobile*/}
        <div className="banner__buttons-mobile  hide-on-desktop">
          <div className="two-buttons-wrap"></div>

          <div className="button__description-mobile">
            <p>BUILD YOUR BODY</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
