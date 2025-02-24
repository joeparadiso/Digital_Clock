function clock(){

    var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    var today = new Date();
    
    document.getElementById('Date').innerHTML = 
    (dayNames[today.getDay()] + ", " 
    + monthNames[today.getMonth()] + " " 
    + today.getDate() + ", " 
    +today.getFullYear());
    
    // Remove the % 12 for 24 hr time
    var h = today.getHours() % 12;
    var m = today.getMinutes();
    var s = today.getSeconds();

    var day = h<11 ? 'AM': 'PM';
    h = h<10? '0'+h: h;
    m = m<10? '0'+m: m;
    s = s<10? '0'+s: s;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;
    
    }var inter = setInterval(clock,400);