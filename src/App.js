import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Error404 from "./container/Error404/index"
import Home from "./container/Home/index"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
