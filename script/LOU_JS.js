
/* var imgs = new Array("img/papajohn_night_revised.jpg",
                      "img/papajohn_revised.jpg",
                      "img/nightbridge_revised.jpg",
                      "img/redthunder_revised.jpg",
                      "img/walkingbridge_revised.jpg",
                      "img/4thstreet_revised.jpg",
                      "img/skyline_day.jpg");

 function changeBg() {
     var imgUrl = imgs[Math.floor(Math.random()*imgs.length)];
     $('#banner').css('background-image', 'url(' + imgUrl + ')');
     $('#banner').fadeIn(400); //this is new, will fade in smoothly
 }

 function changeBackgroundSmoothly() {
     $('#banner').fadeOut(400, changeBg); //this is new, will fade out smoothly
 }

 setInterval(changeBackgroundSmoothly,5000);

 */

 $(document).ready(function(){
 var count = 0;
 var images = ["img/papajohn_night_revised.jpg",
               "img/skyline_day.jpg",
               "img/nightbridge_revised.jpg",
               "img/papajohn_revised.jpg",
               "img/redthunder_revised.jpg",
               "img/4thstreet_revised.jpg",
               "img/walkingbridge_revised.jpg",
               "img/FLstate_revised.jpg",
               "img/thunder_1_revised.jpg",
               "img/YUM_revised.jpg"];

 var image = $('#banner');

 image.css("background-image","url("+images[count]+")");

 setInterval(function(){
   image.fadeOut(500, function(){
     image.css("background-image","url("+images[count++]+")");
     image.fadeIn(500);
   });
   if(count == images.length)
     {
       count = 0;
     }
 },5000);

 });
