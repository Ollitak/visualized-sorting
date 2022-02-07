/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import BarPlot from "./components/BarPlot.js"
import insertionSort from "./components/utils/insertionSort.js"
import mergeSort from "./components/utils/mergeSort.js"
import "./App.css"

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}


const App = () => {
  const [data, setData] = useState([])

  const runInsertionSort = async () => {
    insertionSort(data, setData)
  }

  const runMergeSort = async () => {
    mergeSort([...data], setData, data, 0)
  }

  const randomizeArray = () => {
    setData(Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)))
  }

  return (
    <div>
      <BarPlot values={data} />
      <button onClick={() => runMergeSort()}>Merge sort</button>
      <button onClick={() => runInsertionSort()}>Insertion sort</button>
      <button onClick={() => randomizeArray()}>Randomize</button>
    </div>
  )
}

export default App
