// Q1 check if an array is sorted or not with Recursion


const sort = (arr,index) => {
  // base Condition
  if(index === arr.length-1) {
    return true
  }
 return arr[index] < arr[index + 1] && sort(arr,index + 1)
}

const ans = sort([2,0,12,34,11],0)
console.log(ans)