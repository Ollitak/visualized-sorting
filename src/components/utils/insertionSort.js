const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const insertionSort = async (array, setData) => {

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
      await sleep(0)
      j--
    }
  }
}

export default insertionSort