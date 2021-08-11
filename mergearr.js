function merge (arrA, arrB){

  let arrC = []

  for (let i = 0; i <= arrA.length - 1; i++){
    arrC.push(arrA[i])   
  }

  for (let j = 0; j <= arrB.length - 1; j++){
    arrC.push(arrB[j])   
  }

  arrC = arrC.sort()
  return arrC
  
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));