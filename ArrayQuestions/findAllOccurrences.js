// arr = [2,3,5,7,3] target = 3 output = [1,4]

const findElements = []
const findAllIndexes = (arr,target,index) => {

 
  debugger
  // base Condition
  if(index < arr.length) {
   return
  }

  if(arr[index] === target ) {
     
    findElements.push(index)
   
  }
  findAllIndexes(arr,target,index+1)
 
}


findAllIndexes([2,3,5,7,3],3,0)
console.log(findElements)
