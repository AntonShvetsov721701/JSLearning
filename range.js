function range(start, end){
  let result = start;
  while(start != end){
    start++;
    result += start;
  }
  return result;
}
console.log(range(1,10))