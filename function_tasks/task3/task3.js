function pow(x,n){
    var result = 1;
    
    while(n > 0){
        result *= x;
        n--;
    }
    return result;
}

var x = prompt('Input x',''), 
    n = prompt('Input n','');

alert(pow(x,n));