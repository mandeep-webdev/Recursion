// Q-- reverse a number using Recursion
// n = 187 output = 781

let sum = 0
function reverse1(n) {
  //base Condition -
  if(n%10 === n) {
   return
  }
  // if(n===0){
  //   return
  // }
 const remainder = n%10
 sum = Math.floor(sum * 10 + remainder)
 reverse1(n/10)
}

reverse1(187)
console.log(sum)