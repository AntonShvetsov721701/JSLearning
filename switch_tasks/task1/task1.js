var browser = prompt('Input your browser','');
var browserNames = ['IE','Chrome','Firefox','Safari','Opera'];

if (browserNames.includes(browser)){
    
    if (browser === 'IE'){
        alert('Yor browser is IE!');
    } else {
        alert('Yes, and we support these browsers')
    }
    
} else {
    alert('We hope that everything in your browser is OK too!')
}