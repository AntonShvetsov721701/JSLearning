function intersect(L1, L2){
  let result = [];

  for(let i = 0; i < L2.length; i++)
    for(let j = 0; j < L1.length; j++)
      if(L2[i] === L1[j]) result.unshift(L2[i]);

  return result;
}

let L1 = [3, 2, 'a', 'c'], 
    L2 = [1, 'b', 'c', 'd', 'e', 2];
console.log(intersect(L1,L2));