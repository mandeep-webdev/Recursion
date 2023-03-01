const arr = [2,4,6,8,9,13,21]
function search(arr,target,s,e) {
  if(s>e){
    return -1
  }
  const mid = Math.floor((s+e)/2)
  if(target === arr[mid]){
    return mid
  }
  if(target > arr[mid]){
    return search(arr,target,mid+1,e)
  }
  else {
    return search(arr,target,s,mid-1)
  }
  return target
}

const result = search(arr,13,0,arr.length-1)
console.log(result)