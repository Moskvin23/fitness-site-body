import React from "react"
import Button from "../../components/Button/Button"
import "./index.css"

function Error404() {
  return (
    <>
      <div className="error404__container">
        <h2>Opps, something went wrong</h2>
        <a href="/">
          <Button title="Our Rooster" />
        </a>
      </div>
    </>
  )
}

export default Error404
