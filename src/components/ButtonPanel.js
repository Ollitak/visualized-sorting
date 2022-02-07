import React from "react"
import insertionSort from "./utils/insertionSort.js"
import mergeSort from "./utils/mergeSort.js"


const ButtonPanel = ({ setSorting, setSorted, setData, sorted, sorting, randomizeArray, data }) => {

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

  if(sorting) return null

  return (
    <div>
      {!sorted && <button onClick={() => runMergeSort()}>Merge sort</button>}
      {!sorted && <button onClick={() => runInsertionSort()}>Insertion sort</button>}
      <button onClick={() => randomizeArray()}>Randomize</button>
    </div>
  )
}

export default ButtonPanel