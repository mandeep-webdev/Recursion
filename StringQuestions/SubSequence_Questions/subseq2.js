function generateSubseq(str) {
  
  // base condition
  if (str.length === 0) {
    return [''];
  }
  
  const firstCh = str.charAt(0);
  const restSubseq = generateSubseq(str.slice(1));
  const allSubseq = restSubseq.concat(restSubseq.map(subseq => firstCh + subseq));
  
  return allSubseq;
}

console.log(generateSubseq('hello')); 

