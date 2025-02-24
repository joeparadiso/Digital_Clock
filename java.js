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
    
    // Uncomment line below and comment the following line for 24 hr clock
    // var h = today.getHours();
    var h = (today.getHours() !== 12) ? (today.getHours() % 12) : (today.getHours());
    var m = today.getMinutes();
    var s = today.getSeconds();

    // Not implemented in UI: Determine whether the time is 'AM' or 'PM'
    var day = h<11 ? 'AM': 'PM';

    // If the hour/min/sec is less than 10 (a single digit), add a preceding '0'
    h = h<10? '0'+h: h;
    m = m<10? '0'+m: m;
    s = s<10? '0'+s: s;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;
    
    }var inter = setInterval(clock,400);
