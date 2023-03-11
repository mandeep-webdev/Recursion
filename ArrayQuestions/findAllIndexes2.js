
function findAll(arr, target, index) {

  const foundEl = []

  // base condition
  if (index === arr.length) {
    return foundEl
  }

  if (arr[index] === target) {
    foundEl.push(index)
  }

  const ansFromBelowCalls = findAll(arr, target, index + 1)

  foundEl.push(...ansFromBelowCalls)
  return foundEl

}

const ans = findAll([2, 3, 9, 0, 9], 9, 0)
console.log(ans)