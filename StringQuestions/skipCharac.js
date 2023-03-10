// Q1 skip a character in a string
// Eg: bafamapa , skip a and the output will be -- bfmp


function skipCharac(str,output) {
  debugger
 // base Condition 
  if(str === '') {
    console.log(output)
    return
  }
  const ch = str.charAt(0)
  if(ch === 'a') {
    skipCharac(str.substring(1),output)
  }
  else {
    skipCharac(str.substring(1),output+ch)
  }
}

skipCharac('bafamapa','')