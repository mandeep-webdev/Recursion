function fac(n) {
  if (n <=1) {
    return 1
  }
  return n*fac(n-1)
}

const ans = fac(8)
console.log(ans)