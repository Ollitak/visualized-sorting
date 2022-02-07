/* eslint-disable no-unused-vars */
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const mergeSort = async (mergeArray, setData, fullArray, from) => {
  const len = mergeArray.length

  if (len < 2) {
    return
  }

  const k = Math.round(len / 2)

  // Slice doesn't include the last index (thus k, not k-1 and len, not len-1)
  const leftArray = mergeArray.slice(0,k)
  const rightArray = mergeArray.slice(k,len)

  await mergeSort(leftArray, setData, fullArray, from)
  await mergeSort(rightArray, setData, fullArray, from+k)

  merge(leftArray, rightArray, mergeArray)

  for(var i = 0; i < mergeArray.length; i++){
    console.log("index: " + i)
    console.log("array val: " + mergeArray[i])
    fullArray[from] = mergeArray[i]
    from++
  }

  setData([...fullArray])
  await sleep(100)
}

const merge = (leftArray, rightArray, array) => {
  const leftSize = leftArray.length
  const rightSize = rightArray.length

  var leftIndex = 0
  var rightIndex = 0
  var helpIndex = 0

  while (leftIndex < leftSize && rightIndex < rightSize) {
    if(leftArray[leftIndex] <= rightArray[rightIndex]) {
      array[helpIndex] = leftArray[leftIndex]
      leftIndex++
    } else {
      array[helpIndex] = rightArray[rightIndex]
      rightIndex++
    }
    helpIndex++
  }

  while (leftIndex < leftSize) {
    array[helpIndex] = leftArray[leftIndex]
    leftIndex++
    helpIndex++
  }

  while (rightIndex < rightSize) {
    array[helpIndex] = rightArray[rightIndex]
    rightIndex++
    helpIndex++
  }
}





export default mergeSort