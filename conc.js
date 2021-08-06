function concat (arrA, arrB){

    let arrC = []

  for (let i = 0; i <= arrA.length - 1; i++){
    arrC.push(arrA[i])   
}

for (let j = 0; j <= arrB.length - 1; j++){
  arrC.push(arrB[j])   
}

return arrC
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));
console.log(concat([], [ 9, 7, 2 ]));
console.log(concat([ 5, 10 ], []));