function checkAge_1(age){
   (age >= 18)? true : confirm('Parents allowed?');  
}

function checkAge_2(age){
    return (age > 18) || confirm('Parents allowed?')
}

alert(checkAge_1(17));
alert(checkAge_2(19));