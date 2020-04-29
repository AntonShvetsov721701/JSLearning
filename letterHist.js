function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

function letterHist(s){
s = s.replace(/\s+/g, '')// убирает пробелы

let unicSimbols = unique(s),
    result = [],answer = [];

for(let i = 0; i < unicSimbols.length; i++){
  result[i] = {symbol: unicSimbols[i], value: 0};
}

for(let j = 0; j < result.length; j++)
  for(let i = 0; i < s.length; i++){
   if(s[i] === result[j]['symbol']){
      value = result[j]['value'];
      value++;
      result[j]['value'] = value; 
    }
  }
  for(let i = 0; i < result.length; i++){
    answer[i] = result[i]['symbol'] + ' = ' + result[i]['value'];
  }  
  return answer;
}

console.log(letterHist('Aa Zb CcC kk'));