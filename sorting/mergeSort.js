
function mergeSort(arr) {

  //base condition
  if(arr.length === 1) {
    return arr
  }
  
 const mid = Math.floor(arr.length / 2)
  const sortedLeft = mergeSort(arr.slice(0,mid))
  const sortedRight = mergeSort(arr.slice(mid))
  
  return merge(sortedLeft,sortedRight)
}

function merge(first,second) {
  let i = 0
  let j = 0
  let k = 0
  const  merge = []
  
  while(i<first.length && j< second.length) {
    if(first[i]<second[j]) {
      merge.push(first[i])
      merge[k] = first[i]
      i++
    }else{
      merge[k] = second[j]
      j++
    }
    k++
  }
 // it may be possible that one of the arrays is not complete copy the remaining elements
    while(i<first.length) {
      merge[k] = first[i]
      i++
      k++
    }
    while(j<second.length) {
      merge[k] = second[j]
      j++
      k++
    }
  return merge
  
}

const ans = mergeSort([3,2,6,8,7])
console.log(ans)