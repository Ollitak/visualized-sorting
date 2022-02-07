/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import BarPlot from "./components/BarPlot.js"
import ButtonPanel from "./components/ButtonPanel.js"
import "./App.css"

const NUMBER_OF_BARS = 80

const App = () => {
  const [data, setData] = useState([])
  const [sorting, setSorting] = useState(false)
  const [sorted, setSorted] = useState(false)

  useEffect( () => {
    randomizeArray()
  },[])

  const randomizeArray = () => {
    setData(Array.from({ length: NUMBER_OF_BARS }, () => Math.floor(Math.random() * 300)))
    setSorted(false)
  }

  const Notification = () => {
    return (
      <div>
        <p> SORTING, PLEASE WAIT...</p>
      </div>
    )
  }

  return (
    <div style={{ textAlign:"center", padding:"1em 2em 2em" }}>
      <h1> Visualize common sorting algorithms</h1>
      <BarPlot values={data} />
      <ButtonPanel
        setSorting={setSorting}
        setSorted={setSorted}
        setData={setData}
        sorted={sorted}
        sorting={sorting}
        randomizeArray={randomizeArray}
        data={data}
      />
      {sorting && <Notification />}
    </div>
  )
}

export default App
