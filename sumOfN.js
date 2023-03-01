// sum of n numbers

function sum(n){
  if(n===1)
  {
    return 1
  }
  return n + sum(n-1)
}

const ans = sum(5)
console.log(ans)