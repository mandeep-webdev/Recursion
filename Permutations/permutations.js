
function per(up,p) {
  debugger
  if(up === '') {
    console.log(p)
    return
  }
  const ch = up[0]
  for(let i = 0; i<=p.length ; i ++ ) {
    const f = p.substring(0,i)
    const s = p.substring(i,p.length)
    per(up.substring(1),f+ch+s)
  }
}

per('abc','')