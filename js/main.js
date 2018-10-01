$(document).ready(function () 
{
    $("#banner").hide();
    console.log("main.js is ready ");
    
})

$(document).on("scroll", function () {
   
    if ($(document).scrollTop() > 100)
     {
        $("#banner").addClass("shrink");
        $("#banner").slideDown(400);
    } else 
    {
        $("#banner").slideUp(400)
    }

});