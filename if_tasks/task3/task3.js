var login = prompt("Input login", '');
if (login === 'anton') {
    var password = prompt("Input password", '');

    if (password === '1234') {
        alert("Black Overlord")
    } else { 
        alert("Error in password"); 
    }
} else {
    alert("Error in login");
}