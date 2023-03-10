// here recursion func will return an array itself

//  Here list parameter in each func call are different ref variables but pointing to the same obj 

function findAllIndexes(arr,target,index,list) {

  // base condition
  if(index === arr.length){
    return list
  }
  if(arr[index] === target) {
    list.push(index)
  }
  return findAllIndexes(arr,target,index+1,list)
}

const ans = findAllIndexes([1,2,5,13,6,13,0],13,0,[])

console.log(ans)