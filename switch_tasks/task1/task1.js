var browser = prompt('Input your browser','');
if (browser === 'IE' 
    || browser === 'Chrome' 
    || browser === 'Firefox' 
    || browser === 'Safari' 
    || browser === 'Opera'){
    
    if (browser === 'IE'){
        alert('Yor browser is IE!');
    }
    if (browser === 'Chrome' 
        || browser === 'Firefox' 
        || browser === 'Safari' 
        || browser === 'Opera'){
        alert('Yes, and we support these browsers')
    }
}else{
    alert('We hope that everything in your browser is OK too!')
}