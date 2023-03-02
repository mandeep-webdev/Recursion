// Q2 Linear Search with Recursion

const find = (arr,target,index) => {
  
  // base Condition
  
  if(index === arr.length){
    return -1
  }
  if(arr[index] === target) {
    return index
  }
  else {
    return find(arr,target,index + 1)
  }
 // to return boolean value the recurrence relation would be
  // return arr[index] === target || find(arr,target,index+1)
  
}

const ans = find([2,34,23,12,44,23],23,0)
console.log(ans)

// Search from End Index

const arr = [2,34,23,12,44]

const findReverse = (arr,target,index) => {
  
  // base Condition
  
  if(index === -1){
    return -1
  }
  if(arr[index] === target) {
    return index
  }
  else {
    return findReverse(arr,target,index - 1)
  }
 
}

const result = findReverse(arr,2,arr.length - 1)
console.log(result)