
var imgs = new Array("img/papajohn_night_revised.jpg",
                      "img/papajohn_revised.jpg",
                      "img/nightbridge_revised.jpg",
                      "img/redthunder_revised.jpg",
                      "img/walkingbridge_revised.jpg",
                      "img/skyline_day.jpg");

 function changeBg() {
     var imgUrl = imgs[Math.floor(Math.random()*imgs.length)];
     $('#banner').css('background-image', 'url(' + imgUrl + ')');
     $('#banner').fadeIn(1000); //this is new, will fade in smoothly
 }

 function changeBackgroundSmoothly() {
     $('#banner').fadeOut(1000, changeBg); //this is new, will fade out smoothly
 }

 setInterval(changeBackgroundSmoothly,5000);
