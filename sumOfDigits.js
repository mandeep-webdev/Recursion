function sumOfDigits(n) {
  if(n === 0)
  {
    return 0
  }
  return Math.floor(sumOfDigits(n/10)+(n%10))
  
}

const ans = sumOfDigits(777)
console.log(ans)