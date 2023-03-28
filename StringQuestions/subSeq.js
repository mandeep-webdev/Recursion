// Q create a subset of a given string
// eg [abc] = [a], [b], [c],[ab], [bc], [ac], [abc]

function subseq(str,ans){
  // base condition
  if(str === '')
  {
    console.log(ans)
    return
  }
  const ch = str[0]
  subseq(str.substring(1),ans)
  subseq(str.substring(1),ans + ch )
}

subseq('abc','')