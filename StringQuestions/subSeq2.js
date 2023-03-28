// return array of subset


function subseq(str) {
  // base condition
  if (str === '') {
    return ['']
  }
  const ch = str[0]
  const ansFromBelow = subseq(str.substring(1))
  const allSubSeq = ansFromBelow.concat(ansFromBelow.map((ss) => { return ch + ss }))
  return allSubSeq
}

const ans = subseq('abc')
console.log(ans)