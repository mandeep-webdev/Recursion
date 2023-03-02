// Q -- find product of all digits with Recursion
// eg: n= 1234 output = 1*2*3*4 = 124

const productOfDigits = (n) => {
  debugger
  // base condition
  // if only one digit is remaining
  if(n%10 === n ) {
    return n
  }
  return  Math.floor(productOfDigits(n/10)) * (n%10)
}

const ans = productOfDigits(1234)
console.log(ans)