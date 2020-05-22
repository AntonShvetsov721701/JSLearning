function fbMassiv(number){
  let result = [0,1,1];

  switch(number){
    case 0: return result.slice(0,1); break;
    case 1: return result.slice(0,2); break;
    case 2: return result; break;  
  }

  while(number != 3)
  {
    result.push(+result.slice(-1) + +result.slice(-2,-1))
    number--;
  }

  return result
}

console.log(fbMassiv(10))

function fbNumber(number){
  let result = [0,1,1];

  switch(number){
    case 0: return 0; break;
    case 1: return 1; break;
    case 2: return 1; break;  
  }
  
  while(number != 3)
  {
    result.push(+result.slice(-1) + +result.slice(-2,-1))
    number--;
  }
  
  return result.slice(-1);
}
console.log(fbNumber(10));