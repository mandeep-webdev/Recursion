
const mergeSort = (arr) => {
  debugger
  // base Condition

  if(arr.length === 1) {
     // Here only one element of an arr is left
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const leftArr = mergeSort(arr.slice(0,mid+1))
  const rightArr = mergeSort(arr.slice(mid,arr.length))
   return merge(leftArr,rightArr)
  
  
}

const merge = (arr1,arr2) => {
  const mix = []
  let i = 0
  let j = 0
  let k = 0 // pointer for new Array
  while(i< arr1.length && j< arr2.length) {
    
    if(arr1[i] < arr2[j]){
      mix[k] = arr1[i]
    //mix[k].push(arr1[i])
    i++
  } else {
       mix[k] = arr2[j]
    //mix[k].push(arr2[j])
    j++
  }
  k++
  }
  // if either one arr is not empty yet
  while(i < arr1.lenght) {
    //mix[k].push(arr1[i])
     mix[k] = arr1[i]
    i++
    k++
  }
  while(j < arr2.length){
    //mix[k].push(arr2[j])
     mix[k] = arr2[j]
    j++
    k++
  }
  return mix
}


const result = mergeSort([3,9,7,8,1,0])
console.log(result)