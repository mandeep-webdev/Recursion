// Q skip app not apple

function skip(str) {
  // base Condition

  if(str === '') {
    return ''
  }

  const ch = str[0]
  if(str.startsWith('app')&& !str.startsWith('apple')) {
    return skip(str.substring(3))
  }
  else {
    return ch + skip(str.substring(1))
  }
}

const ans = skip('bnnsappleuioapp')
console.log(ans)