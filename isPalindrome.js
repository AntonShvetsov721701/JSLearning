let str = 'to P ot';
function isPalindrome(s){
  let step = 0, result = true;
  s = s.replace(/\s+/g, '')// убирает пробелы
       .toLocaleLowerCase()// нижний регистр
       .split('');// разбивает на массив строк

  for(let i = s.length - 1; i !== 0; --i){
    if(s[step] !== s[i]){
        result = false;
        break;
    } else {
        step++;
    }
  }
  return result;
}
console.log(isPalindrome(str))