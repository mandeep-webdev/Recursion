// Q1 skip a character in a string
// Eg: bafamapa , skip a and the output will be -- bfmp


function skipCh(str,ansStr) {
  // base condition
  if(str === ''){
    return ansStr
  }
 const ch = str[0]
  if(ch !== 'a') {
    return skipCh(str.substring(1),ansStr + ch)
  }
  else {
    return skipCh(str.substring(1),ansStr)
  }
}


const ans = skipCh('mann','')
console.log(ans)