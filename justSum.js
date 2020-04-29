function sum(s){
  let result = 0;
  
  for(let i = 0; i < s.length; i++)
    result += +s[i];

  return result;
}
console.log(sum([1,2,`-34`,5,6,'9']));