// approach2


function skip(str) {

  let ansStr = ''

  // base condition
  if(str === '') {
    return ansStr
  }

  const ch = str[0]

  if(ch === 'a') {
    return skip(str.substring(1))
  }
    const ansFromBelowCalls = skip(str.substring(1))

    ansStr = ch + ansFromBelowCalls 
    return ansStr
  
}


const ans = skip('mandeepkaur')
console.log(ans)