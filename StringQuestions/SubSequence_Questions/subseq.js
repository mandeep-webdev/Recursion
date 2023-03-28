function generateSubsequences(str, subsequences = ['']) {
  // base Condition
  if (str.length === 0) {
    return subsequences;
  }
  
  const firstChar = str.charAt(0);
  const restSubsequences = generateSubsequences(str.slice(1), subsequences);
  const newSubsequences = restSubsequences.map(subsequence => firstChar + subsequence);
  
  return restSubsequences.concat(newSubsequences);
}


console.log(generateSubsequences('hello')); 
