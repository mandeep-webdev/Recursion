// Q -- skip the entire String
// eg -- tictaktoe skip tak from this output -- tictoe

function skipStr(str) {
  if(str === '')
  {
    return ''
  }
  const ch = str[0]
  if(str.startsWith('tak')) {
    return skipStr(str.substring(3))
  }
  else {
    return ch + skipStr(str.substring(1))
  }
}

const ans = skipStr('tictaktoe')
console.log(ans)