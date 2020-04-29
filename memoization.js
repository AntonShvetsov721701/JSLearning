result = [];
function memo(a,b){  
  result.forEach(element => {    
    if(element['numberA'] === a &&
        element['numberB'] === b){
          console.log('long checked');
          return element['result'];
        }
  })

// add new object
  result.push({
    numberA: a,
    numberB: b,
    result : a + b
  });
  
  return a + b;
}

//console.log(memo(3 ,2))
//console.log(memo(2 ,3))
//console.log(memo(2 ,3))
function memoization(a, b){
  let answer = {}
  
  return function(){
    let AB = a + '' +b;
    if(answer[AB] !== undefined){
        console.log('yep')
        return answer[AB]
      }

    answer[AB] = a + b;
    return answer[AB];
  };
}

function myPow(a, b) {
  console.log(`Pow is called: Math.pow(${a}, ${b})`);
  return Math.pow(a, b);
}

function fnInMemo(fn){
    let answer = {}

  return function(...args){
    let outputFn = '' + args;
    if(answer[outputFn] !== undefined){
        return answer[outputFn]
      }

    answer[outputFn] = fn(...args);
    return answer[outputFn];
  };
}
let testA = fnInMemo(myPow);
console.log(testA(2, 3))
console.log(testA(2, 4))
console.log(testA(2, 3))

let test = memoization(4,5);
