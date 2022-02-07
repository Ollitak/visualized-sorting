/* eslint-disable no-unused-vars */
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const swap = (i , j, array) => {
  const store = array[i]
  array[i] = array[j]
  array[j] = store
}

const quickSort = async (array, a, b, setData) => {
  if (a >= b) return

  var k = await pivot(array, a, b, setData)
  await quickSort(array, a, k-1, setData)
  await quickSort(array, k+1, b, setData)
}

const pivot = async (array, a, b, setData ) => {
  var k = a
  for (var i = a+1; i <= b; i++) {
    if(array[i] < array[a]) {
      k++
      swap(i, k, array)
      setData([...array])
      await sleep(100)
    }
  }
  swap(a, k, array)
  return k
}

export default quickSort