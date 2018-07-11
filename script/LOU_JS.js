
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
 var images = ["img/skyline_day_revised.jpg",
               "img/belle.jpg",
               "img/bourbon.jpg",
               "img/thunder.jpg",
               "img/churchill.jpg",
               "img/4thstreet_revised.jpg",
               "img/slugger.jpg",
               "img/LOU_Skyline_night.jpg",
               "img/centerforarts.jpg",
               "img/papajohn_revised.jpg",
               "img/highlands.jpg",
               "img/thunder2.jpg",
               "img/Yum_revised.jpg",
               "img/waterfrontpark.jpg",
               "img/ali.jpg",
               "img/slugger2.jpg",
               "img/papajohn_night_revised.jpg",
               ];

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

/* SEARCH function javascript

function mySearch(){
  let mySearch = document.getElementByid("mySearch");
  var filter = input.value.toUpperCase();
  var TR = document.getElementByid("eventRow");
  var TD = TR.document.getElementByTagName("TD");

  for(i = 0; <TD.length; i++;){
    a = TD[i].getElementByTagName("a")[0];

    if(a.innerHTML.toUpperCase().indexOf(filter)>-1){
      TD[i].style.display="";
    }else{
      TD[i.style.display = "none";]
      }
    }
  }



}
 SEARCH function javascript */

/* SEARCH function jquery */
$(document).ready(function(){
     $('#search').keyup(function(){
          search_table($(this).val());
     });
     function search_table(value){
          $('#table_of_events tr').each(function(){
               var found = 'false';
               $(this).each(function(){
                    if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)
                    {
                         found = 'true';
                    }
               });
               if(found == 'true')
               {
                    $(this).show();
               }
               else
               {
                    $(this).hide();
               }
          });
     }
});
