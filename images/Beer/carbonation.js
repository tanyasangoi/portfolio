function carbonate(){

    setInterval(function(){document.getElementById('bottle3').style.opacity = "0";}, 1500);
    setInterval(function(){document.getElementById('bottle1').style.opacity = "1";}, 1500);

    setTimeout(function() {setInterval(function(){document.getElementById('bottle1').style.opacity = "0";}, 1500);}, 500);
    setTimeout(function() {setInterval(function(){document.getElementById('bottle2').style.opacity = "1";}, 1500);}, 500);

    setTimeout(function() {setInterval(function(){document.getElementById('bottle2').style.opacity = "0";}, 1500);}, 1000);
    setTimeout(function() {setInterval(function(){document.getElementById('bottle3').style.opacity = "1";}, 1500);}, 1000);

}

