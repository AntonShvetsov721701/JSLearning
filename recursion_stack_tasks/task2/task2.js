function factorial(n){
    if (n === 1) return 1;
    
    return n * factorial(n - 1);
}

var n = prompt('Inut n','');

alert(factorial(n));    