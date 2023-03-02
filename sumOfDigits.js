// Q -- find sum of all digits with Recursion
// eg: n= 1234 output = 1+2+3+4 = 10

const sumOfDigits = (n) => {
  debugger
  // base condition
  if(n===0) {
    return 0
  }
  return Math.floor(sumOfDigits(n/10)) + (n%10)
}

const ans = sumOfDigits(990)
console.log(ans)