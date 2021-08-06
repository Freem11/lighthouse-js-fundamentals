function lastIndexOf (arr, num){

  let savior = []
      
  for (let i = 0; i <= arr.length - 1; i++){
    
    if(num === arr[i]){
      savior.push(i)
      
    } 
  }

  let newSavior = 0

  if (savior.length === 0){
    newSavior = -1
  }
  else{
    newSavior = Math.max.apply(Math, savior);
  }
  return newSavior
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));

