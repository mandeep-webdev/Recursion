const arr = [2,3,9,0,9]
function findAll(arr,target,index) {
debugger
   const foundEl = []
  
  // base condition
  if(index === arr.length) {
    return foundEl
  }
 
  if(arr[index] === target) {
    foundEl.push(index)
  }
  
  const ansFromBelowCalls = findAll(arr,target,index+1)

  foundEl.push(...ansFromBelowCalls)
  return foundEl
  
}

const ans = findAll(arr,9,0)
console.log(ans)