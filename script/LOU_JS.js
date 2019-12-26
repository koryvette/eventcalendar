

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

/* SEARCH function jquery TABLE view*/
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

/* SEARCH function jquery TILE view*/
$(document).ready(function(){
     $('#search').keyup(function(){
          search_table($(this).val());
     });
     function search_table(value){
          $('#tileLayout .event-thumb').each(function(){
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
//  Pagination  //
var numberOfItems = $('#tileLayout .event-thumb').length;
var limitPerPage = 50;
$("#tileLayout .event-thumb:gt(" + (limitPerPage - 1) + ")").hide();
var totalPages = Math.round(numberOfItems/limitPerPage);
$('.pagination').append("<li class='page-item current-page active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");

for (var i = 2; i <= totalPages; i++){
     $('.pagination').append("<li class='page-item current-page'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>");
}

$(".pagination").append("<li class='page-item' id='next-page'><a class='page-link' href='javascript:void(0)'>Next</a></li>");

$(".pagination li.current-page").on("click", function(){
     var currentPage = $(this).index();
     $(".pagination li").removeClass("active");
     $(this).addClass("active");
     $("#tileLayout .event-thumb").hide();

     var grandTotal = limitPerPage * currentPage;

     for (var i  = grandTotal - limitPerPage; i < grandTotal; i++){
          $("#tileLayout .event-thumb:eq(" + i + ")").show();
     }
});

$("#next-page").on("click", function()
{
     var currentPage = $(".pagination li.active").index();
     if (currentPage === totalPages) 
     {
          return false;
     }
          else
          {
          currentPage++;
          $(".pagination li").removeClass("active");
          $("#tileLayout .event-thumb").hide();

          var grandTotal = limitPerPage * currentPage;

          for (var i  = grandTotal - limitPerPage; i < grandTotal; i++) 
               {
                    $("#tileLayout .event-thumb:eq(" + i + ")").show();
               }
               $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
          }
});

$("#prev-page").on("click", function()
{
     var currentPage = $(".pagination li.active").index();
     if (currentPage === 1) 
     {
          return false;
     }
          else
          {
          currentPage--;
          $(".pagination li").removeClass("active");
          $("#tileLayout .event-thumb").hide();

          var grandTotal = limitPerPage * currentPage;

          for (var i  = grandTotal - limitPerPage; i < grandTotal; i++) 
               {
                    $("#tileLayout .event-thumb:eq(" + i + ")").show();
               }
               $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
          }
});

