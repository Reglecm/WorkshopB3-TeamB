$(document).ready(function () {
    $("#banner").hide();
    console.log("main.js is ready ");

    $('.TRightGreen').hover(function () {
        $(this).css('transform', 'translateX(50px)')
    })

    $('.TRightGreen').mouseleave(function () {
        $(this).css('transform', 'unset');
    })

})

$(document).on("scroll", function () {

    if ($(document).scrollTop() > 100) {
        $("#banner").addClass("shrink");
        $("#banner").slideDown(400);
    } else {
        $("#banner").slideUp(400)
    }

});