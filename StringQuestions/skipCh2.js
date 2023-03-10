// approach2

function skipCh(str) {
  debugger
  // base condition
  if(str === '') {
    return ''
  }
  const ch = str.charAt(0)
  if(ch ==='a'){
    return  skipCh(str.substring(1))
  }else{
   
   return ch + skipCh(str.substring(1))
    
  }
 
  
}

const ans = skipCh('pama')
console.log(ans)