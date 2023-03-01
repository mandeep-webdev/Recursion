
// print 1 2 3  4 5

function print(n) {
  if(n===0){
    return
  }
  
  print(n-1)
  console.log(n)
}

print(5)