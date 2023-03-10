// arr = [2,3,5,7,3] target = 3 output = [1,4]

const foundEl = []

const findAllIndexes = (arr,target,index) => {
  //base condition
  if(index === arr.length) {
    return
  }
  if(arr[index] === target) {
    foundEl.push(index)
  }
  findAllIndexes(arr,target,index+1)
}

findAllIndexes([2,3,5,7,3],3,0)
console.log(foundEl)
