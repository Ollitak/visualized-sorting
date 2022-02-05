/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import BarPlot from "./components/BarPlot.js"
import "./App.css"

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}


const App = () => {
  const [data, setData] = useState([])


  const insertionSort = async (array) => {

    const swap = (i , j) => {
      const store = array[i]
      array[i] = array[j]
      array[j] = store
    }

    for(var i = 1; i < array.length; i++){
      var j = i-1
      while(j >= 0 && array[j] > array[j+1]) {
        swap(j,j+1)
        setData([...array])
        await sleep(10)
        j--
      }
    }
  }


  const sortArray = async () => {
    insertionSort(data)
  }

  const randomizeArray = () => {
    setData(Array.from({ length: 100 }, () => Math.floor(Math.random() * 50)))
  }

  return (
    <div>
      <BarPlot values={data} />
      <button onClick={() => sortArray()}>Insertion sort</button>
      <button onClick={() => randomizeArray()}>Randomize</button>
    </div>
  )
}

export default App
