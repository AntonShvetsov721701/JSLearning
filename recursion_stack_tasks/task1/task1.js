function sumCycle(n){
    var result = 0;

    for (var i = 0; i <= n; i++){
        result += i;
    }
    return result;
}

function sumRec(n){
    if (n === 1) return 1;  
    return n + sumRec(n - 1);
}


function sumArithProgres(n){
    return (2 * n - (n - 1)) / 2 * n;
}

var number = prompt('Input n','');

outside :while(true){

    var com = prompt('Input command','');
    
    switch(com){
        
        case '1': 
            alert('Result = ' + sumCycle(number));
            break;
        
        case '2': 
            alert('Result = ' + sumRec(+number));
            break;

        case '3': 
            alert('Result = ' + sumArithProgres(number));
            break;

        case '4': 
            break outside;    
    }
}