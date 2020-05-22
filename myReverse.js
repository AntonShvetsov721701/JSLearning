function myReverse(arr){
  let endArray = arr.length;
  for(let i = 0; i < arr.length/2; i++){
    endArray--;
    [[arr[i]],arr[endArray]] = [[arr[endArray]],arr[i]]
  }
  return arr;
}
console.log(myReverse([1,2,4,5,6]))