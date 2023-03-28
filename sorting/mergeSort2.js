const array = [3,2,6,8,7]
function mergeSortInPlace(arr,s,e) {

  //base condition
 if (e - s == 1) 
 {  return;
 }

 const mid = Math.floor((s + e) / 2)
 
  mergeSortInPlace(arr,s,mid)
  mergeSortInPlace(arr,mid+1,e)
  mergeInPlace(arr,s,mid,e)
}

function mergeInPlace(arr,s,m,e) {
  let i = s
  let j = m
  let k = 0
  const mix = []
  
  while(i<m && j< e) {
    if(arr[i]<arr[j]) {
      mix[k] = arr[i]
      i++
    }else{
      mix[k] = arr[j]
      j++
    }
    k++
  }
 // it may be possible that one of the arrays is not complete copy the remaining elements
    while(i<m) {
      mix[k] = arr[i]
      i++
      k++
    }
    while(j<e) {
      mix[k] = arr[j]
      j++
      k++
    }

  // copy the answer in original one
  for (let l = 0; l < mix.length; l++) {
            arr[s+l] = mix[l];
        }
  
}

mergeSortInPlace(array,0,array.length-1)
console.log(array)