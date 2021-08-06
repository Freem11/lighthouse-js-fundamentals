function range(start, end, step){

  let funkyArray = [];
  let spaz = 0;

  if(step > 0){

    for (let i = start; i <= end; i += step){
      spaz = i;
      funkyArray.push(spaz);
    }
//console.log(funkyArray)
    return funkyArray;
  }

  else{
//console.log(funkyArray)
    return funkyArray;
  }
}

console.log(range);

range(0, 10, 2);
range(10, 30, 5); 
range(-5, 2, 3);
