/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import BarPlot from "./components/BarPlot.js"
import insertionSort from "./components/utils/insertionSort.js"
import mergeSort from "./components/utils/mergeSort.js"
import "./App.css"

const App = () => {
  const [data, setData] = useState([])
  const [sorting, setSorting] = useState(false)
  const [sorted, setSorted] = useState(false)

  useEffect( () => {
    randomizeArray()
  },[])

  const runInsertionSort = async () => {
    setSorting(true)
    await insertionSort(data, setData)
    setSorting(false)
    setSorted(true)
  }

  const runMergeSort = async () => {
    setSorting(true)
    await mergeSort([...data], setData, data, 0)
    setSorting(false)
    setSorted(true)
  }

  const randomizeArray = () => {
    setData(Array.from({ length: 80 }, () => Math.floor(Math.random() * 100)))
    setSorted(false)
  }

  const ButtonPanel = () => {
    return (
      <div>
        {!sorted && <button onClick={() => runMergeSort()}>Merge sort</button>}
        {!sorted && <button onClick={() => runInsertionSort()}>Insertion sort</button>}
        <button onClick={() => randomizeArray()}>Randomize</button>
      </div>
    )
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
      {!sorting && <ButtonPanel />}
      {sorting && <Notification />}
    </div>
  )
}

export default App
