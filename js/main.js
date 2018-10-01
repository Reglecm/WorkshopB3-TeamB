console.log("main.js is ready ");

$(document).ready(function(){

    $("#banner").hide();
    
})
	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 1){
          $("#banner").addClass("shrink");
          $("#banner").show();
		}
		else
		{
            $("#banner").hide();
			$("#banner").removeClass("shrink");
		}
	});