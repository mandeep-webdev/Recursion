// different ways to solve a similar problem
function skip(str) {
  
  // base condition
  if(str === '') {
    return ''
  }

  const ch = str[0]

  if(ch === 'i') {
    return skip(str.substring(1))
  }
  else {
    return ch + skip(str.substring(1))
  }

}


const ans = skip('inderjit')
console.log(ans)